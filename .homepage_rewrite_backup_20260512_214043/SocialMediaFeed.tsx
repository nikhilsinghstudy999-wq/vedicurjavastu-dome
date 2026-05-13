'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function SocialMediaFeed() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const platforms = [
    {
      name: 'Instagram',
      handle: '@vedicurja',
      color: 'from-pink-500 to-purple-600',
      bgGlow: 'rgba(236, 72, 153, 0.2)',
      href: 'https://www.instagram.com/vedicurja?igsh=MTFkb2NkbGJuamp2bg%3D%3D',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.376.13 3.934.427 2.684 1.677 1.434 2.927 1.137 4.37 1.08 6.045.02 7.325 0 7.733 0 12s.02 4.675.08 5.955c.057 1.675.354 3.118 1.604 4.368 1.25 1.25 2.693 1.547 4.368 1.604C7.325 23.98 7.733 24 12 24s4.675-.02 5.955-.08c1.675-.057 3.118-.354 4.368-1.604 1.25-1.25 1.547-2.693 1.604-4.368.06-1.28.08-1.688.08-5.955s-.02-4.675-.08-5.955c-.057-1.675-.354-3.118-1.604-4.368C20.073.427 18.63.13 16.955.08 15.675.02 15.267 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      handle: 'VedicUrja',
      color: 'from-blue-600 to-blue-800',
      bgGlow: 'rgba(37, 99, 235, 0.2)',
      href: 'https://www.facebook.com/krishna.nagaich.7/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      handle: '@vedicurja',
      color: 'from-red-500 to-red-700',
      bgGlow: 'rgba(239, 68, 68, 0.2)',
      href: 'https://www.youtube.com/@vedicurja1589',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      handle: '+91 6393570832',
      color: 'from-green-500 to-green-700',
      bgGlow: 'rgba(34, 197, 94, 0.2)',
      href: 'https://api.whatsapp.com/send/?phone=916393570832&text&type=phone_number&app_absent=0',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.298.433 2.5 1.164 3.477l-1.074 2.47 2.548-.992c.642.365 1.373.578 2.129.578 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767z"/>
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { y } : undefined}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Vedic luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F7F0E6] to-[#FDFBF7]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(232,185,96,0.06),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,153,51,0.04),transparent_40%)]" />

      {/* Decorative mandala lines */}
      <div className="absolute top-10 left-[10%] w-56 h-56 border border-prakash-gold/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-10 right-[5%] w-72 h-72 border border-dashed border-sacred-saffron/8 rounded-full animate-rotate-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-prakash-gold/5 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-sacred-saffron uppercase tracking-[0.25em] text-sm font-semibold">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            Join Our{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
              Global Community
            </span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            Follow VedicUrja on social media for daily Vastu wisdom, live sessions, and transformative guidance from Vastuvid K.K. Nagaich.
          </p>
        </motion.div>

        {/* Social cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, translateZ: 20 }}
              className="group relative cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/40 shadow-[0_8px_30px_rgba(26,42,58,0.06)] hover:shadow-[0_20px_50px_rgba(200,138,93,0.15)] transition-all duration-500">
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${platform.bgGlow}, transparent 70%)` }}
                />

                {/* Icon container */}
                <div className={`relative w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${platform.color} p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>

                {/* Platform name */}
                <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-1">{platform.name}</h3>
                <p className="text-sm text-nidra-indigo/60 mb-4">{platform.handle}</p>

                {/* Arrow link */}
                <div className="flex items-center text-prakash-gold text-sm font-medium group/link">
                  <span>Connect</span>
                  <svg className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Glass highlight */}
                <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-prakash-gold font-medium hover:underline text-sm"
          >
            Contact us directly
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-rotate-slow { animation: rotate-slow 35s linear infinite; }
        .animate-rotate-reverse { animation: rotate-reverse 30s linear infinite; }
      `}</style>
    </motion.section>
  );
}
export default SocialMediaFeed;
