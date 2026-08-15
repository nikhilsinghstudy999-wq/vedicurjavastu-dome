'use client';
'use client';
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const reasons = [
  { icon: '🔮', title: 'Tantra + Vastu', desc: 'Not just diagnosis — personally performed rituals, Yantra energisation, and Havan by a trained Tantra Sadhak.' },
  { icon: '📊', title: 'MBA + Ex‑CEO', desc: 'Every Vastu defect mapped to a business metric. Boardroom precision meets ancient wisdom.' },
  { icon: '🕉️', title: '4th Gen Lineage', desc: 'Inherited knowledge under Dr. Shiv Verma, Dr. Narendra Sahastrabuddhe, Dr. Rajendra Jain.' },
  { icon: '🌍', title: '100M+ Views', desc: 'India\'s most‑viewed digital Vastu expert across YouTube, Instagram, and Facebook.' },
  { icon: '👥', title: '80K+ Followers', desc: 'Largest Instagram following for any Indian Vastu authority. Trusted community.' },
  { icon: '✅', title: '2 Lakh+ Clients', desc: 'Served across 50+ countries — from Ganga banks to Manhattan skyscrapers.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Why Choose VedicUrja</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Deadly Combination</span>{' '}
            No Other Expert Possesses
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
            AstroVastu Expert KK Nagaich uniquely combines Tantra mastery, MBA‑grade business acumen, and 4th‑generation Vedic lineage — a trio unmatched by any other consultant in India.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateY: 3 }}
              className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-prakash-gold/15 shadow-[0_6px_20px_rgba(26,42,58,0.05)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-nidra-indigo/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
