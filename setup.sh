#!/bin/bash

INSIGHTS_PAGE="src/app/(marketing)/insights/page.tsx"

if [ ! -f "$INSIGHTS_PAGE" ]; then
    echo "❌ Insights page not found at $INSIGHTS_PAGE"
    exit 1
fi

echo "🔧 Adding FeaturedBlogSection below hero in insights page..."

# Backup
cp "$INSIGHTS_PAGE" "$INSIGHTS_PAGE.bak.manual"
echo "✅ Backup created: $INSIGHTS_PAGE.bak.manual"

# Remove any existing FeaturedBlogSection imports and usage to avoid duplicates
sed -i '/import FeaturedBlogSection/d' "$INSIGHTS_PAGE"
sed -i '/<FeaturedBlogSection \/>/d' "$INSIGHTS_PAGE"

# Add the import line after the last import (or at the top)
# Find a line that contains 'import' and insert after it
LAST_IMPORT=$(grep -n '^import' "$INSIGHTS_PAGE" | tail -1 | cut -d: -f1)
if [ -n "$LAST_IMPORT" ]; then
    sed -i "${LAST_IMPORT}a import FeaturedBlogSection from \"@/features/shared/components/FeaturedBlogSection\";" "$INSIGHTS_PAGE"
else
    sed -i '1i import FeaturedBlogSection from "@/features/shared/components/FeaturedBlogSection";' "$INSIGHTS_PAGE"
fi

# Insert the component right before the category filter section (which starts with <section className="py-12 bg-vastu-stone/20">)
# This places it below the hero and above the filter.
PATTERN='<section className="py-12 bg-vastu-stone/20"'
if grep -q "$PATTERN" "$INSIGHTS_PAGE"; then
    sed -i "/$PATTERN/i\\\n      <FeaturedBlogSection />\n" "$INSIGHTS_PAGE"
    echo "✅ FeaturedBlogSection inserted below hero (before category filter)."
else
    # Fallback: insert after the first <main> tag
    sed -i '/<main>/a \      <FeaturedBlogSection />' "$INSIGHTS_PAGE"
    echo "⚠️ Could not find category filter; inserted after <main>. Please adjust position manually if needed."
fi

echo ""
echo "=============================================================="
echo "✅ Insights page updated."
echo "Run 'npm run build' to verify."
echo "If the component is not in the desired position, manually move"
echo "<FeaturedBlogSection /> inside $INSIGHTS_PAGE"
echo "=============================================================="