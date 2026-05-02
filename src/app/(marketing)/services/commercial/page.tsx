import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function CommercialVastuPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.06),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-400 bg-clip-text text-transparent">Commercial Vastu</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Pratishthan Vastu · Kuber Zone Activation · Cash Counter Alignment · Owner Seating · Employee Productivity Grid · Entrance Correction · Business Puja & Havan</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred commercial Vastu practices — performed by Vastuvid K.K. Nagaich for offices, shops, showrooms, factories & institutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Commercial Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── 64‑GRID MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Business</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Vastu Purusha Mandala – 81‑Grid Commercial Architecture</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">For offices and shops, the Paramasayika Mandala (9×9 grid) maps the Vastu Purusha. Each square is governed by a deity, each direction by an element.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Pujas for Business Growth & Financial Stability</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice performed at an astrologically determined Muhurta.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Ganapati & Lakshmi Puja (Business Opening)',desc:'Lord Ganesha worshipped first to remove obstacles, then Goddess Lakshmi for prosperity. Idols in NE corner or right‑hand side. Foundation of every new commercial inauguration.',features:['Ganesh Puja – obstacle removal','Lakshmi Puja – prosperity','Idol placement NE or right side','Prasad distribution','Muhurta selection'],color:'#E8B960'},
                {num:'02',title:'Kuber Yantra Sthapana (Wealth Zone Activation)',desc:'Kuber Yantra placed on North wall near accounts. Copper or silver preferred. Cash locker in SW opening North. Daily ghee lamp & incense activation.',features:['North wall Kuber installation','Copper/silver yantra','Cash locker SW→North','Daily ghee lamp','Accounts desk E/N'],color:'#10B981'},
                {num:'03',title:'Shri Yantra / Mahalakshmi Yantra',desc:'Geometric essence of prosperity placed in East/NE above waist height. Crystal or panchadhātu material. Triangle point facing East. Daily sankalpa.',features:['East/NE placement','Crystal or panchadhātu','Triangle point East','Daily sankalpa ritual','Ghee lamp in front'],color:'#FFD700'},
                {num:'04',title:'Vastu Puja & Havan (Space Purification)',desc:'Kalash Sthapana, Vastu Purusha invocation, ghee & herb Havan. Purifies five elements, removes pre‑existing doshas, energises for business.',features:['Kalash Sthapana','Vastu Purusha invocation','Ghee & herb Havan','Five‑element balancing','Dosha removal'],color:'#C10000'},
                {num:'05',title:'Navagraha Shanti Puja (Planetary Balance)',desc:'Appeasing 9 planetary deities, particularly Saturn, Rahu, Ketu. Clears business obstacles, promotes economic growth. Homa included.',features:['9 planetary deity appeasement','Saturn/Rahu/Ketu focus','Specific mantra for each planet','Homa (fire ritual)','Financial growth'],color:'#6366F1'},
                {num:'06',title:'Vyapar Vriddhi Puja (Business Growth)',desc:'Combines Ganesh‑Lakshmi worship with Vyapar Vriddhi mantras, Havan, and Sampurna Vyapaar Vriddhi Yantra installation for stagnant businesses.',features:['Ganesh‑Lakshmi worship','Vyapar Vriddhi mantras','Vyapaar Vriddhi Yantra','Havan for energy renewal','Sustained growth'],color:'#F59E0B'},
                {num:'07',title:'Griha Pravesh / Office Opening Puja',desc:'Milk‑boiling ritual (abundance), coconut breaking, Kalash Puja, sacred Havan. Muhurta selected astrologically.',features:['Milk‑boiling abundance','Coconut breaking','Kalash Puja','Sacred Havan','Muhurta selection'],color:'#EC4899'},
                {num:'08',title:'Subh Labh – Riddhi Siddhi Sthapana',desc:'Swastik, Shubh‑Labh, Riddhi‑Siddhi on walls. Mango/banana leaf decoration at entrance. Removes Vastu dosh, enhances good luck.',features:['Swastik mark above entrance','Shubh‑Labh inscription','Mango/banana leaf décor','Riddhi‑Siddhi placement','Vastu dosh removal'],color:'#FF9933'},
                {num:'09',title:'Vastu Shanti Puja & Annual Renewal',desc:'Vastu Purusha invocation, Kalash Sthapana, Gangajal sprinkling, Ashoka leaf at main door, Havan. Recommended annually or after major events.',features:['Annual energy purification','Kalash Sthapana','Gangajal & Ashoka leaf','Ghee & herb Havan','Post‑event renewal'],color:'#8B5CF6'},
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

        {/* ── ZONE‑BY‑ZONE CHECKLIST ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Commercial Vastu Zone‑by‑Zone Checklist</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {zone:'Main Entrance',dir:'North, East, or NE',tip:'Largest door; opens inward; Swastik/Om/Shubh‑Labh symbols; no threshold',color:'#E8B960'},
                {zone:'Owner\'s Cabin',dir:'Southwest',tip:'Face North or East; strong wall behind; avoid line‑of‑sight to door',color:'#C88A5D'},
                {zone:'Cash Counter',dir:'North',tip:'Face North/East; cash box along South wall opening North; mirror inside locker',color:'#10B981'},
                {zone:'Reception',dir:'Northeast',tip:'Receptionist faces North/East; clutter‑free; well‑lit',color:'#6366F1'},
                {zone:'Marketing / Sales',dir:'Northwest',tip:'Wind chimes 5‑6 rods; face E/N; air element activation',color:'#06B6D4'},
                {zone:'Accounts / Finance',dir:'Southeast',tip:'Accounts files in SE corner; avoid water features; fire element',color:'#EF4444'},
                {zone:'Conference Room',dir:'Northwest or West',tip:'Head of table faces E/N; no beams above table',color:'#8B5CF6'},
                {zone:'Inventory / Storage',dir:'Southwest',tip:'Heavy items in SW; finished goods in NW for quick dispatch',color:'#F59E0B'},
                {zone:'Employee Workstations',dir:'East/North facing',tip:'All staff face E/N; seniors in South; juniors in West; field staff in NW',color:'#EC4899'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.zone}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Direction:</strong> {item.dir}</p><p className="text-xs text-nidra-indigo/60">{item.tip}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── PLOT SHAPE ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Selection</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Gaumukhi vs Singhmukhi — Which Shape for Your Business?</h2></div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30"><h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Singhmukhi (Lion Face) — Auspicious for Commercial</h3><p className="text-sm text-nidra-indigo/70">Width more in front, less in rear. Symbolises lion entering — power, courage, control. Best for shops, showrooms, retail.</p></div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30"><h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Gaumukhi (Cow Face) — Better for Residential</h3><p className="text-sm text-nidra-indigo/70">Width less in front, more in rear. Narrow entrance, broader rear. Associated with stability and savings. Ideal for homes.</p></div>
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies Without Demolition — Proven Commercial Corrections</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Elemental Metal Strips',desc:'Copper/brass strips embedded in floor to seal or redirect negative energy.',color:'#E8B960'},
                {title:'Vastu Pyramids',desc:'Copper for grounding, crystal for emotional calm, brass for financial zones.',color:'#FF9933'},
                {title:'Colour Therapy',desc:'Light green for growth, yellow for prosperity, green/blue in North.',color:'#10B981'},
                {title:'Crystal Ball & Wind Chimes',desc:'Crystal ball in SE for financial energy; wind chimes 5‑6 rods in NW.',color:'#6366F1'},
                {title:'Water Features',desc:'Aquarium 9 gold + 1 black fish in NE; tabletop fountain flowing inward.',color:'#06B6D4'},
                {title:'Mirror Placement',desc:'Mirror inside cash locker door; on North/East wall; never opposite door.',color:'#EC4899'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a3a5c] to-[#0a1628] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-emerald-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Transform Your Business</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private commercial Vastu consultation covering all 9 sacred pujas, zone‑by‑zone audit, and personalised remedies.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-emerald-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Commercial Audit →</Link>
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
