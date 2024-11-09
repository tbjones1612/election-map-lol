// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Maps from './pages/Maps';
import Polls from './pages/Polls';
import Graphs from './pages/Graphs';
import About from './pages/About';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Top Header */}
        <header className="top-header">
          <div className="left-box"></div>
          <h1>ElectionMap.lol</h1>
          <div className="right-box"></div>
        </header>
        
        {/* Second Header */}
        <header className="nav-header">
          <Link to="/maps"><button>Maps</button></Link>
          <Link to="/polls"><button>Polls</button></Link>
          <Link to="/graphs"><button>Graphs</button></Link>
          <Link to="/about"><button>About</button></Link>
        </header>

        {/* Three-Column Layout */}
        <div className="columns">
          <div className="column left-column"></div>
          <main className="column center-column">
            <Routes>
              <Route path="/maps" element={<Maps />} />
              <Route path="/polls" element={<Polls />} />
              <Route path="/graphs" element={<Graphs />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Maps />} /> {/* Default route */}
            </Routes>
          </main>
          <div className="column right-column"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
