'use client';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';

// Instagram Reels data
const REELS = [
  { permalink: 'https://www.instagram.com/reel/DVDLmxikqaT/', views: '3.4M' },
  { permalink: 'https://www.instagram.com/reel/DQ7B8xfEnzL/', views: '3.3M' },
  { permalink: 'https://www.instagram.com/reel/DRd7-rrkszB/', views: '2.3M' },
  { permalink: 'https://www.instagram.com/reel/DRkTuQxkrXV/', views: '1.7M' },
  { permalink: 'https://www.instagram.com/reel/DSH7WFDkh4i/', views: '2M' },
  { permalink: 'https://www.instagram.com/reel/DSO8k8gkud8/', views: '1.4M' },
  { permalink: 'https://www.instagram.com/reel/DSje5kqEmBO/', views: '1M' },
  { permalink: 'https://www.instagram.com/reel/DSmlHREElWe/', views: '1.3M' },
  { permalink: 'https://www.instagram.com/reel/DUfALpvEkNz/', views: '2.4M' },
  { permalink: 'https://www.instagram.com/reel/DW_G4gJEl55/', views: '1.2M' },
];

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nidra-indigo via-sacred-saffron/10 to-kumkuma-red/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1A2A3A_40%)] opacity-60" />
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-6 block font-bold">
          India’s Most‑Viewed Vastu Authority
        </motion.span>
        <AnimatedText text="Vastuvid K.K. Nagaich" className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 text-white drop-shadow-2xl" />
        <GradientText text="4th Generation · MBA · Ex‑CEO · Tantra Sadhak" className="font-serif text-2xl md:text-4xl mb-8 block" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
          The only Vastu master who performs every ritual himself — and has <span className="font-bold">100 million+ views</span> across platforms.
        </motion.p>
        {/* Stat buttons have been removed as requested */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/contact" className="luxury-button text-lg px-8 py-4">Consult Vastuvid ji</Link>
          <Link href="/free-tools" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition">Explore Free Tools</Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}

function StatsBanner() {
  const stats = [
    { value: '100M+', label: 'Views Across Platforms' },
    { value: '80K+', label: 'Instagram Followers' },
    { value: '2 Lakh+', label: 'Clients Served' },
    { value: '20+', label: 'Years of Experience' },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center p-8 bg-gradient-to-br from-vastu-parchment to-white rounded-3xl border border-prakash-gold/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl md:text-5xl font-serif font-bold text-nidra-indigo mb-2">{s.value}</div>
              <div className="text-sm text-nidra-indigo/60 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const pillars = [
    { title: 'Tantra & Ritual Master', desc: 'Trained Tantra Sadhak who personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti. He does not only prescribe – he executes the rituals himself.', icon: '🔥', color: 'from-orange-500 to-red-600' },
    { title: 'MBA + Ex‑CEO', desc: 'With an MBA and corporate leadership background, he maps Vastu defects to business metrics – revenue leakage, attrition, and organisational growth.', icon: '📊', color: 'from-blue-600 to-indigo-800' },
    { title: '4th Generation Certified', desc: 'Lineage‑certified under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, Dr. Rajendra Jain, and Nadi Jyotish directly from Shri Thanga Pandiyan.', icon: '🕉️', color: 'from-amber-500 to-yellow-700' },
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-white to-vastu-parchment">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText text="The Deadly Combination" className="font-serif text-5xl md:text-6xl text-nidra-indigo mb-4" />
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-lg">Only one person in India holds all three of these credentials simultaneously.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="group perspective-1000">
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-prakash-gold/20 hover:shadow-3xl transition-all duration-700 hover:-translate-y-3">
                <div className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-4xl shadow-lg`}>{p.icon}</div>
                <h3 className="font-serif text-3xl text-nidra-indigo mb-4">{p.title}</h3>
                <p className="text-nidra-indigo/70 leading-relaxed text-lg">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    { title: 'He Performs Every Ritual', desc: 'Unlike consultants who only give remedies, Vastuvid ji personally conducts each Havan, Yantra energisation, and Pooja – the true secret behind lasting transformations.', icon: '🔥' },
    { title: 'Business Mind, Vedic Soul', desc: 'MBA + ex‑CEO who understands P&L statements. He identifies Vastu defects that directly impact your revenue, employee retention, and client acquisition.', icon: '💼' },
    { title: '100 Million+ Organic Views', desc: 'His viral Instagram reels have reached over 100M views, making him the most‑watched Vastu expert in the world. His wisdom is trusted globally.', icon: '📈' },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText text="Why Vastuvid KK Nagaich?" className="font-serif text-5xl md:text-6xl text-nidra-indigo mb-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300">{r.icon}</div>
              <h3 className="font-serif text-2xl text-nidra-indigo mb-4">{r.title}</h3>
              <p className="text-nidra-indigo/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const milestones = [
    { year: '2005', title: 'Corporate Leadership – CEO of Ellenore', desc: 'Served as CEO of Ellenore, a telecom company later acquired by Airtel. Despite corporate success, he realised he was a people person at heart. When his team left, he chose to leave too – answering a deeper inner calling that would soon lead him to the path of Vastu and spirituality.' },
    { year: '2008', title: 'The Inner Calling', desc: 'Began deep personal experimentation, meditation, and study of Vastu, Nadi Jyotish, and Numerology.' },
    { year: '2018', title: 'Public Service Begins', desc: 'After a decade of rigorous inner preparation, formally started offering professional guidance.' },
    { year: '2020', title: 'Digital Legacy Launched', desc: 'VedicUrja.com founded – a global digital sanctuary for Vedic wisdom.' },
    { year: '2024', title: '100M+ Viral Views', desc: 'Instagram reels went viral, bringing authentic Vastu to millions worldwide.' },
    { year: '2026', title: 'Global Authority', desc: '2 Lakh+ clients across 50+ countries, trusted by individuals and corporations alike.' },
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-vastu-parchment to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedText text="The Journey of a Living Legend" className="font-serif text-5xl md:text-6xl text-center text-nidra-indigo mb-16" />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sacred-saffron via-prakash-gold to-kumkuma-red" />
          {milestones.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-xl border border-prakash-gold/20 mx-4">
                <span className="text-sacred-saffron font-bold text-xl">{m.year}</span>
                <h3 className="font-serif text-2xl text-nidra-indigo mt-2 mb-2">{m.title}</h3>
                <p className="text-nidra-indigo/70">{m.desc}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-prakash-gold rounded-full border-4 border-white shadow-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelsSection() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
    if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
  }, []);
  return (
    <section className="py-28 bg-gradient-to-b from-white to-vastu-parchment overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedText text="Viral Reels – 100M+ Views" className="font-serif text-5xl md:text-6xl text-center text-nidra-indigo mb-6" />
        <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">Witness the real Vastuvid in action – rituals, remedies, and wisdom that millions watch daily.</p>
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {REELS.map((reel, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-prakash-gold/20 group">
                <div className="p-4 bg-gradient-to-r from-sacred-saffron/10 to-prakash-gold/10 flex justify-between items-center">
                  <span className="text-sm font-semibold text-nidra-indigo">🔥 {reel.views} views</span>
                  <span className="text-xs text-prakash-gold">@vedicurja</span>
                </div>
                <div className="relative aspect-[9/16]">
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 326, padding: 0, width: '99.375%' }}>
                    <div style={{ padding: 16 }}>
                      <a href={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`} style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">View this post on Instagram</a>
                    </div>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-nidra-indigo to-nidra-indigo/90 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <p className="font-serif text-3xl md:text-4xl italic leading-relaxed">"The soul of VedicUrja is not an algorithm. It is a living lineage, a direct and sacred inheritance from masters whose wisdom transcends the limitations of textbooks."</p>
          <p className="mt-6 text-prakash-gold uppercase tracking-wider">— Vastuvid K.K. Nagaich</p>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative py-32 bg-vastu-parchment text-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-64 h-64 relative">
          <motion.div className="absolute inset-0 rounded-full border-2 border-prakash-gold/40" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} />
          <motion.div className="absolute inset-4 rounded-full border-2 border-sacred-saffron/30" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} />
          <motion.div className="absolute inset-8 rounded-full border border-kumkuma-red/20" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} />
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-prakash-gold/60">ॐ</div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText text="Step Into the Legacy" className="font-serif text-5xl md:text-7xl text-nidra-indigo mb-6" />
        <p className="text-xl text-nidra-indigo/70 max-w-3xl mx-auto mb-10">Experience authentic Vastu wisdom – from a master who personally performs every ritual.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="luxury-button text-lg px-12 py-5">Consult Vastuvid K.K. Nagaich</Link>
          <Link href="/free-tools" className="border-2 border-prakash-gold text-nidra-indigo px-10 py-5 rounded-full text-lg font-medium hover:bg-prakash-gold/10 transition">Explore Free Tools</Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <SoundController />
      <Header />
      <main className="relative bg-vastu-parchment">
        <HeroSection />
        <StatsBanner />
        <PillarsSection />
        <WhyChooseSection />
        <TimelineSection />
        <ReelsSection />
        <QuoteSection />
        <FinalCTASection />
      </main>
    </>
  );
}