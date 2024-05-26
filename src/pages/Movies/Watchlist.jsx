import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import { fetchWatchlist } from '../../redux/actions/watchlistAction';

const Watchlist = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user); // Assuming user info is stored in auth state
  const watchlist = useSelector(state => state.watchlist.watchlist);

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchWatchlist(user.email));
    }
  }, [dispatch, user]);

  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">My Watchlist</h2>
      <div className="watchlist-movies-container">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="no-watchlist-message">Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
