import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <Link to="/">
          <li className="nav-item meal-in"><a href="#hero">Meal-In</a></li>
        </Link>
        <Link to="#hero">
          <li className="nav-item"><a href="#hero">Home</a></li>
        </Link>
        <Link to="#about">
          <li className="nav-item"><a href="#about">About</a></li>
        </Link>
        <Link to="#contact">
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </Link>
        <Link to="/tracker">
          <li className="nav-item"><a href="#tracker">Tracker</a></li>
        </Link>
        <Link to="/account">
          <li className="nav-item"><a href="#account">Account</a></li>
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
