'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';
import GuruAuthority from '@/features/shared/components/GuruAuthority';

export default function RemediesPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-vastu-parchment to-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-nidra-indigo mb-6">Advanced Vedic Remedies</h1>
            <p className="text-lg text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">
              Comprehensive non‑structural Vastu corrections personally performed by Vastuvid KK Nagaich — India's most‑viewed Vastu expert with 100M+ views and 80K+ followers.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Geopathic Stress', desc: 'Underground water vein detection, EMF scanning, copper rod installation.' },
                { title: 'Pyramidology', desc: 'Copper, brass, crystal pyramids for dosha zone correction.' },
                { title: 'Crystal & Color Therapy', desc: '5‑element crystal grids, directional colour prescriptions, chakra alignment.' },
                { title: 'Mercury / Parad Therapy', desc: 'Parad Shivling, pyramid, keel — the most potent Vastu remedies.' },
                { title: 'Spiritual Spaces', desc: 'Pooja room design, temple architecture, meditation space, daily rituals.' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-white/80 rounded-2xl border border-prakash-gold/15 text-left">
                  <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-nidra-indigo/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <GuruAuthority />
            <div className="mt-12">
              <Link href="/bookings" className="luxury-button text-lg px-10 py-5">Book a Remedy Consultation</Link>
            </div>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
