import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Matrixfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Class Matrix FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["mat-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Class Matrix ?
              </h5>
              <p className="mt-3">
                The top 5 features for Class Matrix are :
              </p>
              <ul>
                 <li>Fee Management</li>
                <li>Transport / Fleet management</li>
                <li>Examination Management</li>
                <li>HR & Payroll</li>
                <li>Time & Attendance management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Matrixfaq;
