import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Events', href: '#events' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={handleClick} aria-expanded={click}>
        {click ? (
          <span className="close-icon">✖</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
      <ul className={`navbar-links ${click ? 'show' : ''}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} tabIndex="0">{item.name}</a>
          </li>
        ))}
      </ul>
      {click && <div className="backdrop" onClick={handleClick}></div>}
    </nav>
  );
};

export default Navbar;
