import Search from './Search';
import logoImg from './../../img/logo.svg';


import "./header.scss";


function Header() {
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
                  <button className="header__button" type="button">Connect wallet</button>
                  <button className="header__button mobile" type="button">Wallet</button>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;