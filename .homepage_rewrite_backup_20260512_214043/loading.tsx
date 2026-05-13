'use client';

import { useState, useEffect } from 'react';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1A0A2E]">
      <div className="flex flex-col items-center gap-6">
        {/* Spinning mandala rings */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-prakash-gold/30 animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-2 border-prakash-gold/50 animate-[spin_4s_linear_infinite_reverse]" />
          <div className="absolute inset-5 rounded-full border border-prakash-gold/70 animate-[spin_2s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center text-3xl text-prakash-gold font-serif">ॐ</div>
        </div>
        <p className="font-serif text-white/80 text-sm tracking-widest animate-pulse">VEDICURJA</p>
      </div>
    </div>
  );
}
