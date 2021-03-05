import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li className="nav-item meal-in">
          <Link to="/home">Meal-In</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/home#about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/home#contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/tracker">Tracker</Link>
        </li>
        <li className="nav-item">
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
