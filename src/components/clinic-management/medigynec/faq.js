import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> MedigyneC Gynecology Hospital Management System FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for MedigyneC Gynecology Hospital Management System  ?
              </h5>
              <p className="mt-3">
                The top 5 features for MedigyneC Gynecology Hospital Management System are :
              </p>
              <ul>
                 <li>HRM</li>
                <li>Medical History Records</li>
                <li>EMR / EHR</li>
                <li>Hospital Support Function System</li>
                <li>Mobile Access</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
