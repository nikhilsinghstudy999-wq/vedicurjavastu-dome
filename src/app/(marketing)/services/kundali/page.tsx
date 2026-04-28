import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import { SoundController } from '@/features/shared/components/SoundController';
import Link from 'next/link';

export default function KundaliAnalysisPage() {
  return (
    <>
      <LuxuryCursor />
      <SoundController />
      <Header />
      <SmoothScroll>

        {/* ═══════════════════════════════════════════════════════════════
            HERO – deep celestial indigo/violet, full viewport
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.09),transparent_60%)]" />
          <div className="absolute top-20 left-[8%] w-80 h-80 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-gradient-to-tl from-violet-400/5 to-transparent backdrop-blur-2xl border border-white/10 animate-[float_12s_ease-in-out_infinite_reverse]" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16">
            <span className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
              Advance Treatments · उन्नत उपचार
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-violet-300 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">Kundali Analysis</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-4 px-4 leading-relaxed">
              Vedic Nadi Jyotish · Janam Kundali · Vimshottari Dasha · Gochar Transit · Raj & Dhana Yogas · Shadbala · Navagraha Shanti · Gemstone & Rudraksha · Kundali Matching · Business Muhurat
            </p>
            <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mb-10">
              9 sacred Kundali analysis practices — performed personally by Vastuvid K.K. Nagaich, 4th generation Vastu Guru, MBA, Ex‑CEO, trained in Nadi Jyotish under direct Guru‑Shishya Parampara, 20+ years of clinical practice.「0†L4-L8」「1†L8-L12」「10†L36-L40」
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/bookings" className="px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_30px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_45px_rgba(255,153,51,0.5)] transition-all text-lg">
                Book Kundali Consultation
              </Link>
              <Link href="#practices" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-lg font-medium transition-all">
                Explore Practices ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            VASTU PURUSHA MANDALA & NADI JYOTISH SECTION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-vastu-stone/10 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The Sacred Blueprint of Your Life</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                The Sidereal Zodiac – Nakshatra, Dasha & Karmic Blueprint
              </h2>
              <p className="text-nidra-indigo/60 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Vedic astrology uses the <strong>sidereal zodiac</strong> — based on actual star positions — unlike Western astrology's tropical zodiac. A Vedic birth chart (Janam Kundali) is "a precise map of planetary positions at the exact moment and location of your birth." The chart integrates 27 Nakshatras (lunar mansions), Vimshottari Dasha (120‑year planetary cycle), and karmic indicators that "reveal your personality traits, life challenges, relationship patterns, career path, health tendencies, and karmic blueprint." Vastuvid K.K. Nagaich combines 4th‑generation Vastu expertise with Nadi Jyotish training to read your chart "not as prediction, but as a tool for self‑awareness."「25†L14-L24」「24†L36-L41」「11†L4-L11」
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            THE 9 SACRED KUNDALI ANALYSIS PRACTICES
            ═══════════════════════════════════════════════════════════════ */}
        <section id="practices" className="py-16 sm:py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-14">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">The 9 Sacred Practices</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mt-3 mb-4">
                Authentic Vedic Kundali Analysis – From Birth Chart to Business Muhurat
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm sm:text-base">
                Each practice is a precise Jyotish intervention — grounded in the Brihat Parashara Hora Shastra (BPHS), Phaladeepika, and Saravali — performed personally by Vastuvid K.K. Nagaich.
              </p>
            </div>

            <div className="space-y-16">
              {[
                {
                  num: '01',
                  title: 'Janam Kundali Creation & 12‑Bhava Analysis (Birth Chart & Life Blueprint)',
                  desc: '"Your Janma jaataka is like your life\'s map." A full Janam Kundali is prepared using exact date, time, and place of birth — computer‑generated report (15‑20 pages) including Lagna Chart, Navamsa Chart, planetary degrees, and Vimshottari Dasha timeline. The analysis covers all 12 Bhavas: 1st (Self, Tanu), 2nd (Wealth, Dhana), 3rd (Siblings, Sahaja), 4th (Home, Bandhu), 5th (Children, Putra), 6th (Health, Ripu), 7th (Marriage, Kalatra), 8th (Longevity, Ayush), 9th (Fortune, Bhagya), 10th (Career, Karma), 11th (Gains, Labha), and 12th (Liberation, Vyaya). "I check your chart for all types of doshas — Mangalik, Shani, Rahu‑Ketu, Pitru, Guru Chandal."「24†L8-L19」「24†L36-L47」「28†L4-L8」',
                  features: ['Exact date/time/place based calculation', '15‑20 page printed Kundali report', 'Lagna + Navamsa + planetary degrees', '12‑Bhava deep‑dive analysis', 'All doshas verification'],
                  color: '#FFD700',
                },
                {
                  num: '02',
                  title: 'Shadbala Calculation (Sixfold Planetary Strength – BPHS Method)',
                  desc: '"Defined in the Brihat Parasara Hora Shastra (BPHS), Shadbala measures each planet\'s strength across six dimensions — Sthana Bala (positional), Dig Bala (directional), Kala Bala (temporal), Cheshta Bala (motional), Naisargika Bala (natural), and Drik Bala (aspectual) — producing a precise score in Rupas." A planet is strong if its total Shadbala is 480 or above; weak if below 350; critically weak below 300 Shashtiamsa units. This calculation reveals exactly which planets support you and which require strengthening — the foundation of all gemstone, mantra, and remedy prescriptions. Vastuvid K.K. Nagaich computes full Shadbala for every planet in your chart.「31†L4-L8」「31†L19-L21」「31†L22-L25」',
                  features: ['BPHS Shadbala: 6‑dimension scoring', 'Sthana + Dig + Kala + Cheshta + Naisargika + Drik', 'Rupa‑based precise strength measurement', '480+ strong / 350− weak thresholds', 'Foundation for all remedy prescriptions'],
                  color: '#6366F1',
                },
                {
                  num: '03',
                  title: 'Vimshottari Dasha Period Analysis & Gochar (Transit) Predictions',
                  desc: '"Vimshottari Dasha interpretation follows systematic analysis: identify the Mahadasha lord\'s house placement and ownership, assess planetary strength and dignity, examine aspects received, check yogas involving the dasha lord, and integrate transit positions." The 120‑year Vimshottari cycle distributes among 9 planets based on the Moon\'s nakshatra at birth. Each Mahadasha is subdivided into Antardasha, Pratyantardasha, Sookshma Dasha, and Prana Dasha — enabling timing of events to specific weeks. Gochar (transit) analysis of Saturn, Jupiter, and Rahu/Ketu for the next 1‑5 years reveals critical windows for career moves, marriage, investments, and relocation. "Impact of Saturn, Jupiter, and Rahu/Ketu shifts for the next 1‑3 years."「12†L2-L5」「12†L29-L40」「24†L20-L22」',
                  features: ['120‑year Vimshottari Dasha cycle', 'Mahadasha → Antardasha → Pratyantardasha', 'BPHS Phaladeepika systematic interpretation', 'Gochar transit: Saturn/Jupiter/Rahu‑Ketu 5‑year', 'Week‑level event timing precision'],
                  color: '#FF9933',
                },
                {
                  num: '04',
                  title: 'Yogas Identification – Raj Yoga, Dhana Yoga, Gaja Kesari & 10 Royal Combinations',
                  desc: '"Raj Yoga indicates the potential for wealth, power, and authority. Dhana Yoga signifies financial prosperity and abundance — formed when the lords of the 1st, 2nd, 9th, or 11th house are in mutual association." The 10 most powerful yogas identified in your chart include: Akhand Samrajya Yoga (political authority), Neecha Bhanga Raj Yoga (rags‑to‑riches), Dhana Yoga (wealth), Sreenatha Yoga (leadership), Viparita Raja Yoga (triumph over adversity), Gaja Kesari Yoga (wisdom and fame), Parivartana Yoga (transformative exchange), Ruchaka Yoga (courage), Bhadra Yoga (intellect), and Hamsa Yoga (spiritual dignity). Each yoga is time‑activated through specific Dasha periods — knowing which yogas you possess tells you when your "golden windows" will open.「15†L10-L13」「15†L3-L7」「15†L20-L34」',
                  features: ['10 Raj & Dhana Yoga identification', 'Akhand Samrajya, Neecha Bhanga, Gaja Kesari', 'Time‑activation through Dasha periods', 'Career, wealth & authority potential', 'Golden window prediction for life events'],
                  color: '#F59E0B',
                },
                {
                  num: '05',
                  title: 'Nav‑Ratna Gemstone Prescription & Rudraksha Therapy (Planetary Pacification)',
                  desc: '"In Vedic astrology, the Navagrahas are conscious entities that govern karmic patterns, physical health, emotions, and destiny." Each planet corresponds to a precise gemstone: Sun – Ruby (Manik), Moon – Pearl (Moti), Mars – Red Coral (Moonga), Mercury – Emerald (Panna), Jupiter – Yellow Sapphire (Pukhraj), Venus – Diamond (Heera), Saturn – Blue Sapphire (Neelam), Rahu – Hessonite (Gomed), Ketu – Cat\'s Eye (Lahasuniya). "Before wearing any gemstone, one must consider the relationship between the zodiac sign, its ruling deity, and the planetary influences in the birth chart." Rudraksha therapy: 1‑21 Mukhi beads — each corresponding to specific planets and Nakshatras. "When in doubt, 5 Mukhi Rudraksha is universal and suitable for everyone." Vastuvid prescribes exact weight, metal, finger, day, and mantra for each gemstone.「16†L8-L13」「13†L6-L11」「13†L29-L31」「16†L31-L33」',
                  features: ['Nav‑Ratna: Ruby to Cat\'s Eye prescription', 'Exact weight, metal, finger, day specification', 'Rudraksha: 1‑21 Mukhi planetary matching', 'Nakshatra‑based Rudraksha selection', 'Shadbala‑verified gemstone necessity check'],
                  color: '#10B981',
                },
                {
                  num: '06',
                  title: 'Mantra, Yantra & Remedial Puja Prescription (Triple Vedic Correction)',
                  desc: '"Learned astrologers prescribe various remedies — some advise to wear gems while others prescribe mantras. There are scholars who stress on Yantra‑pooja or wearing Rudraksha." Each planet has specific mantras: Sun – "Om Suryaya Namah", Moon – "Om Chandraya Namah", Mars – "Om Angarakaya Namah", Jupiter – "Om Brihaspataye Namah", Saturn – "Om Shanicharaya Namah", Rahu – "Om Bhram Bhreem Bhrom Sah Rahave Namah", Ketu – "Om Shram Shreem Shrom Sah Ketave Namah." Yantras: Navagraha Yantra set energised through specific rituals. "The yantra is used to nullify the bad aspects of unlucky planets." Mantra chanting protocol: 48‑day mandala cycles (27 nakshatras × 9 planets × 12 signs).「17†L4-L8」「17†L36-L41」「18†L4-L8」「18†L13-L18」',
                  features: ['Planet‑specific mantra prescription', 'Navagraha Yantra energisation & installation', '48‑day mandala chanting protocol', 'Gemstone + Rudraksha + Mantra integration', 'Rahu‑Ketu special remedial guidance'],
                  color: '#8B5CF6',
                },
                {
                  num: '07',
                  title: 'Kundali Matching (Guna Milan – 8 Koota 36‑Point Marriage Compatibility)',
                  desc: '"Kundli matching is the comparison of two birth charts to determine whether a couple will have a balanced and prosperous married life." The 8 Kootas (Ashtakoota Milan) evaluate: Varna (1 point – spiritual compatibility), Vashya (2 points – mutual attraction), Tara (3 points – destiny), Yoni (4 points – sexual compatibility), Graha Maitri (5 points – mental compatibility), Gana (6 points – temperament), Bhakoot (7 points – health & wealth), and Nadi (8 points – progeny). "Traditionally, 18 points (50%) is acceptable; modern astrologers recommend 24‑26 points (67‑72%)." Special attention to Mangal Dosha, Nadi Dosha, and Bhakoot Dosha. Beyond the 8 Kootas: planetary placements, Dasha synchronisation, Ascendant compatibility, Moon sign harmony, and Navamsa (D‑9) chart comparison.「26†L3-L9」「26†L15-L27」「26†L28-L39」「26†L40-L48」',
                  features: ['8 Koota (36‑point) Guna Milan', 'Nadi (8pt) + Bhakoot (7pt) + Gana (6pt) priority', '18pt acceptable / 24‑26pt recommended', 'Mangal & Nadi Dosha separate analysis', 'Dasha sync + Navamsa chart comparison'],
                  color: '#EC4899',
                },
                {
                  num: '08',
                  title: 'Muhurat Selection – Auspicious Timing for Life Events & Business Launches',
                  desc: '"Muhurta — translated literally from Sanskrit means a moment." Electional astrology (Muhurt or Muhūrta) "concerns itself with finding the best time to do a particular activity." Vastuvid K.K. Nagaich selects auspicious Muhurats for: naming a child, starting school education, marriage, constructing a house, house warming ceremony (Griha Pravesh), starting cultivation, and "business activities such as product launches, hirings, dealmaking." The Abhijit Muhurta — approximately 24 minutes at solar noon — is "the most auspicious time of the day" and "the chances of getting success in the work done during this period are highest." Business Muhurt selection ensures your venture "begins under favorable planetary energies, inviting growth, stability, profit, and long‑term success."「19†L4-L9」「19†L10-L14」「19†L15-L20」「20†L11-L20」',
                  features: ['Abhijit Muhurat: 24‑min daily window', 'Business launch & product release timing', 'Marriage & Griha Pravesh Muhurat', 'Naming ceremony & education start dates', 'BPHS electional astrology principles'],
                  color: '#06B6D4',
                },
                {
                  num: '09',
                  title: 'Astro Vastu Integration – Personalised Space Design from Your Birth Chart',
                  desc: '"Astro vastu is the perfect amalgamation of astrology and vastu shastra. This is a customized vastu evaluation that is done individually for each person." Based on your date of birth, the ruling planet, nakshatra, antar dasha, and maha dasha are analysed to determine: the most suitable pada (direction) for your main entrance, negative zones where no good activity must occur, wealth/locker zone placement, career growth zone for your office desk, education zone for your study table, health zone that boosts immunity, bedroom zone for positive sleep energy, confidence zone, and the zone of acquiring success and gain. "Astro Vastu offers a more accurate and customized vastu evaluation — no two people can have exactly the same chart, and the same works for astro vastu."「23†L4-L13」「23†L14-L20」「23†L21-L30」',
                  features: ['Ruling planet + Nakshatra zone mapping', 'Personalised entrance direction on your pada', 'Wealth zone vs negative zone identification', 'Career, study, health & sleep zone designation', 'Individualised — unique per birth chart'],
                  color: '#C10000',
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
            12 BHAVAS & NAVAGRAHA QUICK REFERENCE
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-vastu-stone/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Quick Reference</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                12 Bhavas & 9 Planets – The Complete Kundali Reference
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                BPHS, Phaladeepika & Saravali — the three foundational Jyotish texts used by Vastuvid K.K. Nagaich.「28†L4-L8」「31†L4-L8」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { item: '1st House (Tanu)', detail: 'Self, personality, physical body, character, fame, Lagna. Ascendant lord is the most important planet in the chart.', color: '#FFD700' },
                { item: '2nd House (Dhana)', detail: 'Wealth, family, speech, food, accumulated assets. Venus and Jupiter as lords bring financial abundance.', color: '#10B981' },
                { item: '3rd House (Sahaja)', detail: 'Siblings, courage, communication, short journeys. Mars placed here gives fearless initiative.', color: '#FF9933' },
                { item: '4th House (Bandhu)', detail: 'Mother, home, property, vehicle, emotional foundation. Moon placed here strengthens domestic life significantly.', color: '#06B6D4' },
                { item: '5th House (Putra)', detail: 'Children, intellect, romance, past‑life merit. Jupiter here creates powerful Putra Yoga for progeny blessings.', color: '#F59E0B' },
                { item: '6th House (Ripu)', detail: 'Health, disease, enemies, debt, daily routine. Strong Saturn here gives ability to defeat competition.', color: '#EF4444' },
                { item: '7th House (Kalatra)', detail: 'Marriage, partnership, business alliances, spouse traits. Venus well‑placed creates enduring relationships.', color: '#EC4899' },
                { item: '8th House (Ayush)', detail: 'Longevity, transformation, research, occult, inheritance. "Dusthana" — challenges that catalyse spiritual growth.', color: '#8B5CF6' },
                { item: '9th House (Bhagya)', detail: 'Fortune, dharma, guru, long journeys, higher learning. "Trikona" — the house of divine grace and blessings.', color: '#6366F1' },
                { item: '10th House (Karma)', detail: 'Career, profession, status, authority, public image. "Kendra" — power house for professional achievement.', color: '#C10000' },
                { item: '11th House (Labha)', detail: 'Gains, income, aspirations, elder siblings, network. "Upachaya" — house that improves with time and effort.', color: '#D97706' },
                { item: '12th House (Vyaya)', detail: 'Expenditure, foreign travel, liberation, isolation, spiritual practice. Ketu here gives deep meditative tendencies.', color: '#0891B2' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-prakash-gold/15 hover:shadow-lg transition-shadow">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="font-serif text-lg text-nidra-indigo font-bold">{item.item}</h3>
                  <p className="text-xs text-nidra-indigo/60 leading-relaxed mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            REMEDIES WITHOUT DEMOLITION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Vedic Remedies</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">
                6 Planetary Correction Methods – Personalised to Your Shadbala
              </h2>
              <p className="text-nidra-indigo/60 max-w-2xl mx-auto text-sm">
                "There are various modes of remedies — one can choose from depending on faith: colour therapy & Gems, Mantra, Yantra, Tantra & Rudraksh." — Astro Remedies: A Vedic Approach.「17†L15-L19」
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Gemstone Prescription', desc: 'Specific weight (ratti), metal (gold/silver/panchadhatu), finger, day of wearing, and energising mantra for each of the 9 planets based on your Shadbala score.', color: '#FFD700' },
                { title: 'Rudraksha Therapy', desc: '1 to 21 Mukhi Rudraksha beads prescribed based on Nakshatra ruling planet, current Dasha, and afflicted planetary houses. "5 Mukhi is universal and safest."', color: '#10B981' },
                { title: 'Mantra Japa', desc: 'Planet‑specific mantras chanted for 48‑day mandala cycles. "48 days denotes 27 stars, 9 planets and 12 zodiacs." Japa counts: 108, 1,008, or 10,008 repetitions.', color: '#6366F1' },
                { title: 'Yantra Installation', desc: 'Navagraha Yantra set energised through specific rituals and placed at precise directions. "Each yantra has its own unique geometry and design, each with a specific purpose."', color: '#FF9933' },
                { title: 'Navagraha Shanti Havan', desc: '"To pacify these planetary afflictions, the scriptures recommend performing the Navgraha Shanti Homa." Strengthens benefic planets & increases their positive influence.', color: '#C10000' },
                { title: 'Colour, Charity & Fasting', desc: 'Colour therapy for each planet (Ruby red for Sun, Pearl white for Moon). Saturday fasting for Saturn. Donation of specific items on designated weekdays.', color: '#8B5CF6' },
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0020] via-[#1a0050] to-[#0a0020] bg-[length:400%_400%] animate-[gradientLoop_12s_ease_infinite]" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative rounded-[40px] p-[2px] bg-gradient-to-br from-prakash-gold/30 via-white/10 to-violet-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="rounded-[38px] bg-black/20 backdrop-blur-2xl p-8 sm:p-12 md:p-16 border border-white/10 shadow-inner">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                    Let Vastuvid K.K. Nagaich Read Your Cosmic Blueprint
                  </h2>
                  <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Every birth chart is unique — containing yogas, doshas, and karmic patterns that only a trained Nadi Jyotish practitioner can read. Book a private Kundali consultation covering all 9 sacred practices: Janam Kundali with 12‑Bhava analysis, Shadbala calculation, Vimshottari Dasha & Gochar transit, Yogas identification, Nav‑Ratna gemstone & Rudraksha prescription, Mantra‑Yantra‑Remedial Puja protocol, Kundali Matching (8 Koota Milan), Muhurat selection, and Astro Vastu integration — performed personally by a 4th‑generation Vastu Guru, MBA, Ex‑CEO, trained in Nadi Jyotish under direct Guru‑Shishya Parampara, with 20+ years of clinical practice and 2 Lakh+ clients worldwide.「22†L4-L8」「25†L24-L30」「11†L4-L12」
                  </p>
                  <Link href="/bookings" className="inline-block px-10 py-5 bg-gradient-to-r from-violet-500 via-prakash-gold to-sacred-saffron text-nidra-indigo font-bold rounded-full shadow-[0_10px_40px_rgba(232,185,96,0.4)] hover:shadow-[0_20px_50px_rgba(255,153,51,0.5)] transition-all text-lg">
                    Schedule Your Kundali Consultation →
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
