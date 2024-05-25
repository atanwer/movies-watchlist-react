import { getItem, setItem } from "../../utills/localStorage";

export const signUp = (user) => dispatch => {
  const users = getItem('users') || [];
  const userExist = users.find(u => u.email === user.email);

  !userExist && users.push(user);
  setItem('users', users);
  dispatch({ type: 'SIGNUP_SUCCESS', payload: user });
};

export const login = (email) => dispatch => {
  const users = getItem('users') || [];
  const user = users.find(user => user.email === email);
  if (user) {
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  } else {
    dispatch({ type: 'LOGIN_FAILURE', payload: "Invalid Email" });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
};
