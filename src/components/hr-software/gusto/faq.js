import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Gusto FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Gusto  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Gusto are :
              </p>
              <ul>
                 <li>Employee Self Service Management</li>
                <li>Attendance management</li>
                <li>HR & Payroll</li>
                <li>Document Management</li>
                <li>Expense Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
