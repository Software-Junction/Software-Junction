import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../evital/evital.module.scss";

const uspData = [
  {
    "title": "Healthcare Integration",
    "content": "Tailored for healthcare institutions, the software supports patient information management, prescription processing, medical history records, and pharmacy management, making it a comprehensive solution for healthcare providers."
  },
  {
    "title": "Retail and POS Capabilities",
    "content": "Ideal for retail businesses with features like point of sale (POS), inventory control, sales tracking, and online ordering, providing a complete retail management solution."
  },
  {
    "title": "Advanced Reporting and Analytics",
    "content": "The software facilitates data analysis and visualization, predictive analytics, and MIS reports, empowering businesses with actionable insights for informed decision-making."
  },
  {
    "title": "Compliance and Tax Management",
    "content": "Ensures compliance with taxation regulations through features like GST support, tax management, and customizable billing, helping businesses stay on top of regulatory requirements."
  },
  {
    "title": "Security and Compliance",
    "content": "Prioritizes data security with role-based permissions, automatic reminders, and secure transaction management, ensuring the confidentiality and integrity of sensitive information."
  },
  {
    "title": "Real-Time and Self-Learning",
    "content": "Provides real-time comparisons, reporting, and self-learning capabilities, enabling businesses to adapt and respond quickly to changing market conditions."
  },
  {
    "title": "Industry-Specific Modules",
    "content": "Offers industry-specific modules such as healthcare, retail, and banking, ensuring that businesses can leverage tailored functionalities for their specific needs."
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
            <h3 className="mb-3">USP of eVitalRx</h3>
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
