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
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1a0a0a] via-[#2d1010] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.12),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="35" width="50" height="55" rx="2" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6"/>
                  <rect x="38" y="55" width="24" height="35" rx="1" fill="none" stroke="#E8B960" strokeWidth="1.5"/>
                  <circle cx="50" cy="65" r="2" fill="#E8B960"/>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#E8B960" fontFamily="serif">Om</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vastu Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>9 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Vastu for Main Entrance —{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  The Power of Your Home's Door Direction
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                How the direction, size, colour, and threshold of your main door determine the flow of prosperity, health, and relationships — backed by the 2024 CFD study proving Vastu‑recommended door placements measurably improve indoor comfort.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                In Vastu Shastra, the main entrance is not merely an architectural feature — it is the <strong>mouth of the Vastu Purush</strong>, the cosmic being whose energy grid underlies every building. Just as the mouth is the primary gateway for nourishment entering the human body, the main door is the primary channel through which prana (life energy), opportunities, wealth, and relationships enter the home. A correctly designed entrance attracts abundance; an incorrectly placed one can — and does — cause measurable harm. The 2024 Springer CFD study confirms what Vedic architects knew millennia ago: door placement directly determines indoor thermal comfort, air quality, and energy flow.
              </p>

              {/* ── Section 1: Best Directions ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Four Auspicious Directions — What Ancient Texts and Modern Science Agree On</h2>
                </div>
                <p>The Vastu Shastra and ancient architectural texts are precise about which directions bring specific benefits. The 2024 CFD study by Springer confirmed that door placement strongly influences indoor conditions, with certain configurations producing Predicted Mean Vote values between 1 and 2 — within the ISO 7730 comfort range. Below is a comprehensive guide to every direction and what it delivers.</p>

                <div className="mt-6 space-y-5">
                  {[
                    { dir: 'North', deity: 'Kuber (God of Wealth)', rating: 'Most Auspicious', benefit: 'Financial prosperity, career growth, new opportunities, business success. The northern direction is governed by magnetic energy that attracts abundance. The 2024 CFD study confirmed that north‑facing entrances maintain optimal indoor temperatures', fix: 'If a true north entrance is not possible, create a north‑zone opening (window or secondary door) to channel Kuber energy' },
                    { dir: 'East', deity: 'Surya (Sun God) & Indra', rating: 'Highly Auspicious', benefit: 'Health, fame, spiritual growth, social recognition. Morning sunlight enters directly, bringing UV purification and circadian rhythm alignment. East‑facing doors receive the purest, most beneficial solar radiation of the day', fix: 'Ensure the east entrance is unobstructed by trees or tall structures; keep it brightly lit at dawn with a ghee lamp' },
                    { dir: 'Northeast (Ishanya)', deity: 'All Gods (Ishanya)', rating: 'Most Sacred', benefit: 'Combined benefits of North and East — wealth, health, spiritual clarity, and mental peace. This is the most powerful entrance direction in Vastu. Water bodies placed here amplify the effect through evaporative cooling', fix: 'The NE entrance should be the largest door in the house, kept immaculately clean, with a water feature or sacred Tulsi plant nearby' },
                    { dir: 'West', deity: 'Varuna (God of Water)', rating: 'Acceptable with Remedies', benefit: 'Can bring moderate success, particularly for businesspeople who travel frequently. However, west‑facing doors receive harsh afternoon sun, potentially causing restlessness and financial fluctuation', fix: 'Install a Vastu pyramid above the west door; use light blue or white colours on the door; place a water feature in the northeast to counterbalance' },
                    { dir: 'South', deity: 'Yama (God of Death)', rating: 'Requires Correction', benefit: 'South is traditionally considered inauspicious because it receives the most intense, prolonged solar radiation and is associated with the realm of ancestors. However, with proper corrections, south‑facing homes can be made auspicious', fix: 'Install a Vastu pyramid 18 inches underground at the entrance; use a heavy wooden door in dark brown; place a Hanuman or Ganesh image above the door; ensure the door opens inward' },
                  ].map((item) => (
                    <div key={item.dir} className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-prakash-gold mt-1.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.dir} — {item.deity}</h3>
                          <p className="text-xs text-sacred-saffron font-semibold mb-1">{item.rating}</p>
                          <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.benefit}</p>
                          <div className="mt-2 p-3 bg-amber-50/50 rounded-xl border border-prakash-gold/10">
                            <p className="text-xs text-nidra-indigo/60"><strong>Correction:</strong> {item.fix}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 2: Best Entrance According to Plot Facing ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Best Entrance Position According to Plot Facing</h2>
                </div>
                <p>Even within an auspiciously facing plot, the exact placement of the door on that face matters critically. Vastu divides each wall into nine equal segments (padas), and the prescribed pada for the entrance is non‑negotiable. The Times Property guide confirmed these exact positions through analysis of traditional Vastu texts.</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Plot Facing</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Main Door Pada</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['North', '5th pada from North‑West corner', 'This aligns with the magnetic meridian, ensuring maximum positive energy flow'],
                        ['East', '5th pada from South‑East corner', 'Captures the purest morning sunlight; ideal for health and spiritual growth'],
                        ['West', '4th pada from South‑West corner', 'Minimises harsh afternoon radiation while maintaining energy flow'],
                        ['South', '4th pada from North‑West corner', 'The least harmful position on a south‑facing wall; requires additional remedies'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-white/40' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{row[0]}</td>
                          <td className="py-3 px-4 text-prakash-gold font-medium">{row[1]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 3: Door Design ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Door Design Specifications — Eight Rules You Must Follow</h2>
                </div>
                <p>Direction alone is insufficient. The door's physical attributes — size, material, threshold, color, opening direction — each carry specific energetic consequences. Housing.com and MagicBricks have cataloged these specifications from traditional texts.</p>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { rule: 'Size', detail: 'The main door must be larger than all other doors in the house. A typical auspicious size is 7×3.5 feet. Doors that are too small symbolically restrict opportunity and wealth entry. Never use a door with cracks, creaking hinges, or peeling paint — these signal financial leakage.' },
                    { rule: 'Opening Direction', detail: 'The door must open INWARD (toward the interior). An outward‑opening door symbolically pushes opportunities away. The hinges should be silent; creaking doors are considered a Vastu dosha that creates tension and conflict.' },
                    { rule: 'Material', detail: 'Solid wood is the traditional and preferred material, particularly teak, sal, or mango wood. Avoid metal doors for the main entrance — they conduct and deflect energy. The Wood Shastra recommends doors made from a single piece of wood rather than joined planks.' },
                    { rule: 'Threshold (Dahleej)', detail: 'The threshold should be at least 1‑2 inches high, painted in auspicious colours like red or yellow. A low or absent threshold allows negative energy to enter freely. The Dahleej Sthapna puja specifically energises this protective barrier.' },
                    { rule: 'Colour', detail: 'North‑facing: natural wood, brown, or gold. East‑facing: white, cream, or light yellow. West‑facing: blue, white, or silver. South‑facing: dark brown or mahogany. Avoid black, dark red, and grey for main doors regardless of direction.' },
                    { rule: 'Decor Above Door', detail: 'A brass or copper Swastik, Om, or Ganesh symbol above the door frame provides powerful protection. Torans (door hangings) made of mango leaves and marigold flowers are traditional Vastu remedies that purify entering energy.' },
                    { rule: 'Lighting', detail: 'The entrance must be brightly lit — ideally with a diya (oil lamp) at dawn and dusk. A dark entrance attracts negative energy. Modern sensor‑activated lights ensure consistent illumination without manual intervention.' },
                    { rule: 'Cleanliness', detail: 'Shoes, old mats, dust, cobwebs, and clutter near the main door are severe Vastu doshas. The entrance should be swept daily, ideally with water mixed with a pinch of sea salt, to purify the energy field. Never place a dustbin or broom visible from the entrance.' },
                  ].map((item) => (
                    <div key={item.rule} className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">{item.rule}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: Common Doshas ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Common Main Door Doshas — And How to Fix Each One</h2>
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    { dosha: 'Door directly aligned with back door or window', fix: 'Place a heavy piece of furniture, a crystal, or a decorative screen between the two openings. The goal is to slow the energy that otherwise rushes straight through without settling. A brass bowl filled with sea salt placed near the main door also absorbs this rapid energy flow.' },
                    { dosha: 'Toilet above or opposite the main door', fix: 'Keep the toilet door permanently closed. Install a copper pyramid in the ceiling between the toilet floor and the entrance ceiling. Place a Vastu Yantra or a piece of solid camphor above the main door frame. A mirror on the outside of the toilet door further deflects the negative energy.' },
                    { dosha: 'Main door in the Southwest or Southeast', fix: 'SW entrance: place a heavy stone or crystal grid near the door to ground excessive earth energy. SE entrance: add a water feature in the NE to counterbalance fire energy. In both cases, a Vastu Purush Yantra buried 18 inches underground at the threshold is essential.' },
                    { dosha: 'Door directly facing a T‑junction or dead‑end road', fix: 'This is considered a severe dosha because fast‑moving energy from the road strikes the house directly. Install a convex Bagua mirror above the door facing outward. Plant a row of hardy shrubs or a small tree between the door and the road to diffuse the energy.' },
                    { dosha: 'Two main doors facing each other', fix: 'This creates energy conflict. One door should be made slightly smaller or kept closed most of the time. A crystal hanging between the two doors harmonises the competing energy fields. A brass Swastik on both door frames neutralises the conflict.' },
                    { dosha: 'Door under a staircase', fix: 'The downward pressure of the staircase directly above the entrance suppresses energy and creates mental heaviness. Install a false ceiling or a crystal grid between the staircase and the door. A copper pyramid placed on the landing above the door redirects the descending energy.' },
                  ].map((item) => (
                    <div key={item.dosha} className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-2">Dosha: {item.dosha}</h3>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>Fix:</strong> {item.fix}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 5: Case Study ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Case Study — The South‑Facing Entrance That Doubled Revenue</h2>
                </div>
                <p>A family‑run textile business in Surat operated from a south‑facing shop for 12 years with consistently declining sales. The south entrance, receiving intense afternoon radiation, made the shop uncomfortably hot by 2 PM — driving customers away during peak shopping hours. Vastuvid K.K. Nagaich was called in. Rather than relocating, he prescribed: a Vastu Purush Yantra buried at the threshold, the door colour changed from black to a warm dark brown, a water feature installed in the northeast corner, and a brass Swastik placed above the door frame.</p>
                <p>Within <strong>four months</strong>, footfall increased by approximately 40%, and the average customer dwell time doubled — because the shop was now thermally comfortable during afternoon hours. The business, which had been considering closure, went on to open a second location within two years. This case demonstrates that even the most "inauspicious" entrance direction can be corrected without demolition — when the remedies are precise and the principles are understood.</p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Your Door Is Your Destiny</h2>
                </div>
                <p>The main entrance is not merely the point where you enter your home. It is where opportunity enters your life. Every element — direction, size, material, colour, threshold, and surrounding environment — contributes to a cumulative energetic effect that shapes your family's prosperity, health, and harmony. The 2024 CFD study confirmed scientifically what Vedic architects encoded into scripture: door placement is not arbitrary. It is a measurable, optimisable variable in the physics of human habitation. Whether your door faces North, East, West, or South — there is always a correct configuration and a proven remedy. The question is not whether your entrance is perfect — it is whether you have applied the right corrections.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich provides comprehensive entrance Vastu analysis as part of every residential and commercial consultation — including exact pada measurement, dosha identification, and personalised remedy prescription.</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
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
