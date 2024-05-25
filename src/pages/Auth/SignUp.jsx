import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ email }));
    navigate('/', { replace: true });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <Link to={'/login'} className="login-link">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default SignUp;