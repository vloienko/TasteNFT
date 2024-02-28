// Style
import './Modal.scss';


// Import
import React, { useEffect } from 'react';


// Image
import IconClosed from '../../img/icon/closed.svg';



export const Modal = ({ active, setActive, children }) => {

   useEffect(() => {
      if (active) {
         // Блокування скролу
         document.body.style.overflow = 'hidden';
      } else {
         // Розблокування скролу
         document.body.style.overflow = 'unset';
      }

      // Це повернення викликається при розгортанні компоненту, щоб очистити зміни
      return () => {
         document.body.style.overflow = 'unset';
      };
   }, [active]); // Залежність від стану активності модального вікна

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            <button className="modal__closed" type="button" onClick={() => setActive(false)}>
               <img src={IconClosed} alt="Icon closed" />
            </button>
            {children}
            {/* Вміст модального вікна */}
         </div>
      </div>
   );
};