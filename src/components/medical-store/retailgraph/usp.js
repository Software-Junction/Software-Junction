import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../retailgraph/ret.module.scss";

const uspData = [
  {
    "title": "Seamless Transition for Customers",
    "content": "The rebranding assures customers of a smooth transition from RetailGraph to SwilERP, combining reliable features with new enhancements. This ensures that existing users can continue their operations without disruptions."
  },
  {
    "title": "Comprehensive Suite of Applications",
    "content": "SwilERP provides a comprehensive suite of applications across desktop, mobile, and web platforms, catering to various business needs. This includes desktop apps like SwilERP and Unisolve, mobile apps such as SwilPOS, SwilSORT, SwilDISPATCH, and SwilMart Ecomm, as well as web apps like Swil Cloud-based software and Swil Admin."
  },
  {
    "title": "Diverse Range of Software Products",
    "content": "The software lineup includes a range of products, each designed to address specific aspects of business operations. From point-of-sale solutions (SwilPOS) to dispatch management (SwilDISPATCH) and e-commerce functionalities (SwilMart Ecomm), SwilERP offers a diverse set of tools."
  },
  {
    "title": "Partner Programs and Beta Access",
    "content": "The brand encourages partnerships through initiatives like a beta program, demonstrating a commitment to collaboration and innovation. This invites users to participate in shaping the software's future developments."
  },
  {
    "title": "Copyright and Ownership Assurance",
    "content": "The copyright notice reinforces the ownership of Softworld (India) Pvt. Ltd., instilling confidence in the longevity and commitment of the company to support and develop the SwilERP platform."
  }
  
  
  
  
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of RetailGraph</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
