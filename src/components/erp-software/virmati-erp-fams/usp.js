import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../virmati-erp-fams/vir.module.scss";

const uspData = [
  {
    "title": "Comprehensive Asset Management",
    "content": "Virmati's FAMS covers both Moveable and Non-Moveable Fixed Assets for organizations."
  },
  {
    "title": "Web-Based Accessibility",
    "content": "The system's web-based application allows flexible access from anywhere, catering to both Head Office and Branch levels."
  },
  {
    "title": "Key Functionality Highlights",
    "content": "Historical and current cost maintenance, asset history tracking, revaluation for balance-sheet, asset life cycle fixation, AMC and service contract management, insurance module, lease agreements, and MIS report generation."
  },
  {
    "title": "Proven Track Record and Accreditations",
    "content": "Virmati Group's <span style=\"color:#f95738 ;\"><strong>25+</strong></span> years track record, ISO <span style=\"color:#f95738 ;\"><strong>9001</strong></span> certification, CMM Level <span style=\"color:#f95738 ;\"><strong>3</strong></span>, Microsoft Gold Certified Partner, and ISV Partner for HP, IBM & Microsoft."
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
            <h3 className="mb-3">USP of Viramati's ERP-FAMS</h3>
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
