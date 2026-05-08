'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

/* =========================================================================
   FAT FOOTER – 2026 best practices
   • 4‑category column layout (Company, Sacred Services, Learn, Connect)
   • Slow‑looping gradient matching header
   • Registered business name, full address, dual phone, email
   • Social icons, copyright, privacy/terms/sitemap
   • All 16 service pages linked
   • Trust signals for Google entity recognition
   ========================================================================= */

const navigation = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Collaborate', href: '/collaborate' },
    { name: 'Client Stories', href: '/client-stories' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  services: [
    { name: 'Residential Vastu', href: '/services/residential' },
    { name: 'Commercial Vastu', href: '/services/commercial' },
    { name: 'Industrial Vastu', href: '/services/industrial' },
    { name: 'Land Selection', href: '/services/land' },
    { name: 'Spiritual Spaces', href: '/services/spiritual' },
    { name: 'Geopathic Stress', href: '/services/geopathic' },
    { name: 'Kundali Analysis', href: '/services/kundali' },
    { name: 'New Construction Vastu', href: '/services/new-construction' },
    { name: 'Pyramidology', href: '/services/pyramidology' },
    { name: 'Crystal & Color Therapy', href: '/services/crystal-color' },
    { name: 'Mercury / Parad Therapy', href: '/services/mercury-parad' },
    { name: 'Numerology & Namakaran', href: '/services/numerology-namakaran' },
    { name: 'Mobile Numerology', href: '/services/mobile-numerology' },
    { name: 'Mirrorology', href: '/services/mirrorology' },
    { name: 'Yantra & Mantra Therapy', href: '/services/yantra-mantra' },
    { name: 'Virtual Consult', href: '/bookings' },
  ],
  learn: [
    { name: 'Free AI Tools', href: '/free-tools' },
    { name: 'AI Kundali', href: '/free-tools/kundali' },
    { name: 'Daily Horoscope', href: '/free-tools/daily-horoscope' },
    { name: 'Name Suggestion', href: '/free-tools/name-suggestion' },
    { name: 'Insights / Blog', href: '/insights' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/krishna.nagaich.7/', icon: (props: any) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
  { name: 'Instagram', href: 'https://www.instagram.com/vedicurja?igsh=MTFkb2NkbGJuamp2bg%3D%3D', icon: (props: any) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.376.13 3.934.427 2.684 1.677 1.434 2.927 1.137 4.37 1.08 6.045.02 7.325 0 7.733 0 12s.02 4.675.08 5.955c.057 1.675.354 3.118 1.604 4.368 1.25 1.25 2.693 1.547 4.368 1.604C7.325 23.98 7.733 24 12 24s4.675-.02 5.955-.08c1.675-.057 3.118-.354 4.368-1.604 1.25-1.25 1.547-2.693 1.604-4.368.06-1.28.08-1.688.08-5.955s-.02-4.675-.08-5.955c-.057-1.675-.354-3.118-1.604-4.368C20.073.427 18.63.13 16.955.08 15.675.02 15.267 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>) },
  { name: 'YouTube', href: 'https://www.youtube.com/@vedicurja1589', icon: (props: any) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
  { name: 'WhatsApp', href: 'https://wa.me/916393570832', icon: (props: any) => (<svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.298.433 2.5 1.164 3.477l-1.074 2.47 2.548-.992c.642.365 1.373.578 2.129.578 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767z"/></svg>) },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <footer className="relative z-10">
      <style>{`
        @keyframes footerGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .footer-gradient {
          background: linear-gradient(135deg, #FFDAB9, #FFB347, #FF8C00, #E25822, #C10000, #5D4037);
          background-size: 300% 300%;
          animation: footerGradient 16s ease infinite;
        }
      `}</style>

      <div className="footer-gradient border-t border-white/10">
        {/* Main fat footer grid */}
        <div className="container mx-auto px-4 sm:px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="font-serif text-2xl text-white hover:text-white transition">
                VedicUrja<span className="text-yellow-400">.</span>
              </Link>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                वैदिक वास्तु ऊर्जा — सुख, समृद्धि, शांति और स्वास्थ्य का संकल्प
              </p>
              <p className="mt-2 text-xs text-white/60">
                Registered Business: Vedic Vastu Urja<br />
                Vastuvid K.K. Nagaich — MBA, Ex‑CEO<br />
                4th Generation Vastu Guru
              </p>
              {/* Social icons */}
              <div className="flex gap-3 mt-4">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition">
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-serif text-prakash-gold text-sm uppercase tracking-wider mb-4 font-bold">Company</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}><Link href={item.href} className="text-sm text-white/80 hover:text-white transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Sacred Services Column */}
            <div>
              <h3 className="font-serif text-prakash-gold text-sm uppercase tracking-wider mb-4 font-bold">Sacred Services</h3>
              <ul className="space-y-1.5">
                {navigation.services.slice(0, 10).map((item) => (
                  <li key={item.name}><Link href={item.href} className="text-xs text-white/75 hover:text-white transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* More Services + Learn Column */}
            <div>
              <h3 className="font-serif text-prakash-gold text-sm uppercase tracking-wider mb-4 font-bold">More Services</h3>
              <ul className="space-y-1.5">
                {navigation.services.slice(10).map((item) => (
                  <li key={item.name}><Link href={item.href} className="text-xs text-white/75 hover:text-white transition">{item.name}</Link></li>
                ))}
              </ul>
              <h3 className="font-serif text-prakash-gold text-sm uppercase tracking-wider mb-3 mt-5 font-bold">Learn</h3>
              <ul className="space-y-1.5">
                {navigation.learn.map((item) => (
                  <li key={item.name}><Link href={item.href} className="text-xs text-white/75 hover:text-white transition">{item.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="font-serif text-prakash-gold text-sm uppercase tracking-wider mb-4 font-bold">Connect</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <span className="text-xs leading-relaxed">Rishita, Ansal Api, Celebrity Greens, P1101, Golf City, Sector B, Lucknow, Uttar Pradesh 226030</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+916393570832" className="hover:text-white text-xs">+91 6393570832</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919721082345" className="hover:text-white text-xs">+91 9721082345</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:Vedicurja2020@gmail.com" className="hover:text-white text-xs break-all">Vedicurja2020@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>🌐</span>
                  <a href="https://www.vedicurja.com" className="hover:text-white text-xs">www.vedicurja.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} VedicUrja — Vedic Vastu Urja. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-white/60">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
              <Link href="/collaborate" className="hover:text-white transition">Collaborate</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
