// Style
import '../ModalContent.scss';


// Import


// Image
import sold_1 from '../../../../img/icon/sold-1.svg';



export const WithdrawModal = () => {
   return (
      <div className="internal-modal">
         <span className="internal-modal__title">Withdraw</span>
         <form className="internal-modal__form" action="#">
            <div className="internal-modal__body">
               <div className="internal-modal__field">
                  <label htmlFor="totalBNB">You will get</label>
                  <div className="internal-modal__item">
                     <input id="totalBNB" type="number" placeholder='10000000'/>
                  </div>
               </div>
               <div className="internal-modal__numbers">
                  <div className="internal-modal__nft">
                     <img src={sold_1} alt="Icon" />
                     <span>1.5M</span>
                  </div>
                  <div className="internal-modal__dollar">(1308.54$)</div>
               </div>
            </div>
            <button className="internal-modal__save" type="submit">Confirm</button>
         </form>
      </div>
   );
};