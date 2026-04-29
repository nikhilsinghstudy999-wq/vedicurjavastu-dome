'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function usePlanetaryLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const router = useRouter();

  const navigateWithLoader = useCallback((url: string) => {
    setPendingUrl(url);
    setIsLoading(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
    if (pendingUrl) {
      router.push(pendingUrl);
      setPendingUrl(null);
    }
  }, [pendingUrl, router]);

  return { isLoading, navigateWithLoader, handleLoaderComplete };
}
