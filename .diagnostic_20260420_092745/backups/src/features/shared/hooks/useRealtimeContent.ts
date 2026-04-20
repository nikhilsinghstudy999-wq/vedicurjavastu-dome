'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { subscribeToTable } from '@/lib/realtime/channelManager';

export function useRealtimeContent<T>(
  table: string,
  orderBy: string = 'created_at',
  ascending: boolean = false
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    try {
      let query = supabase.from(table).select('*');
      try {
        query = query.order(orderBy, { ascending });
      } catch {
        query = supabase.from(table).select('*');
      }
      const { data, error: fetchError } = await query;
      if (fetchError) {
        if (fetchError.code === '42703') {
          const { data: fallbackData, error: fallbackError } = await supabase
            .from(table)
            .select('*');
          if (fallbackError) throw fallbackError;
          setItems((fallbackData as T[]) || []);
        } else {
          console.warn(`Supabase error on ${table}:`, fetchError);
          setError(fetchError.message);
          setItems([]);
        }
      } else {
        setItems((data as T[]) || []);
        setError(null);
      }
    } catch (err: any) {
      console.error(`Failed to fetch ${table}:`, err);
      setError(err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [table, orderBy, ascending]);

  useEffect(() => {
    let isMounted = true;
    
    const load = async () => {
      if (isMounted) await fetchData();
    };
    load();

    const unsubscribe = subscribeToTable(table, () => {
      if (isMounted) {
        console.log(`[useRealtimeContent] Refetching ${table} due to realtime event`);
        fetchData();
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [table, fetchData]);

  return { items, loading, error, refetch: fetchData };
}
