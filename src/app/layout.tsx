import Footer from '@/features/shared/components/Footer';
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import LenisSmoothScroll from "@/features/shared/components/global/LenisSmoothScroll";
import { GlobalSoundProvider } from "@/features/shared/components/global/GlobalSoundProvider";
import { fontSerif, fontSans, fontMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "VedicUrja | Ancient Wisdom, Modern Precision",
  description: "Global Vastu Consultancy rooted in authentic Vedic tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Hide Google Translate UI */}
        <style>{`
          .goog-te-banner-frame, .goog-te-gadget, .goog-te-menu-value, #google_translate_element,
          .goog-logo-link, .goog-te-spinner-pos, iframe.goog-te-banner-frame, .skiptranslate {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
          }
          body { top: 0 !important; position: relative !important; }
          .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
        `}</style>
      </head>
      <body className="bg-vastu-parchment text-nidra-indigo antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalSoundProvider>
            {/* Ensure a relative container for Lenis to calculate offsets correctly */}
            <div style={{ position: 'relative' }}>
              <LenisSmoothScroll>
                {children}
              </LenisSmoothScroll>
            </div>
          </GlobalSoundProvider>
        </ThemeProvider>
        <Footer />
        <div id="google_translate_element" style={{ display: 'none' }} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                  var banner = document.querySelector('iframe.goog-te-banner-frame');
                  if (banner) { banner.remove(); observer.disconnect(); }
                }
              });
            });
            observer.observe(document.body, { childList: true, subtree: true });
          })();
        `}} />
      </body>
    </html>
  );
}
