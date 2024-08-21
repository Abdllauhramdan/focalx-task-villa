import "./FeaturesVillaSection.css";
import FeatureImg from "./../../assets/images/featured.jpg";
import FeatureIcon from "./../../assets/images/featured-icon.png";
import InfoVilla from "../InfoVilla/InfoVilla";
import AccordionFeaturesVilla from "../AccordionFeaturesVilla/AccordionFeaturesVilla";

const FeaturesVillaSection = () => {
  return (
    <div className="AB_FeaturesVillaSection">
      <div className="container_custom">
        <div className="row">
          <div className="col-lg-4">
            <div className="AB_LeftIMAGE">
              <img src={FeatureImg} alt="Feature Image" className="AB_VillaPhoto" />
              <div className="AB_CircleOrange">
                <img src={FeatureIcon} alt="Feature Icon" />
              </div>
            </div>
           
          </div>
          <div className="col-lg-5  AB_SpaceAll">
            <div className="AB_Heading AB_SpaceM">
              <h6>| FEATURED</h6>
              <h2>Best Appartment & Sea View</h2>
            </div>
            <div className="AB_Accordion">

              <AccordionFeaturesVilla/>
            </div>
          </div>
          <div className="col-lg-3">
            <InfoVilla/>
          </div>
        </div>
          
      </div>
    </div>

  );
};

export default FeaturesVillaSection;
