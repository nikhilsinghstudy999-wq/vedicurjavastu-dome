'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function GlobalPresence() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <motion.section
      ref={ref}
      className="py-20 sm:py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(232,185,96,0.08) 0%, rgba(26,10,46,0.97) 70%)',
        backgroundColor: '#1A0A2E'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text */}
          <div className="text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Global Reach, <span className="text-prakash-gold">Vedic Wisdom</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
              From Lucknow to London, our Vastu solutions have transformed over <span className="text-prakash-gold font-bold">2 Lakh+ homes and businesses</span> across <span className="text-prakash-gold font-bold">50+ countries</span>. Our Instagram presence reaches <span className="text-prakash-gold font-bold">100 million+ viewers</span> monthly, making Vastuvid K.K. Nagaich the most‑watched Vastu expert globally.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-prakash-gold" /> 100M+ Views across platforms</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-prakash-gold" /> 80K+ Instagram followers</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-prakash-gold" /> 2 Lakh+ Clients worldwide</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-prakash-gold" /> 50+ Countries served</li>
            </ul>
            <Link href="/bookings" className="inline-block bg-prakash-gold text-nidra-indigo px-8 py-4 rounded-full font-bold hover:bg-sacred-saffron transition-colors">
              Book a Consultation
            </Link>
          </div>

          {/* Glowing image with shadow border */}
          <motion.div style={{ rotateY }} className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-prakash-gold/40 via-sacred-saffron/30 to-kumkuma-red/40 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-prakash-gold shadow-[0_0_40px_rgba(232,185,96,0.4)]">
                <Image
                  src="/images/home/globe-texture.jpg"
                  alt="VedicUrja Global Presence – Vastu Expert serving 50+ countries"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl text-white font-serif drop-shadow-lg opacity-80">ॐ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default GlobalPresence;
