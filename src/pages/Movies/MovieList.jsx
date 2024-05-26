import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialMovies, fetchMovies } from '../../redux/actions/movieActions';
import MovieCard from '../../components/MovieCard';

const MovieList = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const loading = useSelector(state => state.movies.loading);
  const error = useSelector(state => state.movies.error);

  useEffect(() => {
    dispatch(fetchInitialMovies());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    query ? dispatch(fetchMovies(query)) : dispatch(fetchInitialMovies());
  };

  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">Movie List</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-container">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default MovieList;
