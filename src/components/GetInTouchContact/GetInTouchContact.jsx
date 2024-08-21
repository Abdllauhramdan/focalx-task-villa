import "./GetInTouchContact.css";
import BoxInfo from "../BoxInfo/BoxInfo";
import IconBox1 from "./../../assets/images/phone-icon.png";
import IconBox2 from "./../../assets/images/email-icon.png";
import FormContact from "../FormContact/FormContact";
import MapContact from "../mapContact/MapContact";

const GetInTouchContact = () => {
  return (
    <div className="AB_GetInTouchContact">
      <div className="container_custom">
        <div className="row">
          <div className="col-lg-6">
            <div className="AB_heading_ContactUs">
              <h6>| CONTACT US</h6>
              <h2>Get In Touch With Our Agents</h2>
            </div>
            <p className="AB_paragraph_ContactUs">
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>
            <div className="AB_Boxes_ContactUs">
              <BoxInfo
                Icon={IconBox1}
                BoxTitle="010-020-0340"
                BoxSubTitle="Phone Number"
              />
              <BoxInfo
                Icon={IconBox2}
                BoxTitle=" info@villa.co"
                BoxSubTitle="Business Email"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <FormContact />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="AB_MAP_ContactUs">
              <MapContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchContact;
