import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything you need to connect.</h2>
          <p className="section-subtitle">
            Not just another social app. Discover the people around you through structured, engaging questions.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-item glass-panel">
            <div className="bento-content">
              <h3>Global Leaderboards</h3>
              <p>Climb the ranks by proving how well you know others. Weekly challenges and all-time hall of fame.</p>
            </div>
          </div>

          <div className="bento-item glass-panel">
             <div className="bento-content">
              <h3>Curated Rounds</h3>
              <p>From icebreakers to deep dives. Choose the exact vibe of the questions you want to guess on.</p>
            </div>
          </div>

          <div className="bento-item glass-panel">
             <div className="bento-content">
              <h3>Friend Profiles</h3>
              <p>See detailed stats on how well you know specific friends and who knows you best.</p>
            </div>
          </div>

           <div className="bento-item bento-wide glass-panel">
            <div className="bento-content">
              <h3>Real-time Notifications</h3>
              <p>Get alerted the moment someone guesses your preferences correctly, or when you unlock a new tier.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
