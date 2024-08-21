import { Link } from "react-router-dom";
import CategoryButton from "../CategoryButton/CategoryButton";
import VillaCard from "../VillaCard/VillaCard";
import PropertyImg1 from "./../../assets/images/property-01.jpg";
import PropertyImg2 from "./../../assets/images/property-02.jpg";
import PropertyImg3 from "./../../assets/images/property-03.jpg";
import PropertyImg4 from "./../../assets/images/property-04.jpg";
import PropertyImg5 from "./../../assets/images/property-05.jpg";
import PropertyImg6 from "./../../assets/images/property-06.jpg";
import "./AllProperties.css";

const AllProperties = () => {
  return (
    <div className="AB_AllProperties">
      <div className="AB_ALLPropertyVilla">
        <CategoryButton Button_Category="ShowAll" />
        <CategoryButton Button_Category="Appartment" />
        <CategoryButton Button_Category="Villa House" />
        <CategoryButton Button_Category="Penthouse" />
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg1}
            Category="Luxury Villa"
            PriceVilla="$2.264.000"
            AddressVilla="18 New Street Miami, OR 97219"
            BedRoomsNumber="8"
            BathRoomsNumber="8"
            SpaceVilla="545m2"
            FloorsNumber="3"
            SpotsNumber="6 spots"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg2}
            Category="Luxury Villa"
            PriceVilla="$1.180.000"
            AddressVilla="54 Mid Street Florida, OR 27001"
            BedRoomsNumber="6"
            BathRoomsNumber="5"
            SpaceVilla="450m2"
            FloorsNumber="3"
            SpotsNumber="8 spots"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg3}
            Category="Luxury Villa"
            PriceVilla="$1.460.000"
            AddressVilla="26 Old Street Miami, OR 38540"
            BedRoomsNumber="5"
            BathRoomsNumber="4"
            SpaceVilla="225m2"
            FloorsNumber="3"
            SpotsNumber="10 spots"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg4}
            Category="Apartment"
            PriceVilla="$584.500"
            AddressVilla="12 New Street Miami, OR 12650"
            BedRoomsNumber="4"
            BathRoomsNumber="3"
            SpaceVilla="125m2"
            FloorsNumber="25th"
            SpotsNumber="2 cars"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg5}
            Category="Penthouse"
            PriceVilla="$925.600"
            AddressVilla="34 Beach Street Miami, OR 42680"
            BedRoomsNumber="4"
            BathRoomsNumber="4"
            SpaceVilla="180m2"
            FloorsNumber="38th"
            SpotsNumber="2 cars"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <VillaCard
            VillaImage={PropertyImg6}
            Category="Modern Condo"
            PriceVilla="$450.000"
            AddressVilla="22 New Street Portland, OR 16540"
            BedRoomsNumber="3"
            BathRoomsNumber="2"
            SpaceVilla="165m2"
            FloorsNumber="26th"
            SpotsNumber="3 cars"
          />
        </div>
      </div>
      <div className="AB_Pagination"> 
        <span className="AB_Number">1</span>
        <span className="AB_Number  AB_Active">2</span>
        <span className="AB_Number">3</span>
        <span className="AB_Number"> 4</span>
      </div>
    </div>
  );
};

export default AllProperties;
