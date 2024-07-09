import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Astral Technologies FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light faq-li rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Astral School Management System ?
              </h5>
              <p className="mt-3">
                The top 5 features for Astral School Management System are :
              </p>
              <ul>
                <li>Academics</li>
                <li>Accounting</li>
                <li>Activities</li>
                <li>Admission</li>
                <li>Attendance management</li>
                <li>Database backup/restore (Management)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
