// actions/watchlistActions.js
export const addToWatchlist = (email, movie) => ({
    type: 'ADD_TO_WATCHLIST',
    payload: { email, movie },
});

export const removeFromWatchlist = (userEmail, movieId) => ({
    type: 'REMOVE_FROM_WATCHLIST',
    payload: { userEmail, movieId },
});

export const fetchWatchlist = (email) => {
    return (dispatch) => {
        const watchlists = JSON.parse(localStorage.getItem('watchlists')) || {};
        const userWatchlist = watchlists[email] || [];
        dispatch({ type: 'SET_WATCHLIST', payload: userWatchlist });
    };
};
