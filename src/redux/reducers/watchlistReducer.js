// reducers/watchlistReducer.js
const initialState = {
  watchlist: [],
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      const { email, movie } = action.payload;
      const addWatchlists = JSON.parse(localStorage.getItem('watchlists')) || {};
      const userWatchlistAdd = addWatchlists[email] ? [...addWatchlists[email], movie] : [movie];
      addWatchlists[email] = userWatchlistAdd;
      localStorage.setItem('watchlists', JSON.stringify(addWatchlists));
      return {
        ...state,
        watchlist: userWatchlistAdd,
      };
    case 'REMOVE_FROM_WATCHLIST':
      const { userEmail, movieId } = action.payload;
      const removeWatchlists = JSON.parse(localStorage.getItem('watchlists')) || {};
      const userWatchlistRemove = removeWatchlists[userEmail].filter(movie => movie.imdbID !== movieId);
      removeWatchlists[userEmail] = userWatchlistRemove;
      localStorage.setItem('watchlists', JSON.stringify(removeWatchlists));
      return {
        ...state,
        watchlist: userWatchlistRemove,
      };
    case 'SET_WATCHLIST':
      return {
        ...state,
        watchlist: action.payload,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
