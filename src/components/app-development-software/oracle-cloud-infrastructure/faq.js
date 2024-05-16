import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Oracle Cloud Infrastructure (OCI) FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Oracle Cloud Infrastructure
                (OCI) ?
              </h5>
              <p className="mt-3">
                The top 5 features for Oracle Cloud Infrastructure (OCI) are :
              </p>
              <ul>
                <li>Data Management</li>
                <li>Data Analysis</li>
                <li>Data Security</li>
                <li>Online Analytical Processing (OLAP)</li>
                <li>Analytics</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
