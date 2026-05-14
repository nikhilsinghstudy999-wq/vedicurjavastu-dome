'use client';

import Link from 'next/link';

export function CosmicHero() {
  // Static content – no API calls, no animations, no delays
  const hero = {
    title: 'प्राचीन ज्ञान · शाश्वत सद्भाव',
    subtitle: 'Ancient Wisdom · Eternal Harmony',
    description: 'Vastuvid K.K. Nagaich – 4th generation Vastu Guru, Tantra Sadhak, MBA, former CEO. Rooted in the Guru‑Shishya Parampara, he personally performs every ritual and has transformed over 2 Lakh lives across 50+ countries.',
    buttonText: 'Consult Vastuvid ji',
    buttonLink: '/contact',
    secondaryButtonText: 'Explore Free Tools',
    secondaryButtonLink: '/free-tools',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A0A2E] to-[#2D0A3C]">
      {/* Simple static background – no radial gradient, no animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-20">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
            {hero.title}
          </span>
          <br />
          <span className="text-prakash-gold">{hero.subtitle}</span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 px-4">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href={hero.buttonLink}
            className="px-8 py-4 bg-gradient-to-r from-prakash-gold to-sacred-saffron rounded-full font-semibold text-white hover:shadow-lg transition"
          >
            {hero.buttonText}
          </Link>
          <Link
            href={hero.secondaryButtonLink}
            className="px-8 py-4 border-2 border-white rounded-full font-semibold text-white hover:bg-white/10 transition"
          >
            {hero.secondaryButtonText}
          </Link>
        </div>

        {/* Simple community counter – no animations */}
        <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-prakash-gold/40">
          <div className="flex items-center gap-3">
            <span className="text-prakash-gold text-xl">✦</span>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-white drop-shadow-2xl">80k+</span>
            <span className="text-white/80 text-sm uppercase tracking-wider">Community</span>
            <span className="text-prakash-gold text-xl">✦</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator – minimal, no bounce animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <div className="w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2" />
        </div>
      </div>
    </section>
  );
}

export default CosmicHero;
