'use client';

import { useState, useEffect } from 'react';
import GlobalLoader from '@/features/shared/components/ui/GlobalLoader';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Ensure loader stays for at least 2.7 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <GlobalLoader isLoading={true} message="Loading VedicUrja..." />;
}
