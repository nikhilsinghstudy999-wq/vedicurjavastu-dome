'use client';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export function AuthRefresh() {
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {});
    return () => subscription.unsubscribe();
  }, []);
  return null;
}
