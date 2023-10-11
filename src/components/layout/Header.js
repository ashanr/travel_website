import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';  // Importing the CSS file

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Travel Website</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
