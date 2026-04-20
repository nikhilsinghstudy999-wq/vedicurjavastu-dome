# 1. Backup your environment variables (critical)
cp .env.local .env.local.backup

# 2. Remove the entire Git history
rm -rf .git

# 3. Initialize a fresh Git repository
git init

# 4. Create a proper .gitignore to permanently exclude node_modules and other large/unnecessary files
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Build outputs
.next/
out/
dist/

# Environment files (keep backup, never commit real keys)
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS metadata
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Backups
.backups/
*.backup
EOF

# 5. Restore your environment file
cp .env.local.backup .env.local
rm .env.local.backup

# 6. Add all source code files (node_modules is ignored via .gitignore)
git add .

# 7. Create the initial commit
git commit -m "Initial production commit: VedicUrja complete platform"

# 8. Add the remote repository back
git remote add origin https://github.com/nikhilsinghstudy999-wq/vedicurjavastu-dome.git

# 9. Force push the clean history to GitHub (overwrites everything on remote)
git push -u origin main --force