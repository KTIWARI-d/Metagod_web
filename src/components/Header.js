// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import corresponding CSS

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Metagod</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/temple-experiences">Temple Experiences</Link>
          </li>
          <li>
            <Link to="/live-events">Live Events</Link>
          </li>
          <li>
            <Link to="/digital-offerings">Digital Offerings</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
