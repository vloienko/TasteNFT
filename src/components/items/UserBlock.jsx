import userImg from './../../img/users/user-1.jpg';


// Style
import './user-block.scss';


const UserBlock = () => {
   return (
      <a href='/TasteNFT/my-profile/' className="user-block">
         <div className="user-block__avatar">
            <img src={userImg} alt="User photo" />
         </div>
         <div className="user-block__box">
            <span className="user-block__name">User Name</span>
            <span className="user-block__nick">@username</span>
         </div>
      </a>
   );
}
 
export default UserBlock;