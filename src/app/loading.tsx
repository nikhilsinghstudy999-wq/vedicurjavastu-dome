'use client';

import { useState, useEffect } from 'react';
import Mandala3D from '@/features/shared/components/Mandala3D';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tm = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(tm);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1A0A2E]">
      <Mandala3D />
    </div>
  );
}
