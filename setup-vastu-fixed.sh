#!/bin/bash
set -e

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     PUSHING ALL CHANGES TO GITHUB${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Stage all changes
echo -e "${YELLOW}📦 Staging all files…${NC}"
git add .

# Show what's being committed
echo -e "${YELLOW}📋 Files staged:${NC}"
git diff --cached --stat

# Create a comprehensive commit message
echo -e "${YELLOW}📝 Creating commit…${NC}"
git commit -m "Production-ready: Complete VedicUrja website (55 pages)

✨ New Features:
- 16 luxury service cards across 3 Vedic pillars
- 8 new service detail pages with PNG placeholders
- Collaborate page with 22 partnership types
- Psychology-based header navigation (Serial Position Effect)
- Industry-grade fat footer with all service links
- 65 GMB verified reviews on testimonials page
- 18 collaboration types with SEO content
- Daily Horoscope with live GitHub Pages data

🔧 Fixes:
- Parallax optimized (no gyroscope → no iOS permission popup)
- Video loading optimized (preload=metadata + WebM + poster)
- All hydration errors resolved (calendar, clock, starfield)
- Header gradient: light orange → bloody red → vedic brown
- Translation system stable (English/Hindi, single reload)
- Service card images updated to PNG with correct paths

📄 Content:
- 11 SEO blog articles (2000+ words each)
- All 40+ Vedic practices mapped to 16 services
- Language context with header translations
- Mercury/Parad page still needs fixing (known issue)

🎨 Design:
- Luxury glassmorphism throughout
- 3D flip cards with accent colors
- Floating orbs, Vedic mandalas, animated SVGs
- Mobile-first responsive all pages
- Smooth Lenis scroll integration"

# Push to origin
echo -e "${YELLOW}🚀 Pushing to origin…${NC}"
git push origin main

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     ✅ ALL CHANGES PUSHED SUCCESSFULLY${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"