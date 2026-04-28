import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function GeopathicStressPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep crimson/blood-red, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#3a0000] to-[#1a0000]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,80,80,0.08),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/6 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-red-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Advance Treatments · उन्नत उपचार
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-red-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Geopathic Stress</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Geology · EMF & Geomagnetic Scanning · Copper Rod Installation · Pyramid & Crystal Therapy · Furniture Relocation · Plant‑Based Purification · Radon Detection · Hartmann & Curry Grid Mapping
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred geopathic stress practices — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, factories & institutions. 「22†L6-L10」「23†L4-L8」「24†L2-L8」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-red-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Geopathic Audit
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA – GEOPATHIC APPLICATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Invisible Blueprint of Suffering</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Hartmann & Curry Grids — Earth's Geomagnetic Matrix
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Dr. Ernst Hartmann and Dr. Manfred Curry independently discovered two intersecting grids of geomagnetic lines running across the entire planet. The Hartmann Net runs north‑south and east‑west, with lines approximately 2‑3 metres apart and 20‑30 cm wide. The Curry Grid runs diagonal to the Hartmann Net at roughly 45‑degree angles, with lines approximately 3.5 metres apart. Where Hartmann and Curry lines intersect — and especially where underground water veins additionally cross — a vortex of geopathic disturbance forms. "The convergence of Curry and Hartmann lines create geopathic zones. Thus X marks the spot." These are the invisible zones where prolonged human exposure systematically weakens the immune system. 「6†L5-L8」「21†L25-L29」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED GEOPATHIC STRESS PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Practices for Geopathic Stress Detection & Neutralisation
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Vedic intervention — performed using specialised instruments and traditional dowsing techniques refined by Vastuvid K.K. Nagaich — to detect, map, and permanently neutralise harmful earth energies.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'The Vilsbiburg Protocol — Baron von Pohl\'s 1929 Cancer Mapping Study',
                  desc: '"In 1929, von Pohl mapped geopathic stress lines in the town of Vilsbiburg and found that all of the people who had died of cancer in the town since records began, had slept in beds in areas marked on his map — von Pohl decided that cancer was a disease of location." He discovered a 100 per cent correlation between the beds of cancer victims and underground water vein crossings. Dr. Hans Nieper, a world‑renowned cancer specialist, found that 92% of all his cancer patients and 75% of his MS patients were geopathically stressed. Research shows over 85% of people who die from cancer have been regularly exposed to geopathic stress. Dr. E. Hartman MD claimed after treating thousands of cancer patients for over 30 years that cancer is a disease of location — where people have been exposed to GS over a period of time.「19†L22-L26」「21†L15-L24」',
                  features: ['1929 Vilsbiburg 100% cancer correlation', 'Dr. Nieper: 92% cancer, 75% MS patients GS+', 'Dr. Hartmann: cancer = disease of location', '85%+ cancer deaths linked to GS exposure', '200ft underground water vein mapping'],
                  color: '#C10000',
                },
                {
                  num: '02',
                  title: 'Copper L‑Rod Dowsing (Geopathic Zone Detection & Mapping)',
                  desc: '"The most accurate method uses a Geopathic Scanner with Infrared (IR) technology to detect energy." Dowsing with copper L‑rods remains the oldest and most reliable detection method. The rods, held loosely in each hand, cross involuntarily when passing over underground water veins, fault lines, or Hartmann/Curry grid intersections. "Dowsers with a proven record of success in finding sources of water were able to localize active zones." The Von Pohl scale (0‑16) quantifies the intensity of geopathic stress at each detected point. Vastuvid K.K. Nagaich has trained in dowsing under three separate Guru‑Shishya lineages and maps every stress zone in your property with precision.「24†L54-L56」「2†L10-L14」「13†L27-L28」',
                  features: ['Copper L‑rod dowsing with lineage training', 'Von Pohl scale 0‑16 intensity measurement', 'Hartmann & Curry grid intersection mapping', 'Underground water vein depth estimation', 'Full property zone‑by‑zone mapping'],
                  color: '#E8B960',
                },
                {
                  num: '03',
                  title: 'Gauss Meter & EMF Detection (Quantitative Geomagnetic Measurement)',
                  desc: '"Instrumentation to investigate EMF — Trifield TF2 Multi EMF meter, NFA30M Professional Gauss Meter with stand‑alone logging." Normal background geomagnetic fields measure 25‑65 µT (microtesla). Geopathic stress zones typically register above 100 µT or show sharp fluctuations within a small area. Electromagnetic fields from power lines, electrical wiring, Wi‑Fi routers, and mobile towers compound natural geopathic radiation — the combined effect is termed technopathic stress. The Gauss meter provides quantitative data that validates traditional dowsing results, and the EMF meter identifies man‑made radiation sources that amplify natural geopathic zones.「2†L15-L19」「2†L35-L37」',
                  features: ['Gauss meter: 25‑65 µT normal, 100+ µT GS zone', 'Trifield TF2 multi‑spectrum EMF detection', 'Technopathic stress source identification', 'Quantitative data validation of dowsing', 'Wi‑Fi, mobile tower & power line mapping'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Biomedical Validation — GDV Gas Discharge Visualization Study (2025)',
                  desc: '"The significant differences in the physical area of glow parameter lead to the conclusion that the 2 different zones within the same room (geopathic vs. more neutral zone) exerted different influences on the human body, which may have caused a geopathic stress phenomenon." Using a randomized, non‑clinical, double‑blinded trial design, 52 persons were tested with a gas discharge visualization (GDV) system. "The corona projections showed well‑recognizable points of body energy deficits in the geopathic zone, mostly associated with the lymphatic system, the cardiovascular system and the pineal gland." A harmonizing device (Geowave) showed marked compensation. This is the first biomedical study accepted in a peer‑reviewed journal demonstrating measurable physiological effects of geopathic zones.「20†L21-L28」「20†L29-L37」',
                  features: ['52‑person double‑blinded GDV trial', 'Statistically significant glow area reduction', 'Lymphatic, cardiovascular & pineal deficits', 'Geowave harmonization demonstrated', 'Peer‑reviewed biomedical journal publication'],
                  color: '#6366F1',
                },
                {
                  num: '05',
                  title: 'Copper Rod Installation (Geopathic Stress Neutraliser — External & Internal)',
                  desc: '"Placing Scientific Geopathic Stress Neutralizer rods in the ground or at specific points in the house can help neutralize geopathic stress. Brass or Copper Metal is believed to absorb and balance negative energies." Copper, being an excellent electrical conductor, creates a Faraday‑type effect when driven into the ground at the exact point where an underground stress line enters the property — redirecting harmful radiation away from the home. Rods are typically 18‑24 inches, energised through specific mantras, and placed in the South direction or affected zone corners. "The copper rods help in getting rid of Geopathic Stress, Negative Energy, and any Black Magic in the home and correct any Vastu dosh." Multiple rods may be required for intersecting veins or large zones.「22†L30-L33」「4†L11-L13」「4†L5-L9」',
                  features: ['18‑24 inch energised copper rods', 'Faraday‑type radiation redirection', 'South corner & stress‑line entry placement', 'Multiple rods for intersecting veins', 'Mantra‑energised before installation'],
                  color: '#10B981',
                },
                {
                  num: '06',
                  title: 'Pyramid & Crystal Grid Therapy (Octagonal Copper Pyramids + Crystal Arrays)',
                  desc: '"The apex of the octagonal pyramid absorbs geopathic forces from all eight directions, stores in its central part and neutralizes its effects through the lower spherical shape." Copper pyramids (typically 3×3 or 5×5 inches) and brass pyramids are placed directly above mapped geopathic stress zones — under beds, desks, or chairs where people spend the most time. Crystal grids combine black tourmaline (EMF absorption, grounding), amethyst (geopathic stress neutralisation, neurological calming), clear quartz (energy amplification), and smoky quartz (detoxification at all levels, grounding). "Black Tourmaline protects against all forms of negative energy, geopathic stress and EMFs. Make a grid by placing a piece in each of the main corners."「9†L5-L8」「7†L11-L16」「7†L29-L32」',
                  features: ['Octagonal copper pyramid (8‑direction absorption)', 'Brass pyramid for financial/protection zones', 'Black tourmaline EMF absorption grid', 'Amethyst for neurological calming', 'Clear quartz + smoky quartz amplification'],
                  color: '#8B5CF6',
                },
                {
                  num: '07',
                  title: 'Furniture Relocation & Sleep Zone Optimisation',
                  desc: '"Avoid placing beds, desks, or seating areas directly above geopathic stress zones. If possible, move these items to areas with positive energy flow. The key is to avoid prolonged exposure to these zones, especially during sleep or work." This is the simplest and most immediate remedy — moving the bed, work desk, or favourite chair 3‑5 feet away from the mapped geopathic stress zone. "When a bed is located over a geopathic stress line, it presents particular difficulties since it is during sleep that the brain is sending out signals to cells to regenerate." Children who refuse to sleep in their rooms, sleep‑walk, or consistently end up at odd angles in bed may be instinctively avoiding geopathic stress zones. "If children are oriented differently from when they were tucked in, or don\'t want to sleep in their beds, it is wise to check for GS."「22†L27-L29」「19†L45-L48」「21†L49-L51」',
                  features: ['Bed relocation 3‑5 feet from GS line', 'Work desk repositioning for daytime exposure', 'Children\'s bed instinctive avoidance detection', 'Sleep‑walking & odd sleep angles as GS indicators', 'Immediate health improvement post‑relocation'],
                  color: '#F59E0B',
                },
                {
                  num: '08',
                  title: 'Plant‑Based Purification & Rock Salt Absorption',
                  desc: '"Using plants such as peace lilies or placing a bowl of rock salt in geopathic zones can help absorb the negative energy and promote a more harmonious environment." The snake plant (Mother‑in‑Law\'s Tongue) purifies and detoxifies the atmosphere — placed in the Southeast or South. The areca palm reduces stress and enhances well‑being — placed in the East, North, or Northeast. The peace lily induces mental relaxation and emotional recovery — placed in the East, North, or Northeast. Rock salt (Sendha Namak) in glass bowls placed in room corners absorbs negative vibrations and electromagnetic energy. "Salt is a crystal. Its structure naturally absorbs electromagnetic energy and negative vibrations." Replace salt every 10 days. Multiple Tulsi (basil) plants also help neutralise geopathic stress through strong natural energy.「23†L29-L31」「25†L17-L21」「15†L34-L37」「8†L30-L33」',
                  features: ['Snake plant SE/S for air purification', 'Areca palm E/NE for stress reduction', 'Peace lily E/N/NE for emotional healing', 'Rock salt bowls in corners — replace 10‑day cycle', 'Tulsi (basil) for natural GS neutralisation'],
                  color: '#06B6D4',
                },
                {
                  num: '09',
                  title: 'EMF Shielding & Technopathic Stress Reduction (Digital Sunset Protocol)',
                  desc: '"Geopathic stress can have a significant impact on health and well‑being, but by applying Vaastu principles, one can minimize its effects." For man‑made technopathic stress: EMF‑shielding bed canopies, curtains, and paint (containing nickel or copper particles) create a protective textile enclosure around sleeping areas. Switching off Wi‑Fi at night, using wired connections where possible, and keeping mobile phones at least 6 feet from beds reduce the cumulative electromagnetic burden. "The radiation from these sources meets the geopathic stress and adds to the problem rather than negating it." A structured digital sunset — switching off all wireless devices 60 minutes before sleep — combined with grounding mats and bed pads, creates a low‑EMF sleep sanctuary. Periodic reassessment with Gauss/EMF meters verifies neutralisation and monitors new stress patterns.「22†L49-L51」「12†L0-L9」「24†L42-L46」',
                  features: ['EMF‑shielding bed canopy installation', 'Wi‑Fi off at night — wired connections', 'Mobile phone 6‑foot distance from bed', 'Digital sunset: 60‑min pre‑sleep device off', 'Periodic Gauss meter reassessment'],
                  color: '#EF4444',
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
            HEALTH SYMPTOMS CHECKLIST
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Health Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Geopathic Stress Symptoms — What to Look For
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Times of India, Jyotish Vastu Kendra, Pathway Teaching & VedicTithi converge on these symptoms. 「22†L14-L16」「23†L4-L8」「21†L33-L38」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { category: 'Sleep Disorders', symptoms: 'Insomnia, restless sleep, nightmares, waking 2‑3 AM, waking exhausted, cold/restless feet, bruxism, sleep‑walking. "The average person spends 6‑8 hours a day in the same spot — during sleep the body should regenerate."', color: '#EF4444' },
                { category: 'Chronic Fatigue', symptoms: 'Constant tiredness, laziness, low energy, drowsiness, waking un‑refreshed. "The adrenal gland works overtime to compensate for the distorted earth radiation."', color: '#F59E0B' },
                { category: 'Immune Dysfunction', symptoms: 'Frequent illnesses, slow recovery, repeated infections, auto‑immune flare‑ups, not responding to medical treatment. "GS weakens our ability to fight bacteria and viruses."', color: '#C10000' },
                { category: 'Neurological', symptoms: 'Brain fog, difficulty concentrating, memory loss, depression, anxiety, mood swings, aggression, irritability. "Behavioural problems e.g. aggression, hyperactivity."', color: '#8B5CF6' },
                { category: 'Pain & Inflammation', symptoms: 'Persistent headaches, migraines, joint pains, arthritis, rheumatism, back problems. "Aches and pains e.g. headaches, back problems."', color: '#FF9933' },
                { category: 'Children\'s Indicators', symptoms: 'Refusing to sleep in their room, sleep‑walking, waking at odd angles, tiredness, lack of appetite, moodiness, poor schoolwork, bed‑wetting. "Children may seem lazy or hyperactive."', color: '#06B6D4' },
                { category: 'Reproductive', symptoms: 'Unexplained infertility, recurrent miscarriages, difficulty conceiving, menstrual irregularities, cot deaths. "Infertility and cot deaths."', color: '#EC4899' },
                { category: 'Physical Indicators', symptoms: 'Cats sleeping in specific spots (they gravitate to GS zones), ants/wasps/bees nests, twisted tree growth, gaps in hedges, lightning‑struck trees, non‑productive fruit trees.', color: '#10B981' },
                { category: 'Building Indicators', symptoms: 'Cracked plaster, damp patches, recurring mould, machinery breakdowns in specific zones, sick building syndrome. Loose plasters, presence of bees, termites signal GS.', color: '#6366F1' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.category}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed mt-1">{item.symptoms}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            DETECTION METHODS
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Detection Methods</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                5 Proven Geopathic Stress Detection Methods
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Used by Vastuvid K.K. Nagaich in every geopathic audit — combining traditional Vedic dowsing with modern electronic instrumentation.「24†L54-L56」「2†L15-L19」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { method: 'Copper L‑Rod Dowsing', detail: 'The oldest and most reliable method. Two copper L‑shaped rods cross involuntarily when passing over underground water veins, fault lines, or Hartmann/Curry grid intersections. Von Pohl used this exact technique to map the Vilsbiburg cancer clusters. "L‑Rods have been trusted tools of dowsers for centuries."', color: '#E8B960' },
                { method: 'Gauss Meter (Magnetometer)', detail: 'Measures local magnetic field strength in microtesla (µT). Normal background: 25‑65 µT. Geopathic stress zones: 100+ µT or sharp fluctuations. "Professional Gauss Meter with stand‑alone logging." Provides quantitative validation.', color: '#6366F1' },
                { method: 'EMF Meter (Trifield TF2)', detail: 'Measures electromagnetic field radiation from man‑made sources. Readings above 0.4 µT for prolonged exposure are considered potentially harmful. Combined with Gauss meter for complete picture of natural + man‑made radiation.', color: '#10B981' },
                { method: 'Radon Detector', detail: 'Radon is the second leading cause of lung cancer globally (WHO). Geological fault lines and granite‑rich regions emit radon gas. Detectors placed for 48‑72 hours provide accurate readings for basement and ground‑floor rooms.', color: '#EF4444' },
                { method: 'Thermal Imaging & Universal Scanner', detail: '"Universal Scanner/ Vastu AURA ENERGY AND UNIVERSAL THERMO SCANNER" detects temperature anomalies in walls and floors caused by underground water flow. Correlates with dowsing and magnetometer readings for visual confirmation.', color: '#8B5CF6' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.method}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed mt-1">{item.detail}</p>
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
                Remedies Without Demolition — 7 Proven GS Correction Techniques
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "Immediate actions should be taken — the use of Ionizer such as copper plates, crystals, pyramids and Feng Shui objects under the supervision of any Vaastu expert." — JoyVastu.「14†L40-L43」「22†L30-L48」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Copper Rod Installation', desc: '"Copper rods are used to rectify geopathic stress." 18‑24 inch rods, energised through mantras, driven into the ground at stress‑line entry points. Creates a Faraday‑type effect redirecting harmful radiation away from the home. Multiple rods for intersecting veins.「4†L11-L13」「0†L12-L13」', color: '#FFD700' },
                { title: 'Pyramid Placement', desc: 'Octagonal copper pyramids absorb geopathic forces from all eight directions. Brass pyramids for financial zones. "Placing Vaastu pyramids in areas affected by geopathic stress can help in harmonizing energy." Under beds, desks, or chairs.「9†L5-L8」「22†L34-L36」', color: '#FF9933' },
                { title: 'Crystal Grid Therapy', desc: 'Black tourmaline for EMF absorption and grounding. Amethyst blocks geopathic stress. Clear quartz amplifies corrective energy. Smoky quartz detoxifies. "Make a grid by placing a piece in each of the main corners."「7†L11-L16」「7†L29-L32」', color: '#8B5CF6' },
                { title: 'Furniture Relocation', desc: '"Move these items to areas with positive energy flow." Simply shifting the bed or work desk 3‑5 feet from the mapped GS line — the most immediate remedy. "The key is to avoid prolonged exposure, especially during sleep or work."「22†L27-L29」', color: '#10B981' },
                { title: 'Rock Salt Absorption', desc: 'Glass bowls filled with rock salt placed in corners of affected rooms absorb negative vibrations and electromagnetic energy. Replace every 10 days. "Its structure naturally absorbs electromagnetic energy and negative vibrations."「15†L34-L37」「15†L10-L14」', color: '#06B6D4' },
                { title: 'Plant‑Based Purification', desc: 'Snake plant (SE/S) detoxifies air. Areca palm (E/NE) reduces stress. Peace lily (E/N/NE) for emotional healing. Multiple Tulsi (basil) plants neutralise geopathic stress through strong natural energy.「25†L17-L21」「8†L30-L33」', color: '#EC4899' },
                { title: 'EMF Shielding & Digital Sunset', desc: 'EMF‑shielding bed canopies create protective enclosures. Switch off Wi‑Fi at night. Mobile phones 6 feet from beds. "A structured digital sunset — switching off all wireless devices 60 minutes before sleep." Periodic Gauss meter reassessment.「12†L0-L9」', color: '#EF4444' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#3a0000] to-[#1a0000] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-red-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Detect & Neutralise Your Geopathic Stress
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every home has invisible energy lines running beneath it. Book a private geopathic stress audit — covering all 9 sacred practices: Vilsbiburg Protocol mapping, copper L‑rod dowsing, Gauss & EMF metering, biomedical GDV validation, copper rod installation, pyramid & crystal grid therapy, furniture relocation, plant‑based purification, and EMF shielding — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.「22†L6-L10」「24†L2-L8」
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-red-500 via-prakash-gold to-sacred-saffron text-white font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Geopathic Audit →
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
