'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tools = [
  { title: 'Daily Horoscope', desc: '12‑Rashi forecast updated every morning', href: '/free-tools/daily-horoscope', color: '#7B2FBE', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' },
  { title: 'Name Suggestion', desc: 'Auspicious syllables based on 27 Nakshatras', href: '/free-tools/name-suggestion', color: '#E8B960', svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
];

export function FreeAITools() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-vastu-parchment to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-4">Begin Your Journey Free</h2>
        <p className="text-center text-nidra-indigo/60 mb-12">Experience the power of Vedic AI – no signup required</p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={tool.href} className="block group">
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-prakash-gold/40 via-white/20 to-sacred-saffron/30 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-8 text-center">
                    <svg className="w-12 h-12 mx-auto mb-4" style={{ color: tool.color }} fill="currentColor" viewBox="0 0 24 24"><path d={tool.svg}/></svg>
                    <h3 className="font-serif text-2xl text-nidra-indigo font-bold mb-2">{tool.title}</h3>
                    <p className="text-sm text-nidra-indigo/60">{tool.desc}</p>
                    <span className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-white rounded-full text-sm font-medium group-hover:shadow-md transition-shadow">
                      Try Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FreeAITools;
