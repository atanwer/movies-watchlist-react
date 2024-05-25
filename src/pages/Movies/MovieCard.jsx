import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <Link to={`/movies/${movie.imdbID}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
