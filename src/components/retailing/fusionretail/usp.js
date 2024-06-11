import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../fusionretail/fus.module.scss";

const uspData = [
  {
    "title": "Global Presence",
    "content": "With <span style=\"color:#f95738 ;\"><strong>35,000</strong></span> installations in <span style=\"color:#f95738 ;\"><strong>40</strong></span> countries and <span style=\"color:#f95738 ;\"><strong>20</strong></span> years in business, FusionRetail has a global presence, indicating reliability and trustworthiness."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "FusionRetail caters to various types of retail stores, including apparels and footwear, department stores, supermarkets, fruits and vegetables, furniture and home decor, luggage stores, electronics and mobiles, spa and salon, and specialty stores."
  },
  {
    "title": "Performance Enhancements",
    "content": "The software claims to bring about a <span style=\"color:#f95738 ;\"><strong>20-30%</strong></span> increase in sales, reduced inventory holding costs, devoted staff with high efficiency, increased space productivity, maximized margin with lower investment, loyal customers for repeat business, and a reduction in expenses by <span style=\"color:#f95738 ;\"><strong>20-40%.</strong></span>"
  },
  {
    "title": "Single Platform Efficiency",
    "content": "FusionRetail serves as a single platform, eliminating the complexity of maintaining separate software for POS, back office, and web store management."
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
            <h3 className="mb-3">USP of FusionRetail</h3>
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
