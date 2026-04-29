'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import { LuxuryCursor } from '@/features/shared/components/LuxuryCursor';
import PlanetaryLoader from '@/features/shared/components/ui/PlanetaryLoader';
import { SoundController } from '@/features/shared/components/SoundController';

/* ================================================================
   DATA
   ================================================================ */
const instagramReels = [
  'https://www.instagram.com/reel/DXMejXjkk5D/',
  'https://www.instagram.com/reel/DW-oXZ3yhUx/',
  'https://www.instagram.com/reel/DW3PsvlT_eT/',
  'https://www.instagram.com/reel/DWx3t_Dku3u/',
  'https://www.instagram.com/reel/DWik3DZkvZk/',
  'https://www.instagram.com/reel/DWT4z9nEgVs/',
  'https://www.instagram.com/reel/DU7aYejEhj6/',
  'https://www.instagram.com/reel/DUSYXHPkteM/',
  'https://www.instagram.com/reel/DUQW6z5kqIO/',
];

const gmbReviews = [
  { name: 'Shreem Meera', text: 'It was really great experience and feeling so blessed to meet Guru Sri KK Nagaich. He is the best numerologist and great astrologer. I consulted regarding my son name and I am really very satisfied.', rating: 5 },
  { name: 'Rajat Rastogi', text: 'Pranaam sabhi ko. Guru ji se judne k baad mujhe bahot fayda hua. Kaam banne lage.', rating: 5 },
  { name: 'Chirag Raval', text: 'Guruji is very soft spoken and give really good remedy. There are so many newly remedy he suggest.', rating: 5 },
  { name: 'Sohit Kumar Mishra', text: 'Bahut achche se batate hain. Bahut achcha laga. Dhanyvad.', rating: 5 },
  { name: 'Jashoda devi Bhatt', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai.', rating: 5 },
  { name: 'Akanksha Bharti', text: 'I had a great experience with K K Nagaich sir. The best part about him is that he has a very understanding nature and explains every small detail with clarity.', rating: 5 },
  { name: 'Florence L', text: 'I had the best interaction! He was generous with his time and gave me plenty of advice and timeframes. He also took the time to explain the reasoning behind his statements. I highly recommend!', rating: 5 },
  { name: 'Sanjjog Tilak', text: 'I highly recommend Pt. Krishna N. of Vedic Urja as an exceptional astrological guide. His expertise in astrology, numerology, and related fields is remarkable, demonstrating both depth and practicality.', rating: 5 },
  { name: 'arpit mishra', text: 'I have consulted for Mobile Number numerology. He is able to tell my exact issue just by looking at my mobile number. He suggested new number for me in very detailed manner. Also he suggested very practical astrology remedies. Highly impressed and recommended.', rating: 5 },
  { name: 'shikha singh', text: 'Unhone meri beti ke naam ke liye consultation ki thi, unhone bahut hi acchi salah di. Unke dwara bataye gaye upay bahut kaargar rahe. Main unki bahut aabhari hoon.', rating: 5 },
  { name: 'Lalit Rc Kediyaa', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai. Main unki salah se bahut prabhavit hua.', rating: 5 },
  { name: 'Jagriti Razdan', text: 'Very impressed with their products... it is so pure. Really appreciate their prompt reply for any inquiry. They even offer Vedic puja online, one of the few sanstha where I don\'t find them chasing for money but are more interested to see positive results.', rating: 5 },
  { name: 'SARV ABHIMAN GUPTA', text: 'Bahut achche se batate hain. Unka har ek upay bahut prabhavshali hai. Main unki salah se bahut prabhavit hua.', rating: 5 },
  { name: 'Aalok', text: 'Krishna bhai is one of the most humble and decent person I\'ve come across. He\'s really good in the field of astrology & predictions!!', rating: 5 },
  { name: 'Rithik Shukla', text: 'Consulted for career, he has given deep insight. The way he mixes numerology and astrology and derives conclusions is very unique. Thanks for his clarity and detailed guidance.', rating: 5 },
  { name: 'Prakhar Sharma', text: 'Bahut badiya anubhav. Very simple and very effective. Highly impressed and happy.', rating: 5 },
  { name: 'manoj gupta', text: 'Best for names, astrology. Consulted many but he is only one who actually knows this science.', rating: 5 },
  { name: 'Dushyant Singh Sisodia', text: 'Provided a fair report which was detailed and included every aspect of my life. Also provided detailed remedies to overcome challenges.', rating: 5 },
  { name: 'Manju Dayal', text: 'Worth using kumkum and havan saamgri of Vedic Urja. Thanks Krishna ji and Vedic Urja for taking this initiative to provide us pure and original products to perform our rituals.', rating: 5 },
  { name: 'richa kapoor', text: 'The products of the firm are natural. It\'s been after ages that I got to smell authentic turmeric. Would recommend the viable products of Vedic Urja to all. 100% satisfaction guaranteed.', rating: 5 },
  { name: 'Atulya Mohan Mandela', text: 'Consulted for child career. Great person and great analysis.', rating: 5 },
  { name: 'Vikey A. Tandon', text: 'I have used both their services for performing puja and products like Kumkum, hawan samagri, and kapoor, all are pure and excellent. I am also happy with astrological consultations.', rating: 5 },
  { name: 'Science of Sanskrit', text: 'Best Astrologer and the best person... he solved my vastu problem and suggested me many remedies which improved the quality of my life. Thank you so much.', rating: 5 },
  { name: 'Sandeep Pandey', text: 'Consulted for my baby name. Excellent experience. Highly recommend.', rating: 5 },
  { name: 'reyansh goswami', text: 'Had a wonderful experience with VedicUrja and team. All the products that got delivered are 100% original and genuine.', rating: 5 },
  { name: 'Manoj Jadhav', text: 'Awesome experience! Impactful! Helped a lot! Must visit!', rating: 5 },
  { name: 'Saumya mishra', text: 'Their products are so awesome. They provide organic products. Thank you Vedic Urja for providing these products.', rating: 5 },
  { name: 'Dr Mahendra Shukla', text: 'Excellent prediction on my question, Mobile numbers. Great experience.', rating: 5 },
  { name: 'Krishnawati Pandey', text: 'Bahut achche se batate hain. Bahut achcha laga. Dhanyvad.', rating: 5 },
  { name: 'Sunil Gupta', text: 'Very learned person with knowledge of Astrology and Numerology. Predictions are very precise.', rating: 5 },
  { name: 'Rithik Shukla', text: 'BEST PERSON FOR MOBILE NUMEROLOGY. AWESOME EXPERIENCE.', rating: 5 },
  { name: 'Vaishali Mishra', text: 'It was a great experience with Vedic Urja. I recommend everyone to try its service and product.', rating: 5 },
  { name: 'gunjan verma', text: 'Very accurate and practical scientific prediction. It really works!', rating: 5 },
  { name: 'Anas Khan', text: 'Best place for numerology. Thank you for name suggestions.', rating: 5 },
  { name: 'Shivam Sharma', text: 'The best numerologist.', rating: 5 },
  { name: 'Gopal Krishna', text: 'Vedic Urja very great fully pooja & anusthan.', rating: 5 },
  { name: 'Vaishali Misra', text: 'Best for career and education.', rating: 5 },
  { name: 'Shailesh Bagdane', text: 'Awesome experience. Peaceful experience.', rating: 5 },
  { name: 'Simply dentists dental clinic', text: 'Very nice services.', rating: 5 },
  { name: 'yash mehrotra', text: 'Highly delighted with the rituals performed.', rating: 5 },
  { name: 'Vikas Singh', text: 'Superb!', rating: 5 },
  { name: 'Rupesh Agarwal', text: 'Great service and excellent guidance.', rating: 5 },
  { name: 'rinkey pandey', text: 'Wonderful consultation experience.', rating: 5 },
  { name: 'Nitin Trivedy', text: 'Very knowledgeable and helpful. Highly recommended.', rating: 5 },
  { name: 'Manisha ravi Singh', text: 'Excellent astrologer. Very accurate predictions.', rating: 5 },
  { name: 'Prabhay kant Verma', text: 'Best vastu consultant in the region. Very practical solutions.', rating: 5 },
  { name: 'Tripti Srivastava', text: 'Amazing experience with Vedic Urja. Highly satisfied.', rating: 5 },
  { name: 'Rajesh Prasad', text: 'Very helpful and knowledgeable person. Strongly recommended.', rating: 5 },
  { name: 'Himani Gawandi', text: 'Wonderful consultation. Very detailed analysis.', rating: 5 },
  { name: 'Harish Pandit', text: 'Excellent service. Truly professional approach.', rating: 5 },
  { name: 'Ajit Singh', text: 'Very satisfied with the consultation and remedies suggested.', rating: 5 },
  { name: 'Ajeet Tomar', text: 'Great experience. Highly recommended for vastu and numerology.', rating: 5 },
  { name: 'Avinash Kokate', text: 'Very good experience. The remedies worked wonderfully.', rating: 5 },
  { name: 'anil singh', text: 'Best astrologer. Predictions are very accurate.', rating: 5 },
  { name: 'Abhishake Garg', text: 'Excellent consultation. Very detailed and helpful.', rating: 5 },
  { name: 'Namdev Salgar', text: 'Great service. Very professional approach.', rating: 5 },
  { name: 'Harshit Gupta', text: 'Wonderful experience. Highly recommended.', rating: 5 },
  { name: 'Ajay Kharra', text: 'Very good consultation. Satisfied with the guidance.', rating: 5 },
  { name: 'pawan agrawal', text: 'Excellent service and products. Very genuine person.', rating: 5 },
  { name: 'neelam dixit', text: 'Great experience with Vedic Urja. Highly recommend.', rating: 5 },
  { name: 'priyanka srivastav', text: 'Very satisfied with the puja services and products.', rating: 5 },
  { name: 'arun kumar mishra', text: 'Best astrologer and numerologist. Very accurate predictions.', rating: 5 },
  { name: 'Shubham Mishra', text: 'Excellent consultation. Very detailed guidance.', rating: 5 },
  { name: 'Dharmendra Mishra', text: 'Wonderful experience. Highly recommended for vastu.', rating: 5 },
  { name: 'gaurav awasthi', text: 'Very good service. Satisfied with the consultation.', rating: 5 },
];

/* ================================================================
   LUXURY HERO
   ================================================================ */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0, 0]);

  return (
    <motion.section ref={ref} style={{ opacity }} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0030] via-[#2d0040] to-[#0a0015] bg-[length:400%_400%] animate-gradient-loop" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.08),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,153,51,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-[8%] w-72 h-72 rounded-full bg-gradient-to-br from-prakash-gold/8 to-transparent backdrop-blur-3xl border border-white/10 animate-float-slow" />
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center mt-16 sm:mt-20">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-prakash-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 block font-semibold">
          Real Stories from Around the World
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
          Words of{' '}
          <span className="bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red bg-clip-text text-transparent">Gratitude</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 px-4">
          Discover how VedicVastuUrja has transformed spaces and lives across India and beyond. Authentic reviews from verified clients.
        </motion.p>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block w-6 h-10 border-2 border-prakash-gold rounded-full mx-auto">
          <span className="block w-1 h-3 bg-prakash-gold rounded-full mx-auto mt-2 animate-bounce" />
        </span>
      </div>
    </motion.section>
  );
}

