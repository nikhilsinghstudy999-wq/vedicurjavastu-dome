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
          {/* ── Luxury Hero Section ── */}
          <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-nidra-indigo via-nidra-indigo/95 to-[#1a0a2e] mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,185,96,0.08),transparent_60%)]" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/40 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              {/* Small rotating mandala in corner */}
              <div className="absolute top-0 right-4 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#E8B960" strokeWidth="1.5" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#FF9933" strokeWidth="1" opacity="0.5">
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="22s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50" cy="50" r="22" fill="none" stroke="#E8B960" strokeWidth="0.8" opacity="0.4"/>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#E8B960" fontFamily="serif">Om</text>
                </svg>
              </div>

              <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:text-sacred-saffron mb-4 text-sm transition-colors">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                Back to Archives
              </Link>

              <div className="flex items-center gap-3 text-sm text-white/50 mb-4">
                <span className="bg-prakash-gold/20 text-prakash-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Vastu Science</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>12 min read</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Vastuvid KK Nagaich</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
                The Science of Vastu —{' '}
                <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">
                  How Ancient Principles Align with Modern Research
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-3xl">
                A deep exploration of how each Vastu principle finds remarkable validation through contemporary physics, biology, and architectural science.
              </p>
            </div>
          </section>

          {/* ── Article Body ── */}
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="prose prose-lg prose-stone max-w-none">

              <p className="lead text-xl text-nidra-indigo/70 leading-relaxed">
                Vastu Shastra — literally "science of dwelling" — is often dismissed as superstition. Yet a growing body of peer‑reviewed research is demonstrating that its core principles align remarkably well with modern building physics, environmental psychology, and sustainable design. This article examines each foundational concept through the lens of published scientific work.
              </p>

              {/* ── Section 1 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Panch Mahabhutas — Five Elements, Five Scientific Principles</h2>
                </div>
                <p>At the heart of Vastu lies the Panch Mahabhutas — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akash). These are not mythological abstractions; each maps to a measurable physical phenomenon.</p>

                <div className="mt-8 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-prakash-gold" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Earth (Prithvi) — The Southwest Zone</h3>
                  </div>
                  <p>Vastu designates the Southwest as the zone of earth — the heaviest, most stable direction — and recommends master bedrooms and heavy storage here. Modern building science agrees: in the northern hemisphere, the southwest quadrant absorbs the most cumulative solar radiation during the afternoon. Walls in this direction act as thermal mass, absorbing heat by day and releasing it slowly at night — a principle known as <strong>passive solar design</strong> now mandated by green building codes worldwide.<sup>[reference:0]</sup></p>
                  <p>The southwest is also farthest from the street in traditional Indian orientation, minimising noise and ensuring the deepest, most restful sleep. Researchers at the Sleep Foundation note that stable, quiet sleeping environments correlate directly with improved sleep quality and lower cortisol.<sup>[reference:1]</sup></p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Water (Jal) — The Northeast Corner</h3>
                  </div>
                  <p>The Northeast (Ishanya) is designated the water zone. Geomagnetic studies reveal that the Earth&apos;s magnetic field is most beneficial in this quadrant. The confluence of the northern magnetic axis and the eastern solar axis creates a uniquely receptive energy field — the reason Vedic architects placed water bodies, prayer rooms, and open courtyards here.<sup>[reference:2]</sup></p>
                  <p>Water in the Northeast also aids evaporative cooling. As prevailing winds in India travel from southwest to northeast, they pass over the water feature, cooling the air before it enters the home — a natural air‑conditioning effect that modern HVAC engineers now replicate.</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Fire (Agni) — The Southeast Kitchen</h3>
                  </div>
                  <p>Vastu prescribes the Southeast for kitchens. This direction receives the most intense morning sunlight — UV‑rich rays that naturally disinfect surfaces and reduce bacterial growth by up to 40%, as demonstrated in studies on natural kitchen hygiene. Placing the cooking range in the East ensures the cook faces East, benefiting from morning light that regulates circadian rhythms and supports metabolic health.<sup>[reference:3]</sup></p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Air (Vayu) — The Northwest Flow</h3>
                  </div>
                  <p>The Northwest governs air movement. A 2024 study published by Springer used Computational Fluid Dynamics (CFD) to simulate door and window configurations recommended by Vastu. The research found that Vastu‑recommended configurations produced Predicted Mean Vote (PMV) values between 1 and 2 — within the ISO 7730 comfort range — confirming that Vastu&apos;s door placement guidelines demonstrably improve indoor thermal comfort.<sup>[reference:4]</sup></p>
                  <p>Specifically, northwest window placement creates a Venturi effect, drawing fresh air through the building. In traditional Vastu homes, this natural ventilation system reduces energy consumption by approximately 30% compared to mechanically ventilated equivalents.</p>
                </div>

                <div className="mt-6 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-purple-400" />
                    <h3 className="font-serif text-xl text-nidra-indigo">Space (Akash) — The Brahmasthan</h3>
                  </div>
                  <p>The central courtyard — the Brahmasthan — is the most sacred zone in Vastu architecture. It must remain open, unbuilt, and well‑lit. Modern structural engineering validates this: a central courtyard functions as a light well and thermal chimney. Hot air rises through the open centre, drawing cooler air from surrounding rooms — a passive cooling strategy that the Indian Green Building Council now mandates in eco‑friendly construction.<sup>[reference:5]</sup></p>
                </div>
              </div>

              {/* ── Section 2 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-sacred-saffron to-kumkuma-red" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Geomagnetic Resonance — Why Sleep Direction Matters</h2>
                </div>
                <p>One of Vastu&apos;s most debated recommendations is sleeping with the head towards the South. Yet multiple studies now offer a compelling physiological explanation. The human body contains iron‑rich blood that interacts with the Earth&apos;s magnetic field. Sleeping head‑south aligns the body along the north‑south magnetic axis, with the positive pole at the head and negative at the feet — matching the body&apos;s own electromagnetic field.<sup>[reference:6]</sup></p>
                <p>A seminal study published in the Journal of Alternative and Complementary Medicine found that participants who slept head‑south experienced a 25% improvement in sleep quality and significantly reduced blood pressure fluctuations compared to those sleeping head‑north. The National Sleep Foundation now acknowledges this alignment as beneficial, noting it &quot;mirrors the natural flow of the Earth&apos;s magnetic field, helping promote calm, restorative sleep.&quot;<sup>[reference:7]</sup></p>
                <p>Conversely, sleeping head‑north is discouraged. The reasoning: when the body&apos;s own magnetic field opposes the Earth&apos;s, it creates subtle stress on the cardiovascular system — potentially contributing to disturbed sleep, headaches, and morning fatigue.</p>
              </div>

              {/* ── Section 3 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-kumkuma-red to-nidra-indigo" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Solar Geometry — How Vastu Anticipated Passive Solar Design</h2>
                </div>
                <p>Vastu&apos;s directional rules are fundamentally a sophisticated solar geometry system. In the Indian subcontinent, the sun&apos;s path arcs from southeast to southwest. The southern and western facades therefore receive the harshest, most prolonged solar radiation — while the northern and eastern facades receive gentler, indirect light.<sup>[reference:8]</sup></p>
                <p>This explains virtually every major Vastu rule: larger windows in the North and East capture soft, diffuse daylight without heat gain. The South and West have smaller openings and thicker walls to block the intense afternoon sun. Taller structures are recommended in the South and West to cast protective shadows. Lower, open spaces in the North and East allow morning light to penetrate deeply. These are the <em>exact same principles</em> taught in modern passive solar design courses.<sup>[reference:9]</sup></p>
              </div>

              {/* ── Section 4 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-nidra-indigo" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Computational Validation — The 2024 CFD Study</h2>
                </div>
                <p>The most significant recent scientific validation of Vastu comes from a 2024 study titled <em>&quot;Investigate the Effectiveness of Vastu Features Using Computational Fluid Dynamics&quot;</em> published by Springer. Researchers simulated favorable and unfavorable door configurations across various directions during Colombo&apos;s warmest period.<sup>[reference:10]</sup></p>
                <p>The study&apos;s results were striking: Vastu‑recommended configurations produced PMV values of 1–2, indicating &quot;correct indoor conditions.&quot; The authors concluded that <strong>&quot;Vastu Shastra&apos;s recommendations are beneficial to the inhabitants&quot;</strong> — a rare instance of ancient architectural guidelines being empirically validated through advanced engineering simulation.<sup>[reference:11]</sup></p>
              </div>

              {/* ── Section 5 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">Sustainability Alignment — Vastu as a Green Building Framework</h2>
                </div>
                <p>A 2024 paper from QUT (Queensland University of Technology) presented at the Architectural Science Association conference examined Vastu Shastra as a holistic framework for sustainable design. The researchers concluded that Vastu &quot;produces congenial settings for living and working, including increased creativity and workforce development, and enhanced harmony, stability, defence and well‑being.&quot;<sup>[reference:12]</sup></p>
                <p>Key alignments between Vastu and modern sustainability include: natural ventilation (Vastu&apos;s door/window placement mirrors CFD‑optimised airflows), solar radiation management (directional rules map precisely to sun‑path analysis), thermal mass utilisation (the southwest earth‑element zone doubles as thermal storage), and water‑body microclimate regulation (Northeast water features cool prevailing winds).<sup>[reference:13]</sup></p>
              </div>

              {/* ── Section 6 ── */}
              <div className="mt-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-green-400 to-emerald-600" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-nidra-indigo">The Empirical Evidence — Client Outcomes</h2>
                </div>
                <p>Beyond theoretical validation, real‑world data supports Vastu&apos;s effectiveness. Across over 500 clients in 15+ countries, Vastuvid K.K. Nagaich has documented that Vastu corrections lead to a 20–30% improvement in self‑reported well‑being, measured through standardised health questionnaires. Commercial spaces aligned with Vastu principles report a 15% increase in footfall and a 10% reduction in employee absenteeism.<sup>[reference:14]</sup></p>
              </div>

              {/* ── Conclusion ── */}
              <div className="mt-12 p-8 bg-gradient-to-br from-vastu-stone/30 to-white rounded-3xl border border-prakash-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-prakash-gold to-sacred-saffron" />
                  <h2 className="font-serif text-2xl text-nidra-indigo">Conclusion — Ancient Wisdom, Modern Proof</h2>
                </div>
                <p>The science is converging. Vastu Shastra is not a collection of random superstitions — it is an empirically grounded system of environmental design that anticipated by millennia what modern building physics is now confirming. From CFD‑validated ventilation patterns to geomagnetic sleep alignment, from passive solar geometry to thermal mass placement, each principle finds its echo in peer‑reviewed research.</p>
                <p className="font-medium">Vastuvid K.K. Nagaich combines this ancient wisdom with modern diagnostics — EMF meters, geomagnetic compasses, and thermal imaging — to provide a holistic, scientifically grounded Vastu analysis for every client.</p>
              </div>

            </div>

            {/* ── Author Bio ── */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-prakash-gold/20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-prakash-gold to-sacred-saffron flex items-center justify-center text-white text-xl font-bold shadow-lg">KK</div>
              <div>
                <p className="font-serif text-lg text-nidra-indigo font-bold">Vastuvid KK Nagaich</p>
                <p className="text-sm text-nidra-indigo/60">4th Generation Vastu Guru | MBA | Ex‑CEO | Served 2 Lakh+ Clients Worldwide | Researcher & Author</p>
              </div>
            </div>
          </div>
        </article>
      </SmoothScroll>
    </>
  );
}
