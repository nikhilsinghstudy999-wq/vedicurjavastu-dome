import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function LandSelectionPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>

        {/* ── LOOPING GRADIENT HERO ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.06),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">Extensive Framework · विस्तृत ढांचा</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl"><span className="bg-gradient-to-r from-emerald-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Land Selection</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">Bhoomi Sanskar · Usarology · Vriksha Vastu · Kamadahana Soil Testing · Plot Shape Analysis · Slope & Elevation Audit · Surroundings Verification</p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">9 sacred land selection practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — ensuring your plot is cosmically aligned before construction.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">Book Land Audit</Link><Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium">Explore Practices ↓</Link></div>
          </div>
        </section>

        {/* ── VASTU PURUSHA MANDALA ── */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Land</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Vastu Purusha Mandala – Land as a Living Organism</h2><p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm">Before construction, the land itself must be evaluated. The Vastu Purusha Mandala maps the plot onto a cosmic grid. NE must remain open and light; SW bears the heaviest energy. Every cut or irregularity corresponds to an energy disruption.</p></div>
          </div>
        </section>

        {/* ── 9 SACRED PRACTICES ── */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">Authentic Vedic Practices for Auspicious Land Selection</h2><p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">Selecting land is the most consequential Vastu decision. Each practice below evaluates, purifies, and aligns your plot.</p></div>
            <div className="space-y-16">
              {[
                {num:'01',title:'Bhoomi Puja (Sankusthapana – Land Worship & Purification)',desc:'Performed in NE corner. Invokes Vastu Purush, Goddess Bhoomi, Pancha Boothas. Panchgavya, Panchamrit, Sarvaushadhi sprinkled. Foundation stone also laid during this ceremony.',features:['NE corner ritual site','Vastu Purush & Bhoomi Devi','Panchgavya & Panchamrit','Foundation stone laying','Muhurta selection'],color:'#E8B960'},
                {num:'02',title:'Kamadahana – Soil Testing (2×2×2 Pit Test)',desc:'Dig 2′×2′×2′ hole, refill with same soil. If soil left over: excellent. Fill with water—absorbed >1 hour: good. After absorption, cracks = strong foundation needed. If smell of ghee/oil emanates at 1 foot, land is good. White soil: spiritual; red: leadership; yellow: business; black: labour. Yellow ideal for business community.',features:['2×2×2 pit refill test','Water absorption timing','Soil smell evaluation','Colour‑based suitability','Crack analysis for foundation'],color:'#10B981'},
                {num:'03',title:'Plot Shape Analysis (Gaumukhi, Shermukhi, Square)',desc:'Square and rectangular most auspicious. Gaumukhi (narrow front, wide rear) best for residential. Shermukhi (wide front, narrow rear) best for commercial. Avoid triangular, L‑shaped, circular. NE extension auspicious. Avoid NE cuts.',features:['Square/rectangular preferred','Gaumukhi for residential','Shermukhi for commercial','Avoid triangular/L‑shaped','NE extension auspicious'],color:'#FF9933'},
                {num:'04',title:'Slope & Elevation Audit (SW Highest → NE Lowest)',desc:'SW must be highest; NE lowest. Ideal slope SW→NE. Downward slope to East: growth; to North: wealth. Avoid South/West slopes. Hierarchy: SW > SE > NW > NE.',features:['SW highest, NE lowest','Slope SW→NE ideal','Avoid South/West slopes','East slope for growth','North slope for wealth'],color:'#6366F1'},
                {num:'05',title:'Surroundings Audit (Roads, Temples, Cemeteries)',desc:'No temple, school, hospital, cemetery adjacent. Roads on North and East bring prosperity. Avoid T‑junctions, high‑tension wires. Water bodies in N/E auspicious.',features:['Road on N/E preferred','No temple/cemetery adjacent','Avoid T‑junctions','Water bodies NE auspicious','Distance from public places'],color:'#C88A5D'},
                {num:'06',title:'Vriksha Vastu (Sacred Tree & Plant Placement)',desc:'Plaksha on North, Vata on East, Udumbara on South, Ashvattha on West. Tulsi in NE/E/N. Tall trees away from door—shade must never fall on it. Avoid thorny, milky sap, red‑flower trees. Garden in N/W.',features:['Plaksha N, Vata E, Udumbara S','Tulsi NE/E/N placement','Tall trees away from door','Avoid thorny & milky sap','Garden in North/West'],color:'#06B6D4'},
                {num:'07',title:'Usarology – Barren Land Diagnosis & Correction',desc:'Land bearing healthy plants is "live land." Infertile barren land is "dead land"—avoidable. Cracked land with termites/bones should never be selected. White ant‑hills, skeletons, excessive rock indicate unsuitability. Revival via energised copper rods, crystal grids, specific Havan.',features:['Live vs dead land assessment','Brihat Samhita principles','Termite/bone detection','Barren land revival rituals','Copper rod & crystal correction'],color:'#EF4444'},
                {num:'08',title:'Vastu Shanti & Navagraha Havan',desc:'Ganesh Puja, Kalash Sthapana, Navagraha Shanti, Vastu Mandal Puja, Havan with 40 Ayurvedic herbs. Purifies five elements. Performed after land purchase, before construction.',features:['Ganesh Puja & Kalash Sthapana','Navagraha Shanti for 9 planets','Vastu Mandal Puja','Ghee & herb Havan','40 Ayurvedic herb samagri'],color:'#8B5CF6'},
                {num:'09',title:'Plot History Investigation & Legal Purity',desc:'Never purchase from insolvent, leprosy‑afflicted, lunatic, or emigrated sellers. Not temple‑donated, village‑allotted, or charitable‑trust land. Avoid plots with tragic history or disputed ownership. Land must be cultivated, not barren. Clear title deed essential.',features:['Previous ownership vetting','No insolvent/lunatic seller','Clear title deed verification','Tragic history avoidance','Cultivated land preferred'],color:'#F59E0B'},
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

        {/* ── PLOT SHAPE COMPARISON ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Shape Reference</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Gaumukhi vs Shermukhi — Which Shape for Your Purpose?</h2></div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30"><h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Gaumukhi (Cow Face) — Best for Residential</h3><p className="text-sm text-nidra-indigo/70">Narrow front, broad rear. Broad part in NE; road on S/W side. Associated with positive energy and prosperity. Suitable for homes and residential colonies.</p></div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30"><h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Shermukhi (Lion Face) — Best for Commercial</h3><p className="text-sm text-nidra-indigo/70">Broad front, narrow rear. Broad part in North; road on E/N side. Symbolises power, efficiency, control. Ideal for business profitability.</p></div>
            </div>
          </div>
        </section>

        {/* ── SOIL TESTING GUIDE ── */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Soil Science</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">The Kamadahana Soil Test — 4 Ancient Diagnostic Methods</h2></div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {test:'Pit Refill Test (Volume)',desc:'Dig 2×2×2 ft cube. Remove soil. Refill. If soil left over: excellent (prosperity). If exactly fills: average. If insufficient: poor (loss).',color:'#10B981'},
                {test:'Water Absorption Test',desc:'Refill pit with water. If absorption >1 hour: excellent. Fast absorption = loose soil. After absorption, cracks = strong foundation required.',color:'#06B6D4'},
                {test:'Smell & Color Analysis',desc:'If ghee/oil smell at 1 foot: land is good. Red, yellow, white, brown soil auspicious. Avoid black, clayey soil, bad odour, bones, debris.',color:'#FFD700'},
                {test:'Plant Growth Observation',desc:'Land with healthy plants is "live land." Barren land is "dead land"—avoidable. Too many rocks, worms, ant‑hills, skeletons = unsuitable.',color:'#8B5CF6'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.test}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── REMEDIES WITHOUT DEMOLITION ── */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12"><span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span><h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Remedies for Plot Doshas — Without Land Alteration</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {title:'NE Cut Remedy',desc:'Water feature or small temple in NE. Mirror to symbolically extend cut area. Keep NE open, clean, well‑lit.',color:'#10B981'},
                {title:'SW Cut Remedy',desc:'Heavy furniture or objects in SW. Glass with water and salt in SW corner. Copper pyramids at corner.',color:'#C88A5D'},
                {title:'Copper Pyramid Divider',desc:'3‑piece, 9‑piece, or 27‑piece plus‑value copper pyramid divider. Green aventurine pebbles in cane basket at extended corner.',color:'#FF9933'},
                {title:'Landscaping Correction',desc:'Plants soften sharp edges and absorb negative vibrations. Trees compensate for missing extensions. Ornamental palms near northern compound.',color:'#06B6D4'},
                {title:'Vastu Yantra Placement',desc:'Bhoomi Yantra for land purification. Vastu Purush Yantra at main gate. Each yantra energised through mantras before placement.',color:'#8B5CF6'},
                {title:'Boundary Wall Design',desc:'SW wall tallest; E/N walls 21 inches shorter. Compound wall built before construction. Cow or calf on property auspicious.',color:'#EF4444'},
              ].map((item,idx)=>(<div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg"><div className="w-2 h-2 rounded-full mb-3" style={{backgroundColor:item.color}}/><h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3><p className="text-xs text-nidra-indigo/60">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a] bg-[length:400%_400%] animate-[heroLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-emerald-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">Let Vastuvid K.K. Nagaich Audit Your Land</h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">Before you invest in construction, invest in a Vedic land audit covering all 9 sacred practices.</p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">Schedule Your Land Audit →</Link>
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
