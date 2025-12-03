# PUBG Gaming Website - React Version

## 🎮 Project Overview
This is a modern React conversion of the original PUBG Gaming website. It features team information, gaming catalog, authentication, and contact forms.

## 📋 Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Installation & Setup

### Step 1: Install Dependencies
```bash
cd /workspaces/pubg-gamig
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Step 3: Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── GamesSection.jsx
│   ├── TeamSection.jsx
│   ├── FeaturesSection.jsx
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── LoginModal.jsx
│   ├── SignupModal.jsx
│   └── Footer.jsx
├── styles/             # CSS files
│   ├── base.css
│   ├── navbar.css
│   ├── hero.css
│   ├── games.css
│   ├── team.css
│   ├── features.css
│   ├── about.css
│   ├── contact.css
│   ├── auth.css
│   └── footer.css
├── App.jsx            # Main App component
├── App.css
└── main.jsx           # Entry point
```

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Authentication** - Login/Signup modal with form validation
- **Game Catalog** - Browse and view game information
- **Team Section** - Display team members with roles
- **Contact Form** - Get in touch functionality
- **Dark/Light Theme** - Beautiful gradient design

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **FontAwesome** - Icons

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📸 Key Components

### Header
- Navigation bar with responsive menu
- Login/Logout functionality
- Brand logo (BGMI)

### Hero Section
- Welcome message
- Call-to-action buttons
- Dynamic content based on login status

### Games Section
- Display 18+ games in a responsive grid
- Game cards with descriptions
- "Buy Now" buttons

### Team Section
- Team member profiles
- Role descriptions
- Animated background

### About Section
- Team information
- Player statistics
- Call-to-action banner

### Contact Form
- User input validation
- Contact information display
- Message submission

## 🔐 Authentication

- Mock authentication implemented
- Forms validate user input
- User name displays in header when logged in

## 📱 Responsive Breakpoints

- Mobile: < 500px
- Tablet: 501px - 890px
- Desktop: 891px+

## 🎨 Styling

All styles are in the `src/styles/` directory with component-specific CSS files. The design uses:
- Gradient backgrounds
- Smooth animations
- Flexbox and CSS Grid layouts
- Mobile-first approach

## 🚨 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
Make sure the `IMG/` folder is in the root directory with all image files.

## 📝 Notes

- All styling from the original HTML has been preserved
- Original CSS files (`pubg.css`, `log.css`) have been refactored into component-specific files
- FontAwesome CDN is loaded from `index.html`
- The app uses React hooks for state management

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 📄 License

This project is open source and available under the MIT License.
