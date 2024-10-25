import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-details">
          <h5>Contact me</h5>
          <p>Email: <a href="mailto:snatalia1492@gmail.com">snatalia1492@gmail.com</a></p>
        </div> 
        
        <div className="social-media">
          <h5>Follow me</h5>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
