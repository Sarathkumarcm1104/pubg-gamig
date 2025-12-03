# Installation & Troubleshooting

## Prerequisites Check

Run this to verify your setup:

```bash
node --version    # Should be v14 or higher
npm --version     # Should be v6 or higher
```

---

## Step-by-Step Installation

### 1️⃣ Navigate to Project
```bash
cd /workspaces/pubg-gamig
```

### 2️⃣ Clean Install (if needed)
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Wait for Server to Start
Look for:
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:3000/
```

### 5️⃣ Open Browser
Navigate to: **http://localhost:3000**

---

## What Each Command Does

| Command | Purpose |
|---------|---------|
| `npm install` | Downloads all required packages |
| `npm run dev` | Starts local development server (hot reload) |
| `npm run build` | Creates optimized production build |
| `npm run preview` | Preview production build locally |

---

## File Structure Created

```
/workspaces/pubg-gamig/
├── src/
│   ├── components/      # React components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main component
│   ├── App.css         # App styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Project metadata & dependencies
├── QUICK_START.md      # Quick reference guide
└── REACT_SETUP.md      # Detailed setup guide
```

---

## Component Architecture

Each section of the website is a separate React component:

```
App
├── Header (Navigation + Auth)
├── HeroSection (Welcome)
├── GamesSection (Game Cards - logged in only)
├── TeamSection (Team Members)
├── FeaturesSection (Game Maps)
├── AboutSection (Team Info)
├── ContactSection (Contact Form)
├── LoginModal (Login Form)
├── SignupModal (Signup Form)
└── Footer (Links & Social)
```

---

## Browser DevTools

Press **F12** in your browser to see:
- Console errors/warnings
- Network requests
- Component inspection (React DevTools)

---

## Common Issues & Solutions

### Issue: DNS_PROBE_POSSIBLE
**Cause:** Development server not running  
**Solution:** 
```bash
npm run dev
```

### Issue: Port 3000 already in use
**Cause:** Another process using port 3000  
**Solution:**
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Issue: Module not found error
**Cause:** Dependencies not installed  
**Solution:**
```bash
npm install
```

### Issue: Images not loading
**Cause:** IMG folder missing or wrong path  
**Solution:** Ensure `IMG/` folder exists in root with all images

### Issue: Styles not applying
**Cause:** CSS import issue  
**Solution:** Clear browser cache (Ctrl+Shift+Delete)

---

## Performance Tips

1. **Use Chrome DevTools** for debugging
2. **Check Network Tab** for failed image loads
3. **Monitor Console** for JavaScript errors
4. **Hot Reload** works automatically on file save

---

## Building for Production

```bash
# Create optimized build
npm run build

# Output goes to: dist/
# Files ready for deployment
```

---

## Environment Configuration

The project is configured for:
- **Dev Server:** http://localhost:3000
- **Build Tool:** Vite
- **Framework:** React 18
- **CSS:** Standard CSS3
- **Icons:** FontAwesome 6

---

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Getting Started](https://vitejs.dev/guide/)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [FontAwesome Icons](https://fontawesome.com/icons)

---

## Getting Help

1. Check terminal for error messages
2. Read the error stack trace
3. Check browser console (F12)
4. Review the QUICK_START.md guide
5. Ensure all dependencies are installed

---

**Your React PUBG Gaming Website is ready!** 🎮✨
