'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import KundaliForm from './KundaliForm';
import KundaliChart3D from './KundaliChart3D';
import PlanetaryStrengthBars from './PlanetaryStrengthBars';
import type { KundaliChart } from '@/types/tools';

export default function KundaliPage() {
  const [chart, setChart] = useState<KundaliChart | null>(null);

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="pt-28 pb-20 px-6 min-h-screen bg-vastu-parchment">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl text-center text-nidra-indigo mb-4"
            >
              AI Kundali
            </motion.h1>
            <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">
              Generate your Vedic birth chart instantly – no signup required.
            </p>

            <KundaliForm onChartGenerated={setChart} />

            {chart && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12 space-y-12">
                <section>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-6">Your Kundali Chart</h2>
                  <KundaliChart3D chart={chart} />
                </section>
                <section>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-6">Planetary Positions</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white/50 rounded-2xl overflow-hidden shadow-md">
                      <thead className="bg-nidra-indigo/5">
                        <tr>
                          <th className="py-3 px-4 text-left">Planet</th>
                          <th className="py-3 px-4 text-left">Sign</th>
                          <th className="py-3 px-4 text-left">House</th>
                          <th className="py-3 px-4 text-left">Degree</th>
                          <th className="py-3 px-4 text-left">Retrograde</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chart.planets.map((p) => (
                          <tr key={p.name} className="border-t border-prakash-gold/20">
                            <td className="py-3 px-4 font-medium">{p.name}</td>
                            <td className="py-3 px-4">{p.sign}</td>
                            <td className="py-3 px-4">{p.house}</td>
                            <td className="py-3 px-4">{p.degree.toFixed(1)}°</td>
                            <td className="py-3 px-4">{p.retrograde ? 'Yes' : 'No'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <section>
                  <h2 className="font-serif text-2xl text-nidra-indigo mb-6">Planetary Strengths</h2>
                  <PlanetaryStrengthBars planets={chart.planets} />
                </section>
                <section className="bg-white p-6 rounded-2xl shadow-md border border-prakash-gold/20">
                  <h2 className="font-serif text-xl text-nidra-indigo mb-4">Want a Detailed Analysis?</h2>
                  <p className="text-nidra-indigo/70 mb-4">
                    For a full 20‑page report with Dasha predictions and personalized remedies, book a consultation with Acharya ji.
                  </p>
                  <a href="/bookings" className="luxury-button inline-block">Book Consultation</a>
                </section>
              </motion.div>
            )}
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
