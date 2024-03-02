// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/breashroyer" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/breannadenino/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
        {/* Add or remove social links as needed */}
      </div>
    </footer>
  );
}

export default Footer;
