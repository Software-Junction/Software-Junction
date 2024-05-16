import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> KareXpert's EMR/EHR Software FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for KareXpert's EMR/EHR Software  ?
              </h5>
              <p className="mt-3">
                The top 5 features for KareXpert's EMR/EHR Software are :
              </p>
              <ul>
                 <li>Vendor Management</li>
                <li>Time Tracking</li>
                <li>Document Management</li>
                <li>Practice Management</li>
                <li>Appointment Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
