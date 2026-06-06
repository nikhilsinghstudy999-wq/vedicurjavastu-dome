#!/bin/bash

set -e

PAGE_DIR="src/app/(marketing)/vishesh-upaye-1"
PAGE_FILE="$PAGE_DIR/page.tsx"
VIDEO_MP4="public/videos/Vedicvastuurja.mp4"
VIDEO_WEBM="public/videos/Vedicvastuurja.webm"
POSTER_IMG="public/images/vishesh-upaye-poster.jpg"

echo "🚀 Fixing hidden luxury page: /vishesh-upaye-1"

# ----------------------------------------------------------------------
# 1. Ensure directories exist
# ----------------------------------------------------------------------
mkdir -p "$PAGE_DIR"
mkdir -p "public/videos"
mkdir -p "public/images"

# ----------------------------------------------------------------------
# 2. Create a placeholder poster if it doesn't exist
# ----------------------------------------------------------------------
if [ ! -f "$POSTER_IMG" ]; then
    cat > "$POSTER_IMG" << 'EOF'
<svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1A2A3A"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#E8B960" font-size="48" font-family="serif">विशेष उपाय</text>
</svg>
EOF
    echo "✅ Created poster image at $POSTER_IMG"
else
    echo "✅ Poster image already exists."
fi

# ----------------------------------------------------------------------
# 3. Warn about missing video files (but continue)
# ----------------------------------------------------------------------
if [ ! -f "$VIDEO_MP4" ]; then
    echo "⚠️  MP4 video not found at $VIDEO_MP4"
    echo "   Please place your video file there (will still build, but video won't play)."
fi

if [ ! -f "$VIDEO_WEBM" ]; then
    echo "⚠️  WebM video not found at $VIDEO_WEBM"
    echo "   The page will use only the MP4 version."
fi

# ----------------------------------------------------------------------
# 4. Write the new static page (no client-only components)
# ----------------------------------------------------------------------
cat > "$PAGE_FILE" << 'EOF'
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';
import Image from 'next/image';

export default function VisheshUpayePage() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <main className="min-h-screen bg-gradient-to-b from-vastu-parchment via-white to-vastu-parchment">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-nidra-indigo via-sacred-saffron/20 to-nidra-indigo py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-block px-6 py-2 bg-prakash-gold/20 rounded-full mb-6">
                <span className="text-prakash-gold font-semibold tracking-wider">विशेष उपाय</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-nidra-indigo mb-4">
                विशेष उपाय-1
              </h1>
              <p className="text-nidra-indigo/70 text-lg max-w-2xl mx-auto">
                प्राचीन वैदिक विधियों पर आधारित विशेष समाधान
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-prakash-gold/30 bg-black">
              <video
                className="absolute inset-0 w-full h-full object-contain"
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="none"
                playsInline
              >
                <source src="/videos/Vedicvastuurja.mp4" type="video/mp4" />
                <source src="/videos/Vedicvastuurja.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
            <div className="bg-gradient-to-br from-white/90 to-vastu-stone/30 rounded-3xl p-8 border border-prakash-gold/30 shadow-xl">
              <h2 className="font-serif text-3xl sm:text-4xl text-nidra-indigo mb-4">
                संपूर्ण समाधान के लिए संपर्क करें
              </h2>
              <p className="text-nidra-indigo/70 text-lg mb-8">
                व्यक्तिगत मार्गदर्शन और विस्तृत उपाय हेतु आज ही बुक करें।
              </p>
              <Link
                href="/bookings"
                className="inline-block px-10 py-4 bg-gradient-to-r from-sacred-saffron to-prakash-gold text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                परामर्श बुक करें →
              </Link>
            </div>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}
EOF

echo "✅ Page rewritten at $PAGE_FILE"

# ----------------------------------------------------------------------
# 5. Final instructions
# ----------------------------------------------------------------------
echo ""
echo "=============================================================="
echo "✅ Video page fixed and ready for static export."
echo "=============================================================="
echo ""
echo "📌 What was fixed / improved:"
echo "   • Removed 'use client' + problematic client components"
echo "   • Added MP4 + WebM video sources for broad compatibility"
echo "   • Added poster image + fallback text"
echo "   • Used preload='none' + playsInline for mobile-first performance"
echo ""
echo "🎬 Next steps:"
echo "   1. Place your MP4 video at: $VIDEO_MP4"
echo "   2. (Optional) Convert it to WebM and place at: $VIDEO_WEBM"
echo "   3. Run 'npm run build' – the video will be copied to 'out/videos/'"
echo "   4. Test locally: npx serve out"
echo ""
echo "⚠️  If the video still doesn't play after build:"
echo "   - Check that 'out/videos/Vedicvastuurja.mp4' exists."
echo "   - If missing, manually copy 'public/videos/' to 'out/videos/'"
echo "   - Or add 'cp -r public/videos out/' to your build script."
echo "=============================================================="