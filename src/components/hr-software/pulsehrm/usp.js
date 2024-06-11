import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../pulsehrm/pul.module.scss";

const uspData = [
  {
    "title": "Paperless Onboarding and Offboarding",
    "content": "PulseHRM emphasizes a <span style=\"color:#f95738 ;\"><strong>100% paperless</strong></span> onboarding and offboarding process, streamlining employee document management and manual processes."
  },
  {
    "title": "Biometric Integration and Workforce Management",
    "content": "The software seamlessly integrates with various biometric systems, enabling efficient workforce management through GPS, attendance tracking, and timesheet software."
  },
  {
    "title": "Employee Monitoring for Increased Productivity",
    "content": "Centralized HRIS (Human Resource Information System) facilitates employee monitoring, contributing to enhanced productivity, retention, and overall business performance."
  },
  {
    "title": "Visitor Management System",
    "content": "PulseHRM goes beyond traditional HR functions by offering a visitor management system with features like visitor badges, QR codes, image capture, end-of-day reports, and host notifications."
  },
  {
    "title": "Expert Support and Consulting Services",
    "content": "PulseHRM not only offers a software solution but also provides consulting services such as Apex development, application maintenance, performance tuning, integration, interoperability, migration services, and customized solutions."
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
            <h3 className="mb-3">USP of PulseHRM</h3>
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
