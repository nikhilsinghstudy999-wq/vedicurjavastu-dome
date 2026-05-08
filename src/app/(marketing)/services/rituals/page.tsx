'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';

/* ------------------------------------------------------------------ */
/*  Instagram Reel 3D Card (same component as remedies)               */
/* ------------------------------------------------------------------ */
function ReelCard({ title, reelUrl }: { title: string; reelUrl: string }) {
  return (
    <motion.a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, rotateY: 3, rotateX: -2 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      className="group relative w-full max-w-sm mx-auto"
    >
      <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(200,138,93,0.3)] transition-shadow duration-500">
        <div className="relative rounded-[38px] bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-xl p-8 h-[420px] flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-prakash-gold to-sacred-saffron flex items-center justify-center mb-6 shadow-2xl">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-nidra-indigo font-bold mb-3 leading-snug">{title}</h3>
          <p className="text-sm text-nidra-indigo/60 mb-8">Watch this sacred ritual</p>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg group-hover/btn:shadow-xl transition-shadow">
            Play Reel <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  YouTube Video Component                                           */
/* ------------------------------------------------------------------ */
function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-prakash-gold/30 bg-black">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Data                                                         */
/* ------------------------------------------------------------------ */
const ritualsReels = [
  { title: 'Dakshin Disha Rituals', url: 'https://www.instagram.com/reel/DX6RieCSJvF/' },
  { title: 'Magic Water Purification', url: 'https://www.instagram.com/reel/DXuL6Tekq84/' },
  { title: 'Bramha Nabhi Activation', url: 'https://www.instagram.com/reel/DW8EqslSCs_/' },
  { title: 'Bramha Nabhi Part 2', url: 'https://www.instagram.com/reel/DWfuDGMktfh/' },
  { title: 'Industrial Vastu Havan', url: 'https://www.instagram.com/reel/DUKoiDgkog-/' },
];

export default function RitualsPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="container mx-auto px-4 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Sacred Puja & Havan</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-purple-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Vedic Rituals</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10">
              Personalised Yantra Pran Pratishtha, Navagraha Shanti, Havan, and Anushthan – performed by Vastuvid K.K. Nagaich himself.
            </p>
            <Link href="/bookings" className="luxury-button text-lg px-10 py-5">Book a Ritual Consultation</Link>
          </div>
        </section>

        <GuruAuthority />
        <WhyChooseUs />

        {/* BIG FEATURED VIDEO – #1 ASTROLOGER ON INDIA NEWS */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/10 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-10">
              As Seen on <span className="text-prakash-gold">India News</span>
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed videoId="fjUP13uEUi0" title="#1 Astrologer on India News in India" />
            </div>
            <p className="text-center text-nidra-indigo/60 mt-6 text-sm">
              Vastuvid K.K. Nagaich – the #1 Astrologer on national television
            </p>
          </div>
        </section>

        {/* INSTAGRAM REELS GRID (3D cards) */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-vastu-parchment">
          <div className="container mx-auto px-4">
            <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-nidra-indigo mb-6">
              Ritual Reels – Sacred Demonstrations
            </motion.h2>
            <p className="text-center text-nidra-indigo/60 mb-16 max-w-2xl mx-auto">
              Witness the power of authentic Vedic rituals performed live
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {ritualsReels.map((reel, idx) => (
                <ReelCard key={idx} title={reel.title} reelUrl={reel.url} />
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://www.instagram.com/vedicurja/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Follow for More on Instagram →
              </a>
            </div>
          </div>
        </section>

        {/* YOUTUBE VIDEOS SECTION (Ritual tutorials) */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-vastu-parchment to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-8">
              Ritual Tutorials & Guides
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <YouTubeEmbed videoId="GdNr3bcUFdw" title="Vedic Ritual Guide 1" />
              <YouTubeEmbed videoId="q9UiVJamQpg" title="Vedic Ritual Guide 2" />
            </div>
            <div className="text-center mt-10">
              <a href="https://www.youtube.com/@vedicurja1589?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-prakash-gold text-nidra-indigo rounded-full font-semibold hover:bg-prakash-gold/10 transition-colors"
              >
                Subscribe for More Videos →
              </a>
            </div>
          </div>
        </section>

        <RemediesCTA />
        <VirtualConsultCTA />

        {/* FINAL CTA */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Experience the Transformative Power of Vedic Rituals</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Book a personal ritual with Vastuvid K.K. Nagaich – 100M+ views, 80K+ followers.
            </p>
            <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
              Schedule Your Ritual Session →
            </Link>
          </div>
        </section>
      </SmoothScroll>
      <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
