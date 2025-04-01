import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.facebook.com/Briann.Christian.Janapon/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://github.com/Janapon11" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
        </div>
        <p className="footer-text">© 2025 Briann Christian Janapon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
