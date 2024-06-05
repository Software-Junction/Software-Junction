import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../peopleworks/work.module.scss";

const uspData = [
  {
    "title": "Proven Track Record",
    "content": "Testimonials from various clients, such as Weir Minerals (India) Pvt. Ltd., highlight the successful implementation and impact of PeopleWorks HRMS. The positive feedback underscores the software's effectiveness in managing HR processes, providing a testament to its reliability and suitability for diverse organizations."
  },
  {
    "title": "Specialized Modules",
    "content": "PeopleWorks HRMS offers specialized modules for various HR functions. These modules include recruitment, onboarding, payroll, compliance, productivity management, communication, and engagement. Each module is designed to address the specific needs and challenges associated with its respective HR domain, providing a comprehensive suite of tools for HR professionals."
  },
  {
    "title": "Flexibility for Remote Work",
    "content": "The HRMS software is designed to be flexible and adaptable to remote work scenarios. This feature is particularly relevant in the contemporary work environment, where remote work is increasingly common. The software ensures that HR processes can be effectively managed, regardless of the physical location of employees."
  },
  {
    "title": "ISO Certified",
    "content": "PeopleWorks holds <span style=\"color:#FC5185 ;\"><strong>ISO 9001:2015 & ISO 27001:2013 certifications,</strong></span> indicating its commitment to maintaining high standards in quality management and information security. These certifications provide assurance to clients regarding the reliability and security of the HRMS software."
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
            <h3 className="mb-3">USP of PeopleWorks</h3>
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
