# 🚀 Quick Start Guide

## What is Wrong?

The DNS error (`DNS_PROBE_POSSIBLE`) occurs because the React development server hasn't been started yet. You need to run the installation and start the dev server.

## ✅ How to Fix It

### Option 1: Using Terminal (Recommended)

Open VS Code terminal and run:

```bash
cd /workspaces/pubg-gamig
npm install
npm run dev
```

**Output will show:**
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

Then click on the URL or wait for it to auto-open in your browser.

---

### Option 2: Using the Start Script

```bash
cd /workspaces/pubg-gamig
chmod +x start.sh
./start.sh
```

---

## 📋 Complete Setup Steps

### Step 1: Install Dependencies
```bash
npm install
```
Wait for all packages to install (first time takes ~2-3 minutes)

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
- The app will automatically open at `http://localhost:3000`
- If not, manually navigate to that address

### Step 4: Test the Features

✅ **Navigation** - Click menu items to scroll between sections  
✅ **Login** - Click "Log in" button to see the modal  
✅ **Game Cards** - View all 18 games (only shows when logged in)  
✅ **Contact Form** - Fill and submit contact information  
✅ **Responsive** - Resize browser to see mobile/tablet views  

---

## 🛑 Troubleshooting

### Error: "Port 3000 already in use"
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Error: "npm command not found"
Make sure Node.js is installed:
```bash
node --version
npm --version
```

### Error: "Cannot find module 'react'"
Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images not loading
Make sure the `IMG/` folder exists in the root with all game images

---

## 📊 What Should Happen

1. **First time:** Installing dependencies takes 2-5 minutes
2. **Then:** Dev server starts and opens your browser
3. **You see:** PUBG Gaming website fully loaded with all features
4. **Click "Log in":** Modal appears with email/password form
5. **After login:** Games section appears with 18 games
6. **Contact form:** Fill details and submit message

---

## 🎯 Project is Ready When:

✅ Terminal shows `ready in XXX ms`  
✅ Browser opens automatically  
✅ Website loads with BGMI logo  
✅ No red error messages  
✅ All buttons are clickable  

---

## 💡 Tips

- **Hot Reload:** Changes to files auto-refresh in browser
- **Console:** Press F12 in browser to see any errors
- **Stop Server:** Press `Ctrl+C` in terminal
- **Production Build:** Run `npm run build`

---

## 📞 Still Having Issues?

1. Check terminal for error messages
2. Ensure you're in `/workspaces/pubg-gamig` directory
3. Try clearing cache: `npm cache clean --force`
4. Restart the terminal

---

**Everything is configured and ready to go!** 🎮
