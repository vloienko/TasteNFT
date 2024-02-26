// Style
import "./header.scss";


// Import
import Search from './Search';
import UserMenu from '../UserMenu/UserMenu';


// Image
import logoImg from './../../img/logo.svg';


function HeaderAutorized() {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__body">
               <a className="header__logo" href="https://vloienko.github.io/TasteNFT/">
                  <img src={logoImg} alt="Logo" />
               </a>
               <div className="header__search">
                  <Search />
               </div>
               <div className="header__box">
                  <button className="header__button" type="button">+ Add artwork</button>
                  <button className="header__button mobile" type="button">+ Add</button>
               </div>
               <UserMenu />
            </div>
         </div>
      </header>
   )
}

export default HeaderAutorized;