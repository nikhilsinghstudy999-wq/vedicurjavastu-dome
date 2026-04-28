'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';

/* ================================================================
   ALL 18 COLLABORATION CATEGORIES – fully researched
   ================================================================ */
const collaborationTypes = [
  {
    title: 'Sponsored Content',
    icon: '◆',
    description: 'Paid partnerships where influencers create dedicated posts, reels, or videos featuring VedicUrja services — the creator posts on their own account in exchange for monetary compensation.',
    category: 'Paid Partnerships',
    color: '#E8B960',
    features: ['Instagram Reels & Posts', 'YouTube dedicated videos', 'TikTok / Shorts integrations', 'Carousel & Story formats'],
  },
  {
    title: 'Barter Collaborations',
    icon: '◇',
    description: 'Exchange‑of‑value partnerships — creators receive complimentary VedicUrja consultations or products in return for authentic content, with no monetary transaction.',
    category: 'Exchange',
    color: '#10B981',
    features: ['Service‑for‑content swaps', 'Product sampling', 'Nano & micro creator friendly', 'Low‑risk trial partnerships'],
  },
  {
    title: 'Affiliate Partnerships',
    icon: '◈',
    description: 'Performance‑based collaborations where partners earn commission on every consultation or product sale generated through their unique referral link or discount code.',
    category: 'Performance',
    color: '#6366F1',
    features: ['Unique referral codes', 'Revenue‑share model', 'Real‑time tracking', '10‑15% commission tier'],
  },
  {
    title: 'Brand Ambassadors',
    icon: '◉',
    description: 'Long‑term, deep partnerships where ambassadors represent VedicUrja consistently over months or years, building authentic brand affinity with their audience.',
    category: 'Long‑Term',
    color: '#F59E0B',
    features: ['Monthly retainer model', 'Exclusive territory rights', 'Quarterly strategy calls', 'Co‑branded content calendar'],
  },
  {
    title: 'Product Seeding & Gifting',
    icon: '○',
    description: 'No‑strings‑attached gifting of VedicUrja services or ritual products to creators who genuinely align with Vedic values, encouraging organic, unsolicited content.',
    category: 'Gifting',
    color: '#EC4899',
    features: ['Free consultation vouchers', 'Puja & havan kits', 'Kumkum & organic products', 'No posting obligation'],
  },
  {
    title: 'Social Media Takeovers',
    icon: '◐',
    description: 'VedicUrja hands over its Instagram or YouTube account to a guest creator for a day, letting them share their unique perspective on Vastu, astrology, or wellness.',
    category: 'Content',
    color: '#8B5CF6',
    features: ['Instagram Story takeovers', 'Live Q&A sessions', 'Behind‑the‑scenes access', 'Cross‑audience growth'],
  },
  {
    title: 'Co‑Branding & Co‑Creation',
    icon: '◑',
    description: 'Two brands jointly design a limited‑edition Vedic product, service package, or digital experience, leveraging each other\'s credibility and audience.',
    category: 'Strategic',
    color: '#EF4444',
    features: ['Joint product launches', 'Limited‑edition ritual kits', 'Co‑branded digital courses', 'Shared PR & marketing'],
  },
  {
    title: 'Giveaways & Contests',
    icon: '◒',
    description: 'High‑engagement campaigns where VedicUrja and a creator jointly host a giveaway, requiring participants to follow both accounts and tag friends.',
    category: 'Engagement',
    color: '#FF9933',
    features: ['Joint prize pools', 'Follower growth tactics', 'Comment‑to‑enter format', 'Platform‑specific rules'],
  },
  {
    title: 'Podcast Sponsorships',
    icon: '◓',
    description: 'VedicUrja sponsors episodes of relevant podcasts — spiritual, wellness, entrepreneurship — through host‑read ads, pre‑rolls, or mid‑roll placements.',
    category: 'Audio',
    color: '#0891B2',
    features: ['Host‑read endorsements', 'Pre‑roll / mid‑roll spots', 'CPM & flat‑rate models', 'Dynamic ad insertion'],
  },
  {
    title: 'Podcast Guest Appearances',
    icon: '◔',
    description: 'Vastuvid K.K. Nagaich appears as an expert guest on podcasts discussing Vastu, numerology, astrology, and spiritual entrepreneurship.',
    category: 'Audio',
    color: '#06B6D4',
    features: ['Expert interview format', '40‑60 minute episodes', 'Audience Q&A segments', 'Cross‑promotion to both audiences'],
  },
  {
    title: 'YouTube Collaborations',
    icon: '◕',
    description: 'Joint YouTube videos where VedicUrja and a creator co‑produce content, tag each other via YouTube\'s Collab feature, and share algorithmic reach.',
    category: 'Video',
    color: '#DC2626',
    features: ['Co‑authored videos', 'YouTube Collab tags', 'Algorithmic cross‑recommendation', 'Shorts & long‑form options'],
  },
  {
    title: 'Event Partnerships',
    icon: '◖',
    description: 'VedicUrja partners with spiritual festivals, wellness retreats, corporate offsites, and cultural events to provide on‑site Vastu consultations and ritual services.',
    category: 'Events',
    color: '#D97706',
    features: ['On‑site Vastu booth', 'Live ritual demonstrations', 'Sponsored stage presence', 'Co‑branded event merchandise'],
  },
  {
    title: 'Live Session Collaborations',
    icon: '◗',
    description: 'Real‑time Instagram/YouTube/Facebook live streams co‑hosted by Vastuvid K.K. Nagaich and a creator, answering audience Vastu questions interactively.',
    category: 'Live',
    color: '#7C3AED',
    features: ['Dual‑host live streams', 'Real‑time Q&A', 'Audience interaction tools', 'Recorded replay distribution'],
  },
  {
    title: 'Guest Blogging & Content Swaps',
    icon: '◘',
    description: 'Cross‑publishing articles, guides, or e‑books between VedicUrja\'s blog and a partner\'s platform, building backlinks and shared authority.',
    category: 'Content',
    color: '#2563EB',
    features: ['SEO backlink building', 'Guest post exchanges', 'Co‑authored whitepapers', 'Email newsletter features'],
  },
  {
    title: 'UGC (User‑Generated Content)',
    icon: '◙',
    description: 'VedicUrja reposts authentic content created by clients and followers — testimonials, before‑after Vastu results, ritual videos — with full credit.',
    category: 'Community',
    color: '#059669',
    features: ['Client testimonial features', 'Community spotlight series', 'Hashtag campaigns', 'UGC rights management'],
  },
  {
    title: 'Cross‑Promotion & Shoutouts',
    icon: '◚',
    description: 'Simple, low‑effort mutual promotion — VedicUrja and a partner give each other story shoutouts, bio mentions, or feed post tags.',
    category: 'Promotion',
    color: '#DB2777',
    features: ['Story shoutout exchanges', 'Bio mention swaps', 'Feed post cross‑tags', 'Newsletter cross‑promotion'],
  },
  {
    title: 'Charity & CSR Partnerships',
    icon: '◛',
    description: 'Purpose‑driven collaborations where VedicUrja and a partner jointly support a social cause — free Vastu for temples, schools, or community centres.',
    category: 'Social Impact',
    color: '#9333EA',
    features: ['Pro‑bono Vastu projects', 'Temple restoration partnerships', 'Educational institution tie‑ups', 'Joint CSR campaigns'],
  },
  {
    title: 'Affiliate Network & Referral Program',
    icon: '◜',
    description: 'A structured referral ecosystem where any individual — not just influencers — can earn commission by referring clients to VedicUrja through a unique link.',
    category: 'Performance',
    color: '#0D9488',
    features: ['Open to everyone', 'Tiered commission structure', 'Automated payout tracking', 'Monthly performance reports'],
  },
];

/* ================================================================
   LUXURY HERO – Maroon/Gold gradient, mobile‑first
   ================================================================ */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0030] via-[#2d0040] to-[#0a0015] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.10),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,153,51,0.06),transparent_50%)]" />
      <div className="absolute top-20 left-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-float-slow" />
      <div className="absolute bottom-10 right-[10%] w-64 h-64 rounded-full bg-gradient-to-tl from-purple-500/10 to-transparent backdrop-blur-2xl border border-white/10 animate-float-medium" />

      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
          Partner With Us
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          Let's{' '}
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Collaborate</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 px-4">
          18 ways to partner with VedicUrja — from sponsored content and podcast appearances to brand ambassadorships and live‑streamed events. Let's build something sacred together.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:Vedicurja2020@gmail.com" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all w-full sm:w-auto text-lg">
            Start a Collaboration
          </a>
          <a href="https://wa.me/916393570832?text=Hi%20VedicUrja,%20I%20am%20interested%20in%20a%20collaboration." target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full w-full sm:w-auto text-center text-lg font-medium transition-all">
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}

/* ================================================================
   STATS ROW
   ================================================================ */
function StatsRow() {
  const stats = [
    { value: '50+', label: 'Active Creators' },
    { value: '15+', label: 'Podcasts Featured' },
    { value: '3+ Cr', label: 'Monthly Reach' },
    { value: '18', label: 'Collab Types' },
  ];
  return (
    <section className="py-12 bg-gradient-to-b from-white to-vastu-stone/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-prakash-gold/20 shadow-[0_8px_25px_rgba(26,42,58,0.06)]">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-nidra-indigo">{stat.value}</div>
              <div className="text-xs sm:text-sm text-nidra-indigo/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   HOW IT WORKS – 3 steps
   ================================================================ */
function HowItWorks() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-12">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">How It Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Three Simple Steps to Partner</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: '01', title: 'Reach Out', desc: 'Email or WhatsApp us with your collaboration idea, audience stats, and preferred format. We respond within 24 hours.' },
            { step: '02', title: 'Align & Agree', desc: 'We discuss terms — paid, barter, affiliate, or ambassador. You receive a clear, written agreement within 48 hours.' },
            { step: '03', title: 'Create & Launch', desc: 'Co‑create content, go live, or launch the campaign. We cross‑promote across our channels for maximum reach.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/15">
              <div className="text-4xl font-bold text-prakash-gold mb-3">{item.step}</div>
              <h3 className="font-serif text-xl text-nidra-indigo font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-nidra-indigo/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   ALL 18 COLLABORATION CARDS IN 3D GRID
   ================================================================ */
function CollaborationGrid() {
  return (
    <section className="py-20 sm:py-28 bg-vastu-stone/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Collaboration Types</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            18 Ways to{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Partner With Us</span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            From nano‑creator barter to celebrity‑level brand ambassadorships — every partnership is custom‑crafted for mutual growth and authenticity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {collaborationTypes.map((collab, i) => (
            <motion.div
              key={collab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.03, rotateY: 3, translateZ: 15 }}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              {/* Colored accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: collab.color }} />
              {/* Category badge */}
              <div className="flex items-center gap-2 mb-3 mt-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: collab.color + '15', color: collab.color }}>
                  {collab.category}
                </span>
              </div>
              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl" style={{ color: collab.color }}>{collab.icon}</span>
                <h3 className="font-serif text-lg text-nidra-indigo font-bold">{collab.title}</h3>
              </div>
              {/* Description */}
              <p className="text-sm text-nidra-indigo/60 leading-relaxed mb-4">{collab.description}</p>
              {/* Features as bullet pills */}
              <div className="flex flex-wrap gap-1.5">
                {collab.features.map((f, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: collab.color + '30', backgroundColor: collab.color + '08', color: collab.color }}>
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PLATFORM GRID – Where we collaborate
   ================================================================ */
function PlatformGrid() {
  const platforms = [
    { name: 'Instagram', desc: 'Reels, Stories, Lives, Takeovers', color: '#E4405F' },
    { name: 'YouTube', desc: 'Long‑form, Shorts, Collab tags', color: '#FF0000' },
    { name: 'Podcasts', desc: 'Host‑read ads, Guest interviews', color: '#1DB954' },
    { name: 'Facebook', desc: 'Live streams, Groups, Posts', color: '#1877F2' },
    { name: 'LinkedIn', desc: 'Articles, Thought leadership', color: '#0A66C2' },
    { name: 'WhatsApp', desc: 'Community broadcast, DMs', color: '#25D366' },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-10">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Where We Collaborate</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">All Platforms Welcome</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="text-center p-4 rounded-2xl border border-prakash-gold/10 bg-white/60 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold" style={{ color: p.color }}>{p.name}</div>
              <p className="text-xs text-nidra-indigo/50 mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FINAL CTA
   ================================================================ */
function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0030] via-[#2d0040] to-[#0a0015] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Ready to Collaborate?</h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                Email us at <strong className="text-prakash-gold">Vedicurja2020@gmail.com</strong> or reach out on WhatsApp. We'll craft a custom partnership that fits your audience and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:Vedicurja2020@gmail.com" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                  Email Us →
                </a>
                <a href="https://wa.me/916393570832?text=Hi%20VedicUrja,%20I%20am%20interested%20in%20a%20collaboration." target="_blank" rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                  WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function CollaboratePage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <StatsRow />
          <HowItWorks />
          <CollaborationGrid />
          <PlatformGrid />
          <FinalCTA />
        </main>
      </SmoothScroll>
      <style>{`
        @keyframes float-slow {0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
        @keyframes float-medium {0%,100%{transform:translateY(0)rotate(0)}50%{transform:translateY(-10px)rotate(3deg)}}
        @keyframes gradient-loop {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .animate-float-slow{animation:float-slow 8s ease-in-out infinite}
        .animate-float-medium{animation:float-medium 10s ease-in-out infinite}
        .animate-gradient-loop{animation:gradient-loop 12s ease infinite}
      `}</style>
    </>
  );
}
