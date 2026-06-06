#!/bin/bash
set -e

echo "🚀 Fixing video page and deploying to Vercel..."

# ----------------------------------------------------------------------
# 1. Ensure directories exist
# ----------------------------------------------------------------------
PAGE_DIR="src/app/(marketing)/vishesh-upaye-1"
mkdir -p "$PAGE_DIR"
mkdir -p "public/videos"
mkdir -p "public/images"

# ----------------------------------------------------------------------
# 2. Create poster image if missing
# ----------------------------------------------------------------------
POSTER_PATH="public/images/vishesh-upaye-poster.jpg"
if [ ! -f "$POSTER_PATH" ]; then
    echo "📸 Creating poster image..."
    cat > "$POSTER_PATH" << 'EOF'
<svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1A2A3A"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#E8B960" font-size="48" font-family="serif">विशेष उपाय</text>
</svg>
EOF
fi

# ----------------------------------------------------------------------
# 3. Warn about missing video files (but continue)
# ----------------------------------------------------------------------
MP4_PATH="public/videos/Vedicvastuurja.mp4"
WEBM_PATH="public/videos/Vedicvastuurja.webm"

if [ ! -f "$MP4_PATH" ]; then
    echo "⚠️  MP4 video not found at $MP4_PATH"
    echo "   The page will still build, but video won't play until you add it."
fi

# Optionally convert MP4 to WebM if ffmpeg is installed
if command -v ffmpeg &> /dev/null && [ -f "$MP4_PATH" ] && [ ! -f "$WEBM_PATH" ]; then
    echo "🎬 Converting MP4 to WebM for better compatibility..."
    ffmpeg -i "$MP4_PATH" -c:v libvpx -crf 10 -b:v 1M -c:a libopus "$WEBM_PATH"
    echo "✅ WebM created at $WEBM_PATH"
fi

# ----------------------------------------------------------------------
# 4. Write the page (Server Component – no event handlers)
# ----------------------------------------------------------------------
cat > "$PAGE_DIR/page.tsx" << 'EOF'
import Header from '@/features/shared/components/Header';
import SmoothScroll from '@/features/shared/components/global/ScrollSmoother';
import Link from 'next/link';

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

          {/* Video Section – pure HTML5 video, no event handlers */}
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border border-prakash-gold/30 bg-black">
              <video
                className="absolute inset-0 w-full h-full object-contain"
                poster="/images/vishesh-upaye-poster.jpg"
                controls
                preload="metadata"
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

echo "✅ Page rewritten at $PAGE_DIR/page.tsx"

# ----------------------------------------------------------------------
# 5. Ensure video files are tracked by Git
# ----------------------------------------------------------------------
if [ -f "$MP4_PATH" ]; then
    git add "$MP4_PATH" 2>/dev/null || true
fi
if [ -f "$WEBM_PATH" ]; then
    git add "$WEBM_PATH" 2>/dev/null || true
fi
git add "$POSTER_PATH"
git add "$PAGE_DIR/page.tsx"

# ----------------------------------------------------------------------
# 6. Commit and push
# ----------------------------------------------------------------------
echo "📦 Committing changes..."
git commit -m "Fix video page: remove event handlers, add WebM support, improve static export" || echo "No changes to commit"

echo "🚀 Pushing to GitHub..."
git push origin main

# ----------------------------------------------------------------------
# 7. Final instructions
# ----------------------------------------------------------------------
echo ""
echo "=============================================================="
echo "✅ Video page fixed and deployed!"
echo "=============================================================="
echo ""
echo "📌 What was changed:"
echo "   • Removed 'onError' event handler (caused Vercel build failure)"
echo "   • Added WebM source (converted automatically if ffmpeg is available)"
echo "   • Used 'preload=\"metadata\"' instead of 'none' for better UX"
echo "   • Kept the page as Server Component (no 'use client')"
echo ""
echo "🌐 Vercel will automatically redeploy after push."
echo "   Check your deployment logs at: https://vercel.com"
echo ""
echo "🎬 If the video still doesn't play:"
echo "   - Ensure 'public/videos/Vedicvastuurja.mp4' exists and is valid."
echo "   - Manually add a WebM version (or let the script convert it)."
echo "   - After push, wait ~2 minutes for Vercel to rebuild."
echo "=============================================================="