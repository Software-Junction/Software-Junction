import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Mmifaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>MMI-School Management Software FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["mmi-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for MMI-School Management Software ?
              </h5>
              <p className="mt-3">
                The top 5 features for MMI-School Management Software are :
              </p>
              <ul>
                 <li>Attendance Management</li>
                <li>Academics</li>
                <li>Accounting</li>
                <li>Courses and Batches Management</li>
                <li>Admission</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mmifaq;
