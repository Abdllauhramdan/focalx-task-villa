import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="AB_Footer">
        <div className="container_custom">
          <div className="AB_paragraphFooter">
            Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design:
            <Link
              to="https://templatemo.com/"
              target="_blank"
              className="AB_LinkFooter"
            >
              TemplateMo
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
