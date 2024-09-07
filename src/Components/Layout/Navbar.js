import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div class="logo">
        <span class="logo-text">Your</span>
        <span class="logo-card">Cards</span>
     </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
