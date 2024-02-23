// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';

import MainPage from './pages/MainPage';
import ArtworkPage from './pages/ArtworkPage';
import CreatorProfile from './pages/CreatorProfile';
import MyProfile from './pages/MyProfile';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Header />
          <main className="page">
            <Routes>
              <Route path="/TasteNFT" element={<MainPage />} />
              <Route path="/TasteNFT/artwork" element={<ArtworkPage />} />
              <Route path="/TasteNFT/creator-profile" element={<CreatorProfile />} />
              <Route path="/TasteNFT/my-profile" element={<MyProfile />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;