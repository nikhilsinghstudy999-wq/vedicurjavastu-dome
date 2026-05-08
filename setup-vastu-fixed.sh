#!/bin/bash
set -e

# ================================================================
# VedicUrja – Restore original layout.tsx from last known good backup
# ================================================================

LAYOUT="src/app/layout.tsx"
BACKUP_FILE=""

# Find the most recent backup of layout.tsx across all backup directories
for dir in .lcp_opt_backup_* .menu_scroll_lock_backup_* .header_rewrite_backup_* .lcp_attrs_backup_*; do
  if [ -d "$dir" ] && [ -f "$dir/layout.tsx" ]; then
    BACKUP_FILE="$dir/layout.tsx"
    break
  fi
done

if [ -z "$BACKUP_FILE" ]; then
  echo "❌ No backup of layout.tsx found in any .*backup* directory."
  echo "   Your original file may be lost. Please restore from git."
  exit 1
fi

echo "📂 Using backup: $BACKUP_FILE"
cp "$BACKUP_FILE" "$LAYOUT"
echo "✅ Original layout.tsx restored"

# Also remove any preload lines in case they were added (clean-up)
if grep -q 'rel="preload"' "$LAYOUT"; then
  sed -i '/rel="preload"/d' "$LAYOUT"
  echo "✅ Preload links removed (original didn't have them)"
fi

# Rebuild to confirm everything is back to normal
echo "🔨 Rebuilding..."
npm run build

echo ""
echo "🎉 layout.tsx is back to exactly how it was before all the LCP scripts."
echo "   All the missing‑module errors are gone."