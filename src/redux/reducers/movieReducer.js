const initialState = {
    movies: [],
    movieDetail: {},
    loading: false,
    error: null, // Add error state to handle failures
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INITIAL_MOVIES_REQUEST':
        case 'FETCH_MOVIES_REQUEST':
        case 'FETCH_MOVIE_DETAIL_REQUEST':
            return {
                ...state,
                loading: true,
                error: null, // Reset error state on new requests
            };
        case 'FETCH_INITIAL_MOVIES_SUCCESS':
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null, // Reset error state on success
            };
        case 'FETCH_MOVIE_DETAIL_SUCCESS':
            return {
                ...state,
                movieDetail: action.payload,
                loading: false,
                error: null, // Reset error state on success
            };
        case 'FETCH_INITIAL_MOVIES_FAILURE':
        case 'FETCH_MOVIES_FAILURE':
        case 'FETCH_MOVIE_DETAIL_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error, // Capture the error message
            };
        default:
            return state;
    }
};

export default movieReducer;
