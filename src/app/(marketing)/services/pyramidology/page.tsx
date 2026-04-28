import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function PyramidologyPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep midnight blue/gold, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.10),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-amber-300/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Advance Treatments · उन्नत उपचार
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Pyramidology</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Copper Pyramid Grids · Brass Pyramid Arrays · Crystal Pyramid Placement · 9‑Pyramid Cosmic Energy Array · Bedroom & Workplace Installations · Dosha Zone Correction · Health & Wealth Amplification
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              Sacred pyramid energy correction — performed by Vastuvid K.K. Nagaich, 4th generation Guru, MBA, Ex‑CEO — for homes, offices, factories, and spiritual spaces. One of the most widely prescribed, non‑structural Vastu remedies in practice today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Pyramid Consultation
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PYRAMID SCIENCE SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Geometry of Power</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Pyramid Architecture – The World's Most Powerful Energy‑Amplification Structure
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                The pyramid shape is not merely an architectural choice — it is a proven energy‑amplification geometry. Scientific experiments demonstrate that objects placed inside a pyramid (even scaled‑down models) undergo preserved decomposition without decay, plants grow faster, and water placed under a pyramid for 24 hours shows measurable changes in molecular structure. In Vedic tradition, the copper pyramid is considered the most powerful non‑structural Vastu remedy — "the apex of the octagonal pyramid absorbs geopathic forces from all eight directions, stores in its central part, and neutralizes its effects through the lower spherical shape." At VedicUrja, Vastuvid K.K. Nagaich deploys precision‑engineered copper, brass, and crystal pyramids to correct Vastu defects, amplify positive zones, and neutralise geopathic stress — all without a single structural change.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE PYRAMIDOLOGY PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Sacred Pyramid Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Pyramidology for Vastu Correction & Energy Amplification
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice deploys precision‑engineered pyramids — copper for grounding, brass for prosperity, crystal for emotional balance — installed at precise locations by Vastuvid K.K. Nagaich.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'The 9‑Pyramid Cosmic Energy Array – Whole‑House Vastu Correction',
                  desc: 'The most comprehensive pyramid correction system in Vastu Shastra. Nine energised copper pyramids are installed at pre‑determined geometric points across the property, creating a cosmic energy grid that neutralises every directional dosha. Each pyramid is placed at a specific angle and orientation — the central pyramid at the Brahmasthan (centre), four pyramids at the corners of the main built‑up area, and four pyramids at the four cardinal entrance points. The 9‑Pyramid array is the single most prescribed pyramid configuration for complete whole‑house Vastu correction, recommended for homes with multiple doshas or severe directional imbalances. The array creates an amplified energy field that fills the entire property with balanced, harmonised cosmic prana.',
                  features: ['9 copper pyramids at geometric points', 'Centre + 4 corners + 4 entrances', 'Complete whole‑house dosha neutralisation', 'Cosmic prana field generation', 'Permanent — no ongoing maintenance'],
                  color: '#FFD700',
                },
                {
                  num: '02',
                  title: 'Copper Pyramid (Tamba Pyramid) – Earth Element Conduction & Grounding',
                  desc: 'Copper is an excellent electrical conductor — "copper rods are used to rectify geopathic stress." Copper pyramids placed at dosha points absorb and redirect negative earth energies, creating a Faraday‑type protective field. Best used in: Southwest (stability, relationships), Southeast (fire activation, cash flow), and under the bed for deep, restful sleep. "Placing scientific Geopathic Stress Neutralizer copper rods in the ground or at specific points in the house can help neutralize geopathic stress." The pyramid\'s apex acts as an antenna — absorbing harmful radiations from all eight directions, storing them in the central energy chamber, and neutralising their effects through the lower spherical base.',
                  features: ['Electrical conductor — earth element grounding', 'SW zone for stability & relationships', 'Under‑bed placement for sleep quality', 'Geopathic stress neutralisation', 'Faraday‑type protective field'],
                  color: '#C88A5D',
                },
                {
                  num: '03',
                  title: 'Brass Pyramid (Peetal Pyramid) – Space Element & Financial Zone Activation',
                  desc: 'Brass pyramids amplify the space (Akash) element, governing prosperity, communication, and expansion. Placed in the North (Kuber zone) — "the direction associated with wealth and career" — the brass pyramid attracts financial opportunities and enhances cash flow. Best used in: North (wealth, career), Northwest (communication, client flow), and above the cash counter in commercial spaces. "Placing pyramids in offices, workplaces, or business premises activates the energy of that particular space and brings balance — resulting in increased sales and profits." Brass pyramids are also placed in the centre of a group of copper pyramids to amplify the entire array.',
                  features: ['Akash (space) element amplification', 'North zone for wealth & career attraction', 'NW zone for communication & client flow', 'Above cash counters in commercial spaces', 'Amplification hub for copper pyramid arrays'],
                  color: '#10B981',
                },
                {
                  num: '04',
                  title: 'Crystal Pyramid (Sphatik Pyramid) – Emotional Balance & NE Zone Activation',
                  desc: 'Crystal pyramids activate the Northeast (Ishanya) — the most sacred zone of any property, governed by Jupiter and the water element. "Placed in the northeast, crystal pyramids enhance spiritual connection, clarity of thought, and emotional equilibrium." Best used in: Northeast (spiritual growth, mental clarity), meditation rooms, children\'s study areas, and workplaces requiring creativity. Crystal pyramids are particularly recommended for spaces where people experience emotional distress, confusion, or lack of focus. They are also placed alongside copper pyramids to soften and harmonise the overall energy field. "Crystal pyramids emanate subtle, calming vibrations that balance the water element."',
                  features: ['NE (Ishanya) zone spiritual activation', 'Jupiter + water element alignment', 'Emotional equilibrium & clarity of thought', 'Children\'s study & creativity zones', 'Harmonising complement to copper arrays'],
                  color: '#8B5CF6',
                },
                {
                  num: '05',
                  title: 'Parad (Mercury) Pyramid – The Most Potent Vastu Dosha Neutraliser',
                  desc: 'Parad — solidified liquid mercury — is considered the most powerful Vastu dosha neutraliser in the Vedic pharmacopoeia. "The use of liquid mercury, also known as Parad or Ras, is considered highly potent and auspicious in Vastu Shastra." Parad pyramids balance and harmonise the aura around the space, abolishing negative energy caused by severe Vastu defects. "Parad Pyramid balances & harmonizes the aura around us — a well‑known remedy for abolishing negative energy caused by Vastu defect." Best used in: areas with severe doshas (NE toilet, SE bedroom), below staircases, above main doors, and in spaces with a history of illness or financial distress. Parad pyramids are placed at specific dosha points and energised through mercurial mantras.',
                  features: ['Solidified mercury — most potent dosha remedy', 'Severe defect neutralisation (NE toilet, under‑stair)', 'Aura harmonisation & negative energy abolition', 'Mantra‑energised before placement', 'For spaces with illness/financial distress history'],
                  color: '#C0C0C0',
                },
                {
                  num: '06',
                  title: 'Bedroom & Sleep‑Zone Pyramid Placement Protocol',
                  desc: 'The bedroom is where the body spends 6‑8 hours regenerating daily — making it the most critical zone for pyramid therapy. Copper pyramids placed under the mattress (precisely at the centre, aligned to magnetic north) improve sleep quality, reduce anxiety, and neutralise geopathic stress below the bed. "Place copper pyramid under mattress for cosmic energy to penetrate your body during sleep." A crystal pyramid on the bedside table calms the mind. For couples, two small copper pyramids on either side of the bed balance relationship energy. For children with sleep disturbances, a small brass pyramid in the Northwest corner of their room provides grounding. "The apex position should face the ceiling to receive the maximum cosmic energy."',
                  features: ['Under‑mattress copper pyramid placement', 'Magnetic north alignment for sleep quality', 'Crystal on bedside for mental calm', 'Dual pyramids for relationship harmony', 'Children\'s NW brass pyramid for grounding'],
                  color: '#EC4899',
                },
                {
                  num: '07',
                  title: 'Commercial & Workplace Pyramid Deployment',
                  desc: 'In commercial spaces, pyramids are deployed strategically to activate specific business functions. The owner\'s cabin receives a brass pyramid in the Southwest — facing North or East — for stable leadership and clear decision‑making. The accounts department gets a copper pyramid in the Southeast to strengthen the fire element and prevent cash crunches. The reception area receives a crystal pyramid in the Northeast for welcoming, positive first impressions. The dispatch zone receives a brass pyramid in the Northwest for swift, unobstructed outward movement of finished goods. "Placing pyramids in offices, workplaces, or business premises activates the energy of that particular space and brings balance — resulting in increased sales and profits."',
                  features: ['Owner cabin: brass pyramid SW facing NE', 'Accounts: copper pyramid SE for fire element', 'Reception: crystal pyramid NE for first impressions', 'Dispatch: brass pyramid NW for swift out‑movement', 'Measurable sales & profit increases reported'],
                  color: '#FF9933',
                },
                {
                  num: '08',
                  title: 'Pyramid Yantra Grid – Combined Pyramid + Sacred Geometry Array',
                  desc: 'The most advanced pyramid deployment technique combines pyramids with energised Yantras. A copper pyramid is placed above a Vastu Purusha Yantra (for overall alignment), a brass pyramid above a Shri Yantra (for wealth), and a crystal pyramid above a Navagraha Yantra (for planetary balance). This combined pyramid‑yantra grid creates a multi‑dimensional energy correction field that operates at both the physical (pyramid geometry) and metaphysical (yantra scriptural) levels. "The apex of an octagonal pyramid absorbs geopathic forces from all eight directions and neutralizes its effects." Combined with yantra energy, this is the most comprehensive non‑structural Vastu correction available.',
                  features: ['Copper pyramid + Vastu Purusha Yantra', 'Brass pyramid + Shri Yantra for wealth', 'Crystal pyramid + Navagraha Yantra for planets', 'Physical + metaphysical energy correction layers', 'Most comprehensive non‑structural Vastu remedy'],
                  color: '#6366F1',
                },
                {
                  num: '09',
                  title: 'Pyramid Maintenance, Re‑Energisation & Annual Renewal Protocol',
                  desc: 'Pyramids accumulate absorbed negative energy over time and require periodic cleansing and re‑energisation. "It\'s advisable to re‑energize them periodically to ensure they maintain their effectiveness." Copper and brass pyramids should be cleaned monthly with salt water or lemon juice and placed in sunlight for 3‑4 hours to discharge accumulated negativity. Crystal pyramids should be cleansed under running water and moonlight. All pyramids must be re‑energised annually through a specific Vastu Shanti Havan — where the pyramids are placed around the sacred fire and recharged with ghee‑offering mantras. "Change the pyramids every six months to ensure the best outcomes." Vastuvid K.K. Nagaich provides an annual pyramid maintenance service to ensure sustained energy correction.',
                  features: ['Monthly salt‑water cleansing for copper/brass', 'Sunlight discharge: 3‑4 hours', 'Crystal pyramid moonlight cleansing', 'Annual Vastu Shanti Havan re‑energisation', '6‑month pyramid rotation recommended'],
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
            PYRAMID TYPES QUICK REFERENCE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Pyramid Material Guide – Which Pyramid for Which Purpose?
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                Each pyramid material activates specific elements and planetary energies. Vastuvid K.K. Nagaich prescribes the precise combination based on your space's unique energy signature.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { material: 'Copper Pyramid', element: 'Earth (Prithvi)', uses: 'Grounding, stability, geopathic stress neutralisation, under‑bed placement, SW corner activation, heavy machinery zones. Protection against EMF radiation. "Copper rods are used to rectify geopathic stress."', color: '#C88A5D' },
                { material: 'Brass Pyramid', element: 'Space (Akash)', uses: 'Wealth attraction, Kuber zone activation, cash counter, business premises, communication zones, Northwest placement. Amplification hub for copper arrays. "Balancing and amplifying positive energy."', color: '#FFD700' },
                { material: 'Crystal Pyramid', element: 'Water (Jal)', uses: 'Spiritual connection, emotional balance, NE zone, meditation room, children\'s study, creative workspaces. Calming energies, mental clarity. "Emanates subtle, calming vibrations."', color: '#8B5CF6' },
                { material: 'Parad Pyramid', element: 'All Elements', uses: 'Most potent dosha neutraliser. Severe defects (NE toilet, under‑stair), illness‑prone spaces, financial distress zones, negative energy abolition. "Well‑known remedy for abolishing negative energy caused by Vastu defect."', color: '#C0C0C0' },
                { material: '9‑Pyramid Array', element: 'All 5 Elements', uses: 'Whole‑house correction. Centre + 4 corners + 4 entrances. Complete dosha neutralisation across all directions. Permanent energy grid. Most comprehensive single pyramid configuration.', color: '#FF9933' },
                { material: 'Pyramid‑Yantra Grid', element: 'All + Metaphysical', uses: 'Copper pyramid + Vastu Purusha Yantra. Brass + Shri Yantra. Crystal + Navagraha Yantra. Physical geometry + scriptural energy. Multi‑dimensional correction. Advanced practitioners only.', color: '#6366F1' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.material}</h3>
                  <p className="text-xs text-nidra-indigo/50 mt-1 mb-2"><strong>Element:</strong> {item.element}</p>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.uses}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            DOCUMENTED BENEFITS TABLE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Documented Benefits</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                Clinically Observed Benefits of Pyramid Therapy
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                These benefits have been consistently reported by Vastuvid K.K. Nagaich's clients over 20+ years of pyramid therapy deployment across 2 Lakh+ consultations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { benefit: 'Improved Sleep Quality', detail: 'Copper pyramids under the mattress neutralise geopathic stress below the bed. Reportedly, the pyramidal copper energy "re‑balances your energies and promotes deep, peaceful deep sleep, increasing the efficiency of the sleep."', color: '#10B981' },
                { benefit: 'Reduced Anxiety & Mental Clarity', detail: 'Crystal pyramids placed in the NE corner or meditation space create a calming environment. The pyramid acts as a cosmic antenna that absorbs mental noise and channels clarity — particularly beneficial for those working from home or students.', color: '#8B5CF6' },
                { benefit: 'Financial Flow & Opportunity', detail: 'Brass pyramids in the North (Kuber zone) activate wealth energy. "Placing pyramids in business premises activates the energy of that particular space and brings balance — resulting in increased sales and profits." Documented across multiple commercial Vastu consultations.', color: '#FFD700' },
                { benefit: 'Geopathic Stress Neutralisation', detail: 'Copper pyramids and copper rods create a Faraday‑type protective field that redirects harmful underground radiation. 92% of cancer patients in Dr. Nieper\'s study were geopathically stressed — pyramid therapy is one of the most effective non‑medical interventions.', color: '#C10000' },
                { benefit: 'Relationship Harmony', detail: 'Dual copper pyramids on either side of the bed align the energy fields of both partners. A brass pyramid in the SW corner of the master bedroom stabilises the earth element, reducing domestic conflict and strengthening the marital bond.', color: '#EC4899' },
                { benefit: 'Dosha Correction Without Demolition', detail: 'Pyramids are the most widely prescribed non‑structural Vastu remedy. A Parad pyramid placed above a NE toilet permanently neutralises the dosha on the energetic plane — without relocating the toilet or breaking any walls.', color: '#C88A5D' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold mb-2">{item.benefit}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Design Your Pyramid Energy Grid
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every space has a unique energy signature requiring a custom pyramid configuration — the precise combination of copper, brass, crystal, and Parad pyramids deployed at specific locations. Book a private Pyramidology consultation covering the 9‑Pyramid Cosmic Energy Array, individual bedroom & workplace placements, commercial pyramid deployment, Pyramid‑Yantra Grid, and the annual maintenance & re‑energisation protocol — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO with 20+ years of clinical practice and 2 Lakh+ clients worldwide.
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Pyramid Consultation →
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
