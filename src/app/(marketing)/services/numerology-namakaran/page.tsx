'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import PainPointCard from '@/features/shared/components/luxury/PainPointCard';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NumerologyNamakaranPage() {
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Advance Treatment</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-blue-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Numerology & Namakaran</span></h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">108‑Syllable Nakshatra Naming · Business Numerology · Mobile Number Analysis — All in One</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">100M+ views, 80K+ followers — India's most‑viewed naming & numerology expert.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-blue-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Numerology Consultation</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />

      {/* JOURNEY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Name & Number — <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">Your Vibration</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[{step:'01',title:'Submit Details',desc:'Birth details → Janma Nakshatra & Pada calculated. Or share current name/number'},{step:'02',title:'Vibration Analysis',desc:'108 sacred syllables checked. Mobile digits analyzed against birth chart'},{step:'03',title:'Recommendations',desc:'Best name syllable selected. 3‑5 alternative numbers recommended'},{step:'04',title:'Ceremony',desc:'Namakaran ceremony performed (optional). Activation Muhurat for new SIM'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{s.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p></motion.div>))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 bg-vastu-stone/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl text-center text-nidra-indigo mb-12">🔢 What's in a Name? Everything.</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <PainPointCard title="Newborn Naming" accent="#2563EB" points={["Family pressure to use traditional names you don't like","Multiple pandits giving different name suggestions","Fear of wrong name causing life problems","Child frequently ill since birth — is the name wrong?","Astrologer suggested name that already exists in family","Modern vs. traditional name conflict with spouse","Nakshatra syllable sounds harsh, can't find good names","Child's birth star is 'difficult' — fear of doshas","Both partners have different cultural backgrounds","Fear of judgment from relatives on chosen name"]} />
            <PainPointCard title="Business Naming" accent="#7C3AED" points={["Business struggling despite good product — name the problem?","Multiple businesses failed with similar names","Partner insisting on a name that 'doesn't feel right'","Domain name for chosen business name already taken","Logo designed, registration done, but something feels off","Competitors with similar names succeeding, you're not","Legal disputes over business name","Name is hard to pronounce, recall, or search online","Business numerology number is 'bad'","Rebranding cost fear — already invested in logo"]} />
            <PainPointCard title="Mobile Number Issues" accent="#059669" points={["Life was fine until you changed your number","Every call brings bad news — you dread phone ringing","Business calls don't convert — clients lose interest","Relationships breaking after number change","Getting spam, fraud calls, harassment","Number given by 'expert' but problems increased","Dual SIM confusion — one works, other doesn't","Friends say your number is 'unlucky'","Family insisting on number change, you're skeptical","Multiple SIM cards, none bringing peace"]} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Investment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo">Pricing Plans</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{plan:'Basic',price:'₹1,999',color:'#C0C0C0',features:['One naming consultation (newborn/business/adult)','OR one mobile number audit','Nakshatra syllable identification','Upto 30‑minute call']},{plan:'Premium',price:'₹4,999',color:'#2563EB',features:['All Basic features','Both naming + mobile number analysis','Business numerology audit','Multiple name alternatives','Activation Muhurat','48‑day mantra protocol if needed']}].map(p=>(<motion.div key={p.plan} whileHover={{y:-8,scale:1.03}} className="relative p-6 rounded-2xl bg-white/80 border border-prakash-gold/20 shadow-lg"><div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{backgroundColor:p.color}}/><h3 className="font-serif text-xl text-nidra-indigo font-bold mt-2">{p.plan}</h3><div className="text-3xl font-bold mt-2" style={{color:p.color}}>{p.price}</div><ul className="mt-4 space-y-2 text-sm text-nidra-indigo/70">{p.features.map((f,i)=><li key={i} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:p.color}}/>{f}</li>)}</ul></motion.div>))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a1a4e] to-[#0f0f2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Discover Your Auspicious Name & Number</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally analyzed by Vastuvid KK Nagaich.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Your Consultation →</Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
