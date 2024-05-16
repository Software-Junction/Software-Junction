import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> In4Suite FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for In4Suite  ?
              </h5>
              <p className="mt-3">
                The top 5 features for In4Suite are :
              </p>
              <ul>
                 <li>Case Management</li>
                <li>Customer Management</li>
                <li>CRM</li>
                <li>Audit Trail</li>
                <li>Asset Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
