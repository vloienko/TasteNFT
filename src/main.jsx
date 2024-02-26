import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ArtworkPage from './pages/ArtworkPage';
import CreatorProfile from './pages/CreatorProfile';
import MyProfile from './pages/MyProfile';

import './scss/style.scss';


const router = createBrowserRouter([
  {
    path: "/TasteNFT/",
    element: <App />,
    children: [
      {
        path: "/TasteNFT/",
        element: <MainPage />
      },
      {
        path: "/TasteNFT/artwork",
        element: <ArtworkPage />
      },
      {
        path: "/TasteNFT/creator-profile",
        element: <CreatorProfile />
      },
      {
        path: "/TasteNFT/my-profile",
        element: <MyProfile />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)