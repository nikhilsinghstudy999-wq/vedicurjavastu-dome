#!/usr/bin/env bash
set -e

# ================================================================
#  VEDICURJA / ASTROVASTU – SAFE AUTO PUSH
# ================================================================

echo "🚀 Auto Push Script – VedicUrja / AstroVastu"

# ----- 1. Check for uncommitted changes ----------------------------
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ No uncommitted changes. Skipping commit."
else
    echo "📝 Uncommitted changes detected."

    # Ask for commit message
    read -p "✏️  Enter commit message (default: 'Update files'): " msg
    msg=${msg:-"Update files"}

    # Stage everything EXCEPT backup files (.bak_*)
    echo "📦 Staging all changes (excluding .bak_* files)..."
    git add .
    # Unstage any .bak_* files that were accidentally added
    git reset -- "*.bak_*" 2>/dev/null || true

    # Commit
    git commit -m "$msg"
fi

# ----- 2. Pull latest remote changes ------------------------------
echo "🔄 Pulling latest from origin/main with rebase..."
if ! git pull --rebase origin main; then
    echo "❌ Pull failed – possibly due to conflicts."
    echo "   Please resolve conflicts manually, then run 'git rebase --continue'."
    exit 1
fi

# ----- 3. Push to remote -------------------------------------------
echo "🚀 Pushing to origin/main..."
if ! git push origin main; then
    echo "❌ Push failed."
    exit 1
fi

echo "✅ Done! Your changes are now on GitHub."