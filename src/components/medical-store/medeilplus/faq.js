import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Medeil Plus FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Medeil Plus  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Medeil Plus are :
              </p>
              <ul>
                 <li>Charting</li>
                <li>Patient Flow Management</li>
                <li>Real Time Reporting</li>
                <li>Appointment Management</li>
                <li>Billing & Invoicing</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
