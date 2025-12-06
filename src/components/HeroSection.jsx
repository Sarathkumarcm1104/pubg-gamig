import React from 'react';
import '../styles/hero.css';

export function HeroSection({ isLoggedIn, onLoginClick, onPlayClick }) {
  return (
    <section className="afterlogin" id="afterloginuser">
      <div className="containers">
        <div className="left-content">
          <h1 className="md-heading text-whi"><span className="weluser" id="wecomeuser">{isLoggedIn ? 'Welcome Back to SARATH Gaming' : 'Welcome to SARATH Gaming'}</span></h1>
          <p className="text-whi">A video game or computer game is an electronic games. <br />Esports is a form competition using video games.</p>
          {!isLoggedIn ? (
            <a href="#signlogform" onClick={onLoginClick} className="btn btn-primary text-red md-heading" id="midlogin">Log in</a>
          ) : (
            <a href="#games" onClick={onPlayClick} className="btn btn-primary text-red md-heading" id="midplay">Play Now</a>
          )}
        </div>
      </div>
      {/* replicate the animated hero image markup from static HTML */}
      <div className="imagecontainer">
        <div className="animatimg">
          <img className="imgpub" src="/IMG/Pubg-Mobile-Transparent-Background.png" alt="Image 1" width="100%" height="530px" />
          <div className="shadow"></div>
        </div>
      </div>
    </section>
  );
}
