'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedStatCard3D from '@/features/tools/shared/components/AnimatedStatCard3D';
import PremiumComparison3D from '@/features/tools/shared/components/PremiumComparison3D';
import KundaliLuxurySVG from '@/features/tools/shared/components/KundaliLuxurySVG';
import HoroscopeLuxurySVG from '@/features/tools/shared/components/HoroscopeLuxurySVG';
import NameSuggestionLuxurySVG from '@/features/tools/shared/components/NameSuggestionLuxurySVG';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { FreeTool } from '@/types/admin';

// Hero section (unchanged)
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a0000] via-[#2d0000] to-[#1a0000] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.07),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float-slow" />
      <div className="absolute bottom-20 right-[8%] w-80 h-80 rounded-full bg-gradient-to-tl from-prakash-gold/8 to-transparent backdrop-blur-2xl border border-white/10 animate-float-medium" />

      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Free Vedic Tools</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Sacred Tools,</span><br />
          <span className="text-prakash-gold">Modern Precision</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 px-4">Free, accurate, and trusted by seekers across 50+ countries. Powered by genuine Vedic calculations.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('tools-grid')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all w-full sm:w-auto text-lg">Explore Tools</button>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full w-full sm:w-auto text-center text-lg font-medium transition-all">Consult Acharya</Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2"><span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto"><span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" /></span></div>
    </motion.section>
  );
}

/* ---------------------------------------------------------------
   LUXURY TOOL CARD – each tool gets its own border & glow color
   --------------------------------------------------------------- */
const cardStyles: Record<string, { border: string; glow: string; bg: string }> = {
  kundali: {
    border: 'from-amber-400/50 via-orange-500/30 to-red-500/50',
    glow: 'rgba(255,153,51,0.4)',
    bg: 'from-amber-50/90 via-orange-50/70 to-red-50/50',
  },
  daily_horoscope: {
    border: 'from-purple-400/50 via-violet-500/30 to-fuchsia-500/50',
    glow: 'rgba(139,92,246,0.4)',
    bg: 'from-purple-50/90 via-violet-50/70 to-fuchsia-50/50',
  },
  name_suggestion: {
    border: 'from-yellow-400/50 via-gold-500/30 to-amber-500/50',
    glow: 'rgba(232,185,96,0.4)',
    bg: 'from-yellow-50/90 via-gold-50/70 to-amber-50/50',
  },
};

