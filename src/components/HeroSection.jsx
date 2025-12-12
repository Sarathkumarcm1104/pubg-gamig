import React from 'react';
import '../styles/hero.css';

export function HeroSection({ isLoggedIn, onLoginClick, onPlayClick, showTeam = false }) {
  return (
    <>
      {/* Welcome / login section (matches home.html's "afterlogin" section) */}
  <section className="afterlogin" id="react-afterloginuser">
        <div className="containers">
          <div className="left-content">
            <h1 className="md-heading text-whi">
              <span className="weluser" id="react-wecomeuser">
                {isLoggedIn ? 'Welcome Back to SARATH Gaming' : 'Welcome to SARATH Gaming'}
              </span>
            </h1>
            <p className="text-whi">
              A video game or computer game is an electronic games. <br />Esports is a form competition using video
              games.
            </p>
            {!isLoggedIn ? (
              <a href="#signlogform" onClick={onLoginClick} className="btn btn-primary text-red md-heading" id="react-midlogin">
                Log in
              </a>
            ) : (
              <a href="#games" onClick={onPlayClick} className="btn btn-primary text-red md-heading" id="react-midplay">
                Play Now
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Characters / features section (matches home.html's "section" with id="sarath") */}
      {showTeam && (
        <section className="section" id="react-sarath">
          <div className="imagecontainer">
            <div className="animatimg">
              {/* Use absolute image paths (match static `home.html`) */}
              <img className="imgpub" src="/IMG/Pubg-Mobile-Transparent-Background.png" alt="Hero" width="100%" height="530px" />
              <div className="shadow" aria-hidden="true"></div>
            </div>

            <div className="container">
              <div className="row row1">
                <div className="img-box">
                  <img src="/IMG/pubg-48231.png" alt="sarath" />
                </div>
                <div className="text-box">
                  <h2 className="lg-heading text-black lt-space"> Assaulter (SARATH)</h2>
                  <p className="text-gray">
                    An assaulter is the one who provides the team with an initial knock onto the enemy team. It helps
                    the team rush onto the opponent squad and wipe them.
                  </p>
                  <a href="#about" className="btn btn-secondary morebtn">
                    more
                  </a>
                </div>
              </div>

              <div className="row row2">
                <div className="img-box" style={{ height: 600, borderRadius: '20px' }}>
                  <img src="/IMG/pubg-48216.png" alt="rakesh" />
                </div>
                <div className="text-box">
                  <h2 className="lg-heading text-black lt-space">Sniper (RAKESH)</h2>
                  <p className="text-gray">
                    Snipers engage in long-range fights. They frequently take down unsuspecting enemies that are
                    wandering in the open.
                  </p>
                  <a href="#about" className="btn btn-secondary morebtn">
                    more
                  </a>
                </div>
              </div>

              <div className="row row3">
                <div className="img-box">
                  <img src="/IMG/pubg-48217.png" alt="tamize" />
                </div>
                <div className="text-box">
                  <h2 className="lg-heading text-black lt-space">Supporter (TAMIZE)</h2>
                  <p className="text-gray">
                    The task of support players includes providing cover fires, smokes, and performing all possible
                    revivals. The support player also aids the assaulter.
                  </p>
                  <a href="#about" className="btn btn-secondary morebtn">
                    more
                  </a>
                </div>
              </div>

              <div className="row row4">
                <div className="img-box">
                  <img src="/IMG/pubg-48228.png" alt="shivam" />
                </div>
                <div className="text-box">
                  <h2 className="lg-heading text-black lt-space">Lurker (SHIVAM)</h2>
                  <p className="text-gray">
                    The Lurker also plays an important role in protecting their squad's back. They should always cover
                    the blind spots to make sure the squad is protected.
                  </p>
                  <a href="#about" className="btn btn-secondary morebtn">
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
