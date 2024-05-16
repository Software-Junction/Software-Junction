import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Avaya FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Avaya?</h5>
              <p className="mt-3">The top 5 features for Avaya are :</p>
              <ul>
                <li>Call Recording</li>
                <li>Call Management</li>
                <li>Applications Management</li>
                <li>Surveys & Feedback</li>
                <li>Call Center Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
