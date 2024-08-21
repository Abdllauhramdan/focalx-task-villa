import "./ContactSection.css";
import BoxInfo from "../BoxInfo/BoxInfo";
import FormContact from "../FormContact/FormContact";
import MapContact from "../mapContact/MapContact";
import IconBox1 from './../../assets/images/phone-icon.png'
import IconBox2 from './../../assets/images/email-icon.png'

const ContactSection = () => {
  return (
    <div className="AB_ContactSection">
      <div className="AB_Contact">
        <div className="container_custom AB_CenterContact">
          <div className="AB_SectionHeading text-center">
            <h6>| CONTACT US</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
          <div className="AB_Content_Contact">
            <div className="row">
              <div className="col-lg-7 AB_ContentMapContact">
                <MapContact/>
                <div className="AB_BoxesContact">
                  <BoxInfo Icon ={IconBox1} BoxTitle="010-020-0340" BoxSubTitle="Phone Number" />
                  <BoxInfo Icon ={IconBox2} BoxTitle=" info@villa.co" BoxSubTitle="Business Email" />
                </div>
              </div>
              <div className="col-lg-5 AB_ContentForm">
                <FormContact/>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
