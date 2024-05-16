import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Profaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>SchoolPro FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["pro-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for SchoolPro  ?
              </h5>
              <p className="mt-3">
                The top 5 features for SchoolPro are :
              </p>
              <ul>
                 <li>Attendance Management</li>
                <li>Academics</li>
                <li>Accounting</li>
                <li>Email Integration</li>
                <li>Admission</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profaq;
