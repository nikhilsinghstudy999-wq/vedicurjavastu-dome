import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function NewConstructionVastuPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-amber-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-amber-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">New Construction Vastu</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Bhoomi Puja · Shilanyas (Foundation Stone) · Garbh Vinyas (Foundation Deposit) · Ratna Sthapna (Nav‑Ratna Embedment) · Dhatu Adhyay (Metal Installation) · Vastu Planning & Blueprint Audit · Griha Pravesh · Vastu Shanti</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred new construction practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, temples, offices & institutions built from the ground up.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Construction Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── MATSYA PURANA 5 CEREMONIES ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint Before a Single Brick</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Five Essential Vastu Ceremonies of the Matsya Purana</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">The Matsya Purana prescribes five essential ceremonies: sutra‑pada (site measuring), main pillar raising, door fixing ceremony, griha pravesha, and vastu‑santi. The foundation pillar must be raised on a stone block under which precious jewels have been deposited.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Practices for New Construction – From Foundation to Housewarming</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice grounded in the Matsya Purana, Mayamatam, Manasara, and Brihat Samhita.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Bhoomi Puja (Site Purification & Foundation Stone)',desc:'Cleaning with Gangajal. 81‑part Vastu Purusha drawing in NE corner. Silver idol of snake god (Sheshnaag) worshipped. Ganesh Puja, Kalash Sthapana, Sankalpa, Shatkarma, Pran Pratishtha, Havan. Auspicious months: Baisakh, Shravan, Margshirsh, Falgun.',features:['81‑part Vastu Purusha drawing','Gangajal site purification','Naga deity silver idol','Kalash Sthapana','Havan with ghee & herbs'],color:'#10B981'},
                {num:'02',title:'Shilanyas (Foundation Stone Laying)',desc:'Sutra‑pada: dividing site into 64/81/100 squares. Foundation stone in SW corner. Ratna deposit under main pillar. Ganesh Puja, Sankalpa, Kalash Sthapana, Bhoomi Devi worship. Second of five Matsya Purana ceremonies.',features:['Sutra‑pada site division','Foundation stone in SW','Ratna under foundation pillar','Ganesh Puja & Sankalpa','Muhurta selection'],color:'#C88A5D'},
                {num:'03',title:'Garbh Vinyas / Garbhanyasa (Foundation Deposit)',desc:'Seven sacred earths from riverbanks, mountains, anthills, cow paths. Cardinal plants: white lotus (centre), blue lotus (E), water‑lily (S), fragrant grass (W), gunja plant (N). Eight grains, sacred metals (gold, silver, iron, copper), divine symbols. Panchagavya site washing.',features:['7 sacred earths deposit','Cardinal plants placement','8 grains + 4 sacred metals','Panchagavya purification','Vastu Purusha awakening mantras'],color:'#FFD700'},
                {num:'04',title:'Ratna Sthapna – Ratnadhyaya (Nav‑Ratna Embedment)',desc:'9 certified gemstones (Ruby to Cat\'s Eye) embedded at directional points per Vastu Purusha Mandala. Mayamatam, Aprajitpruchha, Manasara all contain Ratnadhyaya chapters. Copper Swastika co‑placement. Original or semi‑precious as per budget.',features:['9 certified Nav‑Ratna','Mayamatam placement protocol','Copper Swastika co‑placement','Planetary mantra energisation','Original/semi‑precious options'],color:'#EF4444'},
                {num:'05',title:'Dhatu Adhyay (Panch‑Dhatu Metal Installation)',desc:'Gold, silver, copper, brass, iron deposited at directional points. Copper strips in floor grooves seal negative energy. Brass strips for space element. Silver for spiritual amplification. Creates permanent Faraday‑type protective field beneath building.',features:['Panch‑Dhatu: 5 sacred metals','Copper strips for earth','Brass strips for space','Faraday‑type energy grid','Floor‑groove embedment'],color:'#FF9933'},
                {num:'06',title:'Vastu Planning & Blueprint Audit',desc:'81‑grid Mandala overlay on architectural blueprint. 16‑zone + 32‑entrance directional analysis. Brahmasthan kept open. SW heavier, NE lighter and open. Floor slope verification: SW highest → NE lowest. Room‑by‑room directional compliance audit.',features:['81‑grid Mandala overlay','16‑zone + 32‑entrance analysis','Brahmasthan kept open','SW→NE slope verification','Room‑by‑room compliance'],color:'#6366F1'},
                {num:'07',title:'Construction Phase Rituals',desc:'Door fixing ceremony: 32‑pada entrance analysis. Main pillar raised on consecrated stone + ratna. Construction NE→SW progression. Dehali (threshold) Lakshmi invocation. Door largest in house, opens inward.',features:['Door fixing: 32‑pada analysis','Main pillar on stone + ratna','NE→SW construction progression','Dehali Lakshmi invocation','Door largest, opens inward'],color:'#F59E0B'},
                {num:'08',title:'Griha Pravesh – Apoorva (First Housewarming)',desc:'Fourth Matsya Purana ceremony. Entering at most auspicious Muhurta carrying sacred fire. Ganesh Puja, Kalash Puja, Navagraha Shanti, Vastu Puja, Havan. Milk‑boiling tradition: overflowing milk symbolises abundance. Roof complete, doors fitted with shutters.',features:['Apoorva Griha Pravesh','Sacred fire entry','Milk‑boiling abundance','Ganesh+Kalash+Navagraha','Muhurta by planetary transit'],color:'#EC4899'},
                {num:'09',title:'Vastu Shanti Puja & Post‑Construction Harmonisation',desc:'Fifth Matsya Purana ceremony. Pacifying Vastu Purusha, 8 Dikpalas, 9 Navagrahas. Ganapati, Navagraha, Kalash, Havan, Mangal Aarti. Medicinal smoke air purification. Annual renewal recommended.',features:['Vastu Purusha pacification','Dikpala+Navagraha blessings','Kalash Poojan & Havan','Medicinal smoke purification','Annual renewal'],color:'#8B5CF6'},
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

        {/* ── CONSTRUCTION PHASE CHECKLIST ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Construction Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The 5‑Ceremony Sequence — Matsya Purana Timeline</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {phase:'Phase 1: Pre‑Construction',tasks:'Bhoomi Puja (NE corner). Sutra‑pada (81‑grid marking). Shilanyas (foundation stone SW). Garbh Vinyas (foundation deposit). Ratna Sthapna. Dhatu Adhyay.',color:'#10B981'},
                {phase:'Phase 2: Foundation Digging',tasks:'Start from NE, progress towards SW. SW wall thickest, thinnest in NE. Foundation depth = plinth height.',color:'#FFD700'},
                {phase:'Phase 3: Main Pillar & Walls',tasks:'Main pillar raised on consecrated stone + ratna. Walls thicker in S & W. Door fixing ceremony. Main door largest.',color:'#FF9933'},
                {phase:'Phase 4: Roof & Flooring',tasks:'SW highest point → NE lowest slope. Roof complete before Griha Pravesh. More windows in N & E walls.',color:'#C88A5D'},
                {phase:'Phase 5: Completion',tasks:'Griha Pravesh (Apoorva). Sacred fire carried in. Milk‑boiling ceremony. Vastu Shanti Puja. Annual renewal.',color:'#8B5CF6'},
                {phase:'Key Dimensions',tasks:'Room corners: 90°. Foundation 4½ inches per brick. Door height = 2× width. 81‑grid domestic, 81‑grid temples.',color:'#6366F1'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.phase}</h3><p className="text-xs text-nidra-indigo/60 mt-1">{item.tasks}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── PERMANENT CORRECTIONS ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Construction‑Phase Only</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Permanent Vastu Corrections — Only Possible During Construction</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Nav‑Ratna Embedment',desc:'9 certified gemstones at precise points under flooring — permanent energy grid impossible to retrofit.',color:'#EF4444'},
                {title:'Copper/Brass Strip Grid',desc:'Metal strips in floor grooves create conductive Faraday‑type barrier. Invisible post‑construction.',color:'#FFD700'},
                {title:'Foundation Ratna Deposit',desc:'Precious jewels, gold, silver, copper, grain deposits in foundation pit before pillar raising.',color:'#FF9933'},
                {title:'Directional Soil Correction',desc:'7 sacred earths at cardinal points — the energetic foundation of the entire structure.',color:'#10B981'},
                {title:'Copper Swastika + Yantra',desc:'Copper Swastika with gemstones under flooring. Vastu Purush + Sri Yantra for comprehensive energisation.',color:'#8B5CF6'},
                {title:'Brahmasthan Consecration',desc:'White lotus root, specific mantras, copper Kalash at centre. Energy axis of entire building.',color:'#C88A5D'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#3a1a00] to-[#1a0a00] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Guide Your Construction from Foundation to Housewarming</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">The construction phase is the single window for permanent Vastu corrections. Book a private New Construction consultation covering all 9 sacred practices.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Construction Audit →</Link>
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
