'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FreeToolCard3D } from '@/features/tools/shared/components/FreeToolCard3D';
import KundaliLuxurySVG from '@/features/tools/shared/components/KundaliLuxurySVG';
import HoroscopeLuxurySVG from '@/features/tools/shared/components/HoroscopeLuxurySVG';
import NameSuggestionLuxurySVG from '@/features/tools/shared/components/NameSuggestionLuxurySVG';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

export function FreeAITools() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const toolIcons = [
    { key: 'daily_horoscope', icon: <HoroscopeLuxurySVG />, href: '/free-tools/daily-horoscope', color: '#7B2FBE' },
    { key: 'name_suggestion', icon: <NameSuggestionLuxurySVG />, href: '/free-tools/name-suggestion', color: '#E8B960' },
  ];

  const { items } = useRealtimeContent<any>('free_tools', 'order_index');
  const tools = items.length ? items.filter((t: any) => t.is_published) : [
    { id: '2', tool_key: 'daily_horoscope', title: 'Daily Horoscope', description: 'Your 12‑Rashi forecast updated every morning' },
    { id: '3', tool_key: 'name_suggestion', title: 'Name Suggestion', description: 'Auspicious syllables based on 27 Nakshatras' },
  ];

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-24 md:py-32 bg-gradient-to-b from-vastu-parchment to-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2 className="text-center font-serif text-4xl md:text-5xl text-nidra-indigo mb-4">
          Begin Your Journey Free
        </motion.h2>
        <p className="text-center text-nidra-indigo/60 max-w-2xl mx-auto mb-16">
          Experience authentic Vedic AI – no signup required
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {tools.map((tool: any) => {
            const iconData = toolIcons.find(i => i.key === tool.tool_key);
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full max-w-sm"
              >
                <FreeToolCard3D
                  name={tool.title}
                  description={tool.description}
                  icon={iconData?.icon || '🔮'}
                  href={iconData?.href || `/free-tools/${tool.tool_key}`}
                  color={iconData?.color || '#FF9933'}
                />
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="text-sm font-medium text-nidra-indigo/70">★ 4.9</span>
                  <span className="text-sm text-nidra-indigo/50">•</span>
                  <span className="text-sm text-nidra-indigo/70">2.5k+ reports</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
export default FreeAITools;
