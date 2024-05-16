import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> SimplifyEm FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top features for SimplifyEm?</h5>
              <p className="mt-3">The top features for SimplifyEm are :</p>
              <ul>
                <li>Property Management</li>
                <li>Residential Properties</li>
                <li>Property Inspections</li>
                <li>Rental Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
