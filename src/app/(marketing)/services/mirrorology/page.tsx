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

export default function MirrorologyPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.10),transparent_60%)]" />
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Vedic Application · वैदिक अनुप्रयोग</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Mirrorology</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Directional Mirror Placement · Bedroom Mirror Protocol · Dining Room Wealth Mirror · Entrance & Foyer Rules · Mirror Shape & Size Prescription</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">5 precise Mirrorology practices — performed personally by Vastuvid K.K. Nagaich, 4th generation Vastu Guru, MBA, Ex‑CEO. Mirrors are powerful energy tools in Vastu Shastra.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Mirrorology Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </motion.div>
        </section>

        {/* ── SCIENCE ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Science of Strategic Reflection</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Mirrors – Energy Amplifiers That Can Double Prosperity or Amplify Defects</h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">In Vastu Shastra, mirrors are not decorative items — they are precision energy tools. Placed correctly, they attract wealth and harmony; placed incorrectly, they create doshas that can disrupt sleep, relationships, and financial stability. Vastuvid K.K. Nagaich provides a complete room‑by‑room mirror audit and personalised placement prescription.</p>
            </div>
          </div>
        </section>

        {/* ── 5 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Five Mirrorology Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Complete Mirror Placement Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Room‑by‑room mirror prescription derived from Vastu Shastra and validated across thousands of client consultations.</p></div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-cyan-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Get Your Mirror Prescription</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a consultation for a complete room‑by‑room mirror audit and personalised placement prescription. 20+ years of clinical practice, 2 Lakh+ clients worldwide.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Mirrorology Consultation →</Link>
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
