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
    title: 'Sri Yantra Installation & Energisation',
    subtitle: 'The Queen of Yantras — 9 Interlocking Triangles',
    desc: 'The Sri Yantra, composed of nine interlocking triangles (four upward representing Shiva, five downward representing Shakti) radiating from a central Bindu, is the most powerful and sacred geometric diagram in the Vedic tradition. Installed in the Northeast or at the Brahmasthan, it attracts wealth, harmony, and spiritual growth while neutralizing vastu defects. Vastuvid K.K. Nagaich performs the complete installation ritual — Bhoomi Shuddhi, Pran Pratishtha, and Navavaran Puja — to activate the Yantra\'s full cosmic potential.',
    features: ['9 interlocking Shiva-Shakti triangles', 'Northeast or Brahmasthan installation', 'Pran Pratishtha energisation ritual', 'Attracts wealth, harmony, spiritual growth', 'Neutralises vastu defects'],
    color: '#EF4444',
  },
  {
    title: 'Vastu Purush Yantra Placement',
    subtitle: 'Align Your Home with the Cosmic Energy Grid',
    desc: 'The Vastu Purush Yantra represents the cosmic being lying face down, with his head in the Northeast, feet in the Southwest, and each body part corresponding to a directional energy zone. Placing this Yantra in the Northeast corner of the home or at the Brahmasthan aligns the entire space with the cosmic energy grid, correcting energetic imbalances at the most fundamental level. It is particularly recommended for homes with known Vastu doshas that cannot be structurally corrected.',
    features: ['Represents the cosmic Vastu Purush', 'Aligns entire home to cosmic grid', 'Place at Northeast or Brahmasthan', 'Corrects fundamental energy imbalances', 'Ideal for non-structurally-correctable doshas'],
    color: '#DC2626',
  },
  {
    title: 'Kuber Yantra for Financial Prosperity',
    subtitle: 'Direct Wealth Energy into Your Living or Workspace',
    desc: 'The Kuber Yantra, dedicated to Lord Kuber — the treasurer of the gods and guardian of the North direction — is specifically designed to attract and stabilise financial prosperity. It is installed in the North zone of the home or office, typically facing South. Vastuvid K.K. Nagaich energises the Kuber Yantra through the Kuber Mantra (Om Shreem Hreem Kleem Shreem Kleem Vitteshwaraya Namah) during the auspicious hours of the morning.',
    features: ['Dedicated to Lord Kuber (treasurer of gods)', 'Installed in North zone facing South', 'Kuber Mantra energisation (108 repetitions)', 'Attracts and stabilises financial inflow', 'Suitable for home and office'],
    color: '#B91C1C',
  },
  {
    title: 'Mangal Yantra for South Zone Pacification',
    subtitle: 'Neutralise Aggressive Mars Energy and Prevent Accidents',
    desc: 'The South direction is governed by Mangal (Mars), a planet of energy, aggression, and potential conflict. The Mangal Yantra, installed in the South zone of the home or office, pacifies excessive Mars energy, reducing the likelihood of accidents, disputes, and property damage. It is particularly recommended for homes where the main entrance faces South, for businesses in high-risk industries, and for individuals with a dominant or afflicted Mars in their birth chart.',
    features: ['Pacifies aggressive Mars energy in South', 'Reduces accident and dispute likelihood', 'Recommended for South-facing entrances', 'High-risk industry protection', 'Energised with Mangal Mantra (Om Mangalaya Namah)'],
    color: '#991B1B',
  },
  {
    title: 'Mantra Chanting Prescription — Personalised Protocol',
    subtitle: 'Daily Sound Vibration Therapy Tailored to Your Chart',
    desc: 'Mantras are precise sound vibrations that, when chanted with correct pronunciation and intention, restructure the energetic environment. Vastuvid K.K. Nagaich prescribes a personalised daily mantra protocol based on your Janma Nakshatra, the specific Vastu doshas present, and the planetary periods (Dashas) you are currently experiencing. A typical protocol includes 1-3 mantras, each chanted 108 times daily at a specific time, maintained for a prescribed period (usually 40 days).',
    features: ['Personalised based on Janma Nakshatra', 'Vastu dosha-specific mantra selection', 'Dasha period integration', '108 repetitions per mantra', '40-day primary protocol duration'],
    color: '#7F1D1D',
  },
  {
    title: 'Yantra-Mantra Combined Therapy',
    subtitle: 'Maximum Correction Through Geometric and Sonic Synergy',
    desc: 'The most powerful Vastu corrections combine Yantra (sacred geometry) with Mantra (sacred sound) simultaneously. A Yantra provides a permanent geometric energy correction, while daily mantra chanting continuously charges that geometry with fresh sonic energy. Together, they create a self-reinforcing field of positive vibration that grows stronger over time. Vastuvid K.K. Nagaich designs combined Yantra-Mantra protocols for clients with severe or multiple Vastu doshas.',
    features: ['Yantra installation + daily mantra chanting', 'Self-reinforcing positive energy field', 'Geometric and sonic synergy', 'For severe or multiple Vastu doshas', 'Strengthens over time with consistent practice'],
    color: '#DC2626',
  },
];

