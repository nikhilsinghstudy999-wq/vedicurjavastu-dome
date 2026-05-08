'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import PainPointCard from '@/features/shared/components/luxury/PainPointCard';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import RemediesCTA from '@/features/shared/components/luxury/RemediesCTA';
import VirtualConsultCTA from '@/features/shared/components/luxury/VirtualConsultCTA';
import Link from 'next/link';
import { motion } from 'framer-motion';

function PricingCard({ plan, price, color, features }: { plan: string; price: string; color: string; features: string[] }) {
  return (<motion.div whileHover={{ y: -8, scale: 1.03 }} className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-prakash-gold/20 shadow-lg hover:shadow-xl transition-all"><div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} /><h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3><div className="text-3xl font-bold mt-2" style={{ color }}>{price}</div><ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">{features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full" style={{backgroundColor:color}}/>{f}</li>)}</ul></motion.div>);
}

export default function NewConstructionVastuPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]"><div className="container mx-auto px-4 relative z-10 text-center mt-16"><span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block">Extensive Framework</span><h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-amber-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">New Construction Vastu</span></h1><p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">100M+ views · 80K+ followers · From foundation to housewarming.</p><Link href="/bookings" className="luxury-button text-lg">Book Construction Audit</Link></div></section>
      <GuruAuthority /><WhyChooseUs />

      <section className="py-20 bg-white"><div className="container mx-auto px-4 max-w-5xl"><h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Your Construction Vastu Journey</h2><div className="grid sm:grid-cols-4 gap-4 mb-16">{[{s:'01',t:'Submit Land Details',d:'Computerized layout of land + photos (PDF) + location'},{s:'02',t:'Acharya Audit',d:'Deep analysis of land orientation, slope, soil, surroundings'},{s:'03',t:'Get Corrections',d:'If correct → Clear checkpoint. If flaws → Solutions provided'},{s:'04',t:'Re‑audit',d:'Remake layout with corrections, send back. Acharya re‑verifies'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.s}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{s.t}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.d}</p></motion.div>))}</div></div></section>

      <section className="py-20 bg-vastu-stone/10"><div className="container mx-auto px-4 max-w-5xl"><h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">Construction Nightmares?</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <PainPointCard title="New Construction" accent="#8B5CF6" points={["Construction delays and budget explosions","Contractor conflicts — quality fears","Family conflicts intensified during construction","Loan approval nightmares despite good credit","Fear of lifetime regret","Accidents on site","Neighbor and legal disputes","Family health declining during construction","Architect‑Vastu conflict","Bhoomi Dosh — land carrying negative history"]} />
        <PainPointCard title="Post‑Construction" accent="#10B981" points={["The house feels 'heavy' and depressing","Pets keep dying or running away","Same disease pattern across family members","Business declining despite market growth","Children not settling","Termites, dampness, structural decay","Frequent robberies in neighborhood","Neighbors prospering while you struggle","Unable to sell or renovate","Trapped in a space working against you"]} />
      </div>
      <h3 className="font-serif text-2xl text-center text-nidra-indigo mb-8">Pricing Plans</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard plan="Silver" price="₹4,999" color="#C0C0C0" features={["No physical visit","Layout suggestions & corrections","Remedies via upto 30‑minute call","One‑time audit (additional ₹2,199 each)"]} />
        <PricingCard plan="Gold" price="₹6,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting","2 callbacks of audit included"]} />
        <PricingCard plan="Luxury" price="₹9,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete Vastu audit","Multiple follow‑up audits","Full ritual execution"]} />
      </div></div></section>

      <RemediesCTA /><VirtualConsultCTA />
      <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" /><div className="container mx-auto px-4 relative z-10 text-center"><h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Build with Confidence</h2><p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally guided by Vastuvid KK Nagaich.</p><Link href="/bookings" className="luxury-button text-lg">Schedule Your Construction Audit →</Link></div></section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
