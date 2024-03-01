// Styles
import './CardGallery.scss';



import Card from '../Card/Card';

// Images
import cardImg_1 from '../../img/card/card-1.jpg';
import cardImg_2 from '../../img/card/card-2.jpg';
import cardImg_3 from '../../img/card/card-3.jpg';
import cardImg_4 from '../../img/card/card-4.jpg';
import cardImg_5 from '../../img/card/card-5.jpg';
import cardImg_6 from '../../img/card/card-6.jpg';
import cardImg_7 from '../../img/card/card-7.jpg';
import cardImg_8 from '../../img/card/card-8.jpg';
// Users
import userImg_1 from '../../img/users/user-1.jpg';
import userImg_2 from '../../img/users/user-2.jpg';
import userImg_3 from '../../img/users/user-3.jpg';
import userImg_4 from '../../img/users/user-4.jpg';
import userImg_5 from '../../img/users/user-5.jpg';
// Icons
import iconImg_1 from '../../img/icon/sold-1.svg';
import iconImg_2 from '../../img/icon/sold-2.svg';



const CardGallery = () => {
   return (
      <div className="card-gallery">
         <Card img={cardImg_1} icon={iconImg_2} user={userImg_1} ></Card>
         <Card img={cardImg_2} icon={iconImg_1} user={userImg_2} ></Card>
         <Card img={cardImg_3} icon={iconImg_2} user={userImg_3} ></Card>
         <Card img={cardImg_4} icon={iconImg_1} user={userImg_4} ></Card>
         <Card img={cardImg_5} icon={iconImg_2} user={userImg_5} ></Card>
         <Card img={cardImg_6} icon={iconImg_1} user={userImg_1} ></Card>
         <Card img={cardImg_7} icon={iconImg_2} user={userImg_2} ></Card>
         <Card img={cardImg_8} icon={iconImg_1} user={userImg_3} ></Card>
      </div>
   );
}

export default CardGallery;