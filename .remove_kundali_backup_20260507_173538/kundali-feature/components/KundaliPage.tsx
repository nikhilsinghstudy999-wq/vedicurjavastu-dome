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
        <main className="pt-28 pb-20 px-4 sm:px-6 min-h-screen relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(120,20,20,0.6) 0%, rgba(80,0,0,0.8) 50%, rgba(40,0,0,0.95) 100%)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #ff6b6b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(255,107,107,0.5))',
                }}
              >
                AI Kundali
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Your Vedic birth chart generated instantly using authentic calculations.
                <br />
                <span className="text-white/80 font-medium">
                  For a full, expert reading, consult <span className="text-gold-400">Vastuvid K.K. Nagaich</span>{' '}— the astrology expert.
                </span>
              </p>
            </motion.div>

            <div className="glass-card p-6 sm:p-8 mb-12">
              <KundaliForm onChartGenerated={setChart} />
            </div>

            {chart && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                <div className="glass-card p-4 sm:p-8">
                  <h2 className="text-2xl font-serif text-white mb-6">Birth Chart</h2>
                  <KundaliChart3D chart={chart} />
                </div>
                <div className="glass-card p-4 sm:p-8">
                  <h2 className="text-2xl font-serif text-white mb-6">Planetary Positions</h2>
                  <table className="w-full text-left text-white/80 text-sm">
                    <thead><tr><th>Planet</th><th>Sign</th><th>House</th><th>Degree</th><th>Retrograde</th></tr></thead>
                    <tbody>{chart.planets.map(p=><tr key={p.name}><td>{p.name}</td><td>{p.sign}</td><td>{p.house}</td><td>{p.degree.toFixed(1)}°</td><td>{p.retrograde?'Yes':'No'}</td></tr>)}</tbody>
                  </table>
                </div>
                <div className="glass-card p-4 sm:p-8">
                  <h2 className="text-2xl font-serif text-white mb-6">Planetary Strengths</h2>
                  <PlanetaryStrengthBars planets={chart.planets} />
                </div>
                <div className="glass-card p-6 sm:p-8 text-center">
                  <h3 className="font-serif text-xl text-white mb-3">Need a Complete Reading?</h3>
                  <a href="/bookings" className="inline-block px-8 py-4 bg-gradient-to-r from-red-700 to-maroon-900 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(255,107,107,0.5)] transition-shadow">
                    Book a Consultation
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
