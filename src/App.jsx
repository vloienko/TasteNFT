// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Link } from 'react-router-dom';

import Header from './components/header/Header';

// import MainPage from './pages/MainPage';
// import ArtworkPage from './pages/ArtworkPage';
// import CreatorProfile from './pages/CreatorProfile';
// import MyProfile from './pages/MyProfile';



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



{/* <div className="App">
  <div className="wrapper">
    <Router basename="/TasteNFT">
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
          <Route path="/creator-profile" element={<CreatorProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </Router>
  </div>
</div> */}