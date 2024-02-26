// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';

import Header from './components/header/Header';



function App() {
  return (
    <>
      <nav className="navbar-links">
        <Link to="/TasteNFT/">Home</Link>
        <Link to="/TasteNFT/artwork">Artwork</Link>
        <Link to="/TasteNFT/creator-profile">Creator Profile</Link>
        <Link to="/TasteNFT/my-profile">My Profile</Link>
      </nav>

      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="page">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;