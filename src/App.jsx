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
              <Route path="/" element={<MainPage />} />
              <Route path="/artwork" element={<ArtworkPage />} />
              <Route path="/creator-profile" element={<CreatorProfile />} />
              <Route path="/my-profile" element={<MyProfile />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;