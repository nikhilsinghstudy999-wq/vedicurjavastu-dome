'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import { MagneticButton } from '@/features/shared/components/global/MagneticButton';
import FreeToolCard3D from '@/features/tools/shared/components/FreeToolCard3D';
import AnimatedStatCard3D from '@/features/tools/shared/components/AnimatedStatCard3D';
import { TestimonialsSlider } from '@/features/home/components/TestimonialsSlider';
import Mandala3D from '@/features/shared/components/Mandala3D';
import FloatingParticles from '@/features/shared/components/svg/FloatingParticles';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';
import { FreeTool, Testimonial } from '@/types/admin';
import PremiumComparison3D from '@/features/tools/shared/components/PremiumComparison3D';

// ----------------------------------------------------------------------
// Section 1: Hero (with mandala)
// ----------------------------------------------------------------------
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
      <Mandala3D />
      <FloatingParticles />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sacred-saffron uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block">
          Free Vedic Tools
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-nidra-indigo mb-6 leading-tight">
          <span className="vedic-gradient-text">Sacred Tools,</span>
          <br />
          <span className="text-prakash-gold">Modern Precision</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1.2 }} className="font-sans text-base sm:text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto mb-10 px-4">
          Free, accurate, and trusted by seekers across 20+ countries.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('tools-grid')?.scrollIntoView({ behavior: 'smooth' })} className="luxury-button w-full sm:w-auto">
            Explore Tools
          </button>
          <Link href="/contact" className="bg-transparent border-2 border-prakash-gold text-nidra-indigo hover:bg-prakash-gold/10 px-8 py-4 rounded-full w-full sm:w-auto text-center transition-colors">
            Consult Acharya
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// ----------------------------------------------------------------------
// Section 2: Tools Grid (3 cards)
// ----------------------------------------------------------------------
function ToolsGridSection() {
  const { items: tools } = useRealtimeContent<FreeTool>('free_tools', 'order_index');
  const publishedTools = tools.filter(t => t.is_published);

  return (
    <section id="tools-grid" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-4">The Three Pillars</h2>
        <p className="text-center text-nidra-indigo/60 mb-12 sm:mb-16">Choose your path to Vedic wisdom – all free, all powerful</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto place-items-center">
          {publishedTools.map((tool) => (
            <FreeToolCard3D
              key={tool.id}
              name={tool.title}
              description={tool.description}
              icon={tool.icon || (tool.tool_key === 'kundali' ? '🔮' : tool.tool_key === 'vastu_scan' ? '🏠' : '✨')}
              href={`/free-tools/${tool.tool_key.replace(/_/g, "-")}`}
              color={tool.color || (tool.tool_key === 'kundali' ? '#FF9933' : tool.tool_key === 'vastu_scan' ? '#C10000' : '#E8B960')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Section 3: Accuracy Stats – PREMIUM 3D CARDS
// ----------------------------------------------------------------------
function AccuracySection() {
  const stats = [
    { label: 'Kundali Accuracy', value: 92, suffix: '%', desc: 'Match with professional Jyotish software', icon: '🔮', color: '#FF9933' },
    { label: 'Vastu Scan Precision', value: 500, suffix: '+', desc: 'Validated against real floor plans', icon: '🏠', color: '#C10000' },
    { label: 'Name Syllable Source', value: 100, suffix: '%', desc: 'Direct from Brihat Parashara Hora Shastra', icon: '✨', color: '#E8B960' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-vastu-stone/30 via-white to-vastu-parchment">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-nidra-indigo mb-4"
        >
          Rooted in Authenticity
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-nidra-indigo/60 mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          Our tools are built on genuine Vedic calculations and ancient texts
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedStatCard3D
              key={i}
              index={i}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.desc}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Section 4: Testimonials
// ----------------------------------------------------------------------
function TestimonialsSection() {
  const { items: testimonials } = useRealtimeContent<Testimonial>('testimonials', 'order_index');
  const toolTestimonials = testimonials.filter(t => t.project_type === 'free_tool' && t.is_published);

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-4">Words of Gratitude</h2>
        <p className="text-center text-nidra-indigo/60 mb-8">Hear from seekers who found clarity through our tools</p>
        <TestimonialsSlider testimonials={toolTestimonials.length > 0 ? toolTestimonials : undefined} />
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Section 5: Tool Comparison Table
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Section 6: FAQ
// ----------------------------------------------------------------------
function FAQSection() {
  const faqs = [
    { q: 'Are these tools really free?', a: 'Yes! The basic reports are completely free. Premium upgrades are available for deeper insights.' },
    { q: 'How accurate is the AI Kundali?', a: 'Our deterministic algorithm matches professional software with 92% accuracy for basic charts.' },
    { q: 'Do I need to create an account?', a: 'No account is required for free reports. Sign up to save your history and access premium features.' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-center text-nidra-indigo mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-vastu-stone/20 p-4 rounded-xl">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-nidra-indigo/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Section 7: Final CTA
// ----------------------------------------------------------------------
function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-nidra-indigo text-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-6">Ready for Deeper Insight?</h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10">
          Book a private consultation with Vastuvid KK Nagaich for personalised guidance.
        </p>
        <Link href="/contact" className="bg-prakash-gold hover:bg-sacred-saffron text-nidra-indigo font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg transition inline-block">
          Consult Acharya
        </Link>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Main Page
// ----------------------------------------------------------------------
export default function FreeToolsPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <ToolsGridSection />
          <AccuracySection />
          <TestimonialsSection />
          <PremiumComparison3D />
          <FAQSection />
          <FinalCTA />
        </main>
      </SmoothScroll>
    </>
  );
}
