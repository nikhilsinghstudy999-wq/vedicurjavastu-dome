'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PlanetaryLoader from '@/features/shared/components/ui/PlanetaryLoader';

/* ================================================================
   SERVICE DATA – 16 cards with accent colors
   ================================================================ */
interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  image: string;
  category: 'extensive' | 'advance' | 'vedic';
  accent: string;
  textColor: string;
}

const allServices: ServiceItem[] = [
  // ── EXTENSIVE FRAMEWORK ────────────────────────────
  {
    id: 'residential', title: 'Residential Vastu', tagline: 'Harmonise Your Home',
    description: 'Brahmnabhi • Dehali Sthapna • Garbh Vinyas • Interior Vastu • Devata Vastu',
    features: ['Brahmnabhi – Central energy activation', 'Dehali Sthapna – Entrance threshold puja', 'Garbh Vinyas – Core womb arrangement', 'Interior Vastu – Room‑by‑room layout'],
    href: '/services/residential', image: '/images/services/residential.jpg',
    category: 'extensive', accent: '#E8B960', textColor: '#1A2A3A',
  },
  {
    id: 'commercial', title: 'Commercial Vastu', tagline: 'Accelerate Business Growth',
    description: 'Pratishthan Vastu • Revenue zone activation • Employee grid',
    features: ['Pratishthan Vastu – Institutional alignment', 'Revenue zone activation', 'Employee productivity grid', 'Client‑attraction entrance design'],
    href: '/services/commercial', image: '/images/services/commercial.jpg',
    category: 'extensive', accent: '#3B82F6', textColor: '#FFFFFF',
  },
  {
    id: 'industrial', title: 'Industrial Vastu', tagline: 'Safety & Productivity',
    description: 'Machinery placement • Fire safety • Material flow',
    features: ['Heavy machinery audit', 'Fire‑safety compliance', 'Material‑flow optimization', 'Worker‑safety enhancement'],
    href: '/services/industrial', image: '/images/services/industrial.jpg',
    category: 'extensive', accent: '#6366F1', textColor: '#FFFFFF',
  },
  {
    id: 'land', title: 'Land Selection', tagline: 'Auspicious Plot Analysis',
    description: 'Bhoomi Sanskar • Usarology • Vriksha Vastu',
    features: ['Bhoomi Sanskar – Land purification', 'Usarology – Barren land treatment', 'Vriksha Vastu – Tree & plant alignment', 'Orientation & slope audit'],
    href: '/services/land', image: '/images/services/land.jpg',
    category: 'extensive', accent: '#10B981', textColor: '#FFFFFF',
  },
  {
    id: 'spiritual', title: 'Spiritual Spaces', tagline: 'Temple & Meditation Design',
    description: 'Pratima Vastu • Prateek Vastu • Poojan/Havan • Havanlogy',
    features: ['Pratima Vastu – Idol placement', 'Prateek Vastu – Sacred symbols', 'Poojan & Havan – Fire rituals', 'Havanlogy – Havan science'],
    href: '/services/spiritual', image: '/images/services/spiritual.jpg',
    category: 'extensive', accent: '#FF9933', textColor: '#1A2A3A',
  },
  {
    id: 'new-construction', title: 'New Construction Vastu', tagline: 'Build from the Ground Up',
    description: 'Shilanyas • Vastu Planning • Consecrated Materials',
    features: ['Shilanyas – Foundation laying ceremony', 'Vastu Planning – Blueprint audit', 'Consecrated materials supply', 'Ratna Sthapna – Gemstone embedment'],
    href: '/services/new-construction', image: '/images/services/placeholders/new-construction.png',
    category: 'extensive', accent: '#8B5CF6', textColor: '#FFFFFF',
  },
  // ── ADVANCE TREATMENTS ───────────────────────────────
  {
    id: 'geopathic', title: 'Geopathic Stress', tagline: 'Neutralise Earth Imbalances',
    description: 'Geology • EMF scanning • Underground vein detection',
    features: ['EMF & geomagnetic scanning', 'Underground water vein detection', 'Copper rod installation', 'Health improvement monitoring'],
    href: '/services/geopathic', image: '/images/services/geopathic.jpg',
    category: 'advance', accent: '#EF4444', textColor: '#FFFFFF',
  },
  {
    id: 'kundali', title: 'Kundali Analysis', tagline: 'Astro Vastu & Jyotish',
    description: 'Astro Vastu • Business Astrology • Jyotish Samadhan',
    features: ['Astro Vastu – Astrology‑aligned design', 'Business Astrology – Corporate timing', 'Jyotish Samadhan – Astrological remedies', 'Dasha & transit predictions'],
    href: '/services/kundali', image: '/images/services/placeholders/new-construction.png',
    category: 'advance', accent: '#F59E0B', textColor: '#1A2A3A',
  },
  {
    id: 'pyramidology', title: 'Pyramidology', tagline: 'Pyramid Energy Correction',
    description: 'Copper/Brass pyramid placement for dosha neutralisation',
    features: ['Copper pyramid installation', 'Brass pyramid grid design', '9‑Pyramid cosmic energy array', 'Direction‑specific placement'],
    href: '/services/pyramidology', image: '/images/services/placeholders/pyramidology.png',
    category: 'advance', accent: '#D97706', textColor: '#FFFFFF',
  },
  {
    id: 'crystal-color', title: 'Crystal & Color Therapy', tagline: 'Elemental Balancing',
    description: 'Crystallogy • Colorology – combined energy correction',
    features: ['Crystal grid therapy (amethyst, quartz)', 'Colour correction per direction', 'Elemental balancing protocol', 'Chakra‑aligned crystal placement'],
    href: '/services/crystal-color', image: '/images/services/placeholders/crystal-color.png',
    category: 'advance', accent: '#7C3AED', textColor: '#FFFFFF',
  },
  {
    id: 'mercury-parad', title: 'Mercury / Parad Therapy', tagline: 'Powerful Dosha Neutralisation',
    description: 'Parad (liquid mercury) – most potent Vastu remedy',
    features: ['Parad Pyramid installation', 'Parad Shivling consecration', 'Parad Keel for dosha zones', 'Parad energisation ritual'],
    href: '/services/mercury-parad', image: '/images/services/placeholders/mercury-parad.png',
    category: 'advance', accent: '#6B7280', textColor: '#FFFFFF',
  },
  {
    id: 'numerology-namakaran', title: 'Numerology & Namakaran', tagline: 'Names Aligned with Stars',
    description: 'Namakaran • Business Name • Business Numerology',
    features: ['Janam Namakaran – Newborn naming', 'Vyavsay Namakaran – Business naming', 'Business Numerology – Success analysis', 'Nakshatra‑pada syllable matching'],
    href: '/services/numerology-namakaran', image: '/images/services/placeholders/numerology-namakaran.png',
    category: 'advance', accent: '#2563EB', textColor: '#FFFFFF',
  },
  // ── VEDIC APPLICATIONS ──────────────────────────────
  {
    id: 'mobile-numerology', title: 'Mobile Numerology', tagline: 'Align Your Phone\'s Vibration',
    description: 'Mobile number analysis against birth chart',
    features: ['Phone number vibration analysis', 'Birth‑chart compatibility check', 'New number recommendation', 'Business & personal number audit'],
    href: '/services/mobile-numerology', image: '/images/services/placeholders/mobile-numerology.png',
    category: 'vedic', accent: '#10B981', textColor: '#FFFFFF',
  },
  {
    id: 'mirrorology', title: 'Mirrorology', tagline: 'Strategic Mirror Placement',
    description: 'Mirror placement for energy amplification',
    features: ['Direction‑specific mirror placement', 'Shape & size recommendations', 'Defect correction via reflection', 'Room‑by‑room mirror audit'],
    href: '/services/mirrorology', image: '/images/services/placeholders/mirrorology.png',
    category: 'vedic', accent: '#06B6D4', textColor: '#FFFFFF',
  },
  {
    id: 'yantra-mantra', title: 'Yantra & Mantra Therapy', tagline: 'Sacred Geometry & Sound',
    description: 'Yantrology • Mantrology – non‑structural correction',
    features: ['Sri Yantra installation & energisation', 'Vastu Purush Yantra placement', 'Mantra chanting prescription', 'Daily recitation protocol'],
    href: '/services/yantra-mantra', image: '/images/services/placeholders/yantra-mantra.png',
    category: 'vedic', accent: '#EF4444', textColor: '#FFFFFF',
  },
  {
    id: 'virtual-consult', title: 'Virtual Consult', tagline: 'Personalised Video Session',
    description: 'Live one‑on‑one video consultation with Vastuvid K.K. Nagaich',
    features: ['60‑min personalised session', 'Screen‑share floor plan analysis', 'Post‑session written report', 'Priority follow‑up booking'],
    href: '/bookings', image: '/images/services/placeholders/new-construction.png',
    category: 'vedic', accent: '#0891B2', textColor: '#FFFFFF',
  },
];

