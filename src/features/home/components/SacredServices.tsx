'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const allServices = [
  { id:'residential',title:'Residential Vastu',tagline:'Homes, Flats & Quarters',desc:'For constructed homes & new builds',features:['Silver · Gold · Luxury plans','Computerized layout audit','Remedies with/without demolition'],href:'/services/residential',image:'/images/services/residential.jpg',category:'extensive',accent:'#E8B960',is_published:true},
  { id:'commercial',title:'Commercial Vastu',tagline:'Offices, Shops & Showrooms',desc:'Revenue growth through Vedic alignment',features:['Silver · Gold · Luxury plans','Employee productivity audit','Cash counter & CEO cabin'],href:'/services/commercial',image:'/images/services/commercial.jpg',category:'extensive',accent:'#3B82F6',is_published:true},
  { id:'industrial',title:'Industrial Vastu',tagline:'Factories & Manufacturing',desc:'Safety, productivity & workflow',features:['Silver · Gold · Luxury plans','Heavy machinery placement','Fire-safety & material flow'],href:'/services/industrial',image:'/images/services/industrial.jpg',category:'extensive',accent:'#6366F1',is_published:true},
  { id:'land',title:'Land Selection',tagline:'Auspicious Plot Analysis',desc:'Bhoomi Sanskar · Usarology',features:['Silver · Gold · Luxury plans','Kamadahana soil testing','Slope & elevation audit'],href:'/services/land',image:'/images/services/land.jpg',category:'extensive',accent:'#10B981',is_published:true},
  { id:'numerology',title:'Numerology & Namakaran',tagline:'Names + Mobile Numbers',desc:'108-syllable Nakshatra system',features:['Basic · Premium plans','Newborn, Business & Adult naming','Mobile number vibration audit'],href:'/services/numerology-namakaran',image:'/images/services/placeholders/numerology-namakaran.png',category:'advance',accent:'#2563EB',is_published:true},
  { id:'virtual-consult',title:'Virtual Consult',tagline:'Global Video Session',desc:'Live one‑on‑one with Acharya',features:['60‑min personalised session','Screen‑share floor plan','Post‑session written report'],href:'/bookings',image:'/images/services/placeholders/virtual-consult.png',category:'vedic',accent:'#0891B2',is_published:true},
];

function FlipCard({ service }: { service: typeof allServices[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative w-full h-[420px] sm:h-[460px] perspective-[1200px] cursor-pointer group" onMouseEnter={()=>setFlipped(true)} onMouseLeave={()=>setFlipped(false)} onClick={()=>setFlipped(!flipped)}>
      <motion.div className="absolute inset-0 rounded-[40px] shadow-2xl" style={{transformStyle:'preserve-3d', rotateY:flipped?180:0}} transition={{duration:0.7, ease:[0.23,1,0.32,1]}}>
        <div className="absolute inset-0 rounded-[40px] overflow-hidden flex flex-col" style={{backfaceVisibility:'hidden'}}>
          <div className="h-48 overflow-hidden relative"><img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy"/><div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/60 via-transparent to-transparent"/><div className="absolute bottom-0 left-0 right-0 h-1.5" style={{backgroundColor:service.accent}}/></div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white/90 via-white/70 to-white/50"><h3 className="font-serif text-2xl text-nidra-indigo font-bold">{service.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{service.tagline}</p><span className="mt-4 text-xs font-medium px-4 py-1.5 rounded-full" style={{backgroundColor:service.accent+'20',color:service.accent}}>Tap to explore →</span></div>
        </div>
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/95 via-white/80 to-white/60 backdrop-blur-xl border-2 flex flex-col" style={{backfaceVisibility:'hidden',transform:'rotateY(180deg)',borderColor:service.accent+'40'}}>
          <div className="px-6 py-4" style={{backgroundColor:service.accent+'15'}}><h4 className="font-serif text-xl text-nidra-indigo font-bold">{service.title}</h4><p className="text-xs text-nidra-indigo/60 mt-1">{service.desc}</p></div>
          <div className="flex-1 px-6 py-4 overflow-y-auto"><ul className="space-y-2 text-sm text-nidra-indigo/70">{service.features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{backgroundColor:service.accent}}/><span>{f}</span></li>)}</ul></div>
          <div className="px-6 py-4"><Link href={service.href} className="inline-flex items-center justify-center w-full py-3 rounded-full text-white font-medium text-sm hover:shadow-lg" style={{backgroundColor:service.accent}} onClick={e=>e.stopPropagation()}>Explore {service.title} →</Link></div>
        </div>
      </motion.div>
    </div>
  );
}

export function SacredServices() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(()=>setIsMounted(true),[]);
  const {scrollYProgress} = useScroll(isMounted && ref.current ? {target:ref,offset:['start end','end start']}:undefined);
  const y = useTransform(scrollYProgress,[0,1],[40,-40]);
  const opacity = useTransform(scrollYProgress,[0,0.2,0.8,1],[0.2,1,1,0.2]);
  const pillars = [
    {name:'Extensive Framework',subtitle:'विस्तृत ढांचा',services:allServices.filter(s=>s.category==='extensive')},
    {name:'Advance Treatments',subtitle:'उन्नत उपचार',services:allServices.filter(s=>s.category==='advance')},
    {name:'Vedic Applications',subtitle:'वैदिक अनुप्रयोग',services:allServices.filter(s=>s.category==='vedic')},
  ];
  return (
    <motion.section ref={ref} style={isMounted?{opacity,y}:undefined} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 leading-tight">Holistic Vastu Solutions for <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Every Aspect of Life</span></h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm sm:text-base">India's most‑viewed Vastu expert — 100M+ views, 80K+ followers.</p>
        </motion.div>
        {pillars.map(pillar => (
          <div key={pillar.name} className="mb-16">
            <div className="text-center mb-10"><div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10 rounded-full border border-prakash-gold/20"><span className="w-2 h-2 rounded-full bg-prakash-gold"/><span className="font-serif text-xl text-nidra-indigo font-bold">{pillar.name}</span><span className="text-xs text-nidra-indigo/50">({pillar.subtitle})</span></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto place-items-center">
              {pillar.services.map(service=><motion.div key={service.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="w-full flex justify-center"><FlipCard service={service}/></motion.div>)}
            </div>
          </div>
        ))}
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services/remedies" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-full text-emerald-600 font-medium hover:bg-emerald-500/10 transition">🔮 Advanced Remedies →</Link>
          <Link href="/services/rituals" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sacred-saffron/10 to-sacred-saffron/5 border border-sacred-saffron/30 rounded-full text-sacred-saffron font-medium hover:bg-sacred-saffron/10 transition">🔥 Sacred Rituals →</Link>
        </div>
      </div>
    </motion.section>
  );
}
export default SacredServices;
