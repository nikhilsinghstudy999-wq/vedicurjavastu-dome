#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     LENIS SMOOTH SCROLL – GLOBAL FIX${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# -----------------------------------------------------------------------------
# 1. UPDATE LENIS SMOOTH SCROLL COMPONENT (MORE ROBUST)
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔄 Updating LenisSmoothScroll component...${NC}"
cat > src/features/shared/components/global/LenisSmoothScroll.tsx << 'EOF'
'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export function LenisSmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Ensure lenis is initialized only on client
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,              // Slower, smoother scroll
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother easing
      smoothWheel: true,
      wheelMultiplier: 0.8,       // More natural feel
      touchMultiplier: 1.5,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Reset scroll position on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
export default LenisSmoothScroll;
EOF

# -----------------------------------------------------------------------------
# 2. UPDATE ROOT LAYOUT TO WRAP EVERYTHING IN A RELATIVE CONTAINER
# -----------------------------------------------------------------------------
echo -e "${YELLOW}📦 Updating root layout with proper scroll container...${NC}"
cat > src/app/layout.tsx << 'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 3. ENSURE ALL PAGE CONTAINERS HAVE POSITION: RELATIVE (FOR LENIS)
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔧 Adding position:relative to main containers...${NC}"
find src/app -name "page.tsx" -type f -exec sed -i 's/<main /<main style={{ position: "relative" }} /g' {} \;

# -----------------------------------------------------------------------------
# 4. REBUILD
# -----------------------------------------------------------------------------
echo -e "${YELLOW}🔨 Rebuilding...${NC}"
rm -rf .next out
npm run build

echo -e "${GREEN}✅ Build successful!${NC}"
echo ""
echo "🎉 Lenis smooth scroll is now globally applied with a slow, smooth easing."
echo "   The homepage scroll issue is fixed (container has relative positioning)."
echo ""
echo "Upload the 'out/' folder to Hostinger."