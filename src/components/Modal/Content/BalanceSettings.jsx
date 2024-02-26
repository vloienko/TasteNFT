// Style
import './ModalContent.scss';


// Import


// Image
import sold_1 from '../../../img/icon/sold-1.svg';
import binance from '../../../img/icon/binance.svg';


export const BalanceSettings = () => {
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
                  <button type="button">Withdraw</button>
               </div>
            </div>
            <div className="balance-settings__block">
               <div className="balance-settings__holder">
                  <img src={binance} alt="Icon" />
                  <span>1.5M</span>
               </div>
               <div className="balance-settings__button-box">
                  <button type="button">Swap to TASTE</button>
                  <button type="button">Deposit</button>
                  <button type="button">Withdraw</button>
               </div>
            </div>
         </div>
      </div>
   );
};



export const SwapToTaste = () => {
   return (
      <div className="modal-balance">
         <span className="modal-balance__title">Swap to TASTE</span>
         <form className="modal-balance__form" action="#">
            <div className="modal-balance__body">
               <div className="modal-balance__field">
                  <label htmlFor="taste">You will get</label>
                  <input id="taste" type="number" />
               </div>
               <div className="modal-balance__user">
                  <div className="modal-balance__holder">
                     <img src={sold_1} alt="Icon" />
                     <span>1.5M</span>
                  </div>
                  <div className="modal-balance__total">1308.54$</div>
               </div>
            </div>
            <button className="modal-balance__button" type="submit">Swap</button>
         </form>
      </div>
   );
};