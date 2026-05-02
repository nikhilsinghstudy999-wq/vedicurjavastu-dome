import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function ResidentialVastuPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-sacred-saffron/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Residential Vastu</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Brahmnabhi · Dehali Sthapna · Garbh Vinyas · Interior Vastu · Devata Vastu</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">11 authentic Vedic residential pujas — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO, 2 Lakh+ clients worldwide.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Consultation</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── 64‑GRID MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Vastu Purusha Mandala – 81‑Grid Residential Architecture</h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Every residential Vastu consultation begins with the <strong>Vastu Purusha Mandala</strong> — the 9×9 grid of 81 squares. At VedicUrja, Vastuvid K.K. Nagaich overlays this ancient cosmic diagram onto your floor plan to identify doshas and prescribe precise remedies.</p>
            </div>
          </div>
        </section>

        {/* ── 11 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 11 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Pujas for Complete Home Energy Harmonisation</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each puja is performed at an astrologically determined Muhurta.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Bhoomi Sanskar (Land Purification)',desc:'Panchgavya, Panchamrit, Sarvaushadhi used to consecrate land. Pit dug in NE corner. Best Nakshatras: Rohini, Uttara, Anuradha, Hastham, Pushya.',features:['Site cleansing & sanctification','Panchgavya & Panchamrit offering','Vastu Purusha invocation','Kalash Sthapana in NE','Muhurta selection'],color:'#E8B960'},
                {num:'02',title:'Shilanyas (Foundation Stone Laying)',desc:'Consecrated stone laid in SW corner of trenches. Includes Sutra‑Pada, Ganesh Puja, Sankalpa, Kalash Sthapana.',features:['Foundation stone consecration','Sutra‑Pada site measurement','Ganesh Puja & Sankalpa','Kalash Sthapana & Navratna','SW corner placement'],color:'#C88A5D'},
                {num:'03',title:'Brahmnabhi Sthapna (Central Energy Activation)',desc:'Divine Energy Tool installed at geometric centre (Brahmasthan) connecting home to cosmic Prana. EMF management included.',features:['Geometric centre identification','Divine Energy Tool installation','Cosmic Prana connection','EMF disruption neutralisation','8‑directional calibration'],color:'#FF9933'},
                {num:'04',title:'Dehali Sthapna (Main Door Threshold Puja)',desc:'Invokes Maa Lakshmi, neutralises Rahu dosha, establishes threshold as guardian of prosperity. Decorated with Swastik, rangoli, flowers.',features:['Threshold sanctification','Maa Lakshmi invocation','Rahu dosha neutralisation','Swastik & auspicious symbols','Entrance energy calibration'],color:'#E25822'},
                {num:'05',title:'Garbh Vinyas (Foundation Deposit / Womb Arrangement)',desc:'Seed bowl, gold plough, copper yoke, silver cow at cardinal points. Awakens Vastu Purusha. Described in Padmasaṃhitā.',features:['Seed bowl & gold plough','Cardinal silver cow','Vastu Purusha awakening','Creative energy connection','Agama‑prescribed sequence'],color:'#8B5A2B'},
                {num:'06',title:'Interior Vastu (Room‑by‑Room Directional Alignment)',desc:'Audit of 12+ zones: entrance, living, kitchen, bedroom, children, pooja, dining, bathroom, staircase. Direction + furniture + colour + ventilation.',features:['12‑zone room‑by‑room audit','Kitchen SE, East‑facing cook','Bedroom SW, head South','Living N/E light tones','Pooja NE clean & sacred'],color:'#D4A373'},
                {num:'07',title:'Devata Vastu (Deity Placement & Home Temple)',desc:'Mandir in NE, deities face West. Idols 2‑9 inches on raised platform. Brass/copper utensils. Daily ghee lamp. Never share toilet wall.',features:['NE corner temple','Deity West‑facing','Raised platform (6‑12\")','Brass/copper utensils','Daily ghee lamp'],color:'#FFD700'},
                {num:'08',title:'Prateek Vastu (Sacred Symbol Placement)',desc:'Swastik, Om, Trishul, mandala patterns at entrance, N/E walls, pooja room. Brass pyramids for SW. Rangoli & diyas in SE.',features:['Swastik wealth activation','Om cosmic vibration','Trishul protection','Rangoli & diya in SE','Brass pyramid SW'],color:'#FF6347'},
                {num:'09',title:'Ratna Sthapna (Nav‑Ratna Gemstone Embedment)',desc:'9 certified gemstones (Ruby to Cat\'s Eye) embedded under flooring per Mayamatam. Permanent Vastu correction.',features:['9 certified gemstones','Planetary correspondence','Directional embedment','Mayamatam placement','Permanent correction'],color:'#9370DB'},
                {num:'10',title:'Divya Grah Pravesh (Grand Housewarming)',desc:'Ganesh Puja, Kalash Puja, Navagraha Shanti, Vastu Puja, Havan, coconut breaking, milk‑boiling ceremony.',features:['Ganesh & Kalash Puja','Navagraha Shanti Havan','Vastu Purusha Havan','Coconut breaking','Milk boiling abundance'],color:'#E8B960'},
                {num:'11',title:'Vastu Shanti Puja (Ongoing Harmonisation)',desc:'Space cleansing, Gangajal sprinkling, Ashoka leaves, Kalash Sthapana, Havan. Balances five elements. Annual renewal recommended.',features:['Space cleansing & Gangajal','Ashoka leaf & Swastik','Vastu Purusha mantra','Ghee & herb Havan','Annual renewal'],color:'#C10000'},
              ].map((p,i)=>(
                <div key={i} className={`flex flex-col ${i%2===0?'lg:flex-row':'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{backgroundColor:p.color}}/>
                      <div className="text-6xl font-bold mt-4 mb-2" style={{color:p.color}}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title.split('(')[0].trim()}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g,'')}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">{p.features.map((f,j)=><span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{borderColor:p.color+'30',backgroundColor:p.color+'08',color:p.color}}>{f}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROOM‑BY‑ROOM CHECKLIST ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Room‑by‑Room Vastu Checklist</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {room:'Main Entrance',dir:'NE, East, or North',tip:'Largest door; opens inward; Swastik/Om symbols; well‑lit',color:'#E8B960'},
                {room:'Living Room',dir:'North or East',tip:'Heavy furniture S/W/SW; seating faces East/North; light colours',color:'#10B981'},
                {room:'Kitchen',dir:'Southeast (Agni)',tip:'Cook facing East; sink NE corner; stove SE; warm colours',color:'#EF4444'},
                {room:'Master Bedroom',dir:'Southwest',tip:'Head South for sleep; bed SW corner; avoid mirrors opposite bed',color:'#6366F1'},
                {room:'Children\'s Room',dir:'Northwest or West',tip:'Bed head East; study desk facing East/North; green/blue colours',color:'#F59E0B'},
                {room:'Pooja Room',dir:'Northeast (Ishanya)',tip:'Deities face West; raised platform; brass/copper; ghee lamp daily',color:'#FFD700'},
                {room:'Bathroom',dir:'NW or SE only',tip:'Never NE or centre; door always closed; exhaust fan East/North',color:'#06B6D4'},
                {room:'Dining Room',dir:'West or East',tip:'Near kitchen; face East/North while eating; square/rectangular table',color:'#8B5CF6'},
                {room:'Staircase',dir:'South, West, or SW',tip:'Clockwise ascent; never NE or centre; odd number of steps',color:'#EC4899'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.room}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Best direction:</strong> {item.dir}</p><p className="text-xs text-nidra-indigo/60">{item.tip}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies Without Demolition</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Crystal Pyramids',desc:'Copper & brass pyramids at dosha points absorb negative energy.',color:'#E8B960'},
                {title:'Yantras',desc:'Vastu Purush Yantra, Shri Yantra, Kuber Yantra, Mangal Yantra.',color:'#FF9933'},
                {title:'Colour Therapy',desc:'Warm tones for SE; cool tones for N; peach for SW bedroom.',color:'#06B6D4'},
                {title:'Mirror Placement',desc:'Mirrors on N/E walls amplify; dining mirror doubles food.',color:'#10B981'},
                {title:'Salt & Water',desc:'Rock salt bowls absorb negativity; copper vessel in NE.',color:'#6366F1'},
                {title:'Metal Strips',desc:'Brass/copper/silver strips under flooring create protective barrier.',color:'#C88A5D'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#3a0a0a] to-[#0a0000] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-sacred-saffron/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Transform Your Home</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private residential Vastu consultation covering all 11 pujas.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Residential Audit →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SmoothScroll>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}@keyframes heroLoop{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </>
  );
}
