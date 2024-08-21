import "./TopBar.css";
import { FaMap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className=" AB_TopBar">
        <div className="container_custom">
          <div className="AB_ContentTopbar">
            <div className="AB_info">
              <div className="AB_SubContainer">
                <FaEnvelope className="AB_iconColor" />
                <h3 className="AB_SubTitle">Sunny Isles Beach, FL 33160</h3>
              </div>
              <div className="AB_SubContainer">
                <FaMap className="AB_iconColor" />
                <h3 className="AB_SubTitle">info@company.com</h3>
              </div>
            </div>
            <div className="AB_SocialLinks">
              <div className="AB_CircleIcon">
                <FaFacebook />
              </div>
              <div className="AB_CircleIcon">
                <FaTwitter />
              </div>
              <div className="AB_CircleIcon">
                <FaLinkedin />
              </div>
              <div className="AB_CircleIcon">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
