import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> ACE Health Solutions FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for ACE Health Solutions  ?
              </h5>
              <p className="mt-3">
                The top 5 features for ACE Health Solutions are :
              </p>
              <ul>
                 <li>Admissions Management</li>
                <li>Case management</li>
                <li>Discharge Management</li>
                <li>Real Time Reporting</li>
                <li>Bed Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
