'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function GlobalPresence() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const stats = [
    { value: '20+', label: 'Years of Experience', icon: '◈' },
    { value: '2 Lakh+', label: 'Clients Served', icon: '◆' },
    { value: '50+', label: 'Countries Reached', icon: '◇' },
    { value: '4.9 ★', label: 'Average Rating', icon: '◉' },
  ];

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y, scale } : undefined}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background with gradient and glass orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-nidra-indigo/95 to-sacred-saffron/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.12),transparent_50%)]" />
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-sacred-saffron/5 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(232,185,96,0.1)] animate-float-slow" />
      <div className="absolute bottom-10 left-[5%] w-64 h-64 rounded-full bg-gradient-to-tr from-sacred-saffron/5 to-kumkuma-red/3 backdrop-blur-2xl border border-white/10 animate-float-medium" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-prakash-gold uppercase tracking-[0.25em] text-sm font-semibold">
              Global Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight">
              Trusted by Lakhs Across the{' '}
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                Globe
              </span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
              For over <strong className="text-prakash-gold">20 years</strong>, Vastuvid K.K. Nagaich has provided precise Vastu guidance to <strong className="text-prakash-gold">over 2 lakh clients</strong> across <strong className="text-prakash-gold">50+ countries</strong>. 
              His remedies have transformed homes, businesses, and lives — from the banks of the Ganga to Manhattan skyscrapers.
            </p>
            <p className="text-white/60 text-sm sm:text-base mb-8">
              Every consultation is backed by authentic Vedic lineage and verified results. Join a global community that has found harmony through ancient wisdom, applied with modern precision.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-prakash-gold/30 hover:bg-white/10 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateX: 2, rotateY: -2, translateZ: 10 }}
                >
                  <div className="text-2xl mb-1 text-prakash-gold">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/bookings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_8px_30px_rgba(232,185,96,0.3)] hover:shadow-[0_15px_40px_rgba(232,185,96,0.5)] transition-all duration-300 group"
            >
              Book Your Consultation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right visual – rotating glass globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ rotateY }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Glass globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-prakash-gold/20 via-sacred-saffron/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_0_40px_rgba(232,185,96,0.1)] animate-float-slow">
                {/* World map SVG */}
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-30" fill="none">
                  <circle cx="100" cy="100" r="95" stroke="rgba(232,185,96,0.6)" strokeWidth="1.5" />
                  <ellipse cx="100" cy="100" rx="60" ry="95" stroke="rgba(255,153,51,0.3)" strokeWidth="0.8" />
                  <line x1="40" y1="100" x2="160" y2="100" stroke="rgba(232,185,96,0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(232,185,96,0.3)" strokeWidth="0.5" />
                  {/* Continent outlines */}
                  <path d="M60,60 Q80,40 100,60 Q120,50 140,70" stroke="rgba(232,185,96,0.5)" strokeWidth="1" fill="rgba(232,185,96,0.1)" />
                  <path d="M50,80 Q70,90 90,80 Q110,70 130,90 Q140,100 150,90" stroke="rgba(232,185,96,0.5)" strokeWidth="1" fill="rgba(232,185,96,0.1)" />
                  <path d="M70,120 Q90,110 110,120 Q130,115 145,130" stroke="rgba(232,185,96,0.5)" strokeWidth="1" fill="rgba(232,185,96,0.1)" />
                  <circle cx="145" cy="130" r="5" stroke="rgba(232,185,96,0.6)" strokeWidth="1" fill="rgba(232,185,96,0.2)" />
                  <circle cx="55" cy="60" r="4" stroke="rgba(232,185,96,0.6)" strokeWidth="1" fill="rgba(232,185,96,0.2)" />
                  <circle cx="120" cy="50" r="3" stroke="rgba(232,185,96,0.6)" strokeWidth="1" fill="rgba(232,185,96,0.2)" />
                  <circle cx="80" cy="140" r="3.5" stroke="rgba(232,185,96,0.6)" strokeWidth="1" fill="rgba(232,185,96,0.2)" />
                  <circle cx="160" cy="70" r="4.5" stroke="rgba(232,185,96,0.6)" strokeWidth="1" fill="rgba(232,185,96,0.2)" />
                </svg>
                {/* Central Om */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-serif text-prakash-gold/40 drop-shadow-[0_0_20px_rgba(232,185,96,0.5)]">ॐ</span>
                </div>
              </div>
              {/* Orbiting ring */}
              <div className="absolute -inset-4 rounded-full border border-prakash-gold/20 animate-spin-slow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
      `}</style>
    </motion.section>
  );
}
export default GlobalPresence;
