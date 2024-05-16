import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Self-service Analytics",
    "content": "Self-service analytics with Natural Language Queries (NLQ) and predictive capabilities."
  },
  {
    "title": "Geographic Data Integration",
    "content": "Geographic data integration for enhanced visualization and decision-making."
  },
  {
    "title": "Scheduled Report",
    "content": "Scheduled report distribution with granular control for efficient information dissemination."
  },
  {
    "title": "Seamless Embedding",
    "content": "Seamless embedding of custom analytics into existing applications."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of WebFOCUS</h3>
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
