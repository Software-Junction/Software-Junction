import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tigerlrm/tiger.module.scss";

const uspData = [
  {
    "title": "AI-Powered Sales Enablement",
    "content": "TigerLRM integrates AI to boost conversion rates by <span style=\"color:#f95738 ;\"><strong>300%,</strong></span> providing advanced lead scoring and built-in sales enablement tools."
  },
  {
    "title": "Sales Management Augmentation",
    "content": "Dedicated sales managers and enablement services for identifying sales processes, training reps, and lead assignment and tracking."
  },
  {
    "title": "Integration and Scalability",
    "content": "Easy-to-use, affordable, and scalable CRM that integrates with various tools and platforms."
  },
  {
    "title": "Award-Winning Recognition",
    "content": "Globee Awards Gold recipient, showcasing TigerLRM's industry recognition and excellence."
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
            <h3 className="mb-3">USP of TigerLRM</h3>
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
