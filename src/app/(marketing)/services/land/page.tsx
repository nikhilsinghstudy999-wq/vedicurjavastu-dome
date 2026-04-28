import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function LandSelectionPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep forest green/gold, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.06),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-emerald-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Extensive Framework · विस्तृत ढांचा
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-emerald-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Land Selection</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Bhoomi Sanskar · Usarology · Vriksha Vastu · Kamadahana Soil Testing · Plot Shape Analysis · Slope & Elevation Audit · Surroundings Verification
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred land selection practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — ensuring your plot is cosmically aligned before a single brick is laid.「0†L4-L8」「5†L6-L9」「10†L4-L8」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Land Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA – LAND APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint for Land</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Vastu Purusha Mandala – Land as a Living Organism
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Before any construction, the land itself must be evaluated as a living entity. "The Vastu Purusha Mandala is the metaphysical plan incorporating the course of heavenly bodies and supernatural forces." The centre point — Brahmasthana — is where Lord Brahma presides. The northeast (Ishanya) must remain open and light; the southwest (Nairutya) bears the heaviest energy. "The central area should be kept open and free from obstructions." Every cut, extension, or irregularity in the plot shape directly corresponds to an energy disruption that will manifest in the lives of occupants.「18†L10-L14」「18†L17-L18」「18†L40-L43」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED LAND SELECTION PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Practices for Auspicious Land Selection
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Selecting land is the most consequential Vastu decision. Each practice below is a precise Vedic intervention — performed by Vastuvid K.K. Nagaich — to evaluate, purify, and align your plot before construction.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Bhoomi Puja (Sankusthapana – Land Worship & Purification)',
                  desc: '"Bhoomi Puja is performed in the northeast corner of the construction site to purify the land of all negative effects and Vastu doshas." The ritual invokes Vastu Purush, Goddess Bhoomi, Pancha Boothas (five elements), and the deity of directions. Panchgavya (cow dung, ghee, urine, milk, curd), Panchamrit, and Sarvaushadhi are sprinkled for purification. "The Bhoomi Pooja facilitates the successful execution of tasks and ensures the health and happiness of those who are willing to live in the property." The foundation stone is also laid during this ceremony.「0†L4-L8」「8†L10-L14」「0†L24-L28」',
                  features: ['NE corner ritual site', 'Vastu Purush & Bhoomi Devi invocation', 'Panchgavya & Panchamrit purification', 'Foundation stone laying', 'Muhurta selection'],
                  color: '#E8B960',
                },
                {
                  num: '02',
                  title: 'Kamadahana – Soil Testing (2×2×2 Pit Test & Water Absorption)',
                  desc: '"According to the ancient Indian Vastu Specialist, dig a 2\'x2\'x2\' hole and then fill it up again. If some soil is left over after filling, the land is good." This is the Kamadahana test. A second test fills the same pit with water: "If the time taken to absorb the water is more than an hour, it is good." After absorption, if many cracks appear, the foundation must be extra strong. "If after digging the plot till 1 foot a smell of oil or ghee emanates, then the land is definitely good." Soil color assessment: white soil for Brahmans (spiritual), red for Kshatriyas (leadership), yellow for Vaisyas (business), black for Sudras. Yellow soil is ideal for the business community.「12†L5-L13」「12†L9-L11」「6†L4-L7」「6†L28-L29」',
                  features: ['2×2×2 pit refill test', 'Water absorption timing', 'Soil smell evaluation', 'Color-based caste suitability', 'Crack analysis for foundation'],
                  color: '#10B981',
                },
                {
                  num: '03',
                  title: 'Plot Shape Analysis (Gaumukhi, Shermukhi, Square & Irregular)',
                  desc: '"Square and rectangular plots are generally considered the most auspicious — they symbolise stability and balanced growth." Gaumukhi plots (narrow front, wide rear — cow face) are best for residential use. Shermukhi plots (wide front, narrow rear — lion face) are better for commercial purposes. "The shape should be such that there must be only four corners in a Plot." Avoid triangular, circular, L-shaped, or plots with cut corners. Irregular shapes create energy voids — "cuts in any corner of the land will alter the subtle energy flow." Plots with extension in the North-East are auspicious. Avoid cuts in the North-East corner.「9†L23-L28」「11†L10-L16」「5†L13-L14」「15†L31-L34」',
                  features: ['Square/rectangular preferred', 'Gaumukhi for residential', 'Shermukhi for commercial', 'Avoid triangular/L-shaped', 'NE extension auspicious'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Slope & Elevation Audit (SW Highest → NE Lowest)',
                  desc: '"Southwest must be the highest; Northeast must be the lowest." The ideal slope runs from South-West to North-East. "If South-West is low, all earnings go into the drain." Downward slope towards East is good for growth; North provides wealth. "Sloping land with high elevation in east and low in west is extremely bad." The slope hierarchy must be: SW highest → SE next higher → NW next → NE lowest. "Any downward slope towards South leads to untimely death and severe health disease while slope towards West causes loss of wealth."「14†L4-L9」「14†L17-L20」「14†L41-L45」',
                  features: ['SW highest, NE lowest', 'Slope SW→NE ideal', 'Avoid South/West slopes', 'East slope for growth', 'North slope for wealth'],
                  color: '#6366F1',
                },
                {
                  num: '05',
                  title: 'Surroundings Audit (Roads, Temples, Cemeteries & Water Bodies)',
                  desc: '"There should be no temple, school, hospital, cemetery or graveyard adjacent to any side of the plot." Plots with roads on north and east bring prosperity. "The plot should not be within twice the distance of the height of the house to any public place like temple, hospital, factory." Avoid plots near high-tension wires, sewage treatment plants, or dumping yards. Good surroundings: water bodies in the North/East, greenery, open space. "The shadow of a temple should not fall on the house." Avoid T-junctions where a road hits directly into the plot.「16†L5-L9」「16†L10-L14」「16†L43-L47」',
                  features: ['Road on North/East preferred', 'No temple/cemetery adjacent', 'Avoid T-junctions', 'Water bodies NE auspicious', 'Distance from public places'],
                  color: '#C88A5D',
                },
                {
                  num: '06',
                  title: 'Vriksha Vastu (Sacred Tree & Plant Placement)',
                  desc: '"According to Vrkshayurveda, a plaksha should be planted on the north, vata on the east, udumbara on the south and asvattha on the west of the house." Coconut, banana, and Kalpavriksha trees are the most favorable. Tulsi must be located on the north, northeast, or east. "Tall trees must be little away from the house — the shade of the trees should not fall on the Main door at any time." Thorny plants, milky sap trees, and red-flower trees are inauspicious near the house. Gardens should be in the North or West within compound walls.「4†L4-L7」「4†L21-L24」「13†L26-L29」',
                  features: ['Plaksha N, Vata E, Udumbara S', 'Tulsi NE/E/N placement', 'Tall trees away from door', 'Avoid thorny & milky sap trees', 'Garden in North/West'],
                  color: '#06B6D4',
                },
                {
                  num: '07',
                  title: 'Usarology – Barren Land Diagnosis & Correction',
                  desc: '"Land bearing healthy plants and trees is considered live land. Infertile barren land is called \'dead\' land, which is avoidable." According to Brihat Samhita, "barren land destroys wealth and uneven land invites enemies." Cracked land with termites and bones should never be selected. White ant-hills, skeletons, or excessive rock content indicate land unsuitable for residential construction. "If the soil is crumbly rock, money comes without effort." Usarology — the Vedic science of barren land treatment — involves energised copper rods, crystal grids, and specific Havan rituals to revive dead land.「3†L23-L27」「12†L2-L4」「6†L42-L43」',
                  features: ['Live vs dead land assessment', 'Brihat Samhita principles', 'Termite/bone detection', 'Barren land revival rituals', 'Copper rod & crystal correction'],
                  color: '#EF4444',
                },
                {
                  num: '08',
                  title: 'Vastu Shanti & Navagraha Havan (Plot Energy Purification)',
                  desc: '"The ritual includes Ganesh Puja, Kalash Sthapana, Navagraha Shanti, Vastu Mandal Puja, and Havan. It purifies the environment and energizes the space with divine vibrations, ensuring alignment with natural and cosmic forces." The Havan involves offering ghee, herbs, and sacred materials into fire — purifying the five elements. Vasudham havan samagri enriched with 40 Ayurvedic herbs is used for land purification. This puja is performed after land purchase and before construction begins, balancing planetary influences and removing pre-existing doshas.「17†L22-L25」「17†L16-L19」「17†L4-L9」',
                  features: ['Ganesh Puja & Kalash Sthapana', 'Navagraha Shanti for 9 planets', 'Vastu Mandal Puja', 'Ghee & herb Havan', '40 Ayurvedic herb samagri'],
                  color: '#8B5CF6',
                },
                {
                  num: '09',
                  title: 'Plot History Investigation & Legal Purity',
                  desc: '"We should not purchase land from one who has become insolvent, a person suffering from leprosy, from lunatics, and from people who have left the country." Do not purchase land donated to a temple, allotted to a village watchman, land in possession of charitable trusts, or land without a clear title deed. "Avoid plots where tragic incidents occurred. Don\'t buy plots with disputed ownership or negative history." The previous owner\'s fate energetically imprints on the land — a principle validated across every Vastu text. The land must be cultivated, not barren, to ensure it has supported life before.「12†L19-L23」「10†L22-L25」「12†L2-L4」',
                  features: ['Previous ownership vetting', 'No insolvent/lunatic seller', 'Clear title deed verification', 'Tragic history avoidance', 'Cultivated land preferred'],
                  color: '#F59E0B',
                },
              ].map((p, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}>
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-md border border-prakash-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center">
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: p.color }} />
                      <div className="text-6xl font-bold mt-4 mb-2" style={{ color: p.color }}>{p.num}</div>
                      <h3 className="font-serif text-xl text-nidra-indigo font-bold">{p.title.split('(')[0].trim()}</h3>
                      <p className="text-xs text-nidra-indigo/50 mt-1">{p.title.match(/\(.*?\)/)?.[0]?.replace(/[()]/g, '')}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-nidra-indigo/70 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map((f, j) => (
                        <span key={j} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: p.color + '30', backgroundColor: p.color + '08', color: p.color }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PLOT SHAPE COMPARISON TABLE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Plot Shape Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Gaumukhi vs Shermukhi — Which Shape for Your Purpose?
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Housing.com, Squareyards, Piramal Finance & NoBroker converge on identical principles for plot shape selection.「7†L6-L10」「11†L10-L16」「9†L23-L30」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border border-emerald-200/30">
                <h3 className="font-serif text-xl text-emerald-700 font-bold mb-3">Gaumukhi (Cow Face) — Best for Residential</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Narrow at the front, broad at the rear. "Gaumukhi plots are associated with positive energy and prosperity due to their wider and more open front." The broader part should be in the North-East; the road should be on the southern or western side. "A Gaumukhi plot with a narrow part in the east and with a road in front is considered inauspicious." Suitable for homes, apartments, and residential colonies.「11†L28-L33」「7†L6-L8」
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border border-amber-200/30">
                <h3 className="font-serif text-xl text-amber-700 font-bold mb-3">Shermukhi (Lion Face) — Best for Commercial</h3>
                <p className="text-sm text-nidra-indigo/70 leading-relaxed">
                  Broad at the front, narrow at the rear. "These plots are ideal for commercial purposes as they symbolise the lion, which represents power, efficiency and control." The broader part should be in the North; the road should be on the eastern or northern side. "Shermukhi plots are better for businesses and bring good fortune if used for business profitability."「11†L34-L40」「7†L4-L5」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SOIL TESTING GUIDE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Soil Science</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Kamadahana Soil Test — 4 Ancient Diagnostic Methods
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                King Bhoj's prescribed methods, validated for millennia. "The real analysis of soil determines the land selection for the plot and for the foundation of the building." — Astro Vastu Remedies.「6†L4-L7」「6†L28-L33」「12†L10-L14」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { test: 'Pit Refill Test (Volume)', desc: 'Dig a 2 ft × 2 ft × 2 ft cube. Remove all soil. Refill with the same soil. If soil is left over: excellent (prosperity). If exactly fills: average. If insufficient: poor (loss). Tests natural moisture, density, and aeration.', color: '#10B981' },
                { test: 'Water Absorption Test', desc: 'Refill the same pit with water. If absorption takes more than 1 hour: excellent. Fast absorption indicates loose, unsuitable soil. After absorption, examine for cracks — many cracks = extra-strong foundation required.', color: '#06B6D4' },
                { test: 'Smell & Color Analysis', desc: '"If after digging 1 foot a smell of oil or ghee emanates, the land is definitely good." Red, yellow, white, or brown soil with a pleasant earthy smell is auspicious. Avoid black, clayey soil. Avoid soil with bad odor, bones, debris, or excessive moisture.', color: '#FFD700' },
                { test: 'Plant Growth Observation', desc: 'Land bearing healthy plants and trees is "live land." "Infertile barren land is dead land — avoidable." Land with too many rocks, worms, ant-hills, skeletons, or thorny trees is unsuitable. Cultivated land where vegetation can grow is preferred.', color: '#8B5CF6' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.test}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REMEDIES WITHOUT DEMOLITION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Non‑Invasive Corrections</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Remedies for Plot Doshas — Without Land Alteration
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "Among all remedies, landscaping is the safest and most practical solution for irregular plots." — TimesProperty.「15†L5-L10」「15†L12-L16」「15†L36-L40」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'NE Cut Remedy', desc: 'Place a water feature or small temple in the northeast. Install a mirror to symbolically extend the cut area. Keep the NE zone permanently open, clean, and well-lit. "The NE zone must remain open and light."', color: '#10B981' },
                { title: 'SW Cut Remedy', desc: 'Place heavy furniture or objects in the SW corner. "Put a glass filled with water and salt in the southwest corner." Copper pyramids energised at this corner neutralise negative effects of SW cuts.', color: '#C88A5D' },
                { title: 'Copper Pyramid Divider', desc: '"Cut off the extended area by putting a 3-piece, 9-piece, or 27-piece plus-value copper pyramid divider." Green aventurine pebbles in a cane basket at the extended corner. Copper strips embedded in floor grooves seal the zone.', color: '#FF9933' },
                { title: 'Landscaping Correction', desc: 'Plants soften sharp edges and absorb negative vibrations. Trees planted at specific directions compensate for missing plot extensions. "The safest and most practical solution for irregular plots." Short ornamental palms near northern compound.', color: '#06B6D4' },
                { title: 'Vastu Yantra Placement', desc: 'Bhoomi Yantra for land purification. Vastu Purush Yantra at the main gate. "The yantra nullifies malefic effects of Bhoomi Dosha." Each yantra must be energised through specific mantras before placement.', color: '#8B5CF6' },
                { title: 'Boundary Wall Design', desc: 'Southwest wall tallest; East/North walls 21 inches shorter. Compound wall built before construction. "Keeping a calf or cow on the property makes it even more auspicious." Barbed wire on East/North boundaries.', color: '#EF4444' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] via-[#1a3a1a] to-[#0a1a0a] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-emerald-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Audit Your Land
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Before you invest lakhs in construction, invest in a Vedic land audit. Covering all 9 sacred practices — Bhoomi Puja, Kamadahana soil testing, plot shape analysis, slope & elevation audit, surroundings verification, Vriksha Vastu, Usarology, Vastu Shanti Havan, and plot history investigation — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Land Audit →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </SmoothScroll>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
        @keyframes gradientLoop { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </>
  );
}
