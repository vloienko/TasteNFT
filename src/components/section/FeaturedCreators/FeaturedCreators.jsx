import CreatorsSlider from '../../CreatorsSlider/CreatorsSlider';


// Styles
import './featured.scss';


const FeaturedCreators = () => {
   return (
      <section className="featured">
         <div className="featured__container">
            <h2 className="featured__title">Featured creators</h2>
            <CreatorsSlider />
         </div>
      </section>
   );
}
 
export default FeaturedCreators;