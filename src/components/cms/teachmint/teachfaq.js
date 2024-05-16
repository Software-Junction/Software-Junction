import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Teachfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Teachmint FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["tec-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Teachmint ?
              </h5>
              <p className="mt-3">
                The top 5 features for Teachmint are :
              </p>
              <ul>
                 <li>Payment Gateway Integration</li>
                <li>Attendance management</li>
                <li>Fee Management</li>
                <li>Library Management</li>
                <li>Courses and Batches Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teachfaq;
