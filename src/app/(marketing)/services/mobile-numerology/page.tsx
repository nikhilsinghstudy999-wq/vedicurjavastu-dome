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
    title: 'Phone Number Vibration Analysis',
    subtitle: 'Decode the Energy Hidden in Your Digits',
    desc: 'Every phone number carries a unique numerological vibration based on the sum of its digits. This vibration interacts with your personal Psychic Number (Driver Number) and Destiny Number (Life Path Number) — either harmonizing to attract opportunities or conflicting to create obstacles. Vastuvid K.K. Nagaich conducts a complete vibration analysis of your current number against your birth chart, identifying exactly which digits are supporting your goals and which are creating resistance.',
    features: ['Full digit sum calculation', 'Compatibility check against birth chart', 'Psychic & Destiny Number cross-reference', 'Digit-by-digit energy audit', 'Identifies supportive and conflicting numbers'],
    color: '#10B981',
  },
  {
    title: 'New Number Recommendation',
    subtitle: 'A Number Precision-Matched to Your Cosmic Blueprint',
    desc: 'If your current number is misaligned, Vastuvid K.K. Nagaich calculates and recommends a new number where every digit — the sum total, the individual digits, and the digit pattern — creates a resonant vibration with your Janma Nakshatra, Psychic Number, and Destiny Number. Each recommendation comes with 3-5 alternative numbers, allowing you to choose one that is practically available while still vibrationally optimal.',
    features: ['3-5 alternative number recommendations', 'Each number verified against birth chart', 'Digit pattern optimization', 'Network provider compatibility check', 'Practical availability guidance'],
    color: '#059669',
  },
  {
    title: 'Business Number Audit',
    subtitle: 'Are Your Contact Numbers Attracting or Repelling Clients?',
    desc: 'A business phone number is often the first point of contact with potential clients. A number that vibrates at a conflicting frequency can create invisible resistance — customers who almost call but don\'t, deals that nearly close but fall through. Vastuvid K.K. Nagaich audits all business contact numbers (main line, customer support, owner\'s direct line) against the business\'s incorporation Nakshatra and the owner\'s birth chart.',
    features: ['Multi-number business audit', 'Customer-facing number optimization', 'Owner personal number alignment', 'Business Nakshatra cross-reference', 'Recommended replacement numbers'],
    color: '#047857',
  },
  {
    title: 'Dual-SIM & Multiple Number Strategy',
    subtitle: 'Strategic Number Assignment for Different Life Areas',
    desc: 'Many professionals carry multiple numbers — personal, business, family. Each number can be strategically assigned to a specific life area: one number optimized for career and business, another for family and relationships, a third for creative or spiritual pursuits. Vastuvid K.K. Nagaich designs a complete multi-number strategy, ensuring that each number\'s vibration supports its designated life domain without cross-interference.',
    features: ['Multi-number vibration mapping', 'Life area-specific number assignment', 'Cross-number compatibility check', 'SIM card management strategy', 'Annual re-audit recommendation'],
    color: '#065F46',
  },
  {
    title: 'Mobile Number Muhurat',
    subtitle: 'Activate Your New Number at the Right Cosmic Moment',
    desc: 'The moment a new SIM card is activated — the exact time the number becomes live — is its astrological birth. Activating at an auspicious Muhurat aligned with your Nakshatra can significantly amplify the number\'s positive effects. Vastuvid K.K. Nagaich calculates the optimal activation window and guides you through the activation ritual.',
    features: ['Activation Muhurat calculation', 'Nakshatra-aligned timing', 'Planetary transit consideration', 'Activation ritual guidance', 'Post-activation monitoring'],
    color: '#34D399',
  },
];

export default function MobileNumerologyPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">
          <motion.section ref={heroRef} style={{ opacity }} className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0a2e1a] via-[#1a4e2a] to-[#0f2a1a] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
            <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10">
              <Link href="/services" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>Back to All Services
              </Link>
              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vedic Application</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>Digital Numerology</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>By Vastuvid KK Nagaich</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Mobile Numerology —{' '}<span className="bg-gradient-to-r from-emerald-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Align Your Phone\'s Vibration</span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">Your phone number is the most frequently dialed sequence in your life. Its digits carry a specific numerological vibration that interacts with your birth chart — either attracting opportunities or creating subtle resistance. Five precise protocols, guided by Vastuvid K.K. Nagaich.</p>
            </motion.div>
          </motion.section>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Five Mobile Numerology Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Complete Phone Number Optimization Protocol</h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Precision number analysis derived from Vedic numerology and two decades of mobile numerology consultations.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {practices.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.02, rotateY: 2 }} className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500" style={{ transformStyle: 'preserve-3d', perspective: 1000 }}>
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: p.color }} />
                  <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2 mb-1">{p.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: p.color }}>{p.subtitle}</p>
                  <p className="text-sm text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{p.features.map((f,j)=><span key={j} className="text-xs px-2 py-1 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{f}</span>)}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#1a4e2a] to-[#0f2a1a]" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10"><div className="max-w-3xl mx-auto text-center"><div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-emerald-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"><div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10"><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Optimize Your Mobile Number</h2><p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Book a consultation with Vastuvid K.K. Nagaich for a complete mobile numerology analysis and new number recommendation.</p><Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.3)] transition-all text-lg">Book Your Consultation</Link></div></div></div></div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-20"><div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div><div><p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p><p className="text-sm text-nidra-indigo/60">4th Gen Vastu Guru | MBA | Ex-CEO | 20+ Years | 2 Lakh+ Clients | Mobile Numerology Specialist</p></div></div></div>
        </article>
      </SmoothScroll>
    </>
  );
}
