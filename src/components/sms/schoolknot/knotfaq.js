import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Knotfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>SchoolKnot FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["knt-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for HD School  ?
              </h5>
              <p className="mt-3">
                The top 5 features for HD School are :
              </p>
              <ul>
                 <li>Attendance Management</li>
                <li>Inventory Management</li>
                <li>Mobile App</li>
                <li>Accounting Management</li>
                <li>Time & Attendance Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Knotfaq;
