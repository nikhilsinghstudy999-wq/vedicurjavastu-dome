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
    title: 'Janam Namakaran',
    subtitle: 'Newborn Naming Ceremony — 10th/11th/12th Day Samskara',
    desc: 'Janam Namakaran is one of the 16 sacred Vedic Samskaras, performed on the 10th, 11th, or 12th day after a child\'s birth. The ceremony begins with the precise calculation of the child\'s Janma Nakshatra (birth star) and the specific Pada (quarter) occupied by the Moon at the moment of birth. Each of the 27 Nakshatras has four Padas, and each Pada corresponds to a specific auspicious syllable — 108 sacred syllables total, as codified in the Brihat Parashara Hora Shastra. Vastuvid K.K. Nagaich determines the correct syllable, performs the Havan, chants the Nakshatra-specific mantras, and formally whispers the chosen name into the child\'s right ear, ritually sealing the name into the child\'s destiny.',
    features: ['Precise Janma Nakshatra and Pada calculation', 'Selection from 108 sacred syllables', 'Havan with Nakshatra-specific mantras', 'Formal whispering of name into right ear', 'Aligns identity with cosmic blueprint'],
    color: '#2563EB',
  },
  {
    title: 'Vyavsay Namakaran',
    subtitle: 'Business & Brand Naming — Align Your Venture with the Stars',
    desc: 'A business, like a person, has a birth moment — the date and time of incorporation, registration, or the opening Muhurat. Vyavsay Namakaran applies the identical Nakshatra naming principles to businesses, brands, products, and websites. The Nakshatra of the business\'s foundational moment is calculated, and the name is constructed or adjusted to begin with the corresponding auspicious syllable. Industry research shows that brands with vibrationally aligned names experience measurably higher customer recall, trust, and financial performance. Vastuvid K.K. Nagaich has named hundreds of businesses — from local shops to multinational ventures — guiding each through the complete Vyavsay Namakaran protocol.',
    features: ['Incorporation date Nakshatra calculation', 'Business syllable matching from 108 options', 'Brand name vibration analysis', 'Logo and domain name alignment', 'Muhurat for business launch'],
    color: '#7C3AED',
  },
  {
    title: 'Business Numerology',
    subtitle: 'Decode the Hidden Numbers Driving Your Enterprise',
    desc: 'Business numerology analyzes the complete numerical footprint of an enterprise — the business name number, the incorporation date, the office address digits, the phone numbers, and the website domain — to identify which numbers are supporting growth and which are creating hidden obstacles. A business operating under a name that vibrates at the wrong number may experience persistent financial leaks, partnership conflicts, or market resistance despite excellent products. Vastuvid K.K. Nagaich conducts a comprehensive 12-point business numerology audit, identifying corrective adjustments to the name, phone numbers, pricing structures, and launch dates.',
    features: ['12-point business numerology audit', 'Name number compatibility check', 'Phone and address digit analysis', 'Pricing structure number alignment', 'Launch and event date Muhurat'],
    color: '#0891B2',
  },
  {
    title: 'Nakshatra Pada Syllable Matching',
    subtitle: '108 Sacred Sounds from the Brihat Parashara Hora Shastra',
    desc: 'The complete 27 Nakshatras × 4 Padas = 108 syllable system is the foundation of all Namakaran. Each syllable carries a specific vibrational frequency that harmonizes with the cosmic energy of the corresponding Nakshatra. For example, Ashwini Nakshatra governs syllables Chu, Che, Cho, La; Bharani governs Lee, Lu, Le, Lo; Krittika governs A, I, U, E. Vastuvid K.K. Nagaich cross-references the Janma Nakshatra with the Navamsha (D-9 chart) to identify the most auspicious syllable for each individual or business, ensuring the name resonates with both the physical and spiritual dimensions of the birth chart.',
    features: ['All 27 Nakshatras with 4 Padas each', '108 sacred syllables mapped', 'Navamsha (D-9 chart) cross-reference', 'Physical and spiritual alignment', 'Direct from Brihat Parashara Hora Shastra'],
    color: '#D97706',
  },
  {
    title: 'Muhurat for Namakaran',
    subtitle: 'Auspicious Timing for the Naming Ceremony',
    desc: 'The power of a name is amplified when it is conferred at the right Muhurat — an astrologically precise window aligned with the Nakshatra, Tithi (lunar day), Vaar (weekday), and planetary transits. Vastuvid K.K. Nagaich calculates the optimal Muhurat for the Namakaran ceremony, considering the child\'s or business\'s Janma Nakshatra, the current Dasha period, and the transiting planetary positions. Performing the ceremony at the correct Muhurat can multiply the name\'s positive effects, while a poorly timed ceremony can diminish them.',
    features: ['Nakshatra-aligned Muhurat calculation', 'Tithi and Vaar consideration', 'Planetary transit analysis', 'Dasha period integration', 'Ceremony ritual guidance'],
    color: '#059669',
  },
  {
    title: 'Name Correction for Adults',
    subtitle: 'Adjusting an Existing Name to Align with Your Birth Star',
    desc: 'Adults whose names were given without Nakshatra consultation may experience persistent challenges in specific life areas. Name correction does not require abandoning the original name — the existing name is retained as a middle or secondary name, while a new, Nakshatra-aligned primary name is introduced. The transition is gradual: the new name is used in professional and social contexts over weeks or months, allowing the individual\'s energy field to adapt. Vastuvid K.K. Nagaich has performed hundreds of adult name corrections, with clients reporting measurable improvements in career, health, and relationships within 3-6 months.',
    features: ['Nakshatra calculation from birth details', 'New syllable selection', 'Gradual transition protocol', 'Legal name change guidance', '3-6 month monitored adaptation'],
    color: '#DC2626',
  },
];

