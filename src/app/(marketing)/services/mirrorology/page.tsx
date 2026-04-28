'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

const practices = [
  {
    title: 'Directional Mirror Placement',
    subtitle: 'North and East Walls for Energy Amplification',
    desc: 'According to Vastu Shastra, mirrors placed on North or East walls attract and amplify prosperity, health, and positive opportunities. The North direction is governed by Kuber, the god of wealth — a mirror on the North wall symbolically doubles financial inflow. The East direction, governed by the rising sun, amplifies vitality and spiritual growth. Mirrors on South or West walls can reflect and amplify negative energies, making directional placement the single most important factor in Mirrorology.',
    features: ['North wall: amplifies wealth (Kuber direction)', 'East wall: amplifies vitality and spiritual energy', 'South and West: generally avoided', 'Reflection of positive views and light sources', 'Room-specific directional prescription'],
    color: '#06B6D4',
  },
  {
    title: 'Bedroom Mirror Protocol',
    subtitle: 'Protect Sleep, Relationships, and Personal Energy',
    desc: 'The bedroom is the most sensitive space for mirror placement. A mirror directly facing the bed is considered one of the most serious Vastu doshas — it reflects the couple\'s image, which can lead to misunderstandings, infidelity, and disturbed sleep. Mirrors in the bedroom should be placed on the North or East walls only, positioned so they never directly reflect the bed. If a mirror is unavoidable (e.g., wardrobe doors), it should be covered at night with a cloth or screen.',
    features: ['Never face the bed directly', 'Cover wardrobe mirrors at night', 'Place on North or East walls only', 'Avoid reflecting the main door', 'Use smaller mirrors in bedrooms'],
    color: '#0891B2',
  },
  {
    title: 'Dining Room Wealth Mirror',
    subtitle: 'Symbolically Double Your Food and Prosperity',
    desc: 'A mirror placed on the North or East wall of the dining room, reflecting the dining table, is one of the most powerful Vastu remedies for financial prosperity. The reflection symbolically doubles the food on the table, which in Vedic symbolism represents the doubling of all material resources. The mirror should be positioned so it reflects the entire table and the family members seated at it. This practice is recommended by multiple Vastu authorities and has been independently validated by clients of Vastuvid K.K. Nagaich.',
    features: ['Reflects entire dining table', 'Symbolically doubles food and prosperity', 'North or East wall placement', 'Position at seated eye level', 'Widely recommended Vastu remedy'],
    color: '#0E7490',
  },
  {
    title: 'Entrance & Foyer Mirror Rules',
    subtitle: 'Reflect Prosperity Into the Home',
    desc: 'A mirror in the entrance or foyer reflects the energy entering through the main door. Positioned correctly, it can amplify positive energy and deflect negative influences. The mirror should never directly face the main door — this would reflect incoming prosperity back out of the home. Instead, it should be placed on a side wall, angled to reflect a beautiful object, a water feature, or a well-lit area. The entrance mirror should be large enough to reflect the full body for a sense of wholeness.',
    features: ['Never directly face the main door', 'Place on side wall at entrance', 'Reflect a beautiful object or water feature', 'Full-body size recommended for foyer', 'Clean daily for maximum reflectivity'],
    color: '#155E75',
  },
  {
    title: 'Mirror Shape & Size Prescription',
    subtitle: 'Square, Rectangle, Oval — Each Shape Has a Purpose',
    desc: 'The shape of a mirror influences its energy: square mirrors represent the Earth element and provide stability; rectangular mirrors represent growth and expansion; oval or round mirrors represent the Water element and bring fluidity and calm. Irregular or asymmetrical mirrors should be avoided. The size of the mirror should be proportional to the wall — a mirror that is too small creates energetic dissonance, while a mirror that is too large can overwhelm the room. Vastuvid K.K. Nagaich provides room-specific shape and size prescriptions.',
    features: ['Square: stability and grounding (Earth)', 'Rectangle: growth and expansion', 'Oval/Round: calm and fluidity (Water)', 'Avoid irregular or broken mirrors', 'Proportional sizing to wall dimensions'],
    color: '#164E63',
  },
];

export default function MirrorologyPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">
          <motion.section ref={heroRef} style={{ opacity }} className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10">
              <Link href="/services" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors"><svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>Back to All Services</Link>
              <div className="flex items-center gap-3 text-sm text-white/50 mb-4"><span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vedic Application</span><span className="w-1 h-1 bg-white/30 rounded-full" /><span>Energy Correction</span><span className="w-1 h-1 bg-white/30 rounded-full" /><span>By Vastuvid KK Nagaich</span></div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">Mirrorology —{' '}<span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Strategic Reflection for Energy Amplification</span></h1>
              <p className="text-lg text-white/60 max-w-3xl">Mirrors are powerful energy tools in Vastu Shastra — they can double prosperity or amplify defects depending on placement, shape, and direction. Five precise protocols, guided by Vastuvid K.K. Nagaich.</p>
            </motion.div>
          </motion.section>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Five Mirrorology Practices</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Complete Mirror Placement Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Room-by-room mirror prescription derived from Vastu Shastra and validated across thousands of client consultations.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {practices.map((p,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} whileHover={{scale:1.02,rotateY:2}} className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500" style={{transformStyle:'preserve-3d',perspective:1000}}><div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{backgroundColor:p.color}}/><h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2 mb-1">{p.title}</h3><p className="text-xs font-semibold mb-3" style={{color:p.color}}>{p.subtitle}</p><p className="text-sm text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p><div className="flex flex-wrap gap-1.5">{p.features.map((f,j)=><span key={j} className="text-xs px-2 py-1 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{f}</span>)}</div></motion.div>))}
            </div>
          </div>

          <section className="relative py-28 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a]"/><div className="container mx-auto px-4 sm:px-6 relative z-10"><div className="max-w-3xl mx-auto text-center"><div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"><div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10"><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Get Your Mirror Prescription</h2><p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Book a consultation for a complete room-by-room mirror audit and personalized placement prescription.</p><Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(6,182,212,0.3)] transition-all text-lg">Book Your Consultation</Link></div></div></div></div></section>

          <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-20"><div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div><div><p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p><p className="text-sm text-nidra-indigo/60">4th Gen Vastu Guru | MBA | Ex-CEO | 20+ Years | 2 Lakh+ Clients | Mirrorology Specialist</p></div></div></div>
        </article>
      </SmoothScroll>
    </>
  );
}
