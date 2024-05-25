const initialState = {
    isAuthenticated: false,
    user: null,
    error : null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                error: null,
                user: action.payload,
            };
        case 'LOGOUT':
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
