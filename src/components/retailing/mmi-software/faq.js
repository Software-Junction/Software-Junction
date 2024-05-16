import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> MMI Softwares Pvt. Ltd FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for MMI Softwares Pvt. Ltd  ?
              </h5>
              <p className="mt-3">
                The top 5 features for MMI Softwares Pvt. Ltd are :
              </p>
              <ul>
                 <li>Document Management</li>
                <li>Financial management</li>
                <li>CRM</li>
                <li>HR & Payroll</li>
                <li>Budgeting</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
