// pages/About.tsx
import React from 'react';
import './pages.css'

interface AboutProps {
  layoutClass: string;
}

const About: React.FC<AboutProps> = ({ layoutClass }) => (
  <div className={layoutClass}>
    <div className="left-column stripe"></div>
    <main className="center-column">
      <h2>About Page</h2>
    </main>
    <div className="right-column stripe"></div>
  </div>
);

export default About;
