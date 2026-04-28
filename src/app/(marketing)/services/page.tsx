'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import SacredServices from '@/features/home/components/SacredServices';

const instagramReels = [
  'https://www.instagram.com/reel/DXMejXjkk5D/',
  'https://www.instagram.com/reel/DW-oXZ3yhUx/',
  'https://www.instagram.com/reel/DW3PsvlT_eT/',
  'https://www.instagram.com/reel/DWx3t_Dku3u/',
  'https://www.instagram.com/reel/DWik3DZkvZk/',
  'https://www.instagram.com/reel/DWT4z9nEgVs/',
  'https://www.instagram.com/reel/DU7aYejEhj6/',
  'https://www.instagram.com/reel/DUSYXHPkteM/',
  'https://www.instagram.com/reel/DUQW6z5kqIO/',
];

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false); useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start start', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);
  return (
    <motion.section ref={ref} style={isMounted ? { opacity } : undefined} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a0a0a] via-[#1a0000] to-[#0a0000] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(232,185,96,0.07),transparent_50%)]" />
      <motion.div style={isMounted ? { y } : undefined} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Sacred Services</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">VedicUrja</span><br />
          <span className="text-prakash-gold text-2xl sm:text-3xl md:text-4xl mt-2 block">Guided by Vastuvid K.K. Nagaich</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 px-4">Complete Vastu solutions rooted in authentic Vedic lineage — from residential sanctuaries to industrial empires.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all w-full sm:w-auto text-lg">Book Consultation</Link>
          <button onClick={() => document.getElementById('instagram-reviews')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full w-full sm:w-auto text-center text-lg font-medium transition-all">Client Reviews</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function InstagramReviewsSection() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script'); script.src = '//www.instagram.com/embed.js'; script.async = true;
      script.onload = () => { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); };
      document.body.appendChild(script);
    } else { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); }
  }, []);
  return (
    <section id="instagram-reviews" className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/20 to-vastu-parchment relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Trusted Across India</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Real Reviews from Industrialists & Families</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramReels.map((url, i) => (
            <motion.div key={url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.02, rotateY: 2 }} className="rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(26,42,58,0.08)] hover:shadow-[0_15px_40px_rgba(200,138,93,0.2)] border border-prakash-gold/10">
              <iframe src={`${url}embed/`} width="100%" height="480" frameBorder="0" scrolling="no" className="w-full" style={{ minHeight: '400px' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    ['Location', 'Anywhere in the world', 'On‑site visit at your property'],
    ['Time', '60‑90 min video call', '2‑3 hours physical walkthrough'],
    ['Depth', 'Screen‑share floor plans', 'Physical energy sensing & EMF meters'],
    ['Availability', 'Flexible global scheduling', 'Limited to India travel'],
    ['Rituals', 'Remote mantra & yantra guidance', 'On‑site puja & havan ceremonies'],
    ['Best for', 'International clients, quick fixes', 'Major constructions, land audits'],
  ];
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/20 to-vastu-parchment relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Choose Your Mode</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Virtual Consultation vs Physical Visit</h2>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <table className="w-full text-sm">
              <thead><tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10"><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">Aspect</th><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">Virtual</th><th className="py-4 px-4 sm:px-6 text-left font-serif text-nidra-indigo">Physical Visit</th></tr></thead>
              <tbody>{rows.map((row, i) => (<tr key={i} className={`border-t border-prakash-gold/10 ${i%2===0?'bg-white/40':'bg-vastu-stone/20'}`}><td className="py-3 px-4 sm:px-6 font-medium text-nidra-indigo/80">{row[0]}</td><td className="py-3 px-4 sm:px-6 text-nidra-indigo/60">{row[1]}</td><td className="py-3 px-4 sm:px-6 text-nidra-indigo/60">{row[2]}</td></tr>))}</tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/bookings" className="px-8 py-4 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-medium text-center hover:shadow-lg">Book Virtual Consult</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-prakash-gold text-nidra-indigo rounded-full font-medium text-center hover:bg-prakash-gold/5">Request On‑Site Visit</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);
  return (
    <motion.section ref={ref} style={{ scale }} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a0000] via-[#2d0000] to-[#1a0000] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10"><div className="max-w-3xl mx-auto text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"><div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner"><motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let VedicUrja Guide Your Space</motion.h2><motion.p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private consultation with Vastuvid K.K. Nagaich — trusted by 2 lakh+ clients worldwide.</motion.p><Link href="/bookings"><motion.div whileHover={{ scale: 1.08 }} className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red rounded-full font-bold text-white text-lg shadow-[0_10px_40px_rgba(232,185,96,0.4)]">Schedule Now →</motion.div></Link></div></motion.div></div></div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <InstagramReviewsSection />
          <SacredServices />
          <ComparisonSection />
          <FinalCTASection />
        </main>
      </SmoothScroll>
      <style>{`@keyframes gradient-loop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animate-gradient-loop{animation:gradient-loop 12s ease infinite}`}</style>
    </>
  );
}
