import React from 'react';
import '../styles/about.css';

const teamPlayers = {
  left: ['SARATH', 'RAKESH', 'SHIVAM', 'TAMIZE', 'LOGESH'],
  right: ['MADHAN', 'PARTHI', 'VASANTH', 'ARUL', 'ANSHI']
};

const stats = [
  { value: '1049', label: 'matches' },
  { value: '3213', label: 'kills' },
  { value: '645', label: 'headshot' },
  { value: '73', label: 'chicken' }
];

export function AboutSection({ onContactClick }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="lg-heading text-dark about-heading">About Us</h2>
        <p className="text-dark justify">
          Welcome! We are TEAM MYTHIC. Team Mythic is the group of bots because no one knows how to play PUBG.
          We play pubg for only one reason which is enjoyment. Because life is all about happiness.
          Here is the list of some Team Mythic players which are popular like professor team.
        </p>
        
        <div className="about-wrap">
          <div className="left text-dark">
            <ul>
              {teamPlayers.left.map((player, idx) => (
                <li key={idx}>{player}</li>
              ))}
            </ul>
          </div>
          <div className="right">
            <ul>
              {teamPlayers.right.map((player, idx) => (
                <li key={idx}>{player}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h1 className="best md-heading">BEST OF SARATH</h1>
        </div>

        <div className="count-box">
          {stats.map((stat, idx) => (
            <div key={idx} className={`count count${idx + 1}`}>
              <span className="md-heading text-whi">{stat.value}</span>
              <p className="text-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="banner-style">
          <div className="banner banner-left">
            <p className="cta-line">If you ready to become a bot family, please click on the contact button</p>
          </div>
          <div className="banner banner-right">
            <a href="#contacts" onClick={onContactClick} className="btn-cta">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
