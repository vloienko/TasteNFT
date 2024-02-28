// Style
import './ModalContent.scss';


// Import
import React, { useState, useEffect } from 'react';

import { InternalModal } from '../InternalModal';

// Import модальних вікон
import { WithdrawModal, SwapToTasteModal, DepositModal, WithdrawModalBNB } from './BalanceSettingsAllModal';


// Image
import sold_1 from '../../../img/icon/sold-1.svg';
import binance from '../../../img/icon/binance.svg';



const BalanceSettings = ({ firstModalActive, setFirstModalActive }) => {
   const [withdrawModalActive, setWithdrawModalActive] = useState(false);
   const [swapToTasteModalActive, setSwapToTasteModalActive] = useState(false);
   const [depositModalActive, setDepositModalActive] = useState(false);
   const [withdrawModalBNBActive, setWithdrawModalBNBActive] = useState(false);


   // Функція для закриття першого модального вікна при відкритті другого
   useEffect(() => {
      if (firstModalActive === 'balanceSettings') {
         setWithdrawModalActive(false);
         setSwapToTasteModalActive(false);
         setDepositModalActive(false);
         setWithdrawModalBNBActive(false);
      }
   }, [firstModalActive]);

   const handleCloseFirstModal = () => {
      setFirstModalActive(null);
   };


   return (
      <div className="balance-settings">
         <span className="balance-settings__title">Balance settings</span>
         <div className="balance-settings__body">
            <div className="balance-settings__block">
               <div className="balance-settings__holder">
                  <img src={sold_1} alt="Icon" />
                  <span>1.5M</span>
               </div>
               <div className="balance-settings__button-box">
                  <button type="button" onClick={() => setWithdrawModalActive(true)}>Withdraw</button>
               </div>
            </div>
            <div className="balance-settings__block">
               <div className="balance-settings__holder">
                  <img src={binance} alt="Icon" />
                  <span>1.5M</span>
               </div>
               <div className="balance-settings__button-box">
                  <button type="button" onClick={() => setSwapToTasteModalActive(true)}>Swap to BNB</button>
                  <button type="button" onClick={() => setDepositModalActive(true)}>Deposit</button>
                  <button type="button" onClick={() => setWithdrawModalBNBActive(true)}>Withdraw</button>
               </div>
            </div>
         </div>

         {/* Модальне вікно "Withdraw" */}
         <InternalModal active={withdrawModalActive} setActive={setWithdrawModalActive} onClose={handleCloseFirstModal}>
            <WithdrawModal />
         </InternalModal>

         {/* Модальне вікно "Swap to TASTE" */}
         <InternalModal active={swapToTasteModalActive} setActive={setSwapToTasteModalActive} onClose={handleCloseFirstModal}>
            <SwapToTasteModal />
         </InternalModal>

         {/* Модальне вікно "Deposit to BNB" */}
         <InternalModal active={depositModalActive} setActive={setDepositModalActive} onClose={handleCloseFirstModal}>
            <DepositModal />
         </InternalModal>

          {/* Модальне вікно "Withdraw BNB" */}
          <InternalModal active={withdrawModalBNBActive} setActive={setWithdrawModalBNBActive} onClose={handleCloseFirstModal}>
            <WithdrawModalBNB />
         </InternalModal>

      </div>
   );
};

export default BalanceSettings;