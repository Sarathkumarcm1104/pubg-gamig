#!/bin/bash

# 📤 QUICK GITHUB PUSH SCRIPT
# Run this to push your React project to GitHub

echo "🎮 PUBG Gaming Website - GitHub Push"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Configure git (only if needed)
echo -e "${YELLOW}Step 1: Configure Git${NC}"
echo "Setting up git configuration..."
git config --global user.name "Your GitHub Name" 2>/dev/null || true
git config --global user.email "your.email@github.com" 2>/dev/null || true
echo -e "${GREEN}✓ Git configured${NC}"
echo ""

# Step 2: Initialize git (if needed)
if [ ! -d .git ]; then
    echo -e "${YELLOW}Step 2: Initialize Git Repository${NC}"
    git init
    echo -e "${GREEN}✓ Repository initialized${NC}"
    echo ""
fi

# Step 3: Check git status
echo -e "${YELLOW}Step 3: Checking Status${NC}"
git status
echo ""

# Step 4: Add all files
echo -e "${YELLOW}Step 4: Staging Files${NC}"
git add .
echo -e "${GREEN}✓ All files staged${NC}"
echo ""

# Step 5: Create commit
echo -e "${YELLOW}Step 5: Creating Commit${NC}"
git commit -m "Convert PUBG website to React with Vite - Complete with components, routing, and authentication"
echo -e "${GREEN}✓ Commit created${NC}"
echo ""

# Step 6: Set main branch
echo -e "${YELLOW}Step 6: Setting Main Branch${NC}"
git branch -M main
echo -e "${GREEN}✓ Branch set to main${NC}"
echo ""

# Step 7: Push to GitHub
echo -e "${YELLOW}Step 7: Pushing to GitHub${NC}"
echo "Pushing to: https://github.com/Sarathkumarcm1104/pubg-gamig.git"
git push -u origin main
echo ""

# Step 8: Verify
echo -e "${BLUE}===================================="
echo "Push Complete! ✅"
echo "====================================${NC}"
echo ""
echo "Your repository is now on GitHub!"
echo "Visit: https://github.com/Sarathkumarcm1104/pubg-gamig"
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. Deploy to Vercel: npm install -g vercel && vercel"
echo "2. Deploy to Netlify: npm run build"
echo "3. Share with others!"
echo ""
