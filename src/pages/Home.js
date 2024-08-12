import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const movies = [
  // Add your movie objects here
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
