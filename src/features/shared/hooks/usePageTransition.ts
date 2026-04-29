'use client';
import { useState, useCallback } from 'react';

/**
 * Hook that manages a page transition loading state.
 * Returns a trigger function and the loading state.
 * Used to show the solar‑system loader when navigating between pages.
 */
export function usePageTransition() {
  const [isLoading, setIsLoading] = useState(false);

  const startTransition = useCallback(() => {
    setIsLoading(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsLoading(false);
  }, []);

  return { isLoading, startTransition, endTransition };
}
