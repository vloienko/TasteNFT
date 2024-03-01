import searchImg from './../../img/icon/search.svg';

export default function Search() {
   
   return (
      <form action={2}>
         <input className='input' name="query" placeholder='Search for ...' />
         <button className='button' type="submit">
            <img src={searchImg} alt="Search" />
         </button>
      </form>
   );
}