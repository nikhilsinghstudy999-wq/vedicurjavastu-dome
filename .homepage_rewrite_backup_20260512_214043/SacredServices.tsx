'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const services = [
  { title: 'Residential Vastu', desc: 'Homes, flats & quarters', href: '/services/residential', accent: '#E8B960' },
  { title: 'Commercial Vastu', desc: 'Offices, shops & showrooms', href: '/services/commercial', accent: '#3B82F6' },
  { title: 'Industrial Vastu', desc: 'Factories & manufacturing', href: '/services/industrial', accent: '#6366F1' },
  { title: 'Land Selection', desc: 'Auspicious plot analysis', href: '/services/land', accent: '#10B981' },
  { title: 'New Construction', desc: 'Build from ground up', href: '/services/new-construction', accent: '#8B5CF6' },
  { title: 'Kundali Analysis', desc: 'Vedic Nadi Jyotish', href: '/services/kundali', accent: '#F59E0B' },
  { title: 'Numerology & Namakaran', desc: 'Names + Mobile Numbers', href: '/services/numerology-namakaran', accent: '#2563EB' },
  { title: 'Virtual Consult', desc: 'Global video session', href: '/bookings', accent: '#0891B2' },
  { title: 'Remedies', desc: '5 powerful therapies', href: '/services/remedies', accent: '#10B981' },
  { title: 'Rituals', desc: 'Puja, Havan & Anushthan', href: '/services/rituals', accent: '#F97316' },
];

export function SacredServices() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-4">Sacred Services</h2>
        <p className="text-center text-nidra-indigo/60 mb-12 max-w-xl mx-auto">
          Holistic Vastu solutions rooted in authentic Vedic lineage
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <Link href={s.href} className="block p-6 rounded-2xl bg-gradient-to-br from-white via-white to-vastu-parchment border border-prakash-gold/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: s.accent }} />
                <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-nidra-indigo/60">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Kundalini Full Report CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red shadow-2xl">
            <div className="bg-white rounded-3xl p-8 sm:p-10 text-center">
              <h3 className="font-serif text-2xl sm:text-3xl text-nidra-indigo mb-3">
                Full Kundalini Analysis by Expert Vastuvid K.K. Nagaich
              </h3>
              <p className="text-nidra-indigo/70 mb-2">100‑page detailed report with 10 Raj & Dhana Yogas, Shadbala, Vimshottari Dasha, and personalised remedies.</p>
              <p className="text-3xl font-bold text-prakash-gold mb-6">₹5,999 <span className="text-sm text-nidra-indigo/50">per report</span></p>
              <a
                href="https://wa.me/916393570832?text=Hello%20Vastuvid%20ji%2C%20I%20want%20the%20full%20100%2Dpage%20Kundalini%20analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.298.433 2.5 1.164 3.477l-1.074 2.47 2.548-.992c.642.365 1.373.578 2.129.578 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767z"/></svg>
                Get Your Report on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SacredServices;
