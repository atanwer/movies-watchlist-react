import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, fetchWatchlist, removeFromWatchlist } from '../redux/actions/watchlistAction';

const WatchlistButton = ({ movie }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const watchlist = useSelector(state => state.watchlist.watchlist);

  const isInWatchlist = watchlist.some(item => item.imdbID === movie.imdbID);

  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(user.email, movie));
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(user.email, movie.imdbID));
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchWatchlist(user.email)); 
    }
  }, [user, dispatch]);

  return (
    <button
      onClick={isInWatchlist ? handleRemoveFromWatchlist : handleAddToWatchlist}
      className={`watchlist-button ${isInWatchlist ? 'remove-button' : 'add-button'}`}
    >
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default WatchlistButton;
