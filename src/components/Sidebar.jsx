import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Movies</Link>
        </li>
        <li className={isActive('/watchlist') ? 'active' : ''}>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
