import React from 'react';
import '../styles/hero.css';

export function HeroSection({ isLoggedIn, onLoginClick, onPlayClick }) {
  return (
    <section className="afterlogin" id="home">
      <div className="containers">
        <div className="left-content">
          <h1 className="md-heading text-whi">
            <span className="weluser">
              {isLoggedIn ? 'Welcome Back to SARATH Gaming' : 'Welcome to SARATH Gaming'}
            </span>
          </h1>
          <p className="text-whi">
            A video game or computer game is an electronic games. <br />
            Esports is a form competition using video games.
          </p>
          {!isLoggedIn ? (
            <a href="#login" onClick={onLoginClick} className="btn btn-primary text-red md-heading">
              Log in
            </a>
          ) : (
            <a href="#games" onClick={onPlayClick} className="btn btn-primary text-red md-heading">
              Play Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
