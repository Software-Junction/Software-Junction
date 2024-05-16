import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>Dialer360 FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Dialer360?</h5>
              <p className="mt-3">The top 5 features for Dialer360 are :</p>
              <ul>
                <li>Call Routing</li>
                <li>Quality Management</li>
                <li>CRM integration</li>
                <li>Application Integration</li>
                <li>Call Recording</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
