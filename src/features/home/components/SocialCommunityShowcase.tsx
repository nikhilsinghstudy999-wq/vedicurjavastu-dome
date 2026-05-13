'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const INSTAGRAM_REELS = [
  'https://www.instagram.com/reel/DW-oXZ3yhUx/',
  'https://www.instagram.com/reel/DYFC90iyEOF/',
  'https://www.instagram.com/reel/DXyYzK5yLjQ/',
  'https://www.instagram.com/reel/DWik3DZkvZk/',
];

const YOUTUBE_VIDEOS = [
  { id: 'mn18MULD--s', title: 'Ghar par hawan kaise kare', views: '2M+' },
  { id: 'Nd6F5smvORA', title: 'Sabse choti aur asan tarpan vidhi', views: '250K+' },
  { id: '0LRYZ-4wL_8', title: 'Vastu Tips', views: '200K+' },
];

const FACEBOOK_EMBEDS = [
  'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1266966454628524%2F&show_text=false&width=267&t=0',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkrishna.nagaich.7%2Fposts%2Fpfbid0nNrcg2f1tE4QNcC9qbhgXiZ6VbrA2J3jd55tQLhPB1J3y86td284jYKAxpFKurT7l&show_text=true&width=500',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkrishna.nagaich.7%2Fposts%2Fpfbid02xQBRscDCALDBs64pE9SxM2gy6YwL8xUwd4pnci9gajjAUCqgfgtUDNHru4BtBmmol&show_text=true&width=500',
];

export default function SocialCommunityShowcase() {
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    if (!document.querySelector('script[src="https://connect.facebook.net/en_US/sdk.js"]')) {
      const fbScript = document.createElement('script');
      fbScript.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      fbScript.async = true;
      fbScript.defer = true;
      document.body.appendChild(fbScript);
    }
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-vastu-stone/20 to-vastu-parchment">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4">
            Our Sacred Community
          </h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">
            Real transformations – across Instagram, YouTube, and Facebook
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {INSTAGRAM_REELS.map((url, idx) => (
            <motion.div key={`ig-${idx}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} className="rounded-2xl overflow-hidden shadow-lg border border-prakash-gold/20 bg-white">
              <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163z"/></svg>
                  Instagram
                </div>
                <div className="aspect-[9/16] w-full">
                  <blockquote className="instagram-media w-full h-full" data-instgrm-captioned data-instgrm-permalink={url} data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: 0, boxShadow: 'none', margin: 0, maxWidth: '100%', padding: 0, width: '100%', height: '100%' }}>
                    <div style={{ padding: '16px' }}><a href={url} target="_blank" rel="noopener noreferrer">View on Instagram</a></div>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}

          {YOUTUBE_VIDEOS.map((video, idx) => (
            <motion.div key={`yt-${idx}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx + INSTAGRAM_REELS.length) * 0.03 }} className="rounded-2xl overflow-hidden shadow-lg border border-prakash-gold/20 bg-white">
              <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </div>
                <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">👁️ {video.views}</div>
                <div className="aspect-video w-full">
                  <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          ))}

          {FACEBOOK_EMBEDS.map((src, idx) => (
            <motion.div key={`fb-${idx}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx + INSTAGRAM_REELS.length + YOUTUBE_VIDEOS.length) * 0.03 }} className="rounded-2xl overflow-hidden shadow-lg border border-prakash-gold/20 bg-white">
              <div className="relative">
                <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </div>
                <div className="w-full bg-gray-50">
                  <iframe src={src} width="100%" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a href="https://www.instagram.com/vedicurja" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border-2 border-prakash-gold rounded-full text-nidra-indigo font-medium hover:bg-prakash-gold/10 transition">Instagram</a>
          <a href="https://www.youtube.com/@vedicurja1589" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border-2 border-prakash-gold rounded-full text-nidra-indigo font-medium hover:bg-prakash-gold/10 transition">YouTube</a>
          <a href="https://www.facebook.com/krishna.nagaich.7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 border-2 border-prakash-gold rounded-full text-nidra-indigo font-medium hover:bg-prakash-gold/10 transition">Facebook</a>
        </div>
      </div>
    </section>
  );
}
