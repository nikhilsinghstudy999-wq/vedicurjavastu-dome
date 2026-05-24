import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';
import Image from 'next/image';

export default function PeepalTreeRemedyPage() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="pt-32 pb-20 px-6 min-h-screen bg-vastu-parchment">
          <article className="max-w-4xl mx-auto">
            <Link href="/insights" className="inline-flex items-center text-prakash-gold hover:underline mb-6">
              ← Back to Insights
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-nidra-indigo/60 mb-4">
                <span className="text-prakash-gold uppercase tracking-wider">Remedies</span>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span>By Vastuvid KK Nagaich</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-nidra-indigo mb-6">
                Peepal Tree Growing on House Walls – Signs and Remedies
              </h1>
              <p className="text-xl text-nidra-indigo/70 italic">
                Understanding the spiritual and Vastu significance, and step‑by‑step remedies.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 shadow-xl border border-prakash-gold/30">
              <Image
                src="/images/blog/peepal-tree-square.jpg"
                alt="Peepal tree on wall"
                width="800"
                height="800"
                className="w-full aspect-square object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg prose-stone max-w-none">
              <p>Small Peepal trees spontaneously growing on the walls of a house are a sign. Usually, birds drop seeds here and there, causing them to sprout. But it is noteworthy that they do not grow in every building; sometimes they even sprout on walls that have cement, etc.</p>
              <p>It is believed that Peepal trees host the Pitrs (departed ancestors) and Lord Brahma.</p>
              <p>The appearance of a Peepal tree on the walls of a house indicates both <strong>Pitru Dosha</strong> and <strong>Vastu Dosha</strong>.</p>

              <h2>Remedies</h2>
              <p>First, according to Hindu beliefs, you should perform the prescribed rituals for the liberation and salvation of your ancestors.</p>
              <p>If there has been an untimely death in your current or the previous two generations, and you are experiencing severe symptoms like disease, grief, or financial distress in your life or family, you can conduct special pujas such as <strong>Tripindi Shraddha</strong> or <strong>Narayan Bali</strong>.</p>
              <p>If you are not capable or lack funds, you can perform daily <em>tarpanam</em> with water.</p>
              <p>On the new moon day (Amavasya), light a dried coconut shell in the southwest corner of the house with cow's ghee and camphor, and chant mantras of Mahakal or Lord Shiva – this also helps.</p>
              <p>On Amavasya, place five‑colour sweets in a leaf bowl in the southwest corner in the name of the ancestors, along with water.</p>
              <p>If you cannot do anything else, then every day during your worship, at the temple, or during fasting, just ask one thing: <em>"O Lord, may the merit of this worship be dedicated to my ancestors; please grant them liberation and salvation."</em></p>
              <p>On Saturday, Amavasya, take water in a bowl, add a few black sesame seeds, and while chanting the following mantra 21 times, offer it into an empty vessel for the Pitrs:</p>
              <pre className="bg-gray-100 p-4 rounded-lg">ॐ सर्व पितृभ्यो नमः तर्पयामी</pre>

              <h2>Method to remove the Peepal plant</h2>
              <p>First, apologise to your ancestors through at least one of the methods given above, and offer them worship or tarpanam.</p>
              <p>Then, approach the Peepal plant, take a coconut with water, and pray:</p>
              <blockquote className="italic border-l-4 border-prakash-gold pl-4">
                "O Tree Deity and all the deities residing in this tree, this building is for my livelihood. It is difficult to maintain your purity here. I request that all deities residing in this tree kindly leave this tree and depart elsewhere. With your permission, I will transplant this plant to another place. Respecting you, I offer this coconut at your feet; please accept it."
              </blockquote>
              <p>Place the coconut on yellow mustard seeds near the plant for at least 12 hours. The next day, immerse it in a large Peepal tree outside, a river, a lake, or a temple.</p>
              <p>After that, try to remove the plant in such a way that it survives and plant it elsewhere. If the Pitru Dosha affliction is severe, plant it in a cremation ground; otherwise, you can plant it in a Shiva temple or a park.</p>
              <p>If the plant keeps sprouting repeatedly, drill and inject 5 to 10 grams of liquid mercury there. If that is not possible, sprinkle yellow sulphur, along with salt and lime.</p>
              <p>If for some reason the plant dies, plant three Peepal trees in its place during an auspicious constellation – in a cremation ground, temple, or park.</p>
              <p>While removing the plant, chant this mantra:</p>
              <pre className="bg-gray-100 p-4 rounded-lg">ॐ ह्रीं क्षौं फट् स्वाहा</pre>
            </div>

            <div className="mt-12 p-6 bg-vastu-stone/20 rounded-2xl border border-prakash-gold/20">
              <h3 className="font-serif text-xl text-nidra-indigo mb-2">Need personal guidance?</h3>
              <p className="text-nidra-indigo/70 mb-4">Book a consultation with Vastuvid KK Nagaich for a detailed analysis and personalised remedies.</p>
              <Link href="/bookings" className="luxury-button inline-block">Book Consultation →</Link>
            </div>
          </article>
        </main>
      </SmoothScroll>
    </>
  );
}