function PremiumToolCard({ tool, icon }: { tool: FreeTool; icon: React.ReactNode }) {
  const style = cardStyles[tool.tool_key] || cardStyles.kundali;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ rotateY: 5, rotateX: -3, scale: 1.03, translateZ: 20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group relative w-full max-w-sm mx-auto"
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
    >
      <div className={`relative rounded-[40px] p-[2px] bg-gradient-to-br ${style.border} shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.3)] transition-shadow duration-500`}>
        <div className={`relative rounded-[38px] bg-gradient-to-br ${style.bg} backdrop-blur-xl p-8 h-[460px] flex flex-col items-center justify-center text-center overflow-hidden`}>
          {/* Decorative floating rings */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-prakash-gold/20 animate-spin-slow" />
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-dashed border-sacred-saffron/20 animate-spin-slow-reverse" />

          <div className="mb-6 transform translate-z-4 drop-shadow-[0_0_20px_rgba(255,153,51,0.5)]">{icon}</div>
          <h3 className="font-serif text-3xl text-nidra-indigo font-bold mb-3 drop-shadow-md">{tool.title}</h3>
          <p className="text-nidra-indigo/70 text-sm leading-relaxed mb-6">{tool.description}</p>
          <Link
            href={
              tool.tool_key === 'kundali' 
                ? '/free-tools/kundali' 
                : tool.tool_key === 'daily_horoscope' 
                  ? '/free-tools/daily-horoscope' 
                  : '/free-tools/name-suggestion'
            }
            className="mt-auto inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow group/btn"
          >
            Try Now <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Three Pillars section (unchanged except using above card)
function ToolsGridSection() {
  const { items: tools } = useRealtimeContent<FreeTool>('free_tools', 'order_index');
  const publishedTools = tools.filter(t => t.is_published);

  return (
    <section id="tools-grid" className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Three Pillars</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Choose Your Path to <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Vedic Wisdom</span></h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">All free, all powerful — powered by authentic Vedic algorithms refined over generations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
          {publishedTools.map((tool) => (
            <PremiumToolCard key={tool.id} tool={tool} icon={
              tool.tool_key === 'kundali' ? <KundaliLuxurySVG /> :
              tool.tool_key === 'daily_horoscope' ? <HoroscopeLuxurySVG /> :
              <NameSuggestionLuxurySVG />
            } />
          ))}
        </div>
      </div>
    </section>
  );
}

// Accuracy section (unchanged)
function AccuracySection() {
  const stats = [
    { label: 'Kundali Accuracy', value: 92, suffix: '%', desc: 'Match with professional Jyotish software', color: '#FF9933' },
    { label: 'Vastu Scan Precision', value: 500, suffix: '+', desc: 'Validated against real floor plans', color: '#C10000' },
    { label: 'Name Syllable Source', value: 100, suffix: '%', desc: 'Direct from Brihat Parashara Hora Shastra', color: '#E8B960' },
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#fdfbf7] via-[#f7f0e6] to-[#fdfbf7] relative overflow-hidden">
      <div className="absolute top-10 left-[8%] w-48 h-48 border border-prakash-gold/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-10 right-[5%] w-64 h-64 border border-dashed border-sacred-saffron/8 rounded-full animate-rotate-reverse" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Rooted in Authenticity</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Our Tools Are Built on <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Genuine Vedic Calculations</span></h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">Authentic astronomical algorithms derived from the Brihat Parashara Hora Shastra — the definitive text of Vedic astrology.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, i) => (<AnimatedStatCard3D key={i} index={i} label={stat.label} value={stat.value} suffix={stat.suffix} description={stat.desc} icon="◈" color={stat.color} />))}
        </div>
      </div>
    </section>
  );
}

// Final CTA (unchanged)
function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a0000] via-[#2d0000] to-[#1a0000] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl border border-white/10 animate-float-slow" />
      <div className="absolute bottom-10 right-[8%] w-64 h-64 rounded-full bg-gradient-to-tl from-prakash-gold/8 to-transparent backdrop-blur-2xl border border-white/10 animate-float-medium" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
              <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-prakash-gold uppercase tracking-[0.25em] text-sm font-semibold mb-4 inline-block">Ready for Deeper Insight?</motion.span>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight drop-shadow-lg">Book a Private <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Consultation with Acharya</span></motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">While our free tools provide accurate Vedic insights, a personal consultation with Vastuvid K.K. Nagaich delivers tailored remedies, Dasha predictions, and lifelong guidance rooted in 20+ years of authentic practice.</motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block">
                <Link href="/bookings"><motion.div whileHover={{ scale: 1.08, rotateX: 5, rotateY: -3 }} whileTap={{ scale: 0.97 }} className="group relative px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red rounded-full font-bold text-white text-lg shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all duration-500" style={{ transformStyle: 'preserve-3d', perspective: 1000 }}><span className="relative z-10 flex items-center gap-3">Schedule Now <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span></motion.div></Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Main page
export default function FreeToolsPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <ToolsGridSection />
          <AccuracySection />
          <PremiumComparison3D />
          <FinalCTASection />
        </main>
      </SmoothScroll>
      <style>{`
        @keyframes float-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)} }
        @keyframes float-medium { 0%,100%{transform:translateY(0)rotate(0)}50%{transform:translateY(-10px)rotate(3deg)} }
        @keyframes gradient-loop { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }
        @keyframes spin-slow { from{transform:rotate(0)}to{transform:rotate(360deg)} }
        @keyframes spin-slow-reverse { from{transform:rotate(360deg)}to{transform:rotate(0)} }
        @keyframes rotate-slow { from{transform:rotate(0)}to{transform:rotate(360deg)} }
        @keyframes rotate-reverse { from{transform:rotate(360deg)}to{transform:rotate(0)} }
        .animate-float-slow{animation:float-slow 8s ease-in-out infinite}
        .animate-float-medium{animation:float-medium 10s ease-in-out infinite}
        .animate-gradient-loop{animation:gradient-loop 12s ease infinite}
        .animate-spin-slow{animation:spin-slow 20s linear infinite}
        .animate-spin-slow-reverse{animation:spin-slow-reverse 18s linear infinite}
        .animate-rotate-slow{animation:rotate-slow 35s linear infinite}
        .animate-rotate-reverse{animation:rotate-reverse 30s linear infinite}
      `}</style>
    </>
  );
}
