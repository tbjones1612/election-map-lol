// pages/Polls.tsx
import React from 'react';

interface PollsProps {
  layoutClass: string;
}

const Polls: React.FC<PollsProps> = ({ layoutClass }) => (
  <div className={layoutClass}>
    <div className="left-column"></div>
    <main className="right-column">
      <h2>Polls Page</h2>
    </main>
  </div>
);

export default Polls;
