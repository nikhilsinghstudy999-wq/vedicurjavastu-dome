'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturedBlogSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">
              Featured Insight
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4 leading-tight">
              Peepal Tree on House Walls – Signs & Remedies
            </h2>
            <p className="text-nidra-indigo/70 text-base leading-relaxed mb-6">
              Small Peepal trees spontaneously growing on walls indicate Pitru Dosha and Vastu Dosha.
              Learn the spiritual significance and step‑by‑step remedies to correct it.
            </p>
            <Link
              href="/insights/peepal-tree-remedy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-prakash-gold text-white rounded-full font-medium hover:bg-sacred-saffron transition shadow-md"
            >
              Read Full Article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right: Square Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30">
              <Image
                src="/images/blog/peepal-tree-square.jpg"
                alt="Peepal tree on wall"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
