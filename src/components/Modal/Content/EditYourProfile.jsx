// Style
import './ModalContent.scss';


// Import
import ImageUploader from './ImageUploader.jsx';

// Image
import twitch from '../../../img/icon/social/social-1.svg';
import instagram from '../../../img/icon/social/social-2.svg';
import twitter from '../../../img/icon/social/social-3.svg';
import onlyfans from '../../../img/icon/social/social-4.svg';



export const EditYourProfile = () => {
   return (
      <div className="edit-profile">
         <span className="edit-profile__title">Edit your Profile</span>
         <form className="edit-profile__form" action="#">
            <div className="edit-profile__body">
               <div className="edit-profile__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" />
               </div>
               <div className="edit-profile__field">
                  <label htmlFor="username">Username</label>
                  <div className="edit-profile__wrap">
                     <input id="username" type="text" />
                  </div>
               </div>
               <div className="edit-profile__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" />
               </div>
               <div className="edit-profile__field">
                  <p>Add your email address to receive notifications about your activity on Foundation. This will not be shown on your profile.</p>
               </div>
               <div className="edit-profile__field">
                  <label htmlFor="bio">BIO</label>
                  <textarea id="bio" name="bio" className="height-big"></textarea>
               </div>

               <ImageUploader />

               <div className="edit-profile__field"></div>
               <div className="edit-profile__field">
                  <span>Contacts</span>

                  <div className="edit-profile__contacts">
                     <label htmlFor="twitch">
                        <img src={twitch} alt="Social icon" />
                        <span>Twitch</span>
                     </label>
                     <input id="twitch" type="url" />
                  </div>
                  <div className="edit-profile__contacts">
                     <label htmlFor="instagram">
                        <img src={instagram} alt="Social icon" />
                        <span>Instagram</span>
                     </label>
                     <input id="instagram" type="url" />
                  </div>
                  <div className="edit-profile__contacts">
                     <label htmlFor="twitter">
                        <img src={twitter} alt="Social icon" />
                        <span>Twitter</span>
                     </label>
                     <input id="twitter" type="url" />
                  </div>
                  <div className="edit-profile__contacts">
                     <label htmlFor="onlyfans">
                        <img src={onlyfans} alt="Social icon" />
                        <span>Onlyfans</span>
                     </label>
                     <input id="onlyfans" type="url" />
                  </div>
               </div>
            </div>
            <button className="edit-profile__save" type="submit">Save changes</button>
         </form>
      </div>
   );
};