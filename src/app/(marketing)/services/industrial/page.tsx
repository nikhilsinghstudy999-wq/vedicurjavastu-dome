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
  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-prakash-gold/20 shadow-lg hover:shadow-xl transition-all">
      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: color }} />
      <h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{plan}</h3>
      <div className="text-3xl font-bold mt-2" style={{ color }}>{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">{features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:color}}/>{f}</li>)}</ul>
    </motion.div>
  );
}

export default function IndustrialVastuPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Extensive Framework</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-400 bg-clip-text text-transparent">Industrial Vastu</span></h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">Factories · Plants · Warehouses · GIDC/MIDC Plots</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">MBA + Ex‑CEO — optimizing industrial operations through Vedic spatial science. 100M+ views, 80K+ followers.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Industrial Audit</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />

      {/* JOURNEY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Industrial Audit — <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Safety to Profitability</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[{step:'01',title:'Site Layout',desc:'Factory floor plan + machinery layout + photos submitted for audit'},{step:'02',title:'Deep Audit',desc:'Heavy machinery zones, fire safety, material flow, worker productivity analyzed'},{step:'03',title:'Risk Mapping',desc:'Every defect linked to accident risk, production loss, breakdown frequency'},{step:'04',title:'Industrial Remedies',desc:'Non‑structural corrections + Vishwakarma Puja + Bhoomi Shanti for sick units'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{s.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-vastu-stone/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">🏭 Factory & Plant Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PainPointCard title="New Factory Setup" accent="#6366F1" points={["Project delayed 6‑12 months beyond timeline","Budget overrun by 40‑60% with no clear cause","Machinery delivery delayed, customs issues, supplier fraud","Loan sanctions stalled, investor backing withdrawn","Land acquisition disputes, compensation conflicts","Contractor abandoning project midway","Worker accidents during construction phase","Political interference, local opposition","Partner pulling out of investment","Fear of becoming a 'sick unit' before production starts"]} />
            <PainPointCard title="Existing Factory Problems" accent="#EF4444" points={["Production declining despite same machinery and workforce","Machine breakdowns increasing — maintenance costs doubling","Worker strikes, union problems, labor unrest","Quality complaints from buyers, export rejections","Raw material wastage higher than industry standard","Fire incidents, electrical hazards, safety violations","Government inspections, penalty notices, license issues","Unable to compete on pricing despite lower input costs","Key management leaving for competitors","Factory operating at 40‑60% capacity with no clear bottleneck"]} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Investment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">Pricing Plans — Industrial</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard plan="Silver" price="₹9,999" color="#C0C0C0" features={["No physical visit","Layout audit & suggestions","Remedies via upto 30‑min call"]} />
            <PricingCard plan="Gold" price="₹14,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting","Safety audit report"]} />
            <PricingCard plan="Luxury" price="₹24,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete industrial audit","Vishwakarma Puja ritual","Multiple follow‑ups","Worker safety alignment"]} />
          </div>
        </div>
      </section>

      <RemediesCTA /><VirtualConsultCTA />
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Optimize Your Industrial Operations</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally audited by Vastuvid KK Nagaich.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Your Industrial Audit →</Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
