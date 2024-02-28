// Style
import './user-menu.scss';


// Import
import React, { useState } from 'react';

import { Modal } from '../Modal/Modal';
import { EditYourProfile } from '../Modal/Content/EditYourProfile';
import BalanceSettings from '../Modal/Content/BalanceSettings';



// Image
import userImg from './../../img/users/user-1.jpg';



const UserMenu = () => {
   const [open, setOpen] = useState(false);
   const Menus = ['My profile', 'Balance settings', 'Log out'];
   // Додавання або видалення класу в залежності від стану open
   const menuClass = open ? "user-menu user-menu--open" : "user-menu";

   const [modalProfileActive, setModalProfileActive] = useState(false);
   const [modalBalanceActive, setModalBalanceActive] = useState(false);
   

   const handleMenuClick = (menuName) => {
      setOpen(false); // Закриття меню для будь-якої кнопки.

      switch (menuName) {
         case 'My profile':
            setModalProfileActive(true);
            break;
         case 'Balance settings':
            setModalBalanceActive(true);
            break;
         case 'Log out':
            // Логіка для виходу з системи
            break;
         default:
            // Дія за умовчанням, якщо потрібно
            break;
      }
   };


   return (
      <>
         <div className={menuClass} onClick={() => setOpen(!open)}>
            <div className="user-menu__main">
               <div className="user-menu__avatar">
                  <img src={userImg} alt="User photo" />
               </div>
               <div className="user-menu__box">
                  <span className="user-menu__name">User Name</span>
                  <div className="user-menu__info">
                     <span className="user-menu__nick">@username</span>
                     <div className="user-menu__balance">
                        <span className="user-menu__text-balance">Balance:</span>
                        <div className="user-menu__quantity">1,5M</div>
                     </div>
                  </div>
               </div>
            </div>

            {open && (
               <div className="user-menu__burger">
                  <div className="user-menu__score">
                     <span className="user-menu__text-address">Address:</span>
                     <div className="user-menu__bill">0c0xcx1cx606g4516x51g1...</div>
                  </div>
                  <ul className="user-menu__list">
                     {Menus.map((menu) => (
                        <li key={menu} className="user-menu__item">
                           <button
                              className="user-menu__button"
                              type="button"
                              onClick={() => handleMenuClick(menu)}
                           >
                              {menu}
                           </button>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
         <Modal active={modalProfileActive} setActive={setModalProfileActive}>
            <EditYourProfile />
         </Modal>
         <Modal active={modalBalanceActive} setActive={setModalBalanceActive}>
            <BalanceSettings />
         </Modal>
      </>
   );
}

export default UserMenu;