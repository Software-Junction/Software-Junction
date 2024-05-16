import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "One View",
    "content": "A <span style=\"color:#FC5185 ;\"><strong>360-degree</strong></span> view of customer data in a single place for better customer understanding."
  },
  {
    "title": "Affordable",
    "content": "Flexible editions with mixed pricing catering to all budgets."
  },
  {
    "title": "Integrations",
    "content": "Connects with over <span style=\"color:#FC5185 ;\"><strong>500+</strong></span> apps for extended functionality."
  },
  {
    "title": "Security",
    "content": "Data security compliance with GDPR, ISO, and other standards built around an Open Source core."
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
            <h3 className="mb-3">USP of Vtiger CRM</h3>
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
