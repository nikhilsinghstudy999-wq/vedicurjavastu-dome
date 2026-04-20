import { supabase } from '@/lib/supabase/client';
import type { RealtimeChannel } from '@supabase/supabase-js';

type Callback = () => void;
type Unsubscribe = () => void;

interface ChannelEntry {
  channel: RealtimeChannel | null;
  callbacks: Set<Callback>;
  refCount: number;
  retryCount: number;
  retryTimer: ReturnType<typeof setTimeout> | null;
  isSubscribed: boolean;
}

const channels = new Map<string, ChannelEntry>();
const isClient = typeof window !== 'undefined';
const isDev = process.env.NODE_ENV === 'development';

// In development, only retry once to avoid console spam
const MAX_RETRIES = isDev ? 1 : 3;
const BASE_DELAY_MS = 2000;

function getRetryDelay(retryCount: number): number {
  const exponentialDelay = BASE_DELAY_MS * Math.pow(2, retryCount);
  const jitter = exponentialDelay * 0.3 * Math.random();
  return Math.min(exponentialDelay + jitter, 30000);
}

function scheduleRetry(table: string, entry: ChannelEntry) {
  if (!isClient) return;
  if (entry.retryCount >= MAX_RETRIES) {
    if (!isDev) console.warn(`[Realtime] ⚠️ Giving up on ${table} after ${MAX_RETRIES} retries.`);
    return;
  }

  if (entry.retryTimer) clearTimeout(entry.retryTimer);

  const delay = getRetryDelay(entry.retryCount);
  entry.retryTimer = setTimeout(() => {
    entry.retryCount++;
    subscribeToTableInternal(table, entry);
  }, delay);
}

function subscribeToTableInternal(table: string, entry: ChannelEntry) {
  if (!isClient) return;

  if (entry.channel) {
    entry.channel.unsubscribe().catch(() => {});
    entry.channel = null;
  }

  const channelName = `${table}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  entry.isSubscribed = false;

  entry.channel = supabase
    .channel(channelName)
    .on('postgres_changes', { event: '*', schema: 'public', table }, (payload) => {
      if (!isDev) console.log(`[Realtime] 📨 ${table} changed (${payload.eventType})`);
      entry.callbacks.forEach(cb => {
        try { cb(); } catch (err) { console.error(`[Realtime] Callback error for ${table}:`, err); }
      });
    })
    .subscribe((status, err) => {
      if (status === 'SUBSCRIBED') {
        if (!isDev) console.log(`[Realtime] ✅ Subscribed to ${table}`);
        entry.retryCount = 0;
        entry.isSubscribed = true;
        if (entry.retryTimer) {
          clearTimeout(entry.retryTimer);
          entry.retryTimer = null;
        }
      } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        if (!isDev) console.warn(`[Realtime] ⚠️ ${table} error (${status}), retrying...`);
        entry.isSubscribed = false;
        scheduleRetry(table, entry);
      } else if (status === 'CLOSED' && entry.callbacks.size > 0) {
        entry.isSubscribed = false;
        scheduleRetry(table, entry);
      }
    });
}

export function subscribeToTable(table: string, callback: Callback): Unsubscribe {
  if (!isClient) return () => {};

  let entry = channels.get(table);
  if (!entry) {
    entry = {
      channel: null,
      callbacks: new Set(),
      refCount: 0,
      retryCount: 0,
      retryTimer: null,
      isSubscribed: false,
    };
    channels.set(table, entry);
    subscribeToTableInternal(table, entry);
  }

  entry.callbacks.add(callback);
  entry.refCount++;

  return () => {
    const e = channels.get(table);
    if (!e) return;
    e.callbacks.delete(callback);
    e.refCount--;
    if (e.refCount === 0 && e.callbacks.size === 0) {
      if (e.retryTimer) clearTimeout(e.retryTimer);
      e.channel?.unsubscribe().catch(() => {});
      channels.delete(table);
    }
  };
}
