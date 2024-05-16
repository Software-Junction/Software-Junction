import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Maestro PMS FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Maestro PMS  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Maestro PMS are :
              </p>
              <ul>
                 <li>Property Management</li>
                <li>House keeping</li>
                <li>Reservation & Booking</li>
                <li>Front Office management</li>
                <li>Multi Property Support</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
