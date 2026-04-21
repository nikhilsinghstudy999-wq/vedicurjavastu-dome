'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';

interface ToolFeature {
  name: string;
  icon: string;
  color: string;
  toolKey: string;
  basic: {
    title: string;
    features: string[];
  };
  premium: {
    title: string;
    features: string[];
  };
}

const tools: ToolFeature[] = [
  {
    name: 'AI Kundali',
    icon: '🔮',
    color: '#FF9933',
    toolKey: 'kundali',
    basic: {
      title: 'Basic AI Report',
      features: ['Birth chart', 'Nakshatra', 'Planetary positions'],
    },
    premium: {
      title: 'Acharya Deep Review',
      features: ['Full 20‑page report', 'Dasha predictions', 'Gemstone suggestions'],
    },
  },
  {
    name: 'AI Vastu Scan',
    icon: '🏠',
    color: '#C10000',
    toolKey: 'vastu-scan',
    basic: {
      title: 'Basic AI Scan',
      features: ['5‑zone analysis', 'Directional scores', 'Basic tips'],
    },
    premium: {
      title: 'Acharya Deep Review',
      features: ['16‑zone full report', 'Elemental remedies', 'Personalised corrections'],
    },
  },
  {
    name: 'Name Suggestion',
    icon: '✨',
    color: '#E8B960',
    toolKey: 'name-suggestion',
    basic: {
      title: 'Basic AI Suggestion',
      features: ['4 auspicious syllables', 'Nakshatra based', 'Instant results'],
    },
    premium: {
      title: 'Acharya Deep Review',
      features: ['108+ full names', 'Meanings & numerology', 'Personalised selection'],
    },
  },
];

const WHATSAPP_NUMBER = '916393570832';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Acharya ji, I am interested in the premium deep review for my consultation.');

function ComparisonCard({ tool, index }: { tool: ToolFeature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const rotateX = useTransform(mouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const glowX = useTransform(mouseX, [0, 1], [0, 100]);
  const glowY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
      className="relative w-full mx-auto group select-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Mouse-tracking glow */}
      <motion.div
        className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 blur-xl"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${tool.color}40 0%, transparent 70%)`,
        }}
      />

      <div className="relative grid md:grid-cols-2 gap-6 p-6 rounded-[40px] bg-gradient-to-br from-white/40 via-white/20 to-white/30 backdrop-blur-xl border border-white/30 shadow-2xl select-none">
        {/* Basic Column */}
        <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 select-none">
          <motion.h3 
            className="text-2xl font-serif font-bold mb-2"
            style={{ color: tool.color, transform: 'translateZ(20px)' }}
          >
            Basic
          </motion.h3>
          <motion.p 
            className="text-sm text-nidra-indigo/60 mb-4"
            style={{ transform: 'translateZ(15px)' }}
          >
            Free AI‑powered instant report
          </motion.p>
          <motion.ul 
            className="space-y-3 mb-6"
            style={{ transform: 'translateZ(10px)' }}
          >
            {tool.basic.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-nidra-indigo/80">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tool.color }} />
                {f}
              </li>
            ))}
          </motion.ul>
          <motion.div 
            className="text-center"
            style={{ transform: 'translateZ(25px)' }}
          >
            <Link
              href={`/free-tools/${tool.toolKey}`}
              className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/60 shadow-md hover:bg-white hover:shadow-lg transition-all"
              style={{ color: tool.color }}
            >
              Try Free Tool →
            </Link>
          </motion.div>
        </div>

        {/* Premium Column */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-white/40 shadow-lg select-none">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
            ✦ Acharya Deep Review ✦
          </div>
          <motion.h3 
            className="text-2xl font-serif font-bold mb-2 mt-2"
            style={{ color: tool.color, transform: 'translateZ(25px)' }}
          >
            Premium
          </motion.h3>
          <motion.p 
            className="text-sm text-nidra-indigo/60 mb-4"
            style={{ transform: 'translateZ(20px)' }}
          >
            Personally reviewed by Vastuvid KK Nagaich
          </motion.p>
          <motion.ul 
            className="space-y-3 mb-6"
            style={{ transform: 'translateZ(15px)' }}
          >
            {tool.premium.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-nidra-indigo/80 font-medium">
                <span className="text-prakash-gold">✦</span>
                {f}
              </li>
            ))}
          </motion.ul>
          <motion.div 
            className="text-center"
            style={{ transform: 'translateZ(30px)' }}
          >
            <a
              href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.298.433 2.5 1.164 3.477l-1.074 2.47 2.548-.992c.642.365 1.373.578 2.129.578 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767z"/>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Inquire on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Tool header with 3D text */}
        <div className="absolute -top-8 left-8 right-8 flex items-center justify-center select-none">
          <motion.div
            className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-xl border border-white/50"
            style={{ transform: 'translateZ(35px)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-xl font-serif font-bold" style={{ color: tool.color }}>
                {tool.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumComparison3D() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-vastu-parchment to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-center text-nidra-indigo mb-4 select-none"
        >
          Find Your Perfect Tool
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-nidra-indigo/60 mb-16 sm:mb-20 max-w-3xl mx-auto text-lg select-none"
        >
          Compare features and choose the level of guidance that resonates with your need
        </motion.p>
        
        <div className="space-y-24">
          {tools.map((tool, i) => (
            <ComparisonCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
