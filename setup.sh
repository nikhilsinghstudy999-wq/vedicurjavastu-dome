#!/bin/bash
set -e

echo "🚀 Creating hidden ultra‑luxury page: /vishesh-upaye-1 (fixed version)"

PAGE_DIR="src/app/(marketing)/vishesh-upaye-1"
mkdir -p "$PAGE_DIR"

cat > "$PAGE_DIR/page.tsx" << 'EOF'
import Header from '@/features/shared/components/Header';
import Footer from '@/features/shared/components/Footer';
import Link from 'next/link';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-prakash-gold/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sacred-saffron/5 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-prakash-gold bg-prakash-gold/10 rounded-full">
              विशेष प्रस्ताव
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-nidra-indigo mb-6 leading-tight">
              विशेष <span className="text-prakash-gold">उपाय</span>
            </h1>
            <p className="text-lg md:text-xl text-nidra-indigo/70 max-w-2xl mx-auto">
              वैदिक ज्योतिष एवं वास्तु के अद्भुत समाधान – सीधे आपके सामने।
            </p>
          </div>
        </section>

        {/* Video Section – Wide 4:3 Aspect Ratio */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-prakash-gold/30 bg-black/5">
              <div className="aspect-[4/3] w-full">
                <video
                  src="/videos/Vedicvastuurja.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/images/home/lucknow-fallback.webp"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* CTA Section – Luxury Booking */}
        <section className="py-20 md:py-28 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-prakash-gold/30">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-nidra-indigo mb-4">
                पूर्ण समाधान के लिए
              </h2>
              <p className="text-lg text-nidra-indigo/70 mb-8">
                व्यक्तिगत परामर्श और विस्तृत रिपोर्ट के लिए आज ही संपर्क करें।
              </p>
              <Link
                href="/bookings"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-prakash-gold via-sacred-saffron to-kumkuma-red text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
              >
                <span>परामर्श बुक करें</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
EOF

echo "✅ Page created without problematic imports (SmoothScroll, LuxuryCursor, SoundController)"

# Ensure video directory
VIDEO_DIR="public/videos"
mkdir -p "$VIDEO_DIR"
VIDEO_PATH="$VIDEO_DIR/Vedicvastuurja.mp4"

if [ ! -f "$VIDEO_PATH" ]; then
    echo "⚠️ Video file not found at $VIDEO_PATH"
    echo "Please place your video file (Vedicvastuurja.mp4) in the public/videos/ folder."
    echo "Creating a placeholder note..."
    cat > "$VIDEO_PATH.txt" << EOF
Place your high-quality 4:3 video named "Vedicvastuurja.mp4" here.
The page will display it automatically.
EOF
else
    echo "✅ Video file already exists at $VIDEO_PATH"
fi

echo ""
echo "=============================================================="
echo "✅ Hidden page created successfully (fixed for static export)!"
echo "=============================================================="
echo "📍 Page URL: /vishesh-upaye-1"
echo "📁 Page file: src/app/(marketing)/vishesh-upaye-1/page.tsx"
echo ""
echo "➡️  Next steps:"
echo "1. Place your video file at: $VIDEO_PATH"
echo "2. Run 'npm run build' – the page should now compile without errors."
echo "3. The page is NOT linked anywhere – share the URL directly."
echo ""
echo "🎉 Luxury page is ready for building!"
echo "=============================================================="