#!/bin/bash
set -e
GREEN='\033[0;32m'; NC='\033[0m'
echo -e "${GREEN}UPDATING TRUST MARQUEE TO USE PNG BRAND LOGOS WITHOUT TEXT LABELS${NC}"

# Overwrite TrustMarquee component with PNG usage and no text labels
cat > src/features/home/components/TrustMarquee.tsx << 'ENDOFFILE'
'use client';

export function TrustMarquee() {
  const brands = [
    { name: 'Mahindra', logo: '/images/trust/mahindra.png' },
    { name: 'TCS', logo: '/images/trust/tcs.png' },
    { name: 'Adani', logo: '/images/trust/adani.png' },
    { name: 'Times of India', logo: '/images/trust/toi.png' },
    { name: 'P&G', logo: '/images/trust/pg.png' },
    { name: 'Reliance', logo: '/images/trust/reliance.png' },
    { name: 'Haldiram', logo: '/images/trust/haldiram.png' },
    { name: 'Bajaj', logo: '/images/trust/bajaj.png' },
  ];

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
      {/* Slow looping gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-nidra-indigo/5 via-prakash-gold/10 to-sacred-saffron/5 bg-[length:400%_400%] animate-[trustGradient_12s_ease-in-out_infinite] rounded-[60px] mx-4 sm:mx-8" />

      <style>{`
        @keyframes trustGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes trustFloat {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-5px) rotateY(3deg); }
        }
        .trust-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232, 185, 96, 0.3);
          box-shadow: 0 8px 20px rgba(26, 42, 58, 0.1), 0 2px 6px rgba(232, 185, 96, 0.15);
        }
        .trust-card:hover {
          transform: translateY(-6px) rotateY(5deg) scale(1.05);
          box-shadow: 0 15px 30px rgba(26, 42, 58, 0.2), 0 6px 15px rgba(232, 185, 96, 0.3);
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-nidra-indigo">
            Vastu Partners of{' '}
            <span className="bg-gradient-to-r from-sacred-saffron via-prakash-gold to-kumkuma-red bg-clip-text text-transparent">
              India's Leading Brands
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-nidra-indigo/60">
            Guiding their spaces towards prosperity and harmony
          </p>
        </div>

        {/* Logo Grid – Images only, no text labels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="trust-card rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center"
              style={{
                animation: `trustFloat ${3 + i * 0.3}s ease-in-out infinite`,
                transformStyle: 'preserve-3d',
                perspective: 800,
              }}
            >
              {/* Only the PNG image, no text fallback */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
              {/* No text label – strictly image only */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TrustMarquee;
ENDOFFILE

echo -e "${GREEN}✓ TrustMarquee updated – PNG images only, no text labels${NC}"

# Rebuild
npm run build

echo ""
echo -e "${GREEN}✓ Brand logos now display as PNG images with floating cards, no text${NC}"