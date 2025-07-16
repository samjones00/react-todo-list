import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

function NavBar() {
  return (
    <nav style={{
      width: '100%',
      background: '#1a1a1a',
      padding: '1em 2em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxSizing: 'border-box',
      marginBottom: '2em',
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.2em', marginRight: '2em' }}>Home</Link>
      <Link to="/tasks" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.2em' }}>Tasks</Link>
    </nav>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
