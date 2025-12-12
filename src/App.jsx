import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  const Home = () => (
    <>
      <HeroSection
        isLoggedIn={isLoggedIn}
        onLoginClick={openLoginModal}
        onPlayClick={handlePlayClick}
        showTeam={false}
      />
      {/* don't render characters inside hero to avoid duplication; TeamSection renders the team */}
      <GamesSection isLoggedIn={isLoggedIn} />
      <TeamSection />
      <FeaturesSection />
    </>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={handleLogout}
          onLoginClick={openLoginModal}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutSection onContactClick={() => { /* no-op here */ }} />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
