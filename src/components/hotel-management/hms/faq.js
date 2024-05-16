import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> The Hotel Management Software FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for The Hotel Management Software  ?
              </h5>
              <p className="mt-3">
                The top 5 features for The Hotel Management Software are :
              </p>
              <ul>
                 <li>HR & Payroll</li>
                <li>Financial management</li>
                <li>Accounting</li>
                <li>CRM</li>
                <li>Database backup/restore (Management)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
