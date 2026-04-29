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

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

export default function MobileNumerologyPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2e1a] via-[#1a4e2a] to-[#0f2a1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Vedic Application · वैदिक अनुप्रयोग</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-emerald-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Mobile Numerology</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Phone Number Vibration Analysis · New Number Recommendation · Business Number Audit · Dual-SIM Strategy · Mobile Number Muhurat</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">5 precise Mobile Numerology practices — performed personally by Vastuvid K.K. Nagaich, 4th generation Vastu Guru, MBA, Ex‑CEO. Your phone number is the most frequently dialed sequence in your life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Mobile Numerology Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </motion.div>
        </section>

        {/* ── SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Science of Digital Vibration</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Every Digit Carries a Specific Cosmic Frequency</h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Mobile numerology is the Vedic science of aligning your personal phone number with your birth chart. Each digit resonates at a specific frequency that either harmonizes with or disrupts your cosmic blueprint. A precision‑matched number can transform your personal and professional life.</p>
            </div>
          </div>
        </section>

        {/* ── 5 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Five Mobile Numerology Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Complete Phone Number Optimization Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Precision number analysis derived from Vedic numerology and two decades of mobile numerology consultations.</p></div>
            <div className="space-y-16">
              {practices.map((p, i) => (
                <AnimatedSection key={i}>
                  <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                    <div className="lg:w-1/3 flex-shrink-0">
                      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: p.color }} />
                        <div className="text-6xl font-bold mt-4 mb-2" style={{ color: p.color }}>0{i + 1}</div>
                        <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title}</h3>
                        <p className="text-xs font-semibold mt-1" style={{ color: p.color }}>{p.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">{p.features.map((f, j) => <span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: p.color + '30', backgroundColor: p.color + '08', color: p.color }}>{f}</span>)}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e1a] via-[#1a4e2a] to-[#0f2a1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-emerald-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Optimize Your Mobile Number</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a consultation with Vastuvid K.K. Nagaich for a complete mobile numerology analysis and new number recommendation. 20+ years of clinical practice, 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Mobile Numerology Consultation →</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SmoothScroll>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
