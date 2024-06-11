import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../erpnext/erp.module.scss";

const uspData = [
  {
    "title": "Feature-rich Modules",
    "content": "ERPNext offers a plethora of modules, including but not limited to Financial Accounting, Order Management, HR and Payroll, Manufacturing, CRM, Projects, Helpdesk, Asset Management, and Website Management."
  },
  {
    "title": "End-to-End Business Management",
    "content": "From managing sales and purchase cycles to handling employee lifecycle, production planning, customer relationship management, and project delivery, ERPNext covers almost every aspect of business management."
  },
  {
    "title": "Large User Base",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>10,000</strong></span> companies worldwide using ERPNext, it establishes credibility and reliability as a trusted ERP solution."
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
            <h3 className="mb-3">USP of ERPNext</h3>
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
