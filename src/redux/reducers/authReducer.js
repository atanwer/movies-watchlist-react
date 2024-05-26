const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                isAuthenticated: true,
                error: null,
                user: action.payload,
            };
        case 'LOGOUT':
            localStorage.setItem('isAuthenticated', 'false');
            localStorage.removeItem('user');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
