import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Exotel FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Exotel ?</h5>
              <p className="mt-3">The top 5 features for Exotel are :</p>
              <ul>
                <li>Lead Management</li>
                <li>IVR and Dial Groups</li>
                <li>SMS</li>
                <li>CRM integration</li>
                <li>Multiuser Login & Role-based access control</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
