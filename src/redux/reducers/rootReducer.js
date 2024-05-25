import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import watchlistReducer from './watchlistReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  watchlist: watchlistReducer,
});

export default rootReducer;
