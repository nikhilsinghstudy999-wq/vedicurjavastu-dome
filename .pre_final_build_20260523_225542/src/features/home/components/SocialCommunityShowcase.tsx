'use client';
import Script from "next/script";
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Your Facebook, Instagram, YouTube data – replace with actual values
const facebookPosts = [
  { src: 'https://www.facebook.com/plugins/post.php?href=YOUR_POST_URL&show_text=true&width=500', height: 329 },
];

const instagramEmbeds = [
  { html: '<blockquote class="instagram-media" data-instgrm-permalink="YOUR_INSTAGRAM_URL">...</blockquote>' },
];

const youtubeVideos = [
  { id: 'YOUR_VIDEO_ID', title: 'Video Title' },
];

export default function SocialCommunityShowcase() {
  useEffect(() => {
    if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
  }, []);

  return (
    <>
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => { if ((window as any).instgrm) (window as any).instgrm.Embeds.process(); }}
      />
      <section className="py-20 sm:py-28 bg-gradient-to-b from-vastu-parchment to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-nidra-indigo mb-4">
            Our Sacred Community
          </motion.h2>
          <motion.p className="text-center text-nidra-indigo/60 mb-12 max-w-3xl mx-auto">
            Join thousands of seekers on their journey with VedicUrja
          </motion.p>

          {/* Facebook Section */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-center sm:text-left text-nidra-indigo mb-4 flex items-center gap-2">
              <span className="text-3xl">📘</span> Facebook
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {facebookPosts.map((post, i) => (
                <motion.div key={i} className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-prakash-gold/20">
                    <iframe loading="lazy" loading="lazy" src={post.src} width="100%" height={post.height} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen title="Facebook post" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-center sm:text-left text-nidra-indigo mb-4 flex items-center gap-2">
              <span className="text-3xl">📷</span> Instagram
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {instagramEmbeds.map((embed, i) => (
                <motion.div key={i} className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-prakash-gold/20" dangerouslySetInnerHTML={{ __html: embed.html }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* YouTube Section */}
          <div>
            <h3 className="font-serif text-2xl text-center sm:text-left text-nidra-indigo mb-4 flex items-center gap-2">
              <span className="text-3xl">▶️</span> YouTube Community
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {youtubeVideos.map((video, i) => (
                <motion.div key={video.id} className="flex-shrink-0 w-[300px] sm:w-[360px] snap-start">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-prakash-gold/20">
                    <div className="aspect-video">
                      <iframe loading="lazy" loading="lazy" width="100%" height="100%" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    </div>
                    <div className="p-4"><p className="font-medium text-nidra-indigo truncate">{video.title}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        </div>
      </section>
    </>
  );
}
