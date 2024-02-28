// Style
import './Modal.scss';


// Import
import React, { useEffect } from 'react';


// Image
import IconBack from '../../img/icon/back.svg';
import IconClosed from '../../img/icon/closed.svg';



export const InternalModal = ({ active, setActive, children }) => {

   return (
      <div className={active ? "modal__content internal active" : "modal__content internal"} onClick={() => setActive(false)}>
         <button className="modal__back" type="button" onClick={() => setActive(false)}>
            <img src={IconBack} alt="Icon back" />
         </button>
         <button className="modal__closed" type="button" onClick={() => setActive(false)}>
            <img src={IconClosed} alt="Icon closed" />
         </button>
         {children}
         {/* Вміст модального вікна */}
      </div>
   );
};