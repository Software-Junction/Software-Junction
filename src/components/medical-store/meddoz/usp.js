import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../meddoz/medo.module.scss";

const uspData = [
  {
    "title": "Extensive Drug Database",
    "content": "With a preloaded database of over <span style=\"color:#FC5185 ;\"><strong>100,000 drugs,</strong></span> Meddoz offers an extensive range that caters to the needs of pharmacies of all sizes. This abundance ensures that pharmacies have access to a comprehensive inventory without the hassle of manual data entry."
  },
  {
    "title": "Experienced Software Development Company",
    "content": "ASkeyTech's background as an experienced software development company, based in Chennai, India, adds credibility to Meddoz. Their expertise in providing solutions for point of sales, enterprise applications, E-commerce, and web design positions Meddoz as a reliable and proven choice in the market."
  },
  {
    "title": "Continuous Improvement",
    "content": "ASkeyTech's commitment to international standards is reflected in their continuous efforts to improve products and processes. Regular updates, skill enhancement of personnel, customer feedback reviews, and the use of industry-standard tools contribute to the ongoing enhancement of Meddoz's Pharmacy Management System."
  }
  
  
  
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Meddoz</h3>
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
