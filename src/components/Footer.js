import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© MetaGod 2023 | All rights reserved</p>
      <div className="footer-links">
        <a href="#terms">Terms Of Use</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#usage">Usage Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
