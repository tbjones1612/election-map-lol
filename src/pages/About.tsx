// pages/About.tsx
import React from 'react';

interface AboutProps {
  layoutClass: string;
}

const About: React.FC<AboutProps> = ({ layoutClass }) => (
  <div className={layoutClass}>
    <div className="left-column"></div>
    <main className="center-column">
      <h2>About Page</h2>
    </main>
    <div className="right-column"></div>
  </div>
);

export default About;
