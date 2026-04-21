'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
export function VirtualConsultCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-nidra-indigo/70" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-6">Connect with Acharya, Virtually</motion.h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">Secure video consultation from anywhere in the world.</p>
        <Link href="/bookings" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg shadow-2xl transition-all">Book Virtual Consultation</Link>
      </div>
    </motion.section>
  );
}
export default VirtualConsultCTA;
