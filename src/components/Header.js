import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="custom-header">
      <nav className="header-nav">
        <ul className="nav-links">
          <li className="nav-item active">
            <a href="#temple-experiences">Temple experiences</a>
          </li>
          <li className="nav-item">
            <a href="#digital-offerings">Digital offerings</a>
          </li>
          <li className="nav-item">
            <a href="#special-events">Special events</a>
          </li>
          <li className="nav-item live">
            <a href="#live">
              Live <span className="live-indicator">●</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#special-experience">Special experience</a>
          </li>
          <li className="nav-item">
            <a href="#digital-deities">Digital deities</a>
          </li>
          <li className="nav-item">
            <a href="#meditation-arena">Meditation arena</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
