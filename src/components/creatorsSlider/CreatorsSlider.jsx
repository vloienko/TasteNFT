// Styles
import './CreatorsSlider.scss';



// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';



// Import
import Creators from './Creators';

// Users
import userImg_1 from '../../img/users/user-1.jpg';
import userImg_2 from '../../img/users/user-2.jpg';
import userImg_3 from '../../img/users/user-3.jpg';
import userImg_4 from '../../img/users/user-4.jpg';
import userImg_5 from '../../img/users/user-5.jpg';


const name = 'User Name';
const user = '@username';
const text = '24 sales on 32ETH'



const CreatorsSlider = () => {
   return (
      <div className="creators-slider">
         <Swiper
            modules={[Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={'auto'}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide>
               <Creators img={userImg_1} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_2} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_3} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_4} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_5} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_1} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_2} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
            <SwiperSlide>
               <Creators img={userImg_3} name={name} user={user} text={text}></Creators>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default CreatorsSlider;