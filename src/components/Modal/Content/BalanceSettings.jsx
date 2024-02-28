// Style
import './ModalContent.scss';


// Import
import React, { useState } from 'react';

import { InternalModal } from '../InternalModal';

// Import модальних вікон
import { WithdrawModal } from './BalanceSettingsAll/WithdrawModal';
import { SwapToTasteModal } from './BalanceSettingsAll/SwapToTasteModal';


// Image
import sold_1 from '../../../img/icon/sold-1.svg';
import binance from '../../../img/icon/binance.svg';



const BalanceSettings = () => {
   const [withdrawModalActive, setWithdrawModalActive] = useState(false);
   const [swapToTasteModalActive, setSwapToTasteModalActive] = useState(false);

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
                  <button type="button" onClick={() => setSwapToTasteModalActive(true)}>Swap to TASTE</button>
                  <button type="button">Deposit</button>
                  <button type="button">Withdraw</button>
               </div>
            </div>
         </div>

         {/* Модальне вікно "Withdraw" */}
         <InternalModal active={withdrawModalActive} setActive={setWithdrawModalActive}>
            <WithdrawModal />
         </InternalModal>

         {/* Модальне вікно "Swap to TASTE" */}
         <InternalModal active={swapToTasteModalActive} setActive={setSwapToTasteModalActive}>
            <SwapToTasteModal />
         </InternalModal>

      </div>
   );
};

export default BalanceSettings;