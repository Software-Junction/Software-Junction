import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> EventOrg FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for EventOrg ?</h5>
              <p className="mt-3">The top 5 features for EventOrg are :</p>
              <ul>
                <li>Surveys & Feedback</li>
                <li>Vendor Management</li>
                <li>Client Management</li>
                <li>Registration Management</li>
                <li>Attendee Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
