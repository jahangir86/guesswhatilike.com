import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="pill-badge">
            <span className="live-dot"></span> Available on iOS
          </div>
          
          <h1 className="hero-title">
            How well do you know your friends?
          </h1>
          
          <p className="hero-subtitle">
            Guess What I Like is the ultimate social game to discover 
            who really knows each other best. Test your intuition, 
            climb the leaderboard, and unlock surprising facts.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary btn-lg">Download on App Store</button>
            <button className="btn-secondary btn-lg">View Leaderboard</button>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src="/screenshot1.png" 
            alt="Guess What I Like App Screenshot" 
            className="app-screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
