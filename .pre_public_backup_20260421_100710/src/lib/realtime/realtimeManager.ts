import { supabase } from '@/lib/supabase/client';
import type { RealtimeChannel } from '@supabase/supabase-js';

type Callback = () => void;
const channels = new Map<string, { channel: RealtimeChannel; callbacks: Set<Callback>; refCount: number }>();

export function subscribe(table: string, callback: Callback): () => void {
  let entry = channels.get(table);
  if (!entry) {
    const channel = supabase.channel(`${table}-realtime`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, () => {
        channels.get(table)?.callbacks.forEach(cb => cb());
      })
      .subscribe((status) => {
        if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          setTimeout(() => subscribe(table, callback), 3000); // reconnect
        }
      });
    entry = { channel, callbacks: new Set(), refCount: 0 };
    channels.set(table, entry);
  }
  entry.callbacks.add(callback);
  entry.refCount++;
  return () => {
    const e = channels.get(table);
    if (!e) return;
    e.callbacks.delete(callback);
    e.refCount--;
    if (e.refCount === 0) {
      e.channel.unsubscribe();
      channels.delete(table);
    }
  };
}
