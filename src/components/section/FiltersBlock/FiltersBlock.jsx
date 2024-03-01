import CardGallery from '../../CardGallery/CardGallery';


// Styles
import './filters-block.scss';


const FiltersBlock = () => {
   return (
      <div className="filters-block">
         <div className="filters-block__container">
            <div className="filters-block__box">
               <div className="select-wrap">
                  <select>
                     <option value="recentlyAdded">Recently added</option>
                     <option value="someOption">Some option</option>
                     <option value="otherOption">Other option</option>
                  </select>
               </div>
               
               <div className="select-wrap">
                  <select>
                     <option value="auctions">Auctions</option>
                     <option value="auctions1">Auctions</option>
                     <option value="auctions2">Auctions</option>
                  </select>
               </div>
            </div>
            <CardGallery></CardGallery>
         </div>
      </div>
   );
}

export default FiltersBlock;