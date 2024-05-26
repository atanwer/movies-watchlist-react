import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <Link to={`/movie/${movie.imdbID}`} className="movie-details-link">View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
