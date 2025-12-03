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
          <h1 className="logo leftnavber lg-heading text-light">
            <i className="fas fa-vihara"> BGMI </i>
          </h1>
          <ul className="nav-items rightnavbar">
            <li className="nav-item">
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contacts" onClick={() => scrollToSection('contacts')}>Contact us</a>
            </li>
            {!isLoggedIn ? (
              <li className="nav-item" id="loginli">
                <a href="#login" onClick={onLoginClick}>Log in</a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <span className="user-name">{user?.name}</span>
                </li>
                <li className="nav-item">
                  <a href="#logout" onClick={onLogout}>Log Out</a>
                </li>
              </>
            )}
          </ul>

          <div className="mob-menu">
            <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className="fas fa-bars"></i>
            </div>
            {mobileMenuOpen && (
              <ul className="mobnav-items">
                <li className="nav-itemmenu">
                  <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li className="nav-itemmenu">
                  <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                </li>
                <li className="nav-itemmenu">
                  <a href="#contacts" onClick={() => scrollToSection('contacts')}>Contact us</a>
                </li>
                {!isLoggedIn ? (
                  <li className="nav-itemmenu">
                    <a href="#login" onClick={onLoginClick}>Log in</a>
                  </li>
                ) : (
                  <li className="nav-itemmenu">
                    <a href="#logout" onClick={onLogout}>Log Out</a>
                  </li>
                )}
                <li className="close-icon" onClick={() => setMobileMenuOpen(false)}>&times;</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
