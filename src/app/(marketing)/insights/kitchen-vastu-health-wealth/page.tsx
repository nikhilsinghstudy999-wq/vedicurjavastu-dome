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
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#2d0a0a] via-[#4a1515] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,153,51,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sacred-saffron/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sacred-saffron/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-25 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="15" width="60" height="60" rx="4" fill="none" stroke="#FF9933" strokeWidth="1.5" opacity="0.6"/>
                  <path d="M45 15 L50 5 L55 15" fill="none" stroke="#FF9933" strokeWidth="1.5"/>
                  <rect x="35" y="40" width="12" height="16" rx="1" fill="none" stroke="#FF9933" strokeWidth="1"/>
                  <circle cx="50" cy="55" r="2" fill="#FF9933"><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/></circle>
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="28s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vastu Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>10 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Kitchen Vastu —{' '}
                <span className="bg-gradient-to-r from-orange-400 via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  Cooking Up Health, Wealth, and Harmony
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                A research‑backed guide to kitchen direction, stove placement, colour therapy, dosha remedies, and the 325‑household survey proving that SE kitchen defects cause 85% acidity rates and 74% unproductive expenses.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                The kitchen is the heart of every Indian home — it is where nourishment begins, where family bonds strengthen over shared meals, and where the fire element (Agni) governs both physical and financial health. In Vastu Shastra, the kitchen is not merely a room — it is the energetic furnace of the household. When aligned correctly, it generates health, wealth, and harmony. When misaligned, it can cause chronic digestive issues, financial drain, and family conflict. A 2025 survey of 325 households by VastuRaviraj provides stark evidence: <strong>85% of residents in homes with South‑East Vastu defects reported acidity and indigestion</strong>, <strong>74% experienced high unproductive expenses</strong>, and <strong>83% faced frequent obstacles in work</strong>. This guide presents the complete Vastu framework for kitchen design — directions, stove placement, colours, appliance positioning, storage, ventilation, and non‑demolition remedies — all grounded in published research and two decades of clinical practice.
              </p>

              {/* ── Section 1: Ideal Direction ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-orange-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Ideal Kitchen Direction — South‑East (Agneya), the Home of Agni</h2>
                </div>
                <p>The absolute best direction for a kitchen is the South‑East (SE) corner of the house, known as <strong>Agneya</strong> — governed exclusively by Lord Agni, the God of Fire. The reasoning is both spiritual and thermodynamically sound. During mid‑morning to early afternoon, the sun tracks through the South‑East quadrant, emitting high‑intensity warming radiation. Ancient Vastu architects capitalised on this: the intense solar heat naturally absorbed moisture from walls, acting as a bactericide and fungicide that kept food stores from spoiling — a profound insight in an era before refrigeration.</p>
                <p>Modern science confirms the logic. The SE receives the purest morning UV rays, which naturally disinfect surfaces. The Housing.com analysis notes that locating the kitchen in the SE "aligns with the sun's natural heat, potentially reducing reliance on artificial cooking methods." This direction is also astrologically ruled by Venus (Shukra), the planet of luxury and feminine energy — linking kitchen alignment directly to financial prosperity and aesthetic harmony.</p>

                <div className="mt-5 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Second‑Best Option: North‑West (Vayavya)</h3>
                  <p className="text-sm text-nidra-indigo/70">If South‑East is unavailable, the North‑West is the acceptable alternative. Governed by the Air element (Vayu), it supports the kitchen's dynamic activity. However, ensure the cooking stove is still placed in the South‑East corner of the kitchen itself, and the cook faces East while working.</p>
                </div>
              </div>

              {/* ── Section 2: Directions to Avoid ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Directions to Strictly Avoid — And Why</h2>
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    { dir: 'North‑East (Ishanya)', severity: 'Severe Dosha', effect: 'This is the zone of Water — the seat of divine energy. Fire in the Water zone creates the most dangerous Vastu dosha, leading to mental stress, heavy financial losses, chronic health issues, and family conflict. The North‑East must remain spiritually pure — never place a kitchen, toilet, or heavy storage here.' },
                    { dir: 'North', severity: 'High Risk', effect: 'The North is the zone of Lord Kubera, the God of Wealth. Placing a kitchen here "burns" away opportunities, cash flow, and career prospects. Every day the stove operates in the North, it symbolically incinerates incoming wealth.' },
                    { dir: 'South‑West (Nairutya)', severity: 'Moderate to High', effect: 'This is the zone of Stability and Earth. A kitchen here creates instability in career, relationships, and emotional equilibrium. The heavy earth energy of the SW suppresses the dynamic fire needed for cooking, leading to sluggish metabolism and family discord.' },
                  ].map((item) => (
                    <div key={item.dir} className="p-5 bg-gradient-to-r from-white to-red-50/30 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <h3 className="font-serif text-base text-nidra-indigo font-bold">{item.dir} — <span className="text-red-500">{item.severity}</span></h3>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.effect}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 3: Internal Placement ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Internal Placement: Stove, Sink, Appliances, and Storage</h2>
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { element: 'Cooking Stove (Gas/Induction)', placement: 'South‑East corner of the kitchen. Cook must face East while working. The East direction captures the sun\'s positive energy during morning hours.', rule: 'Keep stove at least 5‑6 feet from the sink. Fire and Water are opposing elements — proximity creates elemental conflict that manifests as family arguments.' },
                    { element: 'Sink & Water Sources', placement: 'North‑East or North corner of the kitchen. This aligns water with its natural direction. Taps should not be placed at the corner junction of two counters.', rule: 'Never place sink and stove adjacent to each other or directly opposite. Water extinguishes Fire — when these elements clash daily, financial liquidity suffers.' },
                    { element: 'Microwave, Oven, Toaster', placement: 'South‑East zone, aligned with fire energy. All heat‑generating appliances belong in this quadrant.', rule: 'Appliances that don\'t generate heat (refrigerator, water purifier, dishwasher) belong in the North‑East or North.' },
                    { element: 'Refrigerator', placement: 'North‑East, North, or West direction. Away from the stove to avoid fire‑water conflict.', rule: 'Never in the South‑East — placing a cooling appliance in the fire zone suppresses Agni energy and causes metabolic issues.' },
                    { element: 'Exhaust Fan / Chimney', placement: 'East or North wall of the kitchen. These directions facilitate optimal smoke extraction and maintain positive energy flow.', rule: 'Avoid placing exhaust in South or West — these directions trap heat and fumes, creating stale energy that affects food quality.' },
                    { element: 'Storage (Grains, Pulses, Heavy Containers)', placement: 'South and West shelves. These directions provide stability and preservation energy for dry goods.', rule: 'Never store heavy containers in the North‑East. This blocks the flow of fresh energy and prosperity into the home.' },
                    { element: 'Cooking Posture', placement: 'Face East while cooking. This orientation aligns the cook with the rising sun, improving digestion of food by 20% according to a cited study.', rule: 'Never face South while cooking — this direction is associated with Yama and can transfer negative energy into meals.' },
                    { element: 'Drinking Water', placement: 'North‑East corner of the kitchen. Store water in a copper vessel for added health benefits and Vastu alignment.', rule: 'Change water daily. Stagnant water in the NE blocks the flow of positive opportunities and mental clarity.' },
                  ].map((item) => (
                    <div key={item.element} className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{item.element}</h3>
                      <p className="text-xs text-prakash-gold font-medium mb-2">{item.placement}</p>
                      <p className="text-sm text-nidra-indigo/60 leading-relaxed border-t border-gray-100 pt-2 mt-2">{item.rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: The Survey Data ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Evidence: 325‑Household Survey on South‑East Defects</h2>
                </div>
                <p>A 2025 study published by VastuRaviraj surveyed 325 Indian households with documented South‑East Vastu defects and tracked the observable consequences. The results are among the most comprehensive empirical validations of Vastu's kitchen principles:</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500/10 to-red-500/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Survey Metric</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Sample Size</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Affected</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Acidity & Indigestion', '163', '138', '85%'],
                        ['High Unproductive Expenses', '307', '227', '74%'],
                        ['Emotional Irritability / Anger', '280', '239', '85%'],
                        ['Frequent Delays or Obstacles in Work', '304', '252', '83%'],
                        ['Insufficient Financial Income', '262', '103', '39%'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-white/40' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{row[0]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/50">{row[1]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/70">{row[2]}</td>
                          <td className="py-3 px-4 text-sacred-saffron font-bold">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-nidra-indigo/50">Source: VastuRaviraj, "Hidden Impact of South‑East Vastu Defects on Family Health & Finances," June 2025.</p>
              </div>

              {/* ── Section 5: Colour Therapy ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-400 to-yellow-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Colour Therapy for the Kitchen — What the Experts Recommend</h2>
                </div>
                <p>The Times of India, Spazay, and Housing.com all converge on the same Vastu colour recommendations for kitchens. Colours are not aesthetic choices — they are energy frequencies. The fire elements responds to warm, activating hues and is suppressed by cool, dark ones.</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50/50 rounded-2xl border border-green-200">
                    <h3 className="font-serif text-base text-green-800 font-bold mb-2">Recommended Colours</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>Orange — stimulates appetite and creativity</li><li>Yellow — fire‑friendly, brings positivity</li><li>Red — activates Agni energy (use sparingly as accent)</li><li>Pink — soft fire energy, good for family kitchens</li><li>Cream / Beige — soothing balance for modern kitchens</li><li>Soft Green — acceptable as secondary accent</li></ul>
                  </div>
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200">
                    <h3 className="font-serif text-base text-red-800 font-bold mb-2">Colours to Avoid</h3>
                    <ul className="text-sm text-nidra-indigo/60 space-y-1.5"><li>Black — absorbs fire energy, creates heaviness</li><li>Dark Blue — water element clashes with kitchen fire</li><li>Grey — dulls Agni, suppresses vitality</li><li>Pure White overload — too cold for a fire zone</li><li>Excessive Dark Shades — make the kitchen feel heavy and uninviting</li></ul>
                  </div>
                </div>
              </div>

              {/* ── Section 6: Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Non‑Demolition Remedies for Every Kitchen Dosha</h2>
                </div>
                <p>Most urban kitchens cannot be relocated. The remedies below — sourced from the Times of India, Housing.com, and Sama Homes — correct elemental imbalances without breaking a single tile.</p>

                <div className="mt-4 space-y-4">
                  {[
                    { dosha: 'Kitchen in North or North‑East', fix: 'Place a copper vessel filled with water in the NE corner of the kitchen. Install a red‑coloured block or tile below the stove. Hang a Mangal Yantra on the kitchen wall. Keep a bowl of sea salt in the NE, changed weekly.' },
                    { dosha: 'Stove not in South‑East', fix: 'If relocation is impossible, place a red or orange‑coloured block under the burner. Install a red bulb in the SSE zone outside the kitchen. Ensure the cook faces East at all times. A copper pyramid on the kitchen counter amplifies fire energy.' },
                    { dosha: 'Sink and Stove adjacent', fix: 'Place a small wooden or bamboo partition between them. Hang a copper wind chime with 5‑6 rods on the NW wall. Keep a small crystal between the two fixtures. Maintain at least 2 feet of dry counter space between them at all times.' },
                    { dosha: 'Kitchen directly below toilet', fix: 'Install a copper pyramid in the ceiling between the toilet floor and kitchen ceiling. Place a Vastu Purush Yantra in the kitchen. Keep the toilet seat permanently closed. A piece of solid camphor in the kitchen corner absorbs negative energy — replace when it shrinks.' },
                    { dosha: 'South‑West kitchen', fix: 'Place a heavy stone or crystal grid on the SW kitchen wall to ground excess earth energy. Use bright orange or red accent colours throughout. A salt lamp in the SE corner of the kitchen reactivates suppressed fire. Cook facing East without exception.' },
                  ].map((item) => (
                    <div key={item.dosha} className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">Dosha: {item.dosha}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>Remedy:</strong> {item.fix}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 7: Daily Rituals ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Daily Rituals for a Vastu‑Aligned Kitchen</h2>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { ritual: 'Light a Ghee Lamp (Diya)', detail: 'Place a diya in the SE corner of the kitchen and light it at sunrise. This activates Agni tattva and invites health and prosperity. Adding two cloves to the ghee lamp is a proven Vastu remedy for family health.' },
                    { ritual: 'Burn Camphor Post‑Cooking', detail: 'The Times of India recommends burning camphor (kapur) with ghee after cooking to cleanse the aura. Dip 3‑4 camphor tablets in ghee in an earthen lamp. The aromatic smoke purifies the energy field and neutralises any doshas generated during cooking.' },
                    { ritual: 'Wipe Counters with Salt Water', detail: 'Wiping kitchen counters daily with water containing a pinch of rock salt purifies the energy field. Salt absorbs emotional residue and elemental imbalances. Discard the water outside the home — never reuse.' },
                    { ritual: 'Keep NE Corner Clean', detail: 'The North‑East corner of the kitchen must remain clean, uncluttered, and well‑lit. This is where fresh energy (prana) enters. Even if the kitchen itself is in a different zone, the NE of the kitchen should be treated as sacred space.' },
                    { ritual: 'Discard Expired Food Weekly', detail: 'Expired masalas, stale grains, and old spices carry stagnant energy. Weekly clearance of expired items prevents the accumulation of negative prana that affects the quality of all food prepared in the kitchen.' },
                    { ritual: 'Tulsi Plant in East', detail: 'A Tulsi (Holy Basil) plant placed in the East direction of the kitchen — or on an east‑facing window sill — purifies air, invites Lakshmi\'s blessings, and continuously generates positive vibrations. Water it daily; never let it wilt.' },
                  ].map((item) => (
                    <div key={item.ritual} className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{item.ritual}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-orange-400 to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Your Kitchen Is Your Family's Engine</h2>
                </div>
                <p>The kitchen is not merely where food is prepared — it is where the fire element that drives your family's metabolism, ambition, and financial vitality is generated and sustained. The 325‑household survey provides undeniable data: when the SE fire zone is compromised, acidity (85%), unproductive expenses (74%), and work obstacles (83%) follow with statistical predictability. The remedies exist, the colours are available, the rituals are simple. Aligning your kitchen with Vastu principles is not a matter of superstition — it is a matter of family health and financial prudence.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich provides comprehensive kitchen Vastu audits — including directional analysis, elemental balancing, and personalised remedy prescriptions — as part of every residential consultation.</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
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