export default function NumerologyNamakaranPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">

          {/* HERO */}
          <motion.section ref={heroRef} style={{ opacity }} className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.08),transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10">
              <Link href="/services" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to All Services
              </Link>
              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Advance Treatment</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>Vedic Naming Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>By Vastuvid KK Nagaich</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Numerology & Namakaran —{' '}
                <span className="bg-gradient-to-r from-blue-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Names Aligned with Stars</span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                Namakaran, one of the 16 sacred Vedic Samskaras, is the ritual science of naming — a precise system that aligns identity with cosmic vibration. Rooted in the Brihat Parashara Hora Shastra\'s 108 sacred syllables across 27 Nakshatras, Vastuvid K.K. Nagaich provides complete Namakaran services for newborns, adults, businesses, and brands.
              </p>
            </motion.div>
          </motion.section>

          {/* PRACTICE CARDS */}
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Six Sacred Naming Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Complete Namakaran Protocol</h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                From newborn naming to business numerology — six precise interventions derived from the Brihat Parashara Hora Shastra and two decades of clinical practice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {practices.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02, rotateY: 2, translateZ: 10 }}
                  className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500"
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: p.color }} />
                  <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2 mb-1">{p.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: p.color }}>{p.subtitle}</p>
                  <p className="text-sm text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.features.map((f, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded-full border" style={{ borderColor: p.color + '30', backgroundColor: p.color + '08', color: p.color }}>{f}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* THE 27 NAKSHATRA SYLLABLE CHART */}
          <section className="py-16 bg-gradient-to-b from-white to-vastu-stone/20">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-nidra-indigo mb-2">108 Sacred Syllables Across 27 Nakshatras</h2>
                <p className="text-nidra-indigo/60 text-sm max-w-2xl mx-auto">The complete syllable chart from the Brihat Parashara Hora Shastra — the definitive source text for Vedic naming.</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-prakash-gold/15">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500/10 to-prakash-gold/10">
                        <th className="py-3 px-2 text-left font-serif text-nidra-indigo">#</th>
                        <th className="py-3 px-2 text-left font-serif text-nidra-indigo">Nakshatra</th>
                        <th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 1</th>
                        <th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 2</th>
                        <th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 3</th>
                        <th className="py-3 px-2 text-center font-serif text-nidra-indigo">Pada 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['1','Ashwini','Chu','Che','Cho','La'],['2','Bharani','Lee','Lu','Le','Lo'],['3','Krittika','A','I','U','E'],
                        ['4','Rohini','O','Va','Vi','Vu'],['5','Mrigashira','Ve','Vo','Ka','Ki'],['6','Ardra','Ku','Gha','Ng','Chh'],
                        ['7','Punarvasu','Ke','Ko','Ha','Hi'],['8','Pushya','Hu','He','Ho','Da'],['9','Ashlesha','Di','Du','De','Do'],
                        ['10','Magha','Ma','Mi','Mu','Me'],['11','Purva Phalguni','Mo','Ta','Ti','Tu'],['12','Uttara Phalguni','Te','To','Pa','Pi'],
                        ['13','Hasta','Pu','Sha','Na','Tha'],['14','Chitra','Pe','Po','Ra','Ri'],['15','Swati','Ru','Re','Ro','Ta'],
                        ['16','Vishakha','Ti','Tu','Te','To'],['17','Anuradha','Na','Ni','Nu','Ne'],['18','Jyeshtha','No','Ya','Yi','Yu'],
                        ['19','Mula','Ye','Yo','Ba','Bi'],['20','Purva Ashadha','Bu','Dha','Bha','Dha'],['21','Uttara Ashadha','Be','Bo','Ja','Ji'],
                        ['22','Shravana','Ju','Je','Jo','Gha'],['23','Dhanishta','Ga','Gi','Gu','Ge'],['24','Shatabhisha','Go','Sa','Si','Su'],
                        ['25','Purva Bhadrapada','Se','So','Da','Di'],['26','Uttara Bhadrapada','Du','Tha','Jna','Da'],['27','Revati','De','Do','Cha','Chi'],
                      ].map((r, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white/40 border-t border-prakash-gold/10' : 'bg-vastu-stone/20 border-t border-prakash-gold/10'}>
                          {r.map((c, j) => <td key={j} className={j === 0 ? 'py-2 px-2 text-nidra-indigo/40 text-xs' : j === 1 ? 'py-2 px-2 font-medium text-nidra-indigo/80 text-xs' : 'py-2 px-2 text-center text-prakash-gold font-medium'}>{c}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-nidra-indigo/40 mt-3 text-center">Source: Brihat Parashara Hora Shastra, Chapters 96-97; cross-referenced with DrikPanchang and RVA Astrologers.</p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-blue-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                  <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Discover Your Auspicious Name</h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Book a consultation with Vastuvid K.K. Nagaich for a complete Namakaran analysis — including Nakshatra calculation, syllable selection, and the sacred naming ceremony.</p>
                    <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.5)] transition-all text-lg">
                      Book Your Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AUTHOR BIO */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-20">
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex-CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients | Namakaran Specialist</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
