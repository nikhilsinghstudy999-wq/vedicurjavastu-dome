'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabase/client';
import { subscribeToTable } from '@/lib/realtime/channelManager';

export function useRealtimeContent<T>(
  table: string,
  orderBy: string = 'created_at',
  ascending: boolean = false
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  const fetchAbortController = useRef<AbortController | null>(null);
  const lastFetchTime = useRef(0);
  const FETCH_DEBOUNCE_MS = 300;

  const fetchData = useCallback(async () => {
    if (!supabase) return;
    
    const now = Date.now();
    if (now - lastFetchTime.current < FETCH_DEBOUNCE_MS) {
      return;
    }
    lastFetchTime.current = now;

    if (fetchAbortController.current) {
      fetchAbortController.current.abort();
    }
    fetchAbortController.current = new AbortController();

    try {
      let query = supabase.from(table).select('*');
      try {
        query = query.order(orderBy, { ascending });
      } catch {
        query = supabase.from(table).select('*');
      }
      
      const { data, error: fetchError } = await query;
      
      if (!isMounted.current) return;
      
      if (fetchError) {
        console.warn(`Supabase fetch error on ${table}:`, fetchError.message);
        setItems([]);
      } else {
        setItems((data as T[]) || []);
      }
    } catch (err: any) {
      if (!isMounted.current) return;
      console.error(`Failed to fetch ${table}:`, err);
      setItems([]);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [table, orderBy, ascending]);

  useEffect(() => {
    isMounted.current = true;
    fetchData();

    const unsubscribe = subscribeToTable(table, () => {
      if (isMounted.current) {
        fetchData();
      }
    });

    return () => {
      isMounted.current = false;
      if (fetchAbortController.current) {
        fetchAbortController.current.abort();
      }
      unsubscribe();
    };
  }, [table, fetchData]);

  return { items, loading, refetch: fetchData };
}
