'use client';
'use client';
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';

/* ------------------------------------------------------------------
   HOROSCOPE RASHI DATA
   ------------------------------------------------------------------ */
const RASHIS = [
  { name: 'Aries', sanskrit: 'Mesha', symbol: '♈', color: '#E63946' },
  { name: 'Taurus', sanskrit: 'Vrishabha', symbol: '♉', color: '#D4A373' },
  { name: 'Gemini', sanskrit: 'Mithuna', symbol: '♊', color: '#F4A261' },
  { name: 'Cancer', sanskrit: 'Karka', symbol: '♋', color: '#E9C46A' },
  { name: 'Leo', sanskrit: 'Simha', symbol: '♌', color: '#F4A261' },
  { name: 'Virgo', sanskrit: 'Kanya', symbol: '♍', color: '#A7C957' },
  { name: 'Libra', sanskrit: 'Tula', symbol: '♎', color: '#6A994E' },
  { name: 'Scorpio', sanskrit: 'Vrishchika', symbol: '♏', color: '#BC4742' },
  { name: 'Sagittarius', sanskrit: 'Dhanu', symbol: '♐', color: '#D4A373' },
  { name: 'Capricorn', sanskrit: 'Makara', symbol: '♑', color: '#7F5539' },
  { name: 'Aquarius', sanskrit: 'Kumbha', symbol: '♒', color: '#457B9D' },
  { name: 'Pisces', sanskrit: 'Meena', symbol: '♓', color: '#9C89B8' },
];

const GITHUB_BASE = 'https://nikhilsinghstudy999-wq.github.io/daily-horoscope-data/data/rashi';

interface HoroscopeData {
  general: string;
  luck: string;
  scope: string;
  study: string;
  love: string;
  travel: string;
  lucky_number: number;
  lucky_color: string;
}

