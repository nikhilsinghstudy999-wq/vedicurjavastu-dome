'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ServiceCard3D } from './ServiceCard3D';
import { ResidentialIcon } from './icons/ResidentialIcon';
import { CommercialIcon } from './icons/CommercialIcon';
import { LandIcon } from './icons/LandIcon';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  color_gradient: string;
  href: string;
  is_published: boolean;
  order_index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  '🏠': <ResidentialIcon />,
  '🏢': <CommercialIcon />,
  '🌍': <LandIcon />,
  'residential': <ResidentialIcon />,
  'commercial': <CommercialIcon />,
  'land': <LandIcon />,
};

const fallbackServices: Service[] = [
  { id: '1', title: 'Residential Vastu', description: 'Harmonise your home', benefits: ['Better Sleep','Family Harmony','Financial Flow'], icon: '🏠', color_gradient: '', href: '/services', is_published: true, order_index: 1 },
  { id: '2', title: 'Commercial Vastu', description: 'Align your business', benefits: ['Revenue Growth','Team Cohesion','Client Retention'], icon: '🏢', color_gradient: '', href: '/services', is_published: true, order_index: 2 },
  { id: '3', title: 'Land & Plot Selection', description: 'Auspicious foundations', benefits: ['Ideal Orientation','Soil Analysis','Future Prospects'], icon: '🌍', color_gradient: '', href: '/services', is_published: true, order_index: 3 },
];

export function SacredServices() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  const { items, loading, refetch } = useRealtimeContent<Service>('services', 'order_index');
  const services = items.length > 0 
    ? items.filter(s => s.is_published).map(s => ({ ...s, icon: iconMap[s.icon] || <ResidentialIcon /> }))
    : fallbackServices;

  if (loading) return <div className="py-24 text-center">Loading Services...</div>;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section 
      ref={ref} 
      style={isMounted ? { opacity, y } : undefined}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2 className="font-serif text-4xl md:text-5xl text-nidra-indigo text-center mb-4">Sacred Services for Modern Living</motion.h2>
        <p className="text-center text-nidra-indigo/60 max-w-2xl mx-auto mb-16">Ancient Vastu principles applied with contemporary precision</p>
        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((s) => (
            <motion.div key={s.id} variants={itemVariants} className="flex justify-center">
              <ServiceCard3D title={s.title} description={s.description} icon={s.icon} benefits={s.benefits} href="/services" colorGradient={s.color_gradient} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link href="/services" className="text-prakash-gold font-medium hover:underline">View All Services →</Link>
        </div>
      </div>
    </motion.section>
  );
}
export default SacredServices;
