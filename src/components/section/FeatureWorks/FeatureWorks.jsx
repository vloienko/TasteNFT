/* eslint-disable react-refresh/only-export-components */
import CardGallery from '../../CardGallery/CardGallery';


// Styles
import './feature-works.scss';

const FeatureWorks = () => {
   return (
      <section className="feature-works">
         <div className="feature-works__container">
            <h2 className="feature-works__title">Feature works</h2>
            <CardGallery />
         </div>
      </section>
   );
}
 
export default FeatureWorks;