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

export default function LandSelectionPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Extensive Framework</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-emerald-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Land Selection</span></h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">Bhoomi Sanskar · Usarology · Kamadahana Soil Testing</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">Ensure your plot is cosmically aligned before a single brick is laid. 100M+ views, 80K+ followers.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Land Audit</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />

      {/* JOURNEY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Land Audit — <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Secure Your Foundation</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[{step:'01',title:'Submit Details',desc:'Computerized layout + photos (PDF) + location coordinates sent to Acharya'},{step:'02',title:'Deep Land Audit',desc:'Bhoomi Dosh check, Kamadahana soil test, slope & elevation, surroundings analysis'},{step:'03',title:'Clearance or Fix',desc:'Auspicious → Checkpoint passed. Doshas → Remedies & corrections provided'},{step:'04',title:'Bhoomi Puja',desc:'If needed, Vastuvid KK Nagaich performs Bhoomi Sanskar to purify & energize the land'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{s.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-vastu-stone/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">🌍 Land Selection Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PainPointCard title="Residential Plot Purchase" accent="#10B981" points={["Multiple plots rejected — can't finalize, nothing feels right","Broker showing plots that look good but you sense something wrong","Family members disagreeing on plot selection","Fear of Bhoomi Dosh — land's previous history unknown","Soil quality concerns — will foundation hold?","Slope direction fears — east‑low means loss of wealth?","Nearby cemetery, temple, hospital — is it bad?","Multiple owners, legal disputes, unclear title","Plot rate inflated, no resale value","Fear: 'What if I invest everything and it's a disaster?'"]} />
            <PainPointCard title="Commercial/Industrial Land" accent="#C88A5D" points={["Land acquired but construction not starting — years of delay","Government acquisition threat, zoning issues","Groundwater problems, flooding, soil instability","Connectivity issues despite promised infrastructure","Nearby pollution source affecting land value","Unable to get construction loans due to land classification","Squatters or encroachment on land","Court cases on land ownership stretching for years","Land price depreciating despite market growth","Multiple partners fighting over land use rights"]} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Investment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">Pricing Plans — Land Audit</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard plan="Silver" price="₹4,999" color="#C0C0C0" features={["No physical visit","Layout & land analysis","Remedies via upto 30‑min call","One‑time delivery"]} />
            <PricingCard plan="Gold" price="₹6,999" color="#FFD700" features={["All Silver features","2 follow‑up calls","Virtual meeting","Extended land audit"]} />
            <PricingCard plan="Luxury" price="₹9,999" color="#E8B960" features={["All Gold features","1 personal site visit","Complete Bhoomi audit","Bhoomi Sanskar Puja if needed","Multiple follow‑ups"]} />
          </div>
        </div>
      </section>

      <RemediesCTA /><VirtualConsultCTA />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Secure Your Land's Future</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — Vastuvid KK Nagaich personally audits every plot.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Your Land Audit →</Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
