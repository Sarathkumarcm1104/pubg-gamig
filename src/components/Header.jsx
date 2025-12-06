import React, { useState } from 'react';
import '../styles/navbar.css';

export function Header({ isLoggedIn, user, onLogout, onLoginClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" id="headerhome">
      <nav className="navbar fix">
        <div className="container">
          <h1 className="logo leftnavber lg-heading text-light"><i className="fas fa-vihara"> BGMI </i></h1>
          <ul className="nav-items rightnavbar">
            <li className="nav-item"><a href="#home" id="homeli" onClick={() => scrollToSection('home')}>Home</a></li>
            <li className="nav-item"><a href="#about" id="aboutli" onClick={() => scrollToSection('about')}>About</a></li>
            <li className="nav-item"><a href="#contacts" id="contectli" onClick={() => scrollToSection('contacts')}>Contact us</a></li>
            {!isLoggedIn ? (
              <li className="nav-item" id="loginli"><a href="#login" id="logformli" onClick={onLoginClick}>Log in</a></li>
            ) : (
              <>
                <li className="nav-item"><span className="user-name">{user?.name}</span></li>
                <li className="nav-item"><a href="#logout" id="logoutBtn" onClick={onLogout}>Log Out</a></li>
              </>
            )}
          </ul>

          <div className="mob-menu">
            <div className="menu-icon"><i className="fas fa-bars" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></i></div>
            <ul className={`mobnav-items ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-itemmenu"><a href="#home" id="homeliMobile" onClick={() => scrollToSection('home')}>Home</a></li>
              <li className="nav-itemmenu"><a href="#about" id="aboutliMobile" onClick={() => scrollToSection('about')}>About</a></li>
              <li className="nav-itemmenu"><a href="#contacts" id="contectliMobile" onClick={() => scrollToSection('contacts')}>Contact us</a></li>
              {!isLoggedIn ? (
                <li className="nav-itemmenu" id="loginliMobile"><a href="#login" id="logformliMobile" onClick={onLoginClick}>Log in</a></li>
              ) : (
                <li className="nav-itemmenu" id="logoutliMobile"><a href="#logout" id="logoutBtnMobile" onClick={onLogout}>Log Out</a></li>
              )}
              <li className="close-icon" onClick={() => setMobileMenuOpen(false)}>&times;</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
