import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Wolken ServiceDesk FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Wolken ServiceDesk ?</h5>
              <p className="mt-3">
                The top 5 features for Wolken ServiceDesk are :
              </p>
              <ul>
                <li>Incident Management</li>
                <li>Help Desk Management</li>
                <li>Service Level Agreement (SLA) Management</li>
                <li>Customer Management</li>
                <li>Service Desk (ITIL ITSM)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
