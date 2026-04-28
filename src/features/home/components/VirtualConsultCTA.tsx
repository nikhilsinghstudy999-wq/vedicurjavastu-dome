'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function VirtualConsultCTA() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97]);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y, scale } : undefined}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Soft gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-vastu-parchment via-[#fdf2e9] to-[#f9e4d4] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,153,51,0.08),transparent_50%)]" />

      {/* Floating glass orbs */}
      <div className="absolute top-20 left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-prakash-gold/10 to-sacred-saffron/5 backdrop-blur-2xl border border-white/20 shadow-[0_20px_40px_rgba(200,138,93,0.15)] animate-float" />
      <div className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full bg-gradient-to-tl from-sacred-saffron/5 to-kumkuma-red/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(193,0,0,0.08)] animate-float-reverse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_25px_50px_rgba(26,42,58,0.15)]"
          >
            <div className="rounded-[38px] bg-white/60 backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center border border-white/30 shadow-inner">
              {/* Decorative elements */}
              <div className="absolute top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-prakash-gold/20 to-transparent blur-sm" />
              <div className="absolute bottom-8 right-10 w-16 h-16 rounded-full bg-gradient-to-tl from-sacred-saffron/15 to-transparent blur-sm" />

              {/* Content */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sacred-saffron uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 inline-block"
              >
                Vedic Connect
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4 leading-tight"
              >
                Connect with <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Acharya</span>, Virtually
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-nidra-indigo/70 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                Experience personalised Vastu guidance from anywhere in the world via secure video call.
                Share your floor plan, receive real‑time remedies, and transform your space without travelling.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8"
              >
                {[
                  { value: '500+', label: 'Consultations' },
                  { value: '15+', label: 'Countries' },
                  { value: '4.9 ★', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-nidra-indigo">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-nidra-indigo/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/bookings"
                  className="luxury-button text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Book Virtual Consultation
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-prakash-gold text-nidra-indigo px-8 py-4 rounded-full text-base sm:text-lg font-medium hover:bg-prakash-gold/10 transition"
                >
                  Contact Acharya
                </Link>
              </motion.div>

              <p className="mt-6 text-xs sm:text-sm text-nidra-indigo/40">
                Your privacy is guaranteed. All sessions are confidential and secure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
      `}</style>
    </motion.section>
  );
}
export default VirtualConsultCTA;
