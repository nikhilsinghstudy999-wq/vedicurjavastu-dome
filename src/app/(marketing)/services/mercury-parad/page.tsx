'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

const practices = [
  {
    title: 'Parad Shivling Sthapna',
    subtitle: 'Mercury Shivling Installation in Northeast',
    desc: 'The Parad Shivling, made from purified and solidified mercury through the Ashtasanskar (8-stage purification) of the Parad Samhita, is the most powerful Vastu tool in the Vedic tradition. Installed in the Northeast (Ishanya) corner, it emits strong spiritual vibrations that purify and protect the entire space. The Brahma Purana states that any person who worships a Parad Shivling devotedly receives all worldly pleasures and ultimately attains Moksha. The Shiva Purana declares that worshipping a Parad Shivling is equivalent to worshipping 108 different types of Shivlings.',
    features: ['Northeast (Ishanya) corner installation', 'Daily Rudra Abhishek with water or milk', 'Ghee lamp lit at sunrise and sunset before the lingam', 'Equivalent to worshipping 108 stone Shivlings', 'Attracts prosperity, clears negative energies, supports healing'],
    color: '#C0C0C0',
  },
  {
    title: 'Parad Pyramid Placement',
    subtitle: 'Energy Harmonization and Aura Balancing',
    desc: 'The Parad (Mercury) Pyramid balances and harmonizes the aura around us. Its four corners represent truth, peacefulness, wisdom, and seriousness — while its pointed apex signifies tri-level divine power. When placed in any zone afflicted by Vastu dosha, it emits positive vibrations that neutralize negative energy and rectify defects permanently. For students, placing a Parad Pyramid between West and Southwest enhances concentration and academic performance.',
    features: ['Four corners: Truth, Peace, Wisdom, Seriousness', 'Pointed apex: tri-level divine power', 'Best placed at office desk or study table', 'Between West-Southwest for academic excellence', 'Balances and harmonizes the aura permanently'],
    color: '#B8860B',
  },
  {
    title: 'Parad Keel Installation',
    subtitle: 'Mercury Protection Spikes at Entry Points',
    desc: 'The Parad Keel (Mercury Spike), approximately 1.5 inches in length and weighing 15-20 grams, is a small yet extraordinarily powerful Vastu tool. Crafted from purified and solidified mercury, it is embedded at entry points to create a protective shield that blocks negative energies from entering the home. Placing Parad Keels at all four corners of the house helps correct Vastu defects and balance energy flow.',
    features: ['Embedded at main entrance door threshold', 'Placed at four foundation corners of the house', 'Blocks negative energies, evil eye, and tantric influences', 'Stabilizes energetic foundation of the property', 'Attracts prosperity and promotes peace and harmony'],
    color: '#A9A9A9',
  },
  {
    title: 'Parad Gutika and Bracelet',
    subtitle: 'Personal Spiritual Protection and Kundalini Awakening',
    desc: 'The Parad Gutika (Mercury Bead), prepared with 8 Samskaras as prescribed in the Parad Samhita, works directly on the Sahasrara Chakra. Wearing a Parad Gutika around the neck or as a bracelet strengthens willpower and enhances concentration. It affects the pineal gland, assisting in Kundalini awakening and deepening meditation.',
    features: ['Works on Sahasrara (Crown) Chakra', 'Enhances willpower, concentration, and memory', 'Assists Kundalini awakening via pineal gland stimulation', 'Available as single Gutika, bracelet, or 108+1 Mala', 'Removes fears, evil effects, and negative thought patterns'],
    color: '#708090',
  },
  {
    title: 'Siddh Parad Ashtasanskar',
    subtitle: '8-Stage Purification from the Parad Samhita',
    desc: 'Raw mercury possesses eight inherent impurities (Doshas) and seven external coverings that render it unsafe. The Parad Samhita prescribes 18 purification processes, of which the first eight constitute the Ashtasanskar: Svedana (steam purification), Mardana (trituration), Murchana (fainting), Utthapana (elevation), Patana (sublimation), Bodhana (awakening), Niyamana (restraint), and Deepana (energizing). Only mercury that has undergone all eight stages becomes Siddh Parad.',
    features: ['Svedana: Steam purification with herbal bolus', 'Mardana: Trituration with herbal acids', 'Murchana: Making Parad faint through herbal treatment', 'Utthapana: Elevation of directional energy', 'Patana: Sublimation for downward energy', 'Bodhana: Awakening and activating the Parad', 'Niyamana: Restraining mercury movement', 'Deepana: Energizing for spiritual application'],
    color: '#808080',
  },
  {
    title: 'Parad Yantra Energization',
    subtitle: 'Shri Yantra and Vastu Yantra Activation',
    desc: 'When a Yantra is crafted from Parad (Mercury) and energized through specific mantras, it generates powerful vibrations that purify and enhance the aura of the entire space. The Parad Shri Yantra, with its nine interlocking triangles, placed in the Northeast attracts wealth, harmony, and spiritual growth while neutralizing vastu defects.',
    features: ['Parad Shri Yantra: 9 interlocking triangles', 'Place in Northeast or Brahmasthan', 'Liquid mercury energization of Yantras', 'Neutralizes Vastu defects and planetary doshas', 'Attracts wealth, harmony, and spiritual growth'],
    color: '#BDB76B',
  },
  {
    title: 'Parad Dhatu Adhyay',
    subtitle: 'Foundation Metal Embedment with Mercury',
    desc: 'Dhatu Adhyay is the Vedic practice of embedding specific metals into the foundation of a building. Mercury, representing the planet Budh and governing communication and intellect, is embedded alongside other metals in precise geometric arrangements beneath the flooring. This practice creates a permanent energetic correction at the structural level.',
    features: ['Mercury embedment in foundation alongside Panch Dhatu', 'Permanent energetic correction at structural level', 'Governs communication, intellect, and adaptability', 'Recommended for new constructions and renovations', 'Balances elemental energies from the ground up'],
    color: '#696969',
  },
  {
    title: 'Parad Kavach Strips',
    subtitle: 'Boundary Wall Mercury Protection',
    desc: 'Parad Kavach strips are thin mercury-based protective elements embedded into boundary walls at the four cardinal directions. Functioning as an energetic shield, they prevent negative external influences from penetrating the property perimeter. They correct energy disturbances from irregular plot shapes.',
    features: ['Embedded at four cardinal boundary wall points', 'Creates protective energetic shield around property', 'Prevents negative external influences from entering', 'Combined with copper strips for comprehensive protection', 'Corrects energy disturbances from irregular plot shapes'],
    color: '#778899',
  },
  {
    title: 'Parad Lakshmi-Ganesh Idols',
    subtitle: 'Prosperity and Obstacle Removal Deity',
    desc: 'Siddh Parad Lakshmi and Ganesh idols, crafted from purified mercury that has undergone the complete Ashtasanskar, are among the most auspicious sacred objects in the Vedic tradition. Installed in the Northeast direction, they attract prosperity, remove obstacles, and provide protection from negative energies.',
    features: ['Northeast installation', 'Energized through Pran Pratishtha ritual', 'Attracts prosperity and removes obstacles', 'Provides protection from negative energies', 'Daily worship with ghee lamp and incense'],
    color: '#DAA520',
  },
];

