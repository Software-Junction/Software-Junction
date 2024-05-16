import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Centralized Marketing Data Hub",
    "content": "Funnel.io serves as the central hub for all your marketing data, providing unparalleled control over performance metrics and analytics."
  },
  {
    "title": "Collaborative Data Sharing",
    "content": "Facilitate effortless collaboration by sharing insights and reports with your team across various platforms securely and in real-time."
  },
  {
    "title": "Trusted Security Measures",
    "content": "Rest assured with Funnel.io's ISO & SOC2 certifications, guaranteeing the highest standards of privacy and security for your data."
  },
  {
    "title": "Proven Results",
    "content": "Backed by over <span style=\"color:#FC5185 ;\"><strong>2000</strong></span> satisfied customers worldwide, Funnel.io delivers tangible outcomes such as increased return on advertising spend (ROAS) and significant cost savings."
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
            <h3 className="mb-3">USP of Funnel</h3>
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
