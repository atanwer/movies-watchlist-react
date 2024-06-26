import axios from 'axios';

const OMBD_API_KEY = import.meta.env.VITE_OMBD_API_KEY;  
const OMDB_SERVER_URL = import.meta.env.VITE_OMDB_SERVER_URL;  

// Action to fetch a list of predefined popular movies
export const fetchInitialMovies = () => async dispatch => {
  dispatch({ type: 'FETCH_INITIAL_MOVIES_REQUEST' });

  const popularMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "The Lord of the Rings: The Return of the King",
    "Star Wars: Episode V - The Empire Strikes Back"
  ];

  try {
    const moviePromises = popularMovies.map(movie =>
      axios.get(`${OMDB_SERVER_URL}?t=${encodeURIComponent(movie)}&apikey=${OMBD_API_KEY}`)
    );

    const movieResponses = await Promise.all(moviePromises);
    const movies = movieResponses.map(response => response.data);

    dispatch({ type: 'FETCH_INITIAL_MOVIES_SUCCESS', payload: movies });
  } catch (error) {
    dispatch({ type: 'FETCH_INITIAL_MOVIES_FAILURE' });
  }
};

// Action to fetch movies based on search query
export const fetchMovies = (query) => async dispatch => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  try {
    const response = await axios.get(`${OMDB_SERVER_URL}?s=${query}&apikey=${OMBD_API_KEY}`);
    if(response.data.Response === "True"){
      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.Search });
    } else {
      dispatch({ type: 'FETCH_MOVIES_FAILURE', error: response.data.Error });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({ type: 'FETCH_MOVIES_FAILURE' });
  }
};

// Action to fetch detailed information about a specific movie
export const fetchMovieDetail = (id) => async dispatch => {
  dispatch({ type: 'FETCH_MOVIE_DETAIL_REQUEST' });
  try {
    const response = await axios.get(`${OMDB_SERVER_URL}?i=${id}&apikey=${OMBD_API_KEY}`);
    dispatch({ type: 'FETCH_MOVIE_DETAIL_SUCCESS', payload: response.data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: 'FETCH_MOVIE_DETAIL_FAILURE' });
  }
};
