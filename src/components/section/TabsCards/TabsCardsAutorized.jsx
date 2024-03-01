// Style
import './TabsCards.scss';


// Import
import CardGallery from '../../CardGallery/CardGallery';


const TabsCards = () => {
   return (
      <div className="tabs-cards">
         <div className="tabs-cards__container">
            <div className="tabs-cards__body">
               <div className="tabs-cards__filter">
                  <button className="tabs-cards__button active" type="button">Created</button>
                  <button className="tabs-cards__button" type="button">Collected</button>
                  <button className="tabs-cards__button" type="button">Bids</button>
               </div>

               <CardGallery />
            </div>
         </div>
      </div>
   );
}
 
export default TabsCards;