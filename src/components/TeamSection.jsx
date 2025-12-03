import React from 'react';
import '../styles/team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Assaulter (SARATH)',
    image: './IMG/pubg-48231.png',
    role: 'Assaulter',
    description: 'An assaulter is the one who provides the team with an initial knock onto the enemy team. It helps the team rush onto the opponent squad and wipe them.'
  },
  {
    id: 2,
    name: 'Sniper (RAKESH)',
    image: './IMG/pubg-48216.png',
    role: 'Sniper',
    description: 'Snipers engage in long-range fights. They frequently take down unsuspecting enemies that are wandering in the open.'
  },
  {
    id: 3,
    name: 'Supporter (TAMIZE)',
    image: './IMG/pubg-48217.png',
    role: 'Supporter',
    description: 'The task of support players includes providing cover fires, smokes, and performing all possible revivals. The support player also aids the assaulter.'
  },
  {
    id: 4,
    name: 'Lurker (SHIVAM)',
    image: './IMG/pubg-48228.png',
    role: 'Lurker',
    description: 'The Lurker also plays an important role in protecting their squad\'s back. They should always cover the blind spots to make sure the squad is protected.'
  }
];

export function TeamSection() {
  return (
    <section className="section" id="team">
      <div className="imagecontainer">
        <div className="animatimg">
          <img className="imgpub" src="IMG/Pubg-Mobile-Transparent-Background.png" alt="PUBG" width="100%" height="530px" />
          <div className="shadow"></div>
        </div>
        <div className="container">
          {teamMembers.map((member) => (
            <div key={member.id} className={`row row${member.id}`}>
              <div className="img-box" style={member.id === 2 ? { height: '600px', borderRadius: '20px' } : {}}>
                <img src={member.image} alt={member.name} />
              </div>
              <div className="text-box">
                <h2 className="lg-heading text-black lt-space">{member.name}</h2>
                <p className="text-gray">{member.description}</p>
                <a href="#about" className="btn btn-secondary morebtn">more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
