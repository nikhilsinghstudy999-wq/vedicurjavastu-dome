'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';

export function useRealtimeContent<T>(table: string, orderBy: string = 'created_at', ascending: boolean = false) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    if (!supabase) { setLoading(false); return; }
    try { let query = supabase.from(table).select('*'); try { query = query.order(orderBy, { ascending }); } catch { query = supabase.from(table).select('*'); } const { data } = await query; setItems((data as T[]) || []); } catch { setItems([]); } finally { setLoading(false); }
  }, [table, orderBy, ascending]);
  useEffect(() => { fetchData(); }, [fetchData]);
  return { items, loading, refetch: fetchData };
}
