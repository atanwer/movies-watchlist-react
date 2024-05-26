import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { logout } from '../redux/actions/authActions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        {user && <p className="sidebar-user-email">{user.email}</p>}
        <ul>
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/" onClick={toggleSidebar}>Movies</Link>
          </li>
          <li className={isActive('/watchlist') ? 'active' : ''}>
            <Link to="/watchlist" onClick={toggleSidebar}>Watchlist</Link>
          </li>
          <li>
            <button onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
