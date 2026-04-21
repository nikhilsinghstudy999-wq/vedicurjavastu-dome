'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
export function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-nidra-indigo/90 to-sacred-saffron/80" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6">Begin Your Transformation Today</h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">Book a private consultation with Vastuvid KK Nagaich.</p>
        <Link href="/bookings" className="bg-white text-nidra-indigo font-bold px-10 py-5 rounded-full text-lg shadow-xl">Schedule Now</Link>
      </div>
    </motion.section>
  );
}
export default FinalCTA;
