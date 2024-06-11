import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../crest-erp/crest.module.scss";

const uspData = [
  {
    "title": "Scalability",
    "content": "CREST ERP grows alongside your business, accommodating additional processes, functionalities, and users as needed."
  },
  {
    "title": "Security & Regulatory Compliance",
    "content": "Centralized data storage and role-based access controls ensure data security and compliance with regulations."
  },
  {
    "title": "Forecasting & Tracking",
    "content": "Gain insights into orders, production, inventory, and finances with robust forecasting and tracking capabilities."
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
            <h3 className="mb-3">USP of CREST ERP</h3>
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
