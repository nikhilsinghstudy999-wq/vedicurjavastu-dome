import { supabase } from '@/lib/supabase/client';
import type { RealtimeChannel } from '@supabase/supabase-js';

type Callback = () => void;

interface ChannelEntry {
  channel: RealtimeChannel;
  callbacks: Set<Callback>;
  refCount: number;
  retryCount: number;
  retryTimer: NodeJS.Timeout | null;
}

const channels = new Map<string, ChannelEntry>();
const MAX_RETRIES = 5;
const RETRY_DELAY = 2000;

function scheduleRetry(table: string, entry: ChannelEntry) {
  if (entry.retryCount >= MAX_RETRIES) {
    console.error(`[Realtime] Max retries reached for ${table}`);
    return;
  }
  
  if (entry.retryTimer) clearTimeout(entry.retryTimer);
  
  entry.retryTimer = setTimeout(() => {
    console.log(`[Realtime] Retrying subscription to ${table} (attempt ${entry.retryCount + 1})`);
    subscribeToTableInternal(table, entry);
  }, RETRY_DELAY * (entry.retryCount + 1));
}

function subscribeToTableInternal(table: string, entry: ChannelEntry) {
  if (entry.channel) {
    entry.channel.unsubscribe().catch(console.warn);
  }

  entry.channel = supabase
    .channel(`${table}-realtime-${Date.now()}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table },
      (payload) => {
        console.log(`[Realtime] ${table} changed (${payload.eventType})`);
        const currentEntry = channels.get(table);
        if (currentEntry) {
          currentEntry.callbacks.forEach(cb => {
            try {
              cb();
            } catch (err) {
              console.error(`[Realtime] Callback error for ${table}:`, err);
            }
          });
        }
      }
    )
    .subscribe((status, err) => {
      if (status === 'SUBSCRIBED') {
        console.log(`[Realtime] Successfully subscribed to ${table}`);
        entry.retryCount = 0;
        if (entry.retryTimer) {
          clearTimeout(entry.retryTimer);
          entry.retryTimer = null;
        }
      } else if (status === 'CHANNEL_ERROR') {
        console.error(`[Realtime] Channel error for ${table}:`, err);
        entry.retryCount++;
        scheduleRetry(table, entry);
      } else if (status === 'CLOSED') {
        console.log(`[Realtime] Subscription to ${table} closed`);
        if (entry.callbacks.size > 0) {
          entry.retryCount++;
          scheduleRetry(table, entry);
        }
      } else if (status === 'TIMED_OUT') {
        console.error(`[Realtime] Subscription to ${table} timed out`);
        entry.retryCount++;
        scheduleRetry(table, entry);
      }
    });
}

export function subscribeToTable(table: string, callback: Callback): () => void {
  let entry = channels.get(table);

  if (!entry) {
    entry = {
      channel: null as any,
      callbacks: new Set(),
      refCount: 0,
      retryCount: 0,
      retryTimer: null,
    };
    channels.set(table, entry);
    subscribeToTableInternal(table, entry);
  }

  entry.callbacks.add(callback);
  entry.refCount++;

  return () => {
    const currentEntry = channels.get(table);
    if (!currentEntry) return;
    currentEntry.callbacks.delete(callback);
    currentEntry.refCount--;
    if (currentEntry.refCount === 0 && currentEntry.callbacks.size === 0) {
      if (currentEntry.retryTimer) {
        clearTimeout(currentEntry.retryTimer);
      }
      currentEntry.channel?.unsubscribe().catch(console.warn);
      channels.delete(table);
    }
  };
}
