'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function AcharyaVow() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-vastu-parchment via-white to-vastu-stone/20"
    >
      {/* Connecting line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-prakash-gold to-prakash-gold/50 animate-pulse" />

      {/* Connecting line bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-t from-transparent via-prakash-gold to-prakash-gold/50 animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          style={isMounted ? { scale } : undefined}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sacred-saffron uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
            Our Sacred Vow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 leading-tight">
            Where Ancient Vastu Meets{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
              Modern Leadership
            </span>
          </h2>
          <p className="text-base sm:text-lg text-nidra-indigo/70 max-w-2xl mx-auto leading-relaxed">
            Vastuvid K.K. Nagaich – an MBA graduate, former CEO, and 4th‑generation Vastu Guru – brings
            boardroom precision to the sacred science of spatial harmony.
          </p>
        </motion.div>

        {/* Content grid: image + text */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image card */}
          <motion.div
            style={isMounted ? { scale } : undefined}
            className="relative order-2 md:order-1"
          >
            <div className="relative h-[350px] sm:h-[420px] md:h-[500px] w-full rounded-[40px] overflow-hidden group">
              {/* Golden glow border animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red rounded-[44px] opacity-60 blur-sm animate-[goldenGlow_3s_ease-in-out_infinite]" />
              {/* Image */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/home/acharya-portrait.jpg"
                  alt="Vastuvid K.K. Nagaich"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/60 via-transparent to-transparent" />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <p className="font-serif text-xl sm:text-2xl drop-shadow-lg">Vastuvid K.K. Nagaich</p>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">
                    MBA • Former CEO • 4th Generation Vastu Guru
                  </p>
                </div>
              </div>
              {/* Tilt effect on hover */}
              <style>{`
                @keyframes goldenGlow {
                  0%, 100% { opacity: 0.6; filter: blur(4px); }
                  50% { opacity: 0.9; filter: blur(2px); }
                }
                .group:hover .golden-glow {
                  animation-duration: 1.5s;
                }
              `}</style>
            </div>
          </motion.div>

          {/* Text block */}
          <motion.div
            style={isMounted ? { y } : undefined}
            className="order-1 md:order-2 text-left"
          >
            <p className="text-base sm:text-lg text-nidra-indigo/80 leading-relaxed mb-6">
              For over four decades, our family has preserved authentic Vastu Shastra traditions.
              Vastuvid K.K. Nagaich blends the strategic mindset of an MBA and ex‑CEO with the
              spiritual depth of a 4th‑generation Guru, delivering precise, transformative Vastu
              solutions for homes, businesses, and land.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="luxury-button text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                Discover Our Lineage
              </Link>
              <Link
                href="/about"
                className="border-b-2 border-prakash-gold text-nidra-indigo font-medium text-center sm:text-left pb-1 hover:text-sacred-saffron transition-colors"
              >
                Read Acharya's Story →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
export default AcharyaVow;
