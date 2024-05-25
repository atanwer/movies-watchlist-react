import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa'; // Import Film icon from Font Awesome

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" className="header-link">
          <div className="header-icon">
            <FaFilm />
          </div>
          <h1 className="header-title">Watchlist</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
