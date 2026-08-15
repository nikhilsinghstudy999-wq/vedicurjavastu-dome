'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import AnimatedText, { GradientText } from '@/features/shared/components/AnimatedText';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';

// ----------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------
const REELS = [
  {
    permalink: 'https://www.instagram.com/reel/DVDLmxikqaT/?igsh=MTh3aGRpZnlveTl3Nw==',
    views: '3.4M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DQ7B8xfEnzL/?igsh=cDVmNGNlbm82dHg4',
    views: '3.3M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DRd7-rrkszB/?igsh=M2I3NWt4bTQ4MTNm',
    views: '2.3M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DRkTuQxkrXV/?igsh=MTlrZ2o5ZXRzeTJ0ZA==',
    views: '1.7M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DSH7WFDkh4i/?igsh=MWxsc3dmejhnanEzbA==',
    views: '2M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DSO8k8gkud8/?igsh=ZndjMnZmZjVqcWNu',
    views: '1.4M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DSje5kqEmBO/?igsh=ZWMzdW9kcG12Y2Vx',
    views: '1M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DSmlHREElWe/?igsh=b2hlYWoyeThibndm',
    views: '1.3M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DUfALpvEkNz/?igsh=dGo1N2piMmlpdjFi',
    views: '2.4M',
  },
  {
    permalink: 'https://www.instagram.com/reel/DW_G4gJEl55/?igsh=MXEwaG9nOHU1ZnFnNA==',
    views: '1.2M',
  },
];

// ----------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sacred-saffron via-kumkuma-red to-prakash-gold opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1A2A3A_40%)] opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white uppercase tracking-[0.3em] text-sm mb-4 block"
        >
          A Living Legacy of Vedic Wisdom
        </motion.span>

        <AnimatedText
          text="AstroVastu Expert K.K. Nagaich"
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl"
        />

        <GradientText
          text="4th Generation · MBA · Ex‑CEO · Tantra Sadhak"
          className="font-serif text-2xl md:text-3xl mb-6 block"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
        >
          The only Vastu authority in India who performs every ritual himself – and has over
          <span className="font-bold text-white"> 100 million views</span> across platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-lg">
            🌍 100M+ Views
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-lg">
            📱 80K+ Followers
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-lg">
            👥 2 Lakh+ Clients
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-lg">
            🌐 50+ Countries
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-white rounded-full mx-auto">
          <span className="block w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// The Deadly Combination – Three Pillars
