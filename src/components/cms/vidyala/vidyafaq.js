import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Vidyafaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Vidyalay School ERP FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["vid-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Vidyalaya School ERP ?
              </h5>
              <p className="mt-3">
                The top 5 features for Vidyalaya School ERP are :
              </p>
              <ul>
                 <li>Financial Management</li>
                <li>Academics</li>
                <li>Fee Management</li>
                <li>Library Management</li>
                <li>Payment Gateway Integration</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vidyafaq;
