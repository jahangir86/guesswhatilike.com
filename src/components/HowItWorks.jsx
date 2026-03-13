import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Join a Round",
      description: "Hop into a game with friends or join the global daily challenge."
    },
    {
      number: "02",
      title: "Lock Your Guesses",
      description: "Answer curated questions about other players' preferences."
    },
    {
      number: "03",
      title: "See the Reveal",
      description: "Find out who knows who best when the answers correctly align."
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to test your friendships.</p>
        </div>

        <div className="steps-container">
          <div className="connection-line"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="step-card glass-panel">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