// ----------------------------------------------------------------------
function PillarsSection() {
  const pillars = [
    {
      title: 'Tantra & Ritual Master',
      desc: 'Trained Tantra Sadhak who personally performs every Havan, Yantra Pran Pratishtha, and Navagraha Shanti. He does not only prescribe – he executes the rituals himself.',
      icon: '🔥',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'MBA + Ex‑CEO',
      desc: 'With an MBA and corporate leadership background, he bridges Vastu defects to business metrics – revenue leakage, attrition, and organisational growth.',
      icon: '📊',
      color: 'from-blue-600 to-indigo-800',
    },
    {
      title: '4th Generation Certified',
      desc: 'Rooted in the Guru‑Shishya Parampara. Trained under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, Dr. Rajendra Jain, and Nadi Jyotish directly from Shri Thanga Pandiyan.',
      icon: '🕉️',
      color: 'from-amber-500 to-yellow-700',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedText
            text="The Deadly Combination"
            className="font-serif text-4xl md:text-5xl text-nidra-indigo mb-4"
          />
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">
            Only one person in India holds all three of these credentials simultaneously.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-white to-vastu-parchment rounded-3xl p-8 shadow-xl border border-prakash-gold/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {p.icon}
                </div>
                <h3 className="font-serif text-2xl text-nidra-indigo mb-4">{p.title}</h3>
                <p className="text-nidra-indigo/70 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Journey Sections (Legacy content, luxury styled)
// ----------------------------------------------------------------------
function JourneySection({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  subtitle: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.section ref={ref} style={{ opacity, y }} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'order-2 md:order-1' : ''}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          <div className={reverse ? 'order-1 md:order-2' : ''}>
            <span className="text-sacred-saffron uppercase tracking-widest text-sm font-semibold">
              {subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-nidra-indigo mt-4 mb-6">{title}</h2>
            <div className="space-y-4 text-nidra-indigo/70 leading-relaxed">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// Instagram Reels Showcase
// ----------------------------------------------------------------------
function ReelsSection() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-vastu-parchment to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl text-center text-nidra-indigo mb-4"
        >
          Viral Reels – 100M+ Views
        </motion.h2>
        <p className="text-center text-nidra-indigo/60 mb-12 max-w-2xl mx-auto">
          Witness the real AstroVastu Expert in action – rituals, remedies, and wisdom that millions watch.
        </p>

        <div
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-prakash-gold/20 group">
                <div className="p-4 bg-gradient-to-r from-sacred-saffron/10 to-prakash-gold/10 flex justify-between items-center">
                  <span className="text-sm font-semibold text-nidra-indigo">
                    🔥 {reel.views} views
                  </span>
                  <span className="text-xs text-prakash-gold">@vedicurja</span>
                </div>
                <div className="relative aspect-[9/16]">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: 3,
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: 1,
                      maxWidth: 540,
                      minWidth: 326,
                      padding: 0,
                      width: '99.375%',
                    }}
                  >
                    <div style={{ padding: 16 }}>
                      <a
                        href={`${reel.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                        style={{ background: '#FFFFFF', lineHeight: 0, padding: 0, textAlign: 'center', textDecoration: 'none', width: '100%' }}
                        target="_blank"
                      >
                        View this post on Instagram
                      </a>
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

// ----------------------------------------------------------------------
// Quote Section
// ----------------------------------------------------------------------
function QuoteSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-nidra-indigo to-nidra-indigo/90 text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl md:text-4xl italic leading-relaxed">
            "The soul of VedicUrja is not an algorithm. It is a living lineage, a direct and sacred inheritance from masters whose wisdom transcends the limitations of textbooks."
          </p>
          <p className="mt-6 text-prakash-gold uppercase tracking-wider">— AstroVastu Expert K.K. Nagaich</p>
        </motion.div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Final CTA
// ----------------------------------------------------------------------
function FinalCTASection() {
  return (
    <section className="relative py-32 bg-vastu-parchment text-center overflow-hidden">
      <Mandala3D />
      <FloatingParticles />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText
          text="Step Into the Legacy"
          className="font-serif text-4xl md:text-6xl text-nidra-indigo mb-6"
        />
        <p className="text-xl text-nidra-indigo/70 max-w-3xl mx-auto mb-10">
          The doors of this sanctuary have been open for a very long time, and they shall remain open for all generations yet to come.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="luxury-button"
          >
            Consult AstroVastu Expert K.K. Nagaich
          </Link>
          <Link
            href="/free-tools"
            className="border-2 border-prakash-gold text-nidra-indigo px-10 py-5 rounded-full text-lg font-medium hover:bg-prakash-gold/10 transition"
          >
            Explore Free Tools
          </Link>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Main About Page
// ----------------------------------------------------------------------
export default function AboutPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <PillarsSection />
          <JourneySection
            subtitle="Chapter One"
            title="Roots Deeper Than Time"
            description={[
              "It is with the deepest reverence for the ancient sciences that we welcome you to VedicUrja. This is not a place of recent origin, nor a fleeting digital experiment. VedicUrja stands as a sanctuary of immense patience and unbroken continuity, an institution whose roots delve deep into the soil of time itself.",
              "For well over a decade and a half, through the silent evolution of the digital age, this platform has remained a constant, unwavering beacon for those who understand that the cosmos is not merely space, but a living, breathing consciousness that shapes our dwellings, our names, and our destinies.",
              "We have borne witness to the transient rise and fall of countless trends, yet we have remained steadfast, anchored not in the shifting sands of novelty, but in the immutable granite of the Vedas and the sacred transmissions of an unbroken Guru-Shishya Parampara."
            ]}
            imageSrc="/images/about/lineage.jpg"
            imageAlt="Sacred Lineage"
          />

          <JourneySection
            subtitle="Chapter Two"
            title="The Custodian's Pilgrimage"
            description={[
              "Our custodian and AstroVastu Expert began his personal pilgrimage into these profound sciences not as a professional endeavor, but as a silent, inner calling in the year 2008. For a full decade, this journey was one of intense personal experimentation, deep meditative absorption, and the quiet cultivation of a connection to the subtle energies that underpin Vastu Shastra, Nadi Jyotish, and Vedic Numerology.",
              "It was a period of rigorous inner preparation—a decade of testing, learning, observing the cosmic pulse, and aligning oneself with the rhythms of the universe before daring to offer guidance to another soul.",
              "It was only after this extensive and demanding period that the professional mantle was formally and respectfully assumed in 2018, marking the moment when private sadhana blossomed into public service."
            ]}
            imageSrc="/images/about/lineage.jpg"
            imageAlt="Custodian Pilgrimage"
            reverse
          />

          <QuoteSection />

          <JourneySection
            subtitle="Chapter Three"
            title="The Sacred Transmission"
            description={[
              "This knowledge is not self-proclaimed; it is bestowed, a sacred trust passed down through the ancient and hallowed Guru-Shishya Parampara. From the silent, snow-clad sanctity of the Siddh Peeth of the Himalaya, we received that which cannot be spoken but can only be felt: the foundational, energetic spine that supports every Vastu correction and every sacred ritual.",
              "This inner foundation was then refined and given precise, scholarly structure by the grace of three towering pillars of Vastu Shastra: Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, and Dr. Rajendra Jain. To have sat at the feet of these masters is to have drunk from the very source of India's architectural and spatial wisdom.",
              "Furthermore, the celestial sciences of Nadi Jyotish and the sacred vibration of the Name were imparted through a lineage of unparalleled depth, including the direct transmission of Shri Thanga Pandiyan, the unrivaled master of the Astrological Science of Names."
            ]}
            imageSrc="/images/about/nadi-numerology.jpg"
            imageAlt="Sacred Transmission"
          />

          <JourneySection
            subtitle="Chapter Four"
            title="The Science of Spatial Harmony"
            description={[
              "We do not view Vastu Shastra as a relic of a bygone era, but as a living, breathing science of spatial harmony. At its heart, it is a deeply scientific system built upon the Pancha Mahabhutas—earth, water, fire, air, and space.",
              "Contemporary research, including studies using computational fluid dynamics, has begun to empirically validate the core principles of Vastu Shastra. The thermal comfort predicted by Vastu's recommendations for door placements was demonstrably beneficial, providing tangible, engineering-based validation for an ancient practice.",
              "The science is clear: the design and orientation of a building profoundly impact the flow of energy within it, and by aligning our built environment with the natural forces of the universe, we can demonstrably enhance the quality of our existence."
            ]}
            imageSrc="/images/about/vastu-science.jpg"
            imageAlt="Vastu Science"
            reverse
          />

          <JourneySection
            subtitle="Chapter Five"
            title="A Global Sanctuary"
            description={[
              "Our presence is not confined to the borders of a single nation. For many years, the gentle yet powerful reach of VedicUrja has extended across the vast oceans, serving as a spiritual and practical anchor for the global Indian diaspora and a trusted guide for Western seekers of holistic truth.",
              "We have been privileged to witness profound transformation in the lives of clients residing in the United States, the United Kingdom, the Netherlands, New Zealand, and numerous other corners of the globe.",
              "This is the enduring promise of VedicUrja: a wisdom that is timeless, a presence that is unwavering, a lineage that is pure, and a sanctuary that has been, and will continue to be, the definitive answer for those who seek to live in perfect, harmonious alignment with the cosmic order."
            ]}
            imageSrc="/images/about/global-presence.jpg"
            imageAlt="Global Presence"
          />

          <ReelsSection />
          <FinalCTASection />
        </main>
      </SmoothScroll>
    </>
  );
}
