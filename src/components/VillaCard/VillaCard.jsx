import { Link } from "react-router-dom";
import "./VillaCard.css";

const VillaCard = ({ VillaImage ,Category , PriceVilla , AddressVilla , BedRoomsNumber  , BathRoomsNumber , SpaceVilla ,FloorsNumber  , SpotsNumber}) => {
  return (
    <div className="AB_ItemCard">
      <img src={VillaImage} alt="villa" className="AB_Property_IMG" />
      <div className="AB_Space_CARD">
        <span className="AB_categoryCard">{Category}</span>
        <h6 className="AB_priceCard">{PriceVilla}</h6>
      </div>
      <h4 className="AB_AddressCard">
        <Link to="/Property Details">{AddressVilla}</Link>
      </h4>
      <div className="SpecialFeatures_Card">
        <div className="AB_NumberRoom_Card">
          <h4>
            Bedrooms:<span>{BedRoomsNumber}</span>
          </h4>
          <h4>
            Bathrooms:<span> {BathRoomsNumber}</span>
          </h4>
        </div>
        <div className="AB_NumberRoom_Card">
          <h4>
            Area: <span>{SpaceVilla}</span>
          </h4>
          <h4>
            
            Floor:<span>{FloorsNumber}</span>
          </h4>
        </div>
        <h4 className="AB_SubTitle_font">
          Parking: <span className="AB_Span_font">{SpotsNumber}</span>
        </h4>
      </div>
      <div className="AB_ButtonCardVilla text-center">
        <Link to="/Property Details">Schedule a visit</Link>
      </div>
    </div>
  );
};

export default VillaCard;
