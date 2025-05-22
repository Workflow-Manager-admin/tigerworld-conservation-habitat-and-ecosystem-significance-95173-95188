import React from 'react';
import './App.css';
import TigerWorldContainer from './components/TigerWorldContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TigerWorld
            </div>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ paddingTop: '120px' }}>
          <TigerWorldContainer />
        </div>
      </main>
    </div>
  );
}

export default App;