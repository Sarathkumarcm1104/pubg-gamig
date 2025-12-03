import React from 'react';
import '../styles/games.css';

const gamesData = [
  {
    id: 1,
    title: 'God of War',
    image: 'IMG/godofwar.jpg',
    description: 'In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war.'
  },
  {
    id: 2,
    title: 'Hogwarts Legacy',
    image: 'IMG/harrypotter.jpg',
    description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books.'
  },
  {
    id: 3,
    title: 'PROTOCORE',
    image: 'IMG/podater.jpg',
    description: 'PROTOCORE is a 1-4 player co-op shooter. 200% more guns! 200% more fun! 999% more brain! Shoot your way through a gigantic spaceship.'
  },
  {
    id: 4,
    title: 'Grand Theft Auto IV',
    image: 'IMG/GTA4.jpg',
    description: 'Grand Theft Auto IV is an action-adventure game played from a third-person perspective.'
  },
  {
    id: 5,
    title: 'Avengers 1',
    image: 'IMG/avengers1.jpg',
    description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki.'
  },
  {
    id: 6,
    title: 'Grand Theft Auto V',
    image: 'IMG/gta 5.jpg',
    description: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.'
  },
  {
    id: 7,
    title: 'Call of Duty',
    image: 'IMG/callofduty.jpg',
    description: 'Call of Duty is a franchise of several multiplayer first-person shooter games published by Activision.'
  },
  {
    id: 8,
    title: 'League of Legends',
    image: 'IMG/legends.jpg',
    description: 'It features a team-based competitive game mode based on strategy and outplaying opponents.'
  },
  {
    id: 9,
    title: 'Asphalt 3',
    image: 'IMG/nfs.jpg',
    description: 'The wheel of real cars from high-end renowned legendary car manufacturers. Drive, boost and perform stunts.'
  },
  {
    id: 10,
    title: 'NFS Most Wanted',
    image: 'IMG/nfsmost.jpg',
    description: 'The open-world action in Need for Speed™ Most Wanted gives you the freedom to drive your way.'
  },
  {
    id: 11,
    title: 'NFS Heat',
    image: 'IMG/nfsheat.jpg',
    description: 'Need for Speed Heat is a racing game set in an open world environment called Palm City.'
  },
  {
    id: 12,
    title: 'NFS Payback',
    image: 'IMG/nfsplayback.jpg',
    description: 'Need for Speed Payback is a racing game set in an open world environment of Fortune Valley.'
  },
  {
    id: 13,
    title: 'Spider-Man 2',
    image: 'IMG/spider man.jpg',
    description: 'Spider-Man 2 is a third-person action-adventure video game, set in an open world based on New York City.'
  },
  {
    id: 14,
    title: 'Star Wars Battlefront II',
    image: 'IMG/starwar2.jpg',
    description: 'Star Wars Battlefront II is a third- and first-person shooter, where players can partake in either ground battles.'
  },
  {
    id: 15,
    title: 'SYNCED',
    image: 'IMG/shyced.jpg',
    description: 'SYNCED is a futuristic free-to-play shooter developed by NExT Studios.'
  },
  {
    id: 16,
    title: 'Cyberpunk 2077',
    image: 'IMG/Cyberpunk.jpg',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City.'
  },
  {
    id: 17,
    title: 'Resident Evil 4',
    image: 'IMG/restend.jpg',
    description: 'Players control the special agent Leon S. Kennedy on a mission to rescue the US president\'s daughter.'
  },
  {
    id: 18,
    title: 'Baldur\'s Gate 3',
    image: 'IMG/Baldur\'s Gate 3.jpg',
    description: 'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal.'
  }
];

export function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <button className="pay-btn">Buy Now</button>
    </div>
  );
}

export function GamesSection({ isLoggedIn }) {
  return (
    <section className="afterlogingames" id="games" style={{ display: isLoggedIn ? 'block' : 'none' }}>
      <div className="game-container">
        {gamesData.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
