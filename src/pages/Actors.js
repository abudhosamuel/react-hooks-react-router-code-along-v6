import React from 'react';
import NavBar from '../components/NavBar';

const actors = [
  // Add your actors objects here
];

const Actors = () => {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;