function DailyHoroscopeSection() {
  const [selectedRashi, setSelectedRashi] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchHoroscope = async (rashiName: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${GITHUB_BASE}/${rashiName}.json`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setHoroscope(json.data);
    } catch (err) {
      console.error(err);
      setHoroscope(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (rashi: string) => {
    setSelectedRashi(rashi);
    fetchHoroscope(rashi);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-vastu-parchment to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Free Daily Guidance</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Check Your Today's Horoscope</h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Instant free daily prediction – updated every morning with real planetary transits.</p>
        </motion.div>

        {/* Rashi Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {RASHIS.map((rashi) => (
            <button
              key={rashi.name}
              onClick={() => handleSelect(rashi.name)}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                selectedRashi === rashi.name
                  ? 'bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white border-transparent shadow-lg'
                  : 'bg-white/80 border-prakash-gold/20 hover:border-prakash-gold hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-1" style={{ color: selectedRashi === rashi.name ? '#fff' : rashi.color }}>{rashi.symbol}</div>
              <div className="font-serif text-lg font-bold">{rashi.name}</div>
              <div className="text-xs opacity-70">{rashi.sanskrit}</div>
            </button>
          ))}
        </div>

        {/* Horoscope Result */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-prakash-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {horoscope && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-prakash-gold/20 shadow-xl">
            <div className="text-center mb-6">
              <span className="text-4xl">{RASHIS.find(r => r.name === selectedRashi)?.symbol}</span>
              <h3 className="font-serif text-2xl text-nidra-indigo mt-2">{selectedRashi}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: 'General', value: horoscope.general, icon: '◈' },
                { label: 'Luck', value: horoscope.luck, icon: '◆' },
                { label: 'Scope', value: horoscope.scope, icon: '◇' },
                { label: 'Study', value: horoscope.study, icon: '◉' },
                { label: 'Love', value: horoscope.love, icon: '♡' },
                { label: 'Travel', value: horoscope.travel, icon: '✈' },
              ].map((item) => (
                <div key={item.label} className="bg-vastu-stone/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-prakash-gold text-lg">{item.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-nidra-indigo/60">{item.label}</span>
                  </div>
                  <p className="text-sm text-nidra-indigo/80">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-6 text-center">
              <div>
                <p className="text-xs text-nidra-indigo/50 uppercase">Lucky Number</p>
                <p className="text-2xl font-bold text-prakash-gold">{horoscope.lucky_number}</p>
              </div>
              <div>
                <p className="text-xs text-nidra-indigo/50 uppercase">Lucky Color</p>
                <p className="text-2xl font-bold text-prakash-gold">{horoscope.lucky_color}</p>
                <div className="w-8 h-8 rounded-full mx-auto mt-1 border border-prakash-gold/30" style={{ backgroundColor: horoscope.lucky_color.toLowerCase() }} />
              </div>
            </div>
            <p className="text-center text-xs text-nidra-indigo/40 mt-6">* For a complete personalised Kundali report, book our expert analysis below.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PRICING CARD – Single plan (<span className="line-through text-gray-400 text-xl mr-2">₹5,999</span> <span className="text-3xl font-bold text-prakash-gold">₹999</span>)
   ------------------------------------------------------------------ */
function PricingCard() {
  const whatsappMessage = `Hi VedicUrja, I want to book the Full Kundali Analysis report (<span className="line-through text-gray-400 text-xl mr-2">₹5,999</span> <span className="text-3xl font-bold text-prakash-gold">₹999</span>). Please share payment details.`;
  const whatsappLink = `https://wa.me/916393570832?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className="relative max-w-md mx-auto p-8 rounded-2xl border-2 border-prakash-gold bg-white shadow-xl hover:shadow-2xl transition-all">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white px-4 py-1 rounded-full text-xs font-bold">✦ Complete Analysis</div>
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-prakash-gold to-sacred-saffron" />
      <h3 className="font-serif text-2xl text-nidra-indigo font-bold text-center mt-4">Full Kundali Report</h3>
      <div className="text-4xl font-bold text-center mt-4 text-prakash-gold"><span className="line-through text-gray-400 text-xl mr-2">₹5,999</span> <span className="text-3xl font-bold text-prakash-gold">₹999</span></div>
      <p className="text-center text-sm text-nidra-indigo/50 mb-6">One‑time investment for a lifetime of clarity</p>
      <ul className="space-y-3 text-sm text-nidra-indigo/70 mb-8">
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Janam Kundali + 12‑Bhava analysis</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Shadbala (6‑fold planetary strength)</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Vimshottari Dasha overview</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Detailed Gochar transit (5‑year)</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />10 Raj & Dhana Yogas identification</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Gemstone & Rudraksha prescription</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Mantra protocol (48‑day)</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />Kundali matching (Guna Milan)</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />PDF report (20+ pages)</li>
        <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-prakash-gold" />One‑on‑one consultation (30 min)</li>
      </ul>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white font-semibold hover:shadow-lg transition-all"
      >
        Book via WhatsApp →
      </a>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   AUTHORITY & CREDENTIALS SECTION
   ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
   WHY CHOOSE VEDICURJA (SVG version – reused from other pages)
   ------------------------------------------------------------------ */
function WhyChooseVedicUrja() {
  const reasons = [
    {
      title: '4th Generation Lineage',
      desc: 'Inherited Vastu knowledge from a direct Guru‑Shishya Parampara.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Tantra & Ritual Master',
      desc: 'Personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7.636v12.728" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'MBA + Ex‑CEO',
      desc: 'Maps every planetary defect to business and life outcomes – practical, actionable insights.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '100M+ Viral Views',
      desc: 'India’s most‑watched Vedic astrologer – trusted by millions.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '2 Lakh+ Clients',
      desc: 'Across 50+ countries – from students to CEOs.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Best Vedic Astrologer',
      desc: 'Recognised as one of the most accurate Kundali analysts in India.',
      svg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Why Choose VedicUrja</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">The <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Deadly Combination</span> No Other Astrologer Possesses</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-prakash-gold mb-4">{r.svg}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-nidra-indigo/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PROCESS STEPS
   ------------------------------------------------------------------ */
function ProcessSection() {
  const steps = [
    { step: '01', title: 'Submit Birth Details', desc: 'Share exact date, time, and place of birth via WhatsApp.' },
    { step: '02', title: 'Chart Generated', desc: 'We generate a 20+ page Kundali with Lagna, Navamsa, Vimshottari Dasha.' },
    { step: '03', title: 'Deep Analysis', desc: 'Shadbala, 10 Raj & Dhana Yogas, all doshas identified by Acharya.' },
    { step: '04', title: 'Personalised Remedies', desc: 'Gemstone, Rudraksha, mantra protocol, and yantra guidance – plus 30‑min consultation.' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">How It Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Your Journey to <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Clarity & Purpose</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative text-center p-6 bg-white/80 rounded-2xl border border-prakash-gold/20 shadow-lg"
            >
              <div className="text-5xl font-bold text-prakash-gold/30 mb-2">{step.step}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-nidra-indigo/60">{step.desc}</p>
              {i < steps.length - 1 && <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-prakash-gold text-xl">→</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FINAL CTA
   ------------------------------------------------------------------ */
function FinalCTA() {
  const whatsappLink = 'https://wa.me/916393570832?text=Hi%20VedicUrja,%20I%20want%20to%20book%20the%20Full%20Kundali%20Report%20(%C2%B95,999)';

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000]">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Discover Your Cosmic Blueprint</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Vastuvid KK Nagaich – <strong className="text-prakash-gold">100M+ views, 80K+ followers, MBA, Ex‑CEO, 4th‑generation Tantra‑trained Vastu Guru & Nadi Jyotish</strong> – personally analyses every Kundali. No software‑generated generic reports.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
          Book Your Kundali Analysis →
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   MAIN PAGE ASSEMBLY
   ------------------------------------------------------------------ */
export default function KundaliAnalysisPage() {
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Vedic Nadi Jyotish</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Kundali Analysis</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-4">Vedic Nadi Jyotish · 120‑year Dasha · Shadbala · Gemstone & Rudraksha</p>
            <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">Trained in Nadi Jyotish under direct Guru‑Shishya Parampara — 100M+ views, 80K+ followers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/916393570832?text=Hi%20VedicUrja,%20I%20want%20to%20book%20a%20Kundali%20Analysis" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book via WhatsApp
              </a>
              <a href="#horoscope" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Check Your Horoscope
              </a>
            </div>
          </div>
        </section>

        <WhyChooseVedicUrja />

        {/* Daily Horoscope Section */}
        <div id="horoscope">
          <DailyHoroscopeSection />
        </div>

        <ProcessSection />

        {/* Pricing */}
        <section className="py-20 bg-vastu-stone/10">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Pricing – One Complete Plan</h2>
            <PricingCard />
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />
        <FinalCTA />
      </main>
    </>
  );
}