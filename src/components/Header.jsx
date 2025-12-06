import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export function Header({ isLoggedIn, user, onLogout, onLoginClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <header className="header" id="react-headerhome">
      <nav className="navbar fix">
        <div className="container">
          <h1 className="logo leftnavber lg-heading text-light"><i className="fas fa-vihara"> BGMI </i></h1>
          <ul className="nav-items rightnavbar">
            <li className="nav-item"><Link to="/" id="react-homeli">Home</Link></li>
            <li className="nav-item"><Link to="/about" id="react-aboutli">About</Link></li>
            <li className="nav-item"><Link to="/contact" id="react-contectli">Contact us</Link></li>
            {!isLoggedIn ? (
              <li className="nav-item" id="react-loginli"><button className="link-button" id="react-logformli" onClick={onLoginClick}>Log in</button></li>
            ) : (
              <>
                <li className="nav-item"><span className="user-name">{user?.name}</span></li>
                <li className="nav-item"><button className="link-button" id="react-logoutBtn" onClick={onLogout}>Log Out</button></li>
              </>
            )}
          </ul>

          <div className="mob-menu">
            <div className="menu-icon"><i className="fas fa-bars" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}></i></div>
            <ul className={`mobnav-items ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-itemmenu"><Link to="/" id="react-homeliMobile" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li className="nav-itemmenu"><Link to="/about" id="react-aboutliMobile" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li className="nav-itemmenu"><Link to="/contact" id="react-contectliMobile" onClick={() => setMobileMenuOpen(false)}>Contact us</Link></li>
              {!isLoggedIn ? (
                <li className="nav-itemmenu" id="react-loginliMobile"><button className="link-button" id="react-logformliMobile" onClick={() => { setMobileMenuOpen(false); onLoginClick(); }}>Log in</button></li>
              ) : (
                <li className="nav-itemmenu" id="react-logoutliMobile"><button className="link-button" id="react-logoutBtnMobile" onClick={() => { setMobileMenuOpen(false); onLogout(); }}>Log Out</button></li>
              )}
              <li className="close-icon" onClick={() => setMobileMenuOpen(false)}>&times;</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
