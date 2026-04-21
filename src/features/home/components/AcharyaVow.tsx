'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export function AcharyaVow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  return (
    <motion.section ref={ref} style={{ opacity, y }} className="py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-br from-vastu-parchment via-white to-vastu-stone/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div className="relative order-2 md:order-1">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <Image src="/images/home/acharya-portrait.jpg" alt="Acharya" fill className="object-contain sm:object-cover" />
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <span className="text-sacred-saffron uppercase tracking-widest text-xs sm:text-sm font-semibold">Our Sacred Vow</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 sm:mb-6 leading-tight">Guided by Lineage, Driven by Results</h2>
            <p className="text-base sm:text-lg text-nidra-indigo/80 mb-6 leading-relaxed">For over four decades, our family has preserved the authentic Vastu Shastra traditions.</p>
            <Link href="/about" className="luxury-button text-center shadow-lg">Discover Our Lineage</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default AcharyaVow;
