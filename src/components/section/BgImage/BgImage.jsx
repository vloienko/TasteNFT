// Style
import './bg-image.scss';


// Import
import React, { useState } from 'react';

import { Modal } from '../../Modal/Modal';
import { PlaceABid } from '../../Modal/Content/OtherModal';


// Image
import mainBG from './../../../img/main-bg.jpg';



const BgImage = () => {
   const [modalPlaceABidActive, setModalPlaceABidActive] = useState(false);
     

   return (
      <div className="bg-image margin-top">
         <div className="bg-image__container">
            <div className="bg-image__body">
               <div className="bg-image__image">
                  <img src={mainBG} alt="Image background" />
               </div>
               <div className="bg-image__block">
                  <div className="bg-image__box">
                     <span className="bg-image__descr">Current Bid:</span>
                     <div className="bg-image__holder">
                        <div className="bg-image__content image">
                           1,5M<span>(1308.54$)</span>
                        </div>
                     </div>
                  </div>
                  <div className="bg-image__box">
                     <span className="bg-image__descr">Auction ending in:</span>
                     <div className="bg-image__holder">
                        <div className="bg-image__content">
                           1h 28m 32s
                        </div>
                     </div>
                  </div>
                  <div className="bg-image__box">
                     <button className="bg-image__popup" type="button" onClick={() => setModalPlaceABidActive(true)}>Place a bid</button>
                  </div>
               </div>
            </div>
         </div>
         <Modal active={modalPlaceABidActive} setActive={setModalPlaceABidActive}>
            <PlaceABid />
         </Modal>
      </div>
   );
}
 
export default BgImage;