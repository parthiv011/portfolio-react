import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();

    const element = document.getElementById(target);
    if (target) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <a href="" className="logo">
        <span id="parthiv">Parthiv</span>
        <span id="parmar">Parmar.</span>
      </a>
      <button className="nav-toggle" onClick={toggleNav}>
        &#9776;
      </button>
      <nav className={`main-nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="main-nav-links">
          <li>
            <a
              href="#projects"
              className="main-nav-link"
              onClick={(e) => handleScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="main-nav-link"
              onClick={(e) => handleScroll(e, 'blogs')}
            >
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Work
            </a>
          </li>
          <li>
            <a
              href="#"
              className="main-nav-link"
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
