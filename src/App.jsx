import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GamesSection } from './components/GamesSection';
import { TeamSection } from './components/TeamSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LoginModal } from './components/LoginModal';
import { SignupModal } from './components/SignupModal';
import { Footer } from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = (credentials) => {
    // Mock login - in a real app, you'd validate against a backend
    setUser({
      name: credentials.email.split('@')[0].toUpperCase(),
      email: credentials.email
    });
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleSignup = (formData) => {
    // Mock signup - in a real app, you'd send to a backend
    setUser({
      name: formData.firstName,
      email: formData.email
    });
    setIsLoggedIn(true);
    setShowSignupModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const handlePlayClick = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
        onLoginClick={openLoginModal}
      />
      
      <HeroSection 
        isLoggedIn={isLoggedIn}
        onLoginClick={openLoginModal}
        onPlayClick={handlePlayClick}
      />

      <GamesSection isLoggedIn={isLoggedIn} />

      <TeamSection />

      <FeaturesSection />

      <AboutSection onContactClick={() => window.scrollIntoView({ behavior: 'smooth' })} />

      <ContactSection />

      <LoginModal 
        isOpen={showLoginModal}
        onClose={closeLoginModal}
        onLogin={handleLogin}
        onOpenSignup={openSignupModal}
      />

      <SignupModal 
        isOpen={showSignupModal}
        onClose={closeSignupModal}
        onSignup={handleSignup}
        onOpenLogin={openLoginModal}
      />

      <Footer />
    </div>
  );
}

export default App;
