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
    dispatch(fetchMovies(query));
  };

  return (
    <div>
      <h2>Movie List</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className='error-message'>Error: {error}</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default MovieList;
