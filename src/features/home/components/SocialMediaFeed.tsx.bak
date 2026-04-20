'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const platforms = [
  { name: 'Instagram', icon: '📷', handle: '@vedicurja', color: 'from-pink-500 to-purple-500', href: 'https://www.instagram.com/vedicurja?igsh=MTFkb2NkbGJuamp2bg%3D%3D' },
  { name: 'Facebook', icon: '📘', handle: 'VedicUrja', color: 'from-blue-600 to-blue-800', href: 'https://www.facebook.com/krishna.nagaich.7/' },
  { name: 'YouTube', icon: '▶️', handle: '@vedicurja', color: 'from-red-500 to-red-700', href: 'https://www.youtube.com/@vedicurja1589' },
  { name: 'WhatsApp', icon: '💬', handle: '+91 6393570832', color: 'from-green-500 to-green-700', href: 'https://api.whatsapp.com/send/?phone=916393570832&text&type=phone_number&app_absent=0' },
];

export function SocialMediaFeed() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-vastu-parchment">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-nidra-indigo mb-4">Connect With Us</h2>
          <p className="text-nidra-indigo/60 max-w-2xl mx-auto">Follow VedicUrja on social media for daily wisdom.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {platforms.map((p) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="connect-card"
            >
              <div className="card-image">{p.icon}</div>
              <div className="p-4">
                <h3 className="project-title">{p.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="project-type">{p.handle}</span>
                  <span className="text-prakash-gold">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="text-prakash-gold font-medium hover:underline">Contact us directly →</Link>
        </div>
      </div>
    </section>
  );
}
export default SocialMediaFeed;