/* ================================================================
   ANIMATED STATS
   ================================================================ */
function TrustStats() {
  const stats = [
    { value: '2 Lakh+', label: 'Clients Served', icon: '◆' },
    { value: '20+', label: 'Years Experience', icon: '◇' },
    { value: '50+', label: 'Countries', icon: '◈' },
    { value: '4.9 ★', label: 'Rating', icon: '◉' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-vastu-stone/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-prakash-gold/20 shadow-[0_8px_25px_rgba(26,42,58,0.06)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] transition-all duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              <div className="text-3xl mb-2 text-prakash-gold">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-nidra-indigo">{stat.value}</div>
              <div className="text-xs sm:text-sm text-nidra-indigo/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   INSTAGRAM VIDEO TESTIMONIALS – Horizontal Scroll Grid
   ================================================================ */
function VideoTestimonialsSection() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script'); script.src = '//www.instagram.com/embed.js'; script.async = true;
      script.onload = () => { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); };
      document.body.appendChild(script);
    } else { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-vastu-stone/20 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Video Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">Hear from Our Clients</h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm">Real video reviews from families and businesses across India.</p>
        </motion.div>

        {/* Single horizontal scrollable row */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {instagramReels.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start rounded-2xl overflow-hidden bg-white shadow-[0_8px_25px_rgba(26,42,58,0.06)] hover:shadow-[0_15px_35px_rgba(200,138,93,0.15)] border border-prakash-gold/10 transition-shadow duration-500"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <iframe src={`${url}embed/`} width="100%" height="460" frameBorder="0" scrolling="no" className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}

/* ================================================================
   TEXT TESTIMONIALS – 65 GMB Reviews in 3D Cards
   ================================================================ */
function TextTestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-prakash-gold/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="text-sacred-saffron uppercase tracking-[0.2em] text-sm font-semibold">Verified Reviews</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mt-3 mb-4">65+ Google Verified Client Reviews</h2>
          <p className="text-nidra-indigo/60 max-w-xl mx-auto text-sm">Authentic feedback from real clients who have experienced the power of VedicVastuUrja.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gmbReviews.slice(0, visibleCount).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.03 }}
              whileHover={{ scale: 1.02, rotateY: 2, translateZ: 10 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-prakash-gold/15 shadow-[0_4px_15px_rgba(26,42,58,0.04)] hover:shadow-[0_10px_25px_rgba(200,138,93,0.12)] transition-all duration-300 flex flex-col h-full"
              style={{ transformStyle: 'preserve-3d', perspective: 800 }}
            >
              {/* Stars Row */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-prakash-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
                <span className="text-xs text-nidra-indigo/40 ml-1">GMB Verified</span>
              </div>
              {/* Review Content */}
              <p className="text-sm text-nidra-indigo/70 leading-relaxed flex-1 mb-3 line-clamp-4">{review.text}</p>
              {/* Reviewer Name */}
              <div className="flex items-center gap-3 pt-3 border-t border-prakash-gold/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-prakash-gold/30 to-sacred-saffron/30 flex items-center justify-center text-nidra-indigo font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <p className="font-medium text-sm text-nidra-indigo">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < gmbReviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3 border-2 border-prakash-gold text-nidra-indigo rounded-full font-medium hover:bg-prakash-gold/5 transition"
            >
              Load More Reviews ({gmbReviews.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function ClientStoriesPage() {
  return (
    <>
      <LuxuryCursor /><SoundController /><Header /><SmoothScroll>
        <main className="relative bg-vastu-parchment">
          <HeroSection />
          <TrustStats />
          <VideoTestimonialsSection />
          <TextTestimonialsSection />
        </main>
      </SmoothScroll>
      <style>{`
        @keyframes float-slow {0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
        @keyframes gradient-loop {0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        .animate-float-slow{animation:float-slow 8s ease-in-out infinite}
        .animate-gradient-loop{animation:gradient-loop 12s ease infinite}
        .scrollbar-hide::-webkit-scrollbar{display:none}
      `}</style>
    </>
  );
}