/* ================================================================
   FLIP CARD WITH PLANETARY LOADER ON CLICK
   ================================================================ */
function FlipCard({ service }: { service: ServiceItem }) {
  const [flipped, setFlipped] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();

  const handleExploreClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowLoader(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
    router.push(service.href);
  }, [router, service.href]);

  return (
    <>
      <PlanetaryLoader isLoading={showLoader} onComplete={handleLoaderComplete} />
      <div
        className="relative w-full h-[460px] sm:h-[500px] perspective-[1200px] cursor-pointer group"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="absolute inset-0 rounded-[40px] shadow-2xl"
          style={{ transformStyle: 'preserve-3d', rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* FRONT */}
          <div className="absolute inset-0 rounded-[40px] overflow-hidden flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
            <div className="h-56 overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-nidra-indigo/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: service.accent }} />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md">
              <h3 className="font-serif text-2xl text-nidra-indigo font-bold">{service.title}</h3>
              <p className="text-sm text-nidra-indigo/60 mt-2">{service.tagline}</p>
              <span className="mt-4 text-xs font-medium px-4 py-1.5 rounded-full" style={{ backgroundColor: service.accent + '20', color: service.accent }}>
                Tap to explore →
              </span>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/95 via-white/80 to-white/60 backdrop-blur-xl border-2 flex flex-col" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: service.accent + '40' }}>
            <div className="px-6 py-4" style={{ backgroundColor: service.accent + '15' }}>
              <h4 className="font-serif text-xl text-nidra-indigo font-bold">{service.title}</h4>
              <p className="text-xs text-nidra-indigo/60 mt-1">{service.description}</p>
            </div>
            <div className="flex-1 px-6 py-4 overflow-y-auto">
              <ul className="space-y-2 text-sm text-nidra-indigo/70">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4">
              <button
                onClick={handleExploreClick}
                className="inline-flex items-center justify-center w-full py-3 rounded-full text-white font-medium text-sm transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: service.accent }}
              >
                Explore {service.title} →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export function SacredServices() {
  const ref = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollYProgress } = useScroll(
    isMounted && ref.current ? { target: ref, offset: ['start end', 'end start'] } : undefined
  );
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);

  const extensiveServices = allServices.filter(s => s.category === 'extensive');
  const advanceServices = allServices.filter(s => s.category === 'advance');
  const vedicServices = allServices.filter(s => s.category === 'vedic');

  const pillars = [
    { name: 'Extensive Framework', subtitle: 'विस्तृत ढांचा', services: extensiveServices },
    { name: 'Advance Treatments', subtitle: 'उन्नत उपचार', services: advanceServices },
    { name: 'Vedic Applications', subtitle: 'वैदिक अनुप्रयोग', services: vedicServices },
  ];

  return (
    <motion.section
      ref={ref}
      style={isMounted ? { opacity, y } : undefined}
      className="py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-16">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-4 mb-4 leading-tight">
            Holistic Vastu Solutions for{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Every Aspect of Life</span>
          </h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm sm:text-base">
            Sukh, Samriddhi, Shanti aur Swasthya ka Sankalp — 16 Vedic services covering all dimensions of spatial harmony.
          </p>
        </motion.div>

        <div className="space-y-20">
          {pillars.map((pillar) => (
            <div key={pillar.name}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10 rounded-full border border-prakash-gold/20">
                  <span className="w-2 h-2 rounded-full bg-prakash-gold" />
                  <span className="font-serif text-xl text-nidra-indigo font-bold">{pillar.name}</span>
                  <span className="text-xs text-nidra-indigo/50">({pillar.subtitle})</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto place-items-center">
                {pillar.services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                  >
                    <FlipCard service={service} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
export default SacredServices;
