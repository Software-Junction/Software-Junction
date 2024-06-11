import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../farsight/far.module.scss";

const uspData = [
  {
    "title": "Comprehensive HR Solution",
    "content": "The platform offers a complete suite of HR solutions, including Core HRIS, Time Office Management, Payroll Management, and a variety of add-ons such as Recruitment, Employee Onboarding, and Performance Management."
  },
  {
    "title": "Scalable Plans for Every Organization",
    "content": "Tailored plans for both SME/MSMEs and Enterprises ensure that organizations of all sizes can benefit from the platform. The Essential, Professional, and Premium plans cater to varying needs and budgets."
  },
  {
    "title": "Compliance and Legal Support",
    "content": "The platform integrates statutory compliances such as ESI, PF, Income Tax, Professional Tax, and LWF, providing organizations with a robust system to manage legal obligations seamlessly."
  },
  {
    "title": "Automation for Efficiency",
    "content": "Automation features, such as Probation Policy Automation, Employee Confirmation Workflows, and Attendance Regularisations, contribute to increased operational efficiency and reduced manual workload."
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
            <h3 className="mb-3">USP of Farsight</h3>
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
