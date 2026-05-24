'use client';
'use client';
'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const allServices = [
  { id:'residential', title:'Residential Vastu', tagline:'Homes, Flats & Quarters', desc:'Silver · Gold · Luxury plans', features:'Computerized layout audit, Remedies with/without demolition', href:'/services/residential', image:'/images/services/residential.webp', accent:'#E8B960' },
  { id:'commercial', title:'Commercial Vastu', tagline:'Offices, Shops & Showrooms', desc:'Silver · Gold · Luxury plans', features:'Employee productivity audit, Cash counter & CEO cabin', href:'/services/commercial', image:'/images/services/commercial.webp', accent:'#3B82F6' },
  { id:'industrial', title:'Industrial Vastu', tagline:'Factories & Manufacturing', desc:'Silver · Gold · Luxury plans', features:'Heavy machinery placement, Fire-safety & material flow', href:'/services/industrial', image:'/images/services/industrial.webp', accent:'#6366F1' },
  { id:'land', title:'Land Selection', tagline:'Auspicious Plot Analysis', desc:'Silver · Gold · Luxury plans', features:'Kamadahana soil testing, Slope & elevation audit', href:'/services/land', image:'/images/services/land.webp', accent:'#10B981' },
  { id:'kundali', title:'Kundali Analysis', tagline:'Vedic Nadi Jyotish', desc:'Basic · Premium plans', features:'Shadbala & Vimshottari Dasha, Gemstone & Rudraksha', href:'/services/kundali', image:'/images/services/placeholders/kundali.webp', accent:'#F59E0B' },
  { id:'numerology', title:'Numerology & Namakaran', tagline:'Names + Mobile Numbers', desc:'Basic · Premium plans', features:'Newborn, Business & Adult naming, Mobile number vibration audit', href:'/services/numerology-namakaran', image:'/images/services/placeholders/numerology-namakaran.webp', accent:'#2563EB' },
  { id:'virtual-consult', title:'Virtual Consult', tagline:'Global Video Session', desc:'60‑min personalised session', features:'Screen‑share floor plan, Post‑session written report', href:'/bookings', image:'/images/services/placeholders/virtual-consult.webp', accent:'#0891B2' },
];

function FlipCard({ service }: { service: typeof allServices[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative w-full h-[420px] sm:h-[460px] perspective-[1200px] cursor-pointer group" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} onClick={() => setFlipped(!flipped)}>
      <motion.div className="absolute inset-0 rounded-[40px] shadow-2xl" style={{ transformStyle: 'preserve-3d', rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.7, ease: [0.23,1,0.32,1] }}>
        <div className="absolute inset-0 rounded-[40px] overflow-hidden flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className="h-48 overflow-hidden relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: service.accent }} />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white/90 via-white/70 to-white/50">
            <h3 className="font-serif text-2xl text-nidra-indigo font-bold">{service.title}</h3>
            <p className="text-sm text-nidra-indigo/60 mt-2">{service.tagline}</p>
            <span className="mt-4 text-xs font-medium px-4 py-1.5 rounded-full" style={{ backgroundColor: service.accent + '20', color: service.accent }}>Explore →</span>
          </div>
        </div>
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/95 via-white/80 to-white/60 backdrop-blur-xl border-2 flex flex-col" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: service.accent + '40' }}>
          <div className="px-6 py-4" style={{ backgroundColor: service.accent + '15' }}>
            <h4 className="font-serif text-xl text-nidra-indigo font-bold">{service.title}</h4>
            <p className="text-xs text-nidra-indigo/60 mt-1">{service.desc}</p>
          </div>
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <p className="text-sm text-nidra-indigo/70">{service.features}</p>
          </div>
          <div className="px-6 py-4">
            <Link href={service.href} className="inline-flex items-center justify-center w-full py-3 rounded-full text-white font-medium text-sm hover:shadow-lg" style={{ backgroundColor: service.accent }} onClick={e => e.stopPropagation()}>
              Explore {service.title} →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SacredServices() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const { scrollYProgress } = useScroll(isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  return (
    <motion.section ref={ref} style={isMounted ? { opacity, y } : undefined} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 leading-tight">
            Holistic Vastu Solutions for <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Every Aspect of Life</span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm sm:text-base">Rooted in authentic Vedic lineage – 100M+ views, 80K+ followers.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto place-items-center">
          {allServices.map(service => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full flex justify-center">
              <FlipCard service={service} />
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block max-w-md w-full rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/40 via-sacred-saffron/30 to-kumkuma-red/30 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="rounded-[38px] bg-gradient-to-br from-[#1A0A2E] to-[#2E0A0A] p-8 text-white">
              <svg className="w-12 h-12 mx-auto mb-4 text-prakash-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <h3 className="font-serif text-2xl mb-2">Full Kundali Analysis</h3>
              <p className="text-sm text-white/70 mb-2">100‑Page Detailed Report by Vastuvid K.K. Nagaich</p>
              <div className="text-center mb-4">
                <span className="line-through text-white/50 text-xl mr-2"><span className="line-through text-gray-400 text-xl mr-2">₹999</span> <span className="text-3xl font-bold text-prakash-gold">₹999</span></span>
                <span className="text-prakash-gold text-4xl font-bold">₹999</span>
              </div>
              <a href="https://wa.me/916393570832?text=I%20want%20the%20full%20Kundali%20analysis%20report%20(₹999)" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Get Report on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default SacredServices;
