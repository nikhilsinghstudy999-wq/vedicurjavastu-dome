import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function IndustrialVastuPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-cyan-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-400 bg-clip-text text-transparent">Industrial Vastu</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Bhoomi Sanskar · Shilanyas · Vishwakarma Puja · Machinery Placement · Fire Zone Activation · Navagraha Shanti · Worker Productivity · Finished Goods Dispatch</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">8 sacred industrial Vastu practices for factories, manufacturing plants, warehouses, GIDC/MIDC plots — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Industrial Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── 64‑GRID MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Industry</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Vastu Purusha Mandala – 64‑Grid Industrial Application</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">For factories, the Paramasayika Mandala (9×9) or Manduka Mandala (8×8) maps the industrial plot onto a cosmic grid. NE remains light, SW bears heavy machinery, SE houses fire elements, NW governs movement.</p></div>
          </div>
        </section>

        {/* ── 8 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 8 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Pujas for Industrial Safety, Productivity & Growth</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Each practice performed at an astrologically determined Muhurta.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Bhoomi Puja / Factory Sthapana (Industrial Groundbreaking)',desc:'Invokes Vastu Purush, Bhoomi Devi, Pancha Bhootas. NE corner ritual. Sankalpa, Ganesh Puja, Kalash Sthapana, Havan. Auspicious months: Baisakh, Shravan, Kartik, Margshirsh.',features:['NE corner ritual site','Vastu Purush & Bhoomi Devi','Pancha Bhoota balancing','Sankalpa & Kalash Sthapana','Muhurta selection'],color:'#E8B960'},
                {num:'02',title:'Shilanyas (Foundation Stone Laying)',desc:'First foundation stone on SE side. Sutra‑Pada measurement, Ganesh Puja, five consecrated bricks (Nanda‑Purna). SW corner consecrated stone. Ishtika‑nyasa substitute.',features:['SE corner first stone','5 consecrated bricks','Sutra‑Pada measurement','SW corner stone','Ganesh Puja & Sankalpa'],color:'#C88A5D'},
                {num:'03',title:'Vishwakarma Puja (Divine Protection for Machinery)',desc:'Celebrated annually on Kanya Sankranti. Cleaning and worshipping all machines, tools, vehicles. Worker safety blessing. Removes Vastu doshas from factory.',features:['Annual Kanya Sankranti','Machine & tool worship','Worker safety blessing','Industrial prosperity','Vastu dosha removal'],color:'#FF9933'},
                {num:'04',title:'Navagraha Shanti Puja & Havan',desc:'Appeasing 9 planetary deities for positive influences. Ghee & herb Havan. Pacifies malefic planets causing equipment breakdowns, labour disputes, production delays.',features:['9 planetary appeasement','Ghee & herb Havan','Malefic planet neutralisation','Breakdown prevention','Labour harmony'],color:'#6366F1'},
                {num:'05',title:'Vastu Puja & Havan (Space Purification for Sick Units)',desc:'Kalash Sthapana, Vastu Purusha invocation, Gangajal sprinkling, full Havan. Revives sick units facing frequent breakdowns, quality issues, labour unrest.',features:['Kalash Sthapana','Vastu Purusha invocation','Gangajal sprinkling','Ghee & herb Havan','Sick unit revival'],color:'#C10000'},
                {num:'06',title:'Vastu Shanti Puja & Annual Renewal',desc:'Annual purification combining Ganapati, Navagraha, Kalash Poojan, and Havan. Recommended after ownership changes, accidents, or expansions.',features:['Annual energy purification','Ganapati & Navagraha','Kalash Sthapana renewal','Post‑accident/expansion','Sustained harmony'],color:'#8B5CF6'},
                {num:'07',title:'Worker Placement & Energy Direction',desc:'Workers face East/North for efficiency. Production head in SW facing East. Field staff in NW. Natural light reduces fatigue. Workstation orientation optimization.',features:['Workers face E/N','Production head SW→E','Field staff in NW','Natural light essential','Workstation optimization'],color:'#10B981'},
                {num:'08',title:'Vastu Yantra Sthapana & Industrial Remedies',desc:'Elemental metal strips (copper, brass, lead), pyramids, colour balancing, crystals, yantras. 70–80% fixable without demolition. Directional programming of cabins.',features:['Copper/brass/lead strips','Zone‑based pyramids','Colour therapy','Yantra installation','70‑80% non‑demolition'],color:'#F59E0B'},
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
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Industrial Vastu Zone‑by‑Zone Checklist</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {zone:'Main Entrance Gate',dir:'North, East, or NE',tip:'Auspicious for profit flow. Wide gates on two sides recommended.',color:'#E8B960'},
                {zone:'Heavy Machinery',dir:'Southwest, West, South',tip:'SW/S/W for stability; light machinery in N & E. NE never heavy.',color:'#C88A5D'},
                {zone:'Boilers / Furnaces',dir:'Southeast (Agni)',tip:'Generators, transformers, chimneys in SE. Never water in SE.',color:'#EF4444'},
                {zone:'Raw Material Storage',dir:'Southwest, West',tip:'Heavy materials in SW; liquid raw materials in N‑NE.',color:'#6366F1'},
                {zone:'Finished Goods Dispatch',dir:'Northwest (Vayavya)',tip:'NW for swift out‑movement. Semi‑finished WIP in West.',color:'#F59E0B'},
                {zone:'Administrative Office',dir:'North or East',tip:'MD/Owner in SW facing N/E. Accounts in SE. Reception in NE.',color:'#10B981'},
                {zone:'Slope & Floor Design',dir:'NE downward, SW upward',tip:'Sloping towards E/N/NE. Thicker walls in S & W.',color:'#06B6D4'},
                {zone:'ETP / Water / Utilities',dir:'West or NW, never NE',tip:'ETP, compressors in W/NW. Overhead tank in SW. Underground in NE.',color:'#8B5CF6'},
                {zone:'Security / Guard Room',dir:'Near main gate, SE or NW',tip:'Boundary walls taller in S & W. Barbed wire in E & N.',color:'#EC4899'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.zone}</h3><p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Direction:</strong> {item.dir}</p><p className="text-xs text-nidra-indigo/60">{item.tip}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── PLOT SHAPE + SLOPE ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Selection</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Industrial Plot Shape, Slope & Boundary Design</h2></div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30"><h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Ideal Plot Shape & Slope</h3><p className="text-sm text-nidra-indigo/70">Square or rectangular. Slope SW→NE. Roads on at least two sides. Thicker boundary walls in S & W.</p></div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30"><h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Avoidable Industrial Defects</h3><p className="text-sm text-nidra-indigo/70">Avoid near stagnant water, cemeteries, irregular shapes. NE corner must be exactly 90°. ETP/utilities never in NE.</p></div>
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies Without Demolition — 70‑80% Fixable</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'Elemental Metal Strips',desc:'Copper/brass strips in floor grooves seal or redirect negative energy.',color:'#E8B960'},
                {title:'Vastu Pyramids',desc:'Copper for grounding, brass for financial, crystal for energy balancing.',color:'#FF9933'},
                {title:'Colour Therapy',desc:'Light green E for growth, yellow N for wealth, warm orange SE for fire.',color:'#10B981'},
                {title:'Crystal Grids & Wind Chimes',desc:'Clear quartz in NE; wind chimes 5‑6 rods in NW for communication.',color:'#6366F1'},
                {title:'Yantra Installation',desc:'Vastu Purush Yantra NE, Shri Yantra accounts, Kuber North, Mangal South.',color:'#06B6D4'},
                {title:'Directional Programming',desc:'Reprogramming cabin layouts and workstation orientation without demolition.',color:'#EC4899'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-cyan-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Transform Your Factory</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Book a private industrial Vastu consultation covering all 8 sacred pujas, zone‑by‑zone audit, and personalised remedies.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-cyan-500 text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Industrial Audit →</Link>
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
