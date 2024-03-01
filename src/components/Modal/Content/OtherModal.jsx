// Style
import './ModalContent.scss';


// Import


// Image



export const PlaceABid = () => {
   return (
      <div className="internal-modal">
         <span className="internal-modal__title">Place a bid</span>
         <form className="internal-modal__form" action="#">
            <div className="internal-modal__body">
               <div className="internal-modal__field">
                  <label htmlFor="totalBNB">Min.sum</label>
                  <div className="internal-modal__item taste">
                     <input id="totalBNB" type="number" placeholder='10000000' />
                  </div>
               </div>
               <div className="internal-modal__numbers">
                  <div className="internal-modal__dollar">(1308.54$)</div>
               </div>
            </div>
            <button className="internal-modal__save" type="submit">Place</button>
         </form>
      </div>
   );
};
