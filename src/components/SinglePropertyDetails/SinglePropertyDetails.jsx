import "./SinglePropertyDetails.css";
import ImgSingleProperty from "./../../assets/images/single-property.jpg";
import { Link } from "react-router-dom";
import AccordionFeaturesVilla from "../AccordionFeaturesVilla/AccordionFeaturesVilla";
import InfoVilla from "../InfoVilla/InfoVilla";

const SinglePropertyDetails = () => {
  return (
    <div className="AB_SinglePropertyDetails">
      <div className="container_custom">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="AB_MainImage">
              <img src={ImgSingleProperty} alt="Img SingleProperty" />
            </div>
            <div className="AB_MainContent AB_sizeMain">
              <span className="AB_ColorMain">Apparment</span>
              <h4 className="AB_titleMain">24 New Street Miami, OR 24560</h4>
              <p className="AB_paragrapnMain">
                Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your
                company website. TemplateMo provides you the 
                <Link to="https://www.google.com/search?q=best+free+css+templates" target="_blank"> best free CSS templates </Link> 
                in the world. Please tell your friends about it. Thank
                you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr
                succulents single-origin coffee schlitz enamel pin you probably
                haven't heard of them ugh hella.
                <br></br>
                <br></br>
                When you look for free CSS
                templates, you can simply type TemplateMo in any search engine
                website. In addition, you can type TemplateMo Digital Marketing,
                TemplateMo Corporate Layouts, etc. Master cleanse +1
                intelligentsia swag post-ironic, slow-carb chambray knausgaard
                PBR&B DSA poutine neutra cardigan hoodie pop-up.
              </p>
              <div className="AB_Accordion AB_MainSpace">
                <AccordionFeaturesVilla/>
            </div>
            </div>
          </div>
          <div className="col-lg-4">
            <InfoVilla/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyDetails;
