import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="Navbar" id="navbar">
          <span className="nav-logo">Builmydapp</span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>

            <div class="dropdown">
              <div id="services"> Services  <i class="fas fa-star"> </i></div>
              <div class="dropdown-content">
                <Link to="/blockchain">Blockchain</Link>
                <Link to="/cloud">Cloud</Link>
                <Link to="/game">Game</Link>
                <Link to="/WebAndMobile">Web and Mobile</Link>
              </div>
            </div>

            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
