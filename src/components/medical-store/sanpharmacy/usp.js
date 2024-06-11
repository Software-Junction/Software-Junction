import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sanpharmacy/san.module.scss";

const uspData = [
  {
    "title": "Versatility and Scalability",
    "content": "The software caters to the needs of small, middle, and large retail and wholesale medical shops. It offers multiple billing counters system to accommodate various business sizes."
  },
  {
    "title": "Efficient Inventory Management",
    "content": "The software provides accurate inventory tracking to streamline stock management. It supports barcode for easy and error-free product identification."
  },
  {
    "title": "Integrated Solutions",
    "content": "The software integrates with Tally for seamless financial management. It also supports integration with mobile devices and tablets for flexibility, along with Cloud POS for online and offline functionality."
  },
  {
    "title": "Customer Engagement and Loyalty",
    "content": "The software includes loyalty program functionality to enhance customer retention. It ensures fast and reliable communication through SMS."
  },
  {
    "title": "Technology Integration",
    "content": "The software offers a mobile app for on-the-go access and provides a free Android mobile app for store management. It also supports e-commerce integration for a broader market reach."
  },
  {
    "title": "Responsive Customer Support",
    "content": "The software provides excellent customer support services with fast response time for queries and assistance."
  },
  {
    "title": "Global Presence",
    "content": "The software has international resellers in the USA, UAE, Indonesia, and India. It has maintained a presence in the evolving IT landscape since<span style=\"color:#f95738 ;\"><strong> 2006.</strong></span>"
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
            <h3 className="mb-3">USP of San Pharmacy Billing</h3>
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
