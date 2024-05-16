import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Campfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> CampSteer FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["cam-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for CampSteer ?
              </h5>
              <p className="mt-3">
                The top 5 features for CampSteer are :
              </p>
              <ul>
                 <li>Fee Management</li>
                <li>Hostel Management</li>
                <li>Academics</li>
                <li>Financial Management</li>
                <li>Library Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Campfaq;
