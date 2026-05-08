'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import Link from 'next/link';

export default function RitualsPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2e0a0a] via-[#4a1a0a] to-[#2a0a0a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Sacred Services</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Rituals</span></h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-4">Puja · Havan · Anushthan — personally performed by Vastuvid KK Nagaich.</p>
            <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">100M+ views · 80K+ followers · Tantra‑trained · 4th‑generation lineage.</p>
            <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-sacred-saffron via-kumkuma-red to-prakash-gold text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Rituals Consultation</Link>
          </div>
        </section>
        <GuruAuthority />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-nidra-indigo mb-4">Sacred Rituals — Coming Soon</h2>
            <p className="text-nidra-indigo/60">A comprehensive page detailing all Vedic rituals, pujas, havans, and anushthans personally performed by Vastuvid KK Nagaich is being crafted with deep research.</p>
            <Link href="/bookings" className="inline-block mt-8 luxury-button">Book a Consultation</Link>
          </div>
        </section>
      </SmoothScroll>
      <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