export default function MercuryParadPage() {
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
          <motion.section ref={heroRef} style={{ opacity }} className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#0f0f1a] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,192,192,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10">
              <Link href="/services" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to All Services
              </Link>
              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Advance Treatment</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>Vedic Mercury Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" /><span>By Vastuvid KK Nagaich</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Mercury / Parad Therapy —{' '}
                <span className="bg-gradient-to-r from-silver-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">The Seed of Lord Shiva</span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                Parad (Mercury), revered in the Brahma Purana and Shiva Purana as the seed of Lord Shiva, is the most potent and auspicious metal in Vedic spiritual science. Purified through the 8-stage Ashtasanskar of the Parad Samhita, Siddh Parad neutralizes severe Vastu doshas, attracts prosperity, protects against negative energies, and awakens Kundalini Shakti.
              </p>
            </motion.div>
          </motion.section>

          {/* PRACTICE CARDS */}
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Nine Sacred Parad Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Complete Mercury Therapy Protocol</h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Rooted in the Brahma Purana, Shiva Purana, Parad Samhita, and Ras Ratna Samuccaya — each practice is a precise Vedic intervention refined across millennia.
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

          {/* SCRIPTURAL REFERENCE */}
          <section className="py-16 bg-gradient-to-b from-white to-vastu-stone/20">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-nidra-indigo mb-2">Scriptural Foundation of Parad Therapy</h2>
                <p className="text-nidra-indigo/60 text-sm max-w-2xl mx-auto">The power of Parad is codified in the most authoritative Vedic texts.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { text: 'Brahma Purana', desc: 'Worshipping a Parad Shivling grants all worldly pleasures and Moksha.' },
                  { text: 'Shiva Purana', desc: 'Parad Shivling equals 108 stone Shivlings; where it is worshipped, Lakshmi, Shiva, and Kuber reside.' },
                  { text: 'Parad Samhita', desc: 'Prescribes Ashtasanskar — the 8-stage purification to transform raw mercury into Siddh Parad.' },
                  { text: 'Ras Ratna Samuccaya', desc: 'Confirms properly prepared Parad as the most auspicious, capable of transmuting metals and healing diseases.' },
                ].map((s, i) => (
                  <div key={i} className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15 text-center">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{s.text}</h3>
                    <p className="text-xs text-nidra-indigo/60 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d2d44] to-[#0f0f1a]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-silver-400/30 via-white/10 to-prakash-gold/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                  <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Experience the Power of Parad</h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Book a consultation with Vastuvid K.K. Nagaich for a personalized Parad prescription and sacred installation.</p>
                    <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-silver-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(192,192,192,0.3)] hover:shadow-[0_20px_50px_rgba(218,165,32,0.5)] transition-all text-lg">
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
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-silver-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex-CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients | Parad Therapy Specialist</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
