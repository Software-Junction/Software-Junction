import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../administator-plus/adm.module.scss";

const uspData = [
  {
    "title": "Extensive Experience",
    "content": "Accurate Infosoft boasts over <span style=\"color:#f95738 ;\"><strong>25</strong></span> years of experience in the field, having implemented the Hospital Management System in over <span style=\"color:#f95738 ;\"><strong>200</strong></span> locations."
  },
  {
    "title": "Advanced Technology Integration",
    "content": "The system utilizes the latest technologies, including Microsoft technologies for the front end and flexible back-end options such as Oracle and SQL."
  },
  {
    "title": "Automation of Key Processes",
    "content": "The software automates critical processes within hospital management, including billing, appointments, scheduling, regulatory compliance, and financial auditing."
  },
  {
    "title": "Modules for Comprehensive Management",
    "content": "The software includes modules for various aspects of hospital management, such as billing, prescriptions, appointments, OT (Operation Theater) management, lab management, and accounting."
  },
  {
    "title": "Accessibility of Patient History",
    "content": "The Hospital Information System (HIS) allows easy access to a patient's comprehensive data, including history, ailments, professionals involved, lab results, and payment details."
  },
  {
    "title": "Proven Track Record",
    "content": "Accurate Infosoft highlights achievements, including over <span style=\"color:#f95738 ;\"><strong>8000</strong></span> successful projects, <span style=\"color:#f95738 ;\"><strong>2000+</strong></span> satisfied clients, <span style=\"color:#f95738 ;\"><strong>100+</strong></span> professionals, and <span style=\"color:#f95738 ;\"><strong>25+</strong></span> years of experience."
  },
  {
    "title": "Global Presence",
    "content": "Accurate Info Solution, the parent company, has a global presence and partners with various companies to plan, build, and manage application software."
  },
  {
    "title": "Responsive Support",
    "content": "The provided contact information and the option to request a call back or contact the sales team via WhatsApp emphasize a commitment to responsive customer support."
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
            <h3 className="mb-3">USP of Administrator Plus</h3>
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
