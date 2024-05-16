import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> QuickBooks Online FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for QuickBooks Online ?</h5>
              <p className="mt-3">The top 5 features for QuickBooks Online are:</p>
              <ul>
                <li> Banking Integration</li>
                <li>Accounting</li>
                <li>Budgeting</li>
                <li>Database backup/restore (Management)</li>
                <li>Document Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
