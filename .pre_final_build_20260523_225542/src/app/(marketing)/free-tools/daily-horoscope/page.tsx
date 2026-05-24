'use client';
'use client';
'use client';
import { Suspense } from 'react';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';

function HoroscopeContent() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-gradient-to-b from-vastu-parchment to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-nidra-indigo mb-4">
          Daily Horoscope
        </h1>
        <p className="text-nidra-indigo/60 mb-8">
          Your daily Vedic horoscope based on ancient calculations.
        </p>
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-prakash-gold/30">
          <p className="text-nidra-indigo/70">Content coming soon. Check back tomorrow.</p>
        </div>
      </div>
    </div>
  );
}

export default function DailyHoroscopePage() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main>
          <Suspense fallback={<div className="pt-28 text-center">Loading...</div>}>
            <HoroscopeContent />
          </Suspense>
        </main>
      </SmoothScroll>
    </>
  );
}
