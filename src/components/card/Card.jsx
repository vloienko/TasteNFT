/* eslint-disable react/prop-types */

// Styles
import './card.scss';


const Card = (props) => {

   return (
      <a className="card" href="/TasteNFT/artwork">
         <div className="card__content">
            <img className="card__image" src={props.img} alt="Card Image" />
            <div className="card__block">
               <div className="card__block-avatar">
                  <img src={props.user} alt="User photo" />
               </div>
               <div className="card__block-box">
                  <span className="card__block-name">User Name</span>
                  <span className="card__block-nick">@username</span>
               </div>
            </div>
         </div>
         <div className="card__info">
            <div className="card__name">WFH - art name</div>
            <div className="card__holder">
               <div className="card__box">
                  <span className="card__text">Sold for:</span>
                  <div className="card__pricing">
                     <img className="card__icon" src={props.icon} alt="Card Icon" />
                     <span className="card__tokens">1,5M</span>
                  </div>
               </div>
               <div className="card__box">
                  <span className="card__text">Ending in:</span>
                  <div className="card__pricing">
                     <span className="card__tokens">05h 02m 41s</span>
                  </div>
               </div>
            </div>
         </div>
      </a>
   );
}

export default Card;