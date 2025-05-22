import React from 'react';
import './App.css';
import './assets/tigerPatterns.css';
import TigerWorldContainer from './components/TigerWorldContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div className="logo">
              <span className="logo-symbol">🐾</span> TigerWorld
            </div>
            <button className="btn tiger-eye-glow">Explore Tigers</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ paddingTop: '120px' }}>
          <TigerWorldContainer />
        </div>
      </main>
      
      <footer style={{ 
        backgroundColor: 'var(--tiger-black-light)', 
        padding: '20px 0',
        marginTop: '40px',
        borderTop: '3px solid var(--tiger-orange)'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © 2023 TigerWorld - Committed to tiger conservation and education
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
