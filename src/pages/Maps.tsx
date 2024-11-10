// pages/Maps.tsx
import React from 'react';

interface MapsProps {
  layoutClass: string;
}

const Maps: React.FC<MapsProps> = ({ layoutClass }) => (
  <div className={layoutClass}>
    <div className="left-column">
        <div className="menu-panel">Test</div>
    </div>
    <main className="center-column">
        <p>test</p>
      <h2>Maps Page</h2>
    </main>
    <div className="right-column">
    <div className="menu-panel">Test Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum porro molestiae accusamus aspernatur ex, modi ea maxime incidunt nostrum delectus consequatur nemo odit dolore nam iste deleniti, necessitatibus unde ut?</div>
    </div>
  </div>
);

export default Maps;
