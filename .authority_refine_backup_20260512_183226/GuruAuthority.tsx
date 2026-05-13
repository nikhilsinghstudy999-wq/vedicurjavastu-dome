'use client';
import { motion } from 'framer-motion';

export default function GuruAuthority() {
  const stats = [
    { value: '100M+', label: 'Views Across Platforms' },
    { value: '80K+', label: 'Instagram Followers' },
    { value: '20+', label: 'Years Experience' },
    { value: '2 Lakh+', label: 'Clients Worldwide' },
    { value: 'MBA + Ex‑CEO', label: 'Business Acumen' },
    { value: '4th Gen', label: 'Vastu Lineage' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#1a0020]/90 via-[#0d0030]/90 to-[#1a0020]/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            India's Most Followed{' '}
            <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Vastu Authority</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Vastuvid KK Nagaich is not just another consultant — he is a <strong className="text-prakash-gold">Tantra‑trained, MBA‑qualified, 4th‑generation Vastu Guru</strong> whose videos have amassed over <strong className="text-prakash-gold">100 million views</strong> across social media. With <strong className="text-prakash-gold">80,000+ Instagram followers</strong>, he is India's most viewed and trusted digital Vastu expert — bringing boardroom precision and ancient ritual mastery to every consultation.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold text-prakash-gold">{stat.value}</div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
