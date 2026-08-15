#!/usr/bin/env bash

# ================================================================
#  SAFE PUSH SCRIPT – VEDICURJA / ASTROVASTU
# ================================================================
set -e  # Stop on any error

# ----- Colors for pretty output ------------------------------------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 AstroVastu / VedicUrja – Safe Push Script${NC}"

# ----- 1. Check for in-progress rebase -----------------------------
if [ -d ".git/rebase-merge" ] || [ -d ".git/rebase-apply" ]; then
    echo -e "${RED}❌ A rebase is already in progress.${NC}"
    echo "   Please finish it (git rebase --continue) or abort (git rebase --abort)."
    exit 1
fi

# ----- 2. Check for uncommitted changes ----------------------------
if git diff --quiet && git diff --cached --quiet; then
    echo -e "${YELLOW}ℹ️  No uncommitted changes. Skipping commit.${NC}"
else
    echo -e "${GREEN}📝 Uncommitted changes detected.${NC}"

    # Ask for commit message
    read -p "✏️  Enter commit message (default: 'Update files'): " msg
    msg=${msg:-"Update files"}

    # Stage everything, then unstage backups
    echo "📦 Staging all changes..."
    git add .

    # Remove .bak_* files from staging (they were added by mistake)
    echo "🧹 Excluding backup files (.bak_*) from commit..."
    git reset -- "*.bak_*" 2>/dev/null || true

    # Also exclude any dump files (just in case)
    git reset -- "vedicurja_full_dump_*.txt" 2>/dev/null || true

    # Check if there is anything left to commit
    if git diff --cached --quiet; then
        echo -e "${YELLOW}⚠️  No meaningful changes to commit (only backups). Aborting commit.${NC}"
        # Unstage everything to clean up
        git reset --hard HEAD
        exit 0
    fi

    # Commit
    echo "📝 Committing..."
    git commit -m "$msg"
fi

# ----- 3. Pull latest remote changes (rebase) ---------------------
echo "🔄 Pulling latest from origin/main with rebase..."
if ! git pull --rebase origin main; then
    echo -e "${RED}❌ Pull failed – possibly due to conflicts.${NC}"
    echo "   Please resolve conflicts manually, then run 'git rebase --continue'."
    exit 1
fi

# ----- 4. Push to remote -------------------------------------------
echo "🚀 Pushing to origin/main..."
if ! git push origin main; then
    echo -e "${RED}❌ Push failed.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Done! Your changes are now on GitHub.${NC}"

# ----- 5. Optional: Delete backup files (ask user) -----------------
read -p "🧹 Delete all .bak_* backup files from disk? [y/N] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    find . -name "*.bak_*" -type f -delete
    echo -e "${GREEN}✅ Backup files deleted.${NC}"
fi