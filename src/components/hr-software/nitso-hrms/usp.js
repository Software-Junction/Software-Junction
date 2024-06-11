import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nitso-hrms/nitso.module.scss";

const uspData = [
  {
    "title": "State-of-the-Art Design",
    "content": "Nitso Technologies distinguishes itself through state-of-the-art design in its applications. This unique design sets its products apart from others in the market, contributing to a modern and efficient user experience."
  },
  {
    "title": "Cloud-Based Accessibility",
    "content": "The option for HRMS on Cloud (Software-as-a-Service) enhances accessibility, allowing users to manage processes from anywhere. This flexibility is particularly valuable for businesses with distributed or remote teams."
  },
  {
    "title": "Easy Integration with Third-Party Applications",
    "content": "Nitso Technologies' software is designed to easily integrate with third-party applications through APIs (Application Programming Interfaces). This feature enables businesses to connect their HR and payroll processes seamlessly with other tools they may be using."
  },
  {
    "title": "Configuration Simplicity",
    "content": "Built on Microsoft technologies, Nitso's applications are easy to configure both locally and on server/client environments. This simplifies the implementation process and allows for customization based on specific business needs."
  },
  {
    "title": "Single Source of Truth (SSOT)",
    "content": "The software promotes a Single Source of Truth approach, ensuring that everyone in the organization relies on the same data for decision-making. This feature enhances data accuracy and consistency across various departments."
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
            <h3 className="mb-3">USP of Nitso HRMS</h3>
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
