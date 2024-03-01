// Style
import "./header.scss";


// Import
import React, { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { ConnectingWallet } from '../Modal/Content/OtherModal';

import Search from './Search';


// Image
import logoImg from './../../img/logo.svg';



function Header() {
   const [modalConnectingWalletActive, setModalConnectingWalletActive] = useState(false);
   const [firstModalActive, setFirstModalActive] = useState(null); // Для збереження стану відкриття першого модального вікна


   // Функція для закриття першого модального вікна при відкритті другого
   const handleCloseFirstModal = () => {
      setModalConnectingWalletActive(false);
   };


   return (
      <header className="header">
         <div className="header__container">
            <div className="header__body">
               <a className="header__logo" href="https://vloienko.github.io/TasteNFT/">
                  <img src={logoImg} alt="Logo" />
               </a>
               <div className="header__search">
                  <Search />
               </div>
               <div className="header__box">
                  <button className="header__button" type="button" onClick={() => setModalConnectingWalletActive(true)}>Connect wallet</button>
                  <button className="header__button mobile" type="button" onClick={() => setModalConnectingWalletActive(true)}>Wallet</button>
               </div>
            </div>
         </div>
         <Modal active={modalConnectingWalletActive} setActive={setModalConnectingWalletActive} onClose={handleCloseFirstModal}>
            <ConnectingWallet firstModalActive={firstModalActive} setFirstModalActive={setFirstModalActive} />
         </Modal>
      </header>
   )
}

export default Header;