import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Onefaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> OneSchool FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["ons-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for OneSchool ?
              </h5>
              <p className="mt-3">
                The top 5 features for OneSchool are :
              </p>
              <ul>
                 <li>Admission</li>
                <li>Academics</li>
                <li>Accounting</li>
                <li>Email Integration</li>
                <li>Attendance management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Onefaq;