export default function YantraMantraPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">
          <motion.section ref={heroRef} style={{ opacity }} className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#2e0a0a] via-[#4e1a1a] to-[#2a0f0f] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
            <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10">
              <Link href="/services" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors"><svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>Back to All Services</Link>
              <div className="flex items-center gap-3 text-sm text-white/50 mb-4"><span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vedic Application</span><span className="w-1 h-1 bg-white/30 rounded-full" /><span>Sacred Geometry & Sound</span><span className="w-1 h-1 bg-white/30 rounded-full" /><span>By Vastuvid KK Nagaich</span></div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">Yantra & Mantra Therapy —{' '}<span className="bg-gradient-to-r from-red-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Sacred Geometry & Sound Vibration</span></h1>
              <p className="text-lg text-white/60 max-w-3xl">Yantras are sacred geometric energy engines; Mantras are precise sound vibration prescriptions. Combined, they form the most powerful non-structural Vastu correction system in the Vedic tradition. Six precise protocols, guided by Vastuvid K.K. Nagaich.</p>
            </motion.div>
          </motion.section>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Six Yantra & Mantra Practices</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Complete Sacred Geometry & Sound Protocol</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">From Sri Yantra installation to personalised mantra prescriptions — the definitive non-structural Vastu correction system.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {practices.map((p,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} whileHover={{scale:1.02,rotateY:2}} className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500" style={{transformStyle:'preserve-3d',perspective:1000}}><div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{backgroundColor:p.color}}/><h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2 mb-1">{p.title}</h3><p className="text-xs font-semibold mb-3" style={{color:p.color}}>{p.subtitle}</p><p className="text-sm text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p><div className="flex flex-wrap gap-1.5">{p.features.map((f,j)=><span key={j} className="text-xs px-2 py-1 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{f}</span>)}</div></motion.div>))}
            </div>
          </div>

          <section className="relative py-28 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#2e0a0a] via-[#4e1a1a] to-[#2a0f0f]"/><div className="container mx-auto px-4 sm:px-6 relative z-10"><div className="max-w-3xl mx-auto text-center"><div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-red-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"><div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10"><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Receive Your Yantra & Mantra Prescription</h2><p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Book a consultation with Vastuvid K.K. Nagaich for a personalised Yantra installation and daily mantra protocol.</p><Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-red-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(239,68,68,0.3)] transition-all text-lg">Book Your Consultation</Link></div></div></div></div></section>

          <div className="container mx-auto px-4 sm:px-6 max-w-4xl pb-20"><div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4"><div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div><div><p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p><p className="text-sm text-nidra-indigo/60">4th Gen Vastu Guru | MBA | Ex-CEO | 20+ Years | 2 Lakh+ Clients | Yantra & Mantra Specialist</p></div></div></div>
        </article>
      </SmoothScroll>
    </>
  );
}
