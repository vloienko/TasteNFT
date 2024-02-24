/* eslint-disable no-unused-vars */

// // React
import React from 'react';
import { useLocation } from 'react-router-dom';


// Import
import HeaderAutorized from './HeaderAutorized';
import HeaderMain from './HeaderMain';


function Header() {
   const location = useLocation();

   if (location.pathname == '/my-profile') {
      return <HeaderAutorized />;
   } else {
      return <HeaderMain />;
   }
}

export default Header;