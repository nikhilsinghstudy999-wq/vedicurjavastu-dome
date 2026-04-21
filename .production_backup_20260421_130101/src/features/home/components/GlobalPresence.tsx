'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
export function GlobalPresence() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <motion.section ref={ref} className="py-24 bg-nidra-indigo text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">Global Wisdom, Local Precision</h2>
            <p className="text-white/70 text-lg mb-6">Our Vastu solutions transcend borders.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✓</span> 15+ Countries Served</li>
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✓</span> 500+ Satisfied Clients</li>
              <li className="flex items-center gap-2"><span className="text-prakash-gold">✓</span> 4.9 ★ Average Rating</li>
            </ul>
            <Link href="/bookings" className="bg-prakash-gold text-nidra-indigo px-8 py-4 rounded-full font-medium inline-block">Book a Consultation</Link>
          </div>
          <motion.div style={{ rotateY }} className="flex justify-center">
            <div className="section-banner-sun"><div className="om-overlay">ॐ</div></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default GlobalPresence;
