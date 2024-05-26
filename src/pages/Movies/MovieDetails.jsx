import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../../redux/actions/movieActions';
import WatchlistButton from '../../components/WatchlistButton';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movies.movieDetail);
  const loading = useSelector(state => state.movies.loading);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, [dispatch, id]);

  return (
    <div className="movie-details-container">
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : movie ? (
        <div className="movie-details">
          <img src={movie.Poster} alt={movie.Title} className="movie-details-poster" />
          <div className="movie-details-info">
            <h2 className="movie-details-title">{movie.Title}</h2>
            <p className="movie-details-plot">{movie.Plot}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            <WatchlistButton movie={movie} />
          </div>
        </div>
      ) : (
        <p className="no-movie-message">Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetails;
