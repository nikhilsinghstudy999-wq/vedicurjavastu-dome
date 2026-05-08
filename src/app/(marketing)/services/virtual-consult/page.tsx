'use client';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import GuruAuthority from '@/features/shared/components/GuruAuthority';
import WhyChooseUs from '@/features/shared/components/luxury/WhyChooseUs';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VirtualConsultPage() {
  const benefits = ['60‑Min Personalised Session','Screen‑Share Floor Plan Analysis','Post‑Session Written Report','Global Accessibility','Confidential & Secure','Flexible Scheduling'];
  return (<>
    <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
        <div className="container mx-auto px-4 relative z-10 text-center mt-16">
          <span className="text-prakash-gold uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Vedic Application</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-2xl"><span className="bg-gradient-to-r from-cyan-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Virtual Consult</span></h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-4">Live one‑on‑one video consultation — the full depth of Vastu guidance, from anywhere in the world.</p>
          <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10">100M+ views, 80K+ followers — Vastuvid KK Nagaich personally conducts every session.</p>
          <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Virtual Session</Link>
        </div>
      </section>
      <GuruAuthority /><WhyChooseUs />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
            <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Your Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">How Virtual Consultation Works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-4 gap-4 mb-16">
            {[{step:'01',title:'Book a Slot',desc:'Choose your time via the booking form — flexible IST slots for global timezones'},{step:'02',title:'Share Details',desc:'Upload computerized layout plan, photos, and specific concerns before the session'},{step:'03',title:'Video Call',desc:'60‑minute secure video call — Acharya analyzes your space via screen share'},{step:'04',title:'Receive Report',desc:'Post‑session PDF report with all doshas, remedies, and step‑by‑step plan'}].map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center p-6 bg-vastu-stone/20 rounded-2xl"><div className="text-3xl font-bold text-prakash-gold mb-2">{s.step}</div><h3 className="font-serif text-lg text-nidra-indigo font-bold">{s.title}</h3><p className="text-sm text-nidra-indigo/60 mt-2">{s.desc}</p></motion.div>))}
          </div>
          <div className="text-center"><h3 className="font-serif text-2xl text-nidra-indigo mb-6">Benefits</h3><div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">{benefits.map(b=>(<div key={b} className="p-4 bg-vastu-stone/20 rounded-xl text-sm text-nidra-indigo/70">{b}</div>))}</div></div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2e] via-[#1a2a4e] to-[#0f1a2a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Book Your Virtual Session</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">100M+ views, 80K+ followers — personally conducted by Vastuvid KK Nagaich.</p>
          <Link href="/bookings" className="luxury-button text-lg">Schedule Now →</Link>
        </div>
      </section>
    </SmoothScroll>
    <style>{`@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
  </>);
}
