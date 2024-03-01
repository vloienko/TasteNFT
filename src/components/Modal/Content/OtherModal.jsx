// Style
import './ModalContent.scss';


// Import
import React, { useContext, useState, useEffect } from 'react';

import { InternalModalClosedFirst } from '../InternalModal';
import { ModalContext } from '../Modal';


// Image
import playButton from '../../../img/icon/play-btn.svg';
import metaMask from '../../../img/icon/meta-mask.svg';



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


export const ConnectingWallet = ({ firstModalActive, setFirstModalActive }) => {
   const [connectingMetaMaskActive, setConnectingMetaMaskActive] = useState(false);
   const { connectedClass, setConnectedClass } = useContext(ModalContext);


   const handleClick = () => {
      if (connectedClass === '') {
         setConnectedClass('connect');
      } else {
         setConnectedClass('');
      }
   };

   const removeConnectClass = () => {
      setConnectedClass('');
   };

   // Функція для закриття першого модального вікна при відкритті другого
   useEffect(() => {
      if (firstModalActive === 'connectingWallet') {
         setConnectingMetaMaskActive(false);
      }
   }, [firstModalActive]);

   const handleCloseFirstModal = () => {
      setFirstModalActive(null);
   };


   return (
      <>
         <div className="internal-modal wallet-first-modal">
            <span className="internal-modal__title">Connecting wallet</span>

            <div className="connecting-wallet">
               <div className="connecting-wallet__block">
                  <div className="connecting-wallet__wrap">
                     <div className="connecting-wallet__number"><span>1.</span></div>
                     <div className="connecting-wallet__video">
                        <button className="connecting-wallet__play-btn" type="button">
                           <img src={playButton} alt="Play button" />
                        </button>
                     </div>
                  </div>
                  <p className="connecting-wallet__descr">Description of what needs to be done</p>
               </div>
               <div className="connecting-wallet__block">
                  <div className="connecting-wallet__wrap">
                     <div className="connecting-wallet__number"><span>2.</span></div>
                     <div className="connecting-wallet__video">
                        <button className="connecting-wallet__play-btn" type="button">
                           <img src={playButton} alt="Play button" />
                        </button>
                     </div>
                  </div>
                  <p className="connecting-wallet__descr">Description of what needs to be done</p>
               </div>
               <div className="connecting-wallet__block">
                  <div className="connecting-wallet__wrap">
                     <div className="connecting-wallet__number"><span>3.</span></div>
                     <div className="connecting-wallet__video">
                        <button className="connecting-wallet__play-btn" type="button">
                           <img src={playButton} alt="Play button" />
                        </button>
                     </div>
                  </div>
                  <p className="connecting-wallet__descr">Description of what needs to be done</p>
               </div>
            </div>

            <button className="internal-modal__save" type="submit" onClick={() => {
               setConnectingMetaMaskActive(true);
               setFirstModalActive(null);
               handleClick(true);
            }}>Connect wallet</button>

         </div>
         {/* Модальне вікно "ConnectingMetaMask" */}
         <InternalModalClosedFirst active={connectingMetaMaskActive} setActive={setConnectingMetaMaskActive} onClose={handleCloseFirstModal} removeConnectClass={removeConnectClass}>
            <div className="internal-modal">
               <span className="internal-modal__title">Connecting wallet</span>

               <div className="connecting-wallet__meta-mask">
                  <div className="connecting-wallet__fixed">
                     <div className="connecting-wallet__connection">
                        <span></span>
                     </div>
                     <div className="connecting-wallet__image">
                        <img src={metaMask} alt="Image MetaMask" />
                     </div>
                  </div>
                  <span className="connecting-wallet__initializing">Initializing</span>
               </div>
            </div>
         </InternalModalClosedFirst>
      </>
   );
};
