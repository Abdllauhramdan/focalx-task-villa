import "./AccordionFeaturesVilla.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";


const AccordionFeaturesVilla = () => {
  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="AB_Accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Best Useful links ?</Accordion.Header>
          <Accordion.Body className="AB_Accordionbody">
            Get <strong>the best villa</strong> website template in HTML CSS and
            Bootstrap for your business. TemplateMo provides you the
            <Link to="/">
              <button className="AB_btnVilla"> best free CSS templates</button>
            </Link>
            in the world . Please tell your friends about it.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does this work ?</Accordion.Header>
          <Accordion.Body className="AB_Accordionbody">
            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit,
            sed doesn't eiusmod tempor incididunt ut labore consectetur
            <span className="AB_Font_pink">adipiscing</span> elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Why is Villa Agency the best ?</Accordion.Header>
          <Accordion.Body className="AB_Accordionbody">
            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit,
            sed doesn't eiusmod tempor incididunt ut labore consectetur
            <span className="AB_Font_pink">adipiscing</span> elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AccordionFeaturesVilla;
