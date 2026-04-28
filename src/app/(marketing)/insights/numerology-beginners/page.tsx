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
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#0d1b2a] to-nidra-indigo/95 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,185,96,0.10),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              {/* Rotating mandala */}
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
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Numerology</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>10 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                Numerology for Beginners —{' '}
                <span className="bg-gradient-to-r from-purple-400 via-prakash-gold to-sacred-saffron bg-clip-text text-transparent">
                  Unlock the Secrets of Your Birth Number
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                An authoritative introduction to Vedic numerology — how to calculate your Driver and Destiny numbers, what each number means, real‑world case studies, and why this 5,000‑year‑old science still transforms lives today.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                Vedic Numerology is an ancient Indian science of numbers — a system that traces its roots back over 5,000 years to the earliest Vedic texts. Unlike modern Western numerology, which evolved separately through Pythagorean and Chaldean traditions, Vedic numerology connects each number to a specific planet (graha) and divine energy, offering a uniquely holistic framework for understanding personality, destiny, relationships, and career.
              </p>

              {/* ── Section 1: The Three Core Numbers ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-prakash-gold" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Three Core Numbers in Vedic Numerology</h2>
                </div>
                <p>In Vedic numerology, every individual is defined by three primary numbers — the <strong>Psychic Number</strong> (Mulank or Driver), the <strong>Destiny Number</strong> (Bhagyank or Conductor), and the <strong>Name Number</strong> (Namank). Each serves a distinct purpose, and together they form a complete numerological blueprint.</p>

                <div className="mt-8 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Psychic Number (Mulank / Driver Number)</h3>
                  </div>
                  <p>Your Psychic Number is derived <strong>solely from your birth day</strong>. Add the digits of your birth day together and reduce to a single digit. For example, someone born on the 29th: 2 + 9 = 11, then 1 + 1 = 2. Their Psychic Number is 2.</p>
                  <p>This number reveals your <strong>inner self</strong> — your personality traits, desires, ambitions, strengths, and weaknesses. It is the number you resonate with most deeply and the one that governs your day‑to‑day behaviour. In the metaphor of a bus, the Psychic Number is the <strong>driver</strong> — it controls where the bus goes, regardless of how many passengers the conductor takes in. Master numerologist Josh Siegel describes this as the number that &quot;defines your character&quot; and &quot;unveils essential insights into your personal values and beliefs.&quot;</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Destiny Number (Bhagyank / Conductor Number)</h3>
                  </div>
                  <p>Your Destiny Number is derived from your <strong>full birth date</strong> — day, month, and year. Add every digit: for 29‑01‑1990, you calculate 2 + 9 + 0 + 1 + 1 + 9 + 9 + 0 = 31, then 3 + 1 = 4. The Destiny Number is 4.</p>
                  <p>Where the Psychic Number represents who you are, the Destiny Number reveals <strong>who you are meant to become</strong>. It points to the strengths you should develop, the challenges you will face, and the ultimate purpose of your life. In the bus metaphor, it is the <strong>conductor</strong> — deciding which passengers to take in, where to stop, and what fees to charge. The Destiny Number governs the broader arc of your life and shapes your long‑term karmic journey.</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Name Number (Namank)</h3>
                  </div>
                  <p>Your Name Number is calculated from the letters of your full name using either the <strong>Chaldean</strong> or <strong>Pythagorean</strong> system. Chaldean numerology, the older system originating in Babylonia approximately 4,500 years ago, assigns values 1–8 based on sound vibration (the number 9 is considered sacred and not assigned to letters). Pythagorean numerology, developed in ancient Greece around 2,500 years ago, uses a simpler sequential mapping (A=1, B=2, C=3… I=9, J=1, etc.).</p>
                  <p>Most Vedic numerologists prefer <strong>Chaldean for name analysis</strong> — especially business names — because its sound‑vibration basis aligns naturally with Vedic phonetic principles. The two systems often produce different numbers for the same name; neither is &quot;wrong&quot; — they reveal different vibrational layers.</p>
                  <p>Vastuvid K.K. Nagaich often recommends <strong>subtle name adjustments</strong> — adding or removing a single letter — to harmonise the Name Number with the Psychic and Destiny Numbers, a practice that has transformed businesses and personal lives alike.</p>
                </div>
              </div>

              {/* ── Section 2: Meaning of Each Number ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">What Each Number Means — The Planetary Connection</h2>
                </div>
                <p>A 2024 study published in <em>Nature Humanities &amp; Social Sciences Communications</em> mapped birth numbers to specific personality traits — the most comprehensive modern academic validation of numerology&apos;s character associations. In Vedic numerology, each number is further governed by a specific planet (graha), adding an astrological layer absent from Western systems.</p>

                <div className="mt-6 space-y-5">
                  {[
                    { num: '1', planet: 'Sun (Surya)', traits: 'Leadership, organisation, independence, pioneering, originality, integrity', desc: 'Number 1 individuals are natural‑born leaders. Ruled by the Sun, they radiate confidence and ambition. They thrive in entrepreneurial ventures and positions of authority but must guard against arrogance and isolation.' },
                    { num: '2', planet: 'Moon (Chandra)', traits: 'Supportive, cooperative, diplomatic, intuitive, detail‑conscious', desc: 'Number 2 natives are gentle, empathetic, and deeply intuitive. Ruled by the Moon, they excel in collaborative environments, counselling, and creative arts. Their sensitivity is both their greatest strength and their vulnerability.' },
                    { num: '3', planet: 'Jupiter (Guru)', traits: 'Self‑expressive, creative, joyful, sociable, networking', desc: 'Number 3 is ruled by Jupiter, the planet of wisdom and expansion. These individuals are natural communicators — writers, speakers, teachers, and artists. Their optimism is infectious, though they must learn discipline and follow‑through.' },
                    { num: '4', planet: 'Rahu (North Node)', traits: 'Stable, disciplined, conscientious, pragmatic, hardworking', desc: 'Rahu&apos;s influence makes Number 4 natives grounded and methodical. They excel in structured environments — engineering, administration, law. Their challenge is learning flexibility and embracing change rather than fearing it.' },
                    { num: '5', planet: 'Mercury (Budh)', traits: 'Versatile, adaptable, freedom‑loving, communicative, quick‑thinking', desc: 'Ruled by Mercury, Number 5 is the most dynamic of all numbers. These individuals crave variety, travel, and intellectual stimulation. They make excellent salespeople, journalists, and entrepreneurs. Their restlessness must be channelled productively.' },
                    { num: '6', planet: 'Venus (Shukra)', traits: 'Harmonious, nurturing, responsible, aesthetic, companionable', desc: 'Venus blesses Number 6 with beauty, charm, and a deep sense of responsibility. They are family‑oriented, loyal, and drawn to creative and healing professions. They must guard against over‑involvement in others&apos; problems.' },
                    { num: '7', planet: 'Ketu (South Node)', traits: 'Reflective, analytical, mystical, intellectual, private', desc: 'Number 7, ruled by Ketu, is the philosopher and seeker. These individuals are introspective, drawn to research, spirituality, and deep thinking. They often prefer solitude and must learn to balance inner exploration with outer engagement.' },
                    { num: '8', planet: 'Saturn (Shani)', traits: 'Ambitious, organised, managerial, productive, material mastery', desc: 'Saturn&apos;s influence makes Number 8 the most materially driven. They are natural executives, financiers, and organisers. Their journey often involves significant struggle followed by great reward — the classic Saturnian arc of discipline leading to mastery.' },
                    { num: '9', planet: 'Mars (Mangal)', traits: 'Universal, idealistic, humanitarian, compassionate, change agent', desc: 'Ruled by Mars, Number 9 combines aggression with idealism. These individuals are driven to improve the world — activists, reformers, visionaries. Their energy must be directed constructively; unchecked, it can manifest as anger or impulsiveness.' },
                  ].map((item) => (
                    <div key={item.num} className="p-5 bg-gradient-to-r from-white to-vastu-stone/20 rounded-2xl border border-prakash-gold/10 hover:border-prakash-gold/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white font-bold text-lg shadow-md">{item.num}</div>
                        <div>
                          <h3 className="font-serif text-lg text-nidra-indigo font-bold">Number {item.num} — {item.planet}</h3>
                          <p className="text-xs text-nidra-indigo/50">{item.traits}</p>
                        </div>
                      </div>
                      <p className="text-sm text-nidra-indigo/70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section 3: Real‑World Case Studies ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-500" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Real‑World Case Studies — Numerology in Action</h2>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">JC Chaudhry — The ₹7,300 Crore Success</h3>
                  <p>JC Chaudhry, founder of Aakash Institute, grew up impoverished — no slippers until age 12, no trousers before college. In 1984, his brother‑in‑law introduced him to numerology. He realised his life was &quot;not in sync with my date of birth.&quot; After correcting his birth records and aligning his decisions with numerological principles, he built an educational empire. Numbers guided his hiring decisions, land purchases, fee structures, and business strategy. In 2021, he sold Aakash to Byju&apos;s for approximately ₹7,300 crore — and now runs a numerology platform called Nummero, helping others discover the power of numbers.</p>
                </div>

                <div className="mt-4 p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">Radhika Jain — From Struggling Boutique to 75% Sales Jump</h3>
                  <p>Radhika Jain, a fashion boutique owner in Jaipur, faced poor sales and zero online traction. Her original brand name &quot;Grace Fashion&quot; vibrated on karmic number 16. After numerological correction to &quot;Gracia Fashions&quot; (Master Number 33), her sales jumped by <strong>75% in 90 days</strong>. She gained influencer collaborations and local newspaper coverage. &quot;A single name change from Ankitaa changed everything for me. Numerology works!&quot;</p>
                </div>

                <div className="mt-4 p-6 bg-gradient-to-br from-vastu-stone/30 to-white rounded-2xl border border-prakash-gold/15 mb-6">
                  <h3 className="font-serif text-xl text-nidra-indigo mb-3">Walt Disney — The Creative Power of Master Numbers</h3>
                  <p>Walt Disney&apos;s full name vibrates on a Master Number — associated with higher levels of spiritual evolution, creativity, and self‑expression. While Disney was not a practicing numerologist, his company&apos;s extraordinary creative output and global influence reflect the archetypal energy of these numbers. Modern business numerologists cite Disney as a case study in how company names aligned with powerful numerical vibrations can amplify creative leadership.</p>
                </div>
              </div>

              {/* ── Section 4: Practical Applications ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-nidra-indigo" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Practical Applications of Numerology</h2>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">1</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">Career Guidance</h3>
                    <p className="text-sm text-nidra-indigo/70">If your Psychic Number is 3 and Destiny Number is 8, you are creative yet pragmatic — ideally suited for architecture, law, finance, or media.</p>
                  </div>
                  <div className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">2</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">Relationship Compatibility</h3>
                    <p className="text-sm text-nidra-indigo/70">Numbers 2 and 6 are highly compatible, fostering harmony and emotional security. Numbers 3 and 9 often clash emotionally and benefit from numerological counselling.</p>
                  </div>
                  <div className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">3</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">Business &amp; Finance</h3>
                    <p className="text-sm text-nidra-indigo/70">Launching a venture on a date aligned with your favorable numbers can significantly influence success. Vedic texts describe auspicious <em>muhurat</em> combinations based on the owner&apos;s numerological profile.</p>
                  </div>
                  <div className="p-5 bg-white/70 rounded-2xl border border-prakash-gold/15">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-sm font-bold mb-3">4</div>
                    <h3 className="font-serif text-lg text-nidra-indigo mb-2">Health &amp; Well‑being</h3>
                    <p className="text-sm text-nidra-indigo/70">Number 4 often indicates a tendency towards chronic conditions requiring disciplined management. Number 9 suggests robust constitution. Early numerological awareness enables preventive measures.</p>
                  </div>
                </div>
              </div>

              {/* ── Section 5: Vedic vs Western ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-nidra-indigo" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Why Vedic Numerology Is More Precise — The 27 Nakshatra System</h2>
                </div>
                <p>Western numerology collapses all complexity into just nine categories. Vedic numerology solves this limitation elegantly through the <strong>27 Nakshatras</strong> — lunar mansions that divide the zodiac into 27 equal sections, each spanning 13 degrees and 20 minutes. The Moon travels through each Nakshatra in approximately 24 hours, completing a full cycle in 27.3 days.</p>
                <p>Two people born on the same date may share a Psychic Number — but their Moon&apos;s Nakshatra position will differ, producing fundamentally different personality patterns and life trajectories. This is why Vedic numerologists always consider the Nakshatra alongside the birth numbers, offering a level of precision that Western systems simply cannot match. The 27 Nakshatra system — observable celestial mechanics encoded into numerical wisdom — has been in continuous use for over 5,000 years.</p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-purple-400 to-prakash-gold" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Numbers Are a Language, Not Superstition</h2>
                </div>
                <p>Vedic numerology is not fortune‑telling — it is a system of profound self‑awareness. The numbers derived from your birth date and name are not random. They form a code that, when properly understood, reveals your strengths, illuminates your challenges, and guides your most important life decisions. From JC Chaudhry&apos;s ₹7,300 crore success to Radhika Jain&apos;s boutique transformation, the evidence is compelling: when humans align their identity with their numerical blueprint, remarkable things happen.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich provides comprehensive numerological analysis as part of his Vedic consultation services — combining Driver Number, Destiny Number, Name Number, and Nakshatra analysis into a complete personal blueprint.</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-prakash-gold flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex‑CEO | Numerologist | Served 2 Lakh+ Clients Worldwide</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
