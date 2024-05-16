import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Ameyo FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Ameyo?</h5>
              <p className="mt-3">The top 5 features for Ameyo are :</p>
              <ul>
                <li>Multiuser Login & Role-based access control</li>
                <li>Performance Management</li>
                <li>CRM integration</li>
                <li>Knowledge Management</li>
                <li>CRM</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
