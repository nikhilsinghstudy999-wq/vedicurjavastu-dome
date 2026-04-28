import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>
        <article className="pt-28 pb-20 min-h-screen">

          {/* ── Luxury Hero ── */}
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a2e1a] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="25" width="60" height="50" rx="3" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6"/>
                  <rect x="28" y="33" width="44" height="34" rx="1" fill="none" stroke="#E8B960" strokeWidth="1" opacity="0.4"/>
                  <line x1="28" y1="43" x2="72" y2="43" stroke="#E8B960" strokeWidth="0.6" opacity="0.3"/>
                  <line x1="28" y1="53" x2="72" y2="53" stroke="#E8B960" strokeWidth="0.6" opacity="0.3"/>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E8B960" strokeWidth="0.7" opacity="0.3">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Commercial Vastu</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>11 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Commercial Vastu —{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  How Office Layout Affects Business Success
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                Research‑backed guide to office entrance direction, CEO cabin placement, department zoning, cash‑counter energy, and the Bengaluru study showing up to 30% higher productivity in Vastu‑compliant firms — with proven remedies for every commercial dosha.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                Every business owner understands that location, product quality, and team talent drive success. But according to Vastu Shastra — the ancient Indian science of spatial energy — there is a fourth, invisible factor that can either amplify or sabotage all three: <strong>office layout</strong>. Research published by AECO Design &amp; Architecture Insights reports that businesses in Bengaluru following Vastu‑compliant office layouts experience <strong>up to 30% higher productivity and revenue</strong> compared to those in Vastu‑neutral configurations. Coohom&apos;s 2026 workspace survey found that strategic entry positioning alone boosts reported team satisfaction by over 23%. The Times of India, Financial Express, and Dwello have all published extensive guidelines confirming that office Vastu is not superstition — it is applied energy management. This article presents the definitive Vastu framework for commercial spaces, grounded in published research and two decades of clinical practice by Vastuvid K.K. Nagaich.
              </p>

              {/* ── Section 1: Entrance ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Main Entrance — Your Business&apos;s Mouth of Prosperity</h2>
                </div>
                <p>The office entrance is the single most critical Vastu element in any commercial space. According to Vastu Shastra, the entrance is the <strong>mouth of the Vastu Purush</strong> — the cosmic energy grid underlying every building. Just as the mouth is the primary gateway for nourishment entering the body, the main door is the primary channel through which opportunities, clients, revenue, and positive energy enter the business. The Omaxe commercial property guide confirms that entrances facing <strong>East, North, or Northeast</strong> have a connection with Lord Kuber, the God of Wealth, and are believed to result in financial success. The Financial Express and Times of India concur: the main door should face <strong>East or North</strong>, and nothing should create obstacles close to or in front of it.</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10"><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Direction</th><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Best For</th><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Remedy if Unavailable</th></tr></thead>
                    <tbody>
                      {[['North', 'Consulting, trade, finance — governed by Kuber. Best for wealth attraction', 'Ensure door opens inward; keep entrance brightly lit; place a water feature in NE to compensate'],['East', 'Marketing, creative agencies, startups — rising sun energy brings growth and recognition', 'Use white/cream door colour; maintain a clutter‑free 6‑foot approach path; face desk East'],['Northeast', 'Intellectual professions, research, education — combines North wealth + East health energy', 'Keep this zone open, clean, and with natural light; never place heavy storage or toilet here'],['West', 'Acceptable for trading businesses — Varuna energy supports liquid assets and cash flow', 'Install Vastu pyramid above door; use blue or silver door colours; add NE water feature'],['South', 'Traditionally inauspicious — intense solar radiation creates heat and financial fluctuation', 'Bury copper pyramid at threshold; heavy wooden door in dark brown; Ganesh image above frame'],].map((r,i)=>(<tr key={i} className={`border-t border-prakash-gold/10 ${i%2===0?'bg-white/40':'bg-vastu-stone/20'}`}><td className="py-3 px-4 font-medium text-nidra-indigo/80">{r[0]}</td><td className="py-3 px-4 text-nidra-indigo/60 text-xs">{r[1]}</td><td className="py-3 px-4 text-nidra-indigo/60 text-xs">{r[2]}</td></tr>))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-nidra-indigo/40">Sources: Omaxe Commercial Vastu Guide (2024); Times of India Vastu for Business (2022); Coohom North‑Facing Office Research (2026); Dwello Office Vastu Guidelines (2024).</p>
              </div>

              {/* ── Section 2: CEO Cabin ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-500 to-orange-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The CEO&apos;s Cabin — Southwest, the Command Position</h2>
                </div>
                <p>The placement of the business owner or CEO&apos;s cabin is the second most critical Vastu decision. According to Housing.com, the head of the organisation should occupy the <strong>Southwest direction</strong>, with the chair positioned so the occupant faces <strong>North or East</strong>. This is confirmed by Dwello, TrueVastu, and the Economic Times — all of whom agree: the Southwest is the zone of stability, authority, and control. The owner seated here, with a solid wall behind (never a glass partition), facing North or East, naturally projects leadership energy and makes sounder decisions.</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">CEO Cabin Placement Rules</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>• Southwest corner — absolute priority</li><li>• Face North (wealth) or East (growth/clarity)</li><li>• Solid concrete wall behind the chair (never glass)</li><li>• Square or rectangular desk — no L‑shapes or round</li><li>• No beam directly above the chair</li><li>• No toilet above, below, or sharing a wall</li><li>• Keep important documents in North or East drawers</li></ul>
                  </div>
                  <div className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">What Research Shows</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>• Coohom (2026): strategic entry + SW leadership seating boosts satisfaction by 23%</li><li>• Dwello (2024): SW cabin with North/East face "associated with stability and authority"</li><li>• TrueVastu: "Southwest direction can improve your skills and abilities"</li><li>• LinkedIn survey: Indian employees want Vastu‑aligned offices for better focus</li><li>• Omaxe (2024): SW seating linked to "leadership, control, and responsibilities"</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 3: Department Zoning ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Department‑Wise Zoning — Where Every Team Belongs</h2>
                </div>
                <p>TrueVastu and Dwello provide precise, department‑specific seating recommendations. These are not generic suggestions — they are directional prescriptions mapped to the elemental energy each business function requires. The table below synthesises recommendations from TrueVastu (2025), Dwello (2024), and the Economic Times.</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10"><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Department / Role</th><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Ideal Zone</th><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Face Direction</th><th className="py-3 px-4 text-left font-serif text-nidra-indigo">Rationale</th></tr></thead>
                    <tbody>
                      {[['CEO / Business Owner','Southwest','North or East','Earth element — stability, authority, long‑term decision‑making. SW is the heaviest zone, matching the owner\'s organizational weight'],['Finance / Accounts','North or East','East or North','North = Kuber wealth zone. East = clarity for numbers. Financial records kept in central north or southwest of cabinet (Times of India)'],['Marketing / Sales','Northwest','North or East','Air element — communication, movement, networking. Marketing staff in NW "move better and talk better" (TrueVastu)'],['Legal / Banking','Northwest','North or East','Vayu zone supports negotiation, contract review, and compliance work requiring mental agility'],['Designers / Developers','Southwest','South or West','Creative depth work benefits from the SW\'s grounded, focused energy — away from distracting North traffic'],['Reception','Northeast or East','North or East (facing door diagonally)','Economic Times: "Best direction for reception is northeast corner." Receptionist should face each person entering'],['Conference Room','Northwest or Southeast','Head faces North or East','Dwello: NW or SE enables lively interaction. SW corner of the table for the meeting leader'],['HR / Administration','North','North or East','People management requires the nurturing, growth‑oriented energy of the North zone'],].map((r,i)=>(<tr key={i} className={`border-t border-prakash-gold/10 ${i%2===0?'bg-white/40':'bg-vastu-stone/20'}`}><td className="py-3 px-3 font-medium text-nidra-indigo/80 text-xs">{r[0]}</td><td className="py-3 px-3 text-prakash-gold font-medium text-xs">{r[1]}</td><td className="py-3 px-3 text-nidra-indigo/50 text-xs">{r[2]}</td><td className="py-3 px-3 text-nidra-indigo/60 text-xs">{r[3]}</td></tr>))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 4: Cash Counter ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Cash Counter — The Mirror That Doubles Wealth</h2>
                </div>
                <p>The placement of the cash counter or safe is among the most powerful Vastu interventions for any business. The Times of India, 99acres, GoodHomes India, and Ask‑Oracle all converge on identical guidance: the cash locker should be placed against the <strong>South or South‑West wall</strong>, opening towards the <strong>North</strong> — the direction of Lord Kuber, the God of Wealth. When the locker opens northward, it symbolically empties towards Kuber, who then refills it.</p>
                <p>The <strong>mirror multiplication principle</strong> is particularly fascinating. The Times of India&apos;s Vastu Tips for Business Growth (November 2024) states: <em>"Hang a mirror facing the cash counter. It doubles the visible wealth, creating an aura of financial growth."</em> GoodHomes India (April 2025) confirms: <em>"A mirror on the North wall can double your wealth."</em> The cash counter should open towards the Northeast to attract abundance, and vibrant green plants like money plants positioned here further amplify prosperity energy.</p>
              </div>

              {/* ── Section 5: Industrial / Factory Vastu ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-slate-500 to-gray-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Industrial &amp; Factory Vastu — Heavy Machinery and Workflow</h2>
                </div>
                <p>Factories and industrial units have distinct Vastu requirements that differ from office spaces. IndiaMART, 99acres, and Sudvivek provide converging guidance: <strong>heavy machinery must be placed in the South, Southwest, or West zones</strong> — never in the North, Northeast, or East. The central area (Brahmasthan) must remain completely free of any equipment. Boilers, furnaces, generators, and ovens belong in the Southeast (Agni zone). The factory entrance should face East or North. Finished goods should be dispatched from the Northwest, and raw material storage should occupy the Southwest.</p>
                <p>Duastro&apos;s factory Vastu guide (2026) confirms: entrance colours of yellow, green, or blue attract prosperity; dark colours like black or grey bring negativity. A spacious, well‑lit, clutter‑free entrance area with a threshold retains positive energy within the factory premises.</p>
              </div>

              {/* ── Section 6: NE Toilet Case Study ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The North‑East Toilet — A Documented Business Killer</h2>
                </div>
                <p>If there is one Vastu defect that appears repeatedly in struggling businesses, it is a toilet in the Northeast. A documented case study by MahaVastu traces a business where owners experienced persistent confusion, self‑doubt, and an inability to form clear strategies — despite having no other significant Vastu imbalances. The sole defect: a toilet in the Northeast of the office. Architectural Digest India (2026) confirms that NE toilets are associated with <em>"financial stagnation, mental restlessness and persistent domestic obstacles."</em> The Northeast is the seat of divine energy and clarity — placing a toilet here is akin to draining the building&apos;s spiritual battery.</p>
                <p><strong>Remedies:</strong> If relocation is impossible, keep the toilet door permanently closed. Install a copper pyramid in the ceiling. Place a Vastu Purush Yantra in the Northeast of the office. A mirror on the outside of the toilet door symbolically deflects the negative energy. Housing.com recommends never placing a toilet in the Northeast or Brahmasthan — these zones must remain energetically pure.</p>
              </div>

              {/* ── Section 7: Colour Therapy ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Office Colour Therapy — Direction‑Specific Recommendations</h2>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[['North Zone','White, cream, light green — Kuber\'s colours. Never paint the north zone red or pink (Times of India)','Blue, green, white — water and growth colours for financial departments'],['East Zone','White, cream, light yellow — Surya\'s morning colours. Growth and recognition energy','White, cream — keeps the entrance energy pure and inviting'],['South Zone','Blue — cooling colour for the zone that receives maximum solar radiation (Omaxe)','Blue, light grey — calms the fire energy while maintaining authority'],['Southeast','Orange, red accents — activates Agni for energy and success. Free this zone from blue (Times of India)','Bright lights — the fire element zone must be illuminated (Times of India)'],].map((r,i)=>(<div key={i} className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15"><h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{r[0]}</h3><p className="text-sm text-nidra-indigo/70 mb-2">{r[1]}</p><p className="text-xs text-nidra-indigo/40 border-t border-gray-100 pt-2 mt-2">{r[2]}</p></div>))}
                </div>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Your Office Is Your Profit Engine</h2>
                </div>
                <p>Every element of commercial Vastu — from the direction your entrance faces, to the zone your CEO occupies, to the wall against which your cash locker rests — contributes to a cumulative energetic effect that either attracts or repels business success. The Bengaluru study showing up to 30% higher productivity in Vastu‑compliant firms is not an anomaly — it is the predictable result of aligning workspace energy with cosmic principles that have been empirically validated for over 5,000 years. Whether you run a small consultancy, a mid‑sized agency, or a large factory, the principles are the same: North for wealth, East for growth, Southwest for stability, and Northeast for clarity. The remedies exist for every dosha — often without structural demolition. The question is not whether your office has Vastu defects — it is whether you are ready to correct them.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich provides comprehensive commercial Vastu audits — entrance analysis, department zoning, CEO cabin optimisation, cash‑counter energy correction, and industrial workflow alignment — for businesses across India and 50+ countries worldwide.</p>
              </div>

            </div>

            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex‑CEO | 20+ Years Clinical Practice | 2 Lakh+ Clients Worldwide</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
