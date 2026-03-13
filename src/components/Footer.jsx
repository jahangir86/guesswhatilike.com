import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-icon-small"></div>
          <span className="logo-text">Guess What I Like</span>
          <p className="footer-tagline">Connect with friends through curated questions.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#leaderboard">Leaderboard</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} GWIL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
