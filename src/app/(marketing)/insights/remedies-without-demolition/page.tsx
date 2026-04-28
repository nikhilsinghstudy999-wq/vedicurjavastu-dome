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
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#2d0000] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#FF9933" strokeWidth="1" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="22s" repeatCount="indefinite"/>
                  </circle>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#E8B960" fontFamily="serif">Om</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Remedies</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>11 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Remedies Without Demolition —{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  Powerful Vastu Corrections for Your Home
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                How to fix every common Vastu defect — toilets in the Northeast, kitchens in the wrong zone, south‑facing entrances — without breaking a single wall. Backed by published case studies and two decades of clinical practice.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                When a homeowner learns their property has a Vastu dosha, the first image that comes to mind is a mason with a hammer. But Vastu Shastra is not about demolition. It is an energy‑management system — and like a skilled physiotherapist who restores mobility without surgery, Vastu remedies redirect, amplify, and balance energy without structural destruction. This guide presents every major non‑invasive remedy category, each grounded in published case studies, clinical observation, and authentic Vedic texts.
              </p>

              {/* ── Section 1: Why Remedies Work ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Why Remedies Work: The Energy‑Flow Principle</h2>
                </div>
                <p>Vastu Shastra maps your home like a living organism — each direction, element, and zone has a defined function. The North governs wealth (Kuber), the Northeast clarity and spiritual energy (Ishanya), the Southeast fire and metabolism (Agneya), the Southwest stability and relationships (Nairutya). When real‑world constraints force a misalignment — a kitchen in the North, a toilet in the Northeast — the energy flow is disrupted. Remedies work by <strong>redirecting, balancing, or amplifying energy</strong> using colours, symbols, mirrors, metals, plants, crystals, and light — so that the intended elemental energy is strengthened, and what is not helping is softened. A 2024 computational‑fluid‑dynamics study published by Springer confirmed that Vastu‑recommended door configurations measurably improve indoor thermal comfort — proving that energy‑flow principles translate to physical outcomes.</p>
              </div>

              {/* ── Section 2: Clean & Declutter ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-green-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Start Here: Clean and Declutter — The Simplest, Most Powerful Remedy</h2>
                </div>
                <p>Before investing in pyramids or yantras, begin with the remedy that costs nothing and works immediately: <strong>remove what you do not need</strong>. Clutter is not merely &quot;mess&quot; in Vastu — it is a blocker of prana (life energy). The Northeast (linked to clarity and wisdom) and the Brahmasthan (the open centre of the home, linked to health) must remain open, clean, and well‑lit. A cluttered home sends the brain constant micro‑reminders of unfinished tasks, draining mental energy even when you do not consciously notice. JK Cement&apos;s Vastu guide recommends keeping entrances and thresholds free of shoes, old mats, and unused décor; ensuring windows open smoothly; and repairing cracked plaster or chipped flooring — a sound structure is a sound home.</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">Quick Daily Practices</h3>
                    <ul className="text-sm text-nidra-indigo/70 space-y-1.5">
                      <li>• Keep entrances and thresholds free of shoes, old mats, and unused décor</li>
                      <li>• Ensure windows open smoothly — natural light and air are instant energy boosters</li>
                      <li>• Repair cracked plaster or chipped flooring — a sound structure equals a sound home</li>
                      <li>• Remove broken clocks, cracked mirrors, and non‑functional appliances immediately</li>
                      <li>• Keep the Brahmasthan (centre of home) completely open — no furniture, no storage</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">The Science Behind It</h3>
                    <ul className="text-sm text-nidra-indigo/70 space-y-1.5">
                      <li>• A cluttered home sends subconscious &quot;unfinished task&quot; signals that drain mental energy</li>
                      <li>• The Northeast zone governs clarity — clutter here directly impairs decision‑making</li>
                      <li>• More than 30% of renovated urban homes in India adapt Vastu features without structural changes</li>
                      <li>• Improved ventilation alone solves a large portion of everyday Vastu concerns</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── Section 3: Elemental Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Elemental Remedies: The Five‑Element Correction System</h2>
                </div>
                <p>Every Vastu dosha ultimately represents an elemental imbalance. The five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash) — can be strengthened or pacified using specific materials and placements. The Times of India&apos;s Vastu guide confirms that imbalanced elements cause specific symptoms: a weak Earth element causes financial instability; an overactive Fire element creates aggression and conflict; a blocked Air element results in communication breakdown.</p>

                <div className="mt-6 space-y-5">
                  {[
                    { element: 'Earth (Prithvi)', zone: 'Southwest', remedy: 'Place a heavy ceramic pot with soil or a terracotta object. Use yellow, beige, or brown colours. Add a solid stone or brick piece in the southwest corner to stabilise energy.' },
                    { element: 'Water (Jal)', zone: 'Northeast', remedy: 'A small water fountain or a bowl of fresh water with rose petals and a few drops of Gangajal. Change the water daily. A copper vessel with water energised overnight in the Northeast corner enhances mental clarity.' },
                    { element: 'Fire (Agni)', zone: 'Southeast', remedy: 'A salt lamp, a ghee lamp lit daily at sunrise, or a red bulb installed in the SSE zone. The colour red is associated with the fire element — installing a red bulb in the South‑Southeast zone has restored health in documented cases.' },
                    { element: 'Air (Vayu)', zone: 'Northwest', remedy: 'A metal wind chime with 5 or 6 rods hung in the northwest. The sound vibrations break stagnant energy patterns and improve communication flow. Bamboo chimes work in the East and Southeast.' },
                    { element: 'Space (Akash)', zone: 'Brahmasthan', remedy: 'Keep the centre open and well‑lit. A crystal lotus or a copper pyramid with arrows mounted on a sacred grid canvas can neutralise Brahmasthan doshas, as documented by multiple Vastu practitioners.' },
                  ].map((item) => (
                    <div key={item.element} className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-prakash-gold" />
                        <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.element} ({item.zone})</h3>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.remedy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 4: Yantra Remedies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Yantra Remedies: Sacred Geometry as Energy Correction</h2>
                </div>
                <p>Yantras are sacred geometric diagrams energised through specific mantras. They are not decorative — they are precision energy tools. Diviniti&apos;s comprehensive Vastu Yantra guide recommends placing them on clean altars, facing the correct direction, and maintaining regular prayer or meditation practice for sustained effect.</p>


                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Vastu Purush Yantra', placement: 'Northeast, underground or in pooja room', purpose: 'Aligns the entire home with the cosmic energy grid of the Vastu Purush Mandala — the foundational correction for any major Vastu dosha' },
                    { name: 'Shri Yantra', placement: 'North‑East, facing West', purpose: 'The most powerful of all yantras. Attracts wealth, harmony, and spiritual growth. Should be worshipped with saffron and water daily' },
                    { name: 'Kuber Yantra', placement: 'North or East, facing South', purpose: 'Enhances financial inflow and removes economic obstacles. Associated with Kuber, the deity of wealth. Can be placed in the cash box or north zone' },
                    { name: 'Mangal Yantra', placement: 'South, facing North', purpose: 'Pacifies aggressive Mars (Mangal) energy. Prevents accidents, disputes, and fire‑related mishaps. Essential for homes with Southeast doshas' },
                  ].map((yantra) => (
                    <div key={yantra.name} className="p-4 bg-white/70 rounded-2xl border border-prakash-gold/15">
                      <h3 className="font-serif text-base text-nidra-indigo font-bold mb-1">{yantra.name}</h3>
                      <p className="text-xs text-sacred-saffron mb-2">{yantra.placement}</p>
                      <p className="text-sm text-nidra-indigo/70">{yantra.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 5: Crystals & Pyramids ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Crystals and Pyramids: Precision Energy Tools</h2>
                </div>
                <p>Housing.com&apos;s definitive guide on Vastu pyramids and crystals catalogs the specific energy properties of each mineral. These are not decorative items — they are precision instruments that must be placed at exact angles and directions for measurable effect.</p>

                <div className="mt-4 overflow-hidden rounded-2xl border border-prakash-gold/15">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-prakash-gold/10 to-sacred-saffron/10">
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Crystal / Pyramid</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Best Placement</th>
                        <th className="py-3 px-4 text-left font-serif text-nidra-indigo">Primary Benefit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Clear Quartz Pyramid', 'Northeast – study or workspace', 'Amplifies focus, clarity, and concentration'],
                        ['Rose Quartz', 'Southwest – master bedroom', 'Healing, love, compassion, emotional balance'],
                        ['Amethyst Pyramid', 'Southwest – bedroom corner', 'Stress relief, calm sleep, spiritual awareness'],
                        ['Black Tourmaline', 'Main entrance or all four corners', 'Protection, negativity shield; absorbs harmful vibrations'],
                        ['Citrine', 'North – wealth zone, or office', 'Prosperity, motivation, business success'],
                        ['Copper Pyramid (81‑Pyramid Plate)', 'Under mattress or main entrance flooring', 'Attracts universal cosmic energy; neutralises structural doshas'],
                      ].map((row, i) => (
                        <tr key={i} className={`border-t border-prakash-gold/10 ${i % 2 === 0 ? 'bg-white/40' : 'bg-vastu-stone/20'}`}>
                          <td className="py-3 px-4 font-medium text-nidra-indigo/80">{row[0]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{row[1]}</td>
                          <td className="py-3 px-4 text-nidra-indigo/60">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Section 6: Salt, Camphor, Colour ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-pink-400 to-rose-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Salt Therapy, Camphor, and Colour Balancing</h2>
                </div>

                <div className="mt-4 space-y-5">
                  <div className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Sea Salt Bowl Therapy</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">Both Vastu and spiritual science confirm that salt absorbs emotional residue, psychic heaviness, and energy imbalances. Place uncrushed sea salt in glass or ceramic bowls in all four corners of a room, especially in spaces that feel heavy or emotionally charged. Replace the salt weekly — discard it outside the home, never reuse. The Times of India recommends this as &quot;a quick way to start the process of spiritual cleaning.&quot; For toilets, a bowl of sea salt in an open corner, changed every 15 days, neutralises the negative energy of the water element mixing with waste.</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Camphor Burning (Kapur)</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">Burning camphor (kapur) is one of the oldest and most effective Vastu remedies. Dip 5‑6 camphor tablets in pure ghee in an earthen lamp and burn them in the morning and evening. The aromatic smoke purifies the energy field, removes Vastu doshas, and also calms Pitru Dosha (ancestral afflictions). For stubborn doshas in a particular corner, place a piece of solid camphor there without burning it — as it naturally shrinks, it absorbs negative energy. News18 recommends burning camphor or guggul every morning and evening; the Times of India notes that camphor with ghee burned on Fridays in the Southeast activates Agni tattva and dissolves financial blockages.</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Colour Therapy Room‑by‑Room</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">Colour is one of the most accessible Vastu corrections. A360 Architects&apos; comprehensive colour guide confirms that colours must match both the room&apos;s function and its directional alignment. Key guidelines: <strong>Living Room</strong> — East‑facing: white, green, light blue. Southeast‑facing: light orange or pink. <strong>Bedroom</strong> — Southwest: earthy browns and yellows. South‑facing: soft pinks and peaches. Avoid dark blues, deep reds, and black. <strong>Kitchen</strong> — Light orange, red, yellow to stimulate appetite; never dark colours. <strong>Pooja Room</strong> — White, cream, light yellow, or soft gold. Light colours always preferred over dark or vibrant shades in smaller rooms or spaces lacking natural sunlight.</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Mirror Placement — The Energy Redirector</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">Mirrors are powerful energy tools in Vastu. Dwello&apos;s mirror guide states that the best directions for mirrors are North and East walls — these attract positive energy and create spaciousness. <strong>Never</strong> place a mirror facing the bed (causes marital discord and poor sleep), facing the main door (reflects opportunities away), or reflecting clutter or a toilet. A mirror on the outside of a Northeast toilet door symbolically neutralises the dosha. Two mirrors at the end of a narrow corridor visually extend the space and correct the defect. A mirror reflecting the dining table symbolically doubles food and prosperity.</p>
                  </div>

                  <div className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10">
                    <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">Wind Chimes, Plants, and Daily Rituals</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed"><strong>Wind Chimes:</strong> A metal chime with 5‑6 rods in the Northwest attracts helpful people and improves communication. A wooden or bamboo chime with 5 rods in the East promotes health and family growth. Never use a metal chime where a bamboo one belongs. <strong>Tulsi Plant:</strong> Place in the East, North, or Northeast direction — never in the South. Water it daily. Lighting a lamp near Tulsi in the evening is a powerful daily Vastu ritual. Housing.com confirms it purifies air and invites spiritual energy. <strong>Ghee Lamp:</strong> Lighting a ghee lamp in the East every morning activates the fire element and invites health and prosperity. Adding two cloves to the ghee lamp is a proven remedy for family health, documented across multiple Vastu traditions.</p>
                  </div>
                </div>
              </div>

              {/* ── Section 7: Case Studies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-red-500 to-orange-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Documented Case Studies — Remedies in Action</h2>
                </div>

                <div className="mt-4 space-y-5">
                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">Case 1: Asthma Recovery Through Zone Correction</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">A family head with severe asthma was dependent on an inhaler and had been hospitalised. Vastu analysis revealed that the Southeast and South‑Southeast zones — linked to health and the fire element — were too small. The entrance was positioned in the Zone of Disposal. Simple remedies were applied: a red bulb in the SSE zone, the bed moved to the South, and a water feature in the NNE zone. Health dramatically improved — the dependency on the inhaler reduced significantly, and energy levels normalised. <em>Source: vastu‑shastra.co.uk, October 2024.</em></p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">Case 2: Delhi Family — Three‑Month Transformation</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">Mr. and Mrs. Sharma of Delhi experienced constant financial instability and health issues despite a well‑established business. A Vastu audit identified four major doshas: a South‑West main entrance, a North‑East kitchen, a North master bedroom, and cluttered dark corners. Corrections included creating a North‑East entrance using a secondary door, repositioning the stove to the South‑East, moving the bedroom to the South‑West, and decluttering with improved lighting. Within three months: financial growth resumed, health issues reduced significantly, sleep improved, and relationships strengthened. <em>Source: vaastuguruduttji.com, January 2025.</em></p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15">
                    <h3 className="font-serif text-xl text-nidra-indigo mb-2">Case 3: Factory Owner — Production Turnaround</h3>
                    <p className="text-sm text-nidra-indigo/70 leading-relaxed">A factory owner who had recently relocated to expand his business faced declining production speed and poor team coordination. Vastu treatment without any structural demolition — using metal strips, colour balancing, crystals, and directional programming of cabins — resulted in improved production speed, better delivery timelines, and a supportive, cooperative team. <em>Source: LinkedIn, Karuna Sharma Vastu Case Study, January 2025.</em></p>
                  </div>
                </div>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Your Home Does Not Need to Be Torn Down</h2>
                </div>
                <p>Every Vastu dosha — from a toilet in the Northeast to a kitchen in the North, from a South‑facing entrance to a cluttered Brahmasthan — has a documented, effective, and non‑destructive remedy. The ancient science of Vastu Shastra never demanded demolition. It demanded understanding. When you know which element to strengthen, which direction to activate, and which tool to deploy — a salt bowl, a copper pyramid, a red bulb, a crystal, a yantra, or simply decluttering — you can transform your living space without ever lifting a hammer.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich has spent over 20 years applying these precise, non‑invasive remedies for over 2 lakh clients across 50+ countries — proving every day that the most powerful Vastu corrections are also the simplest.</p>
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
