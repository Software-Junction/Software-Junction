import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Codefaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> CodeAchi Library Management System FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["cod-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for CodeAchi Library Management System  ?
              </h5>
              <p className="mt-3">
                The top 5 features for CodeAchi Library Management System are :
              </p>
              <ul>
                 <li>Catalog Management</li>
                <li>Barcode Scanning</li>
                <li>Knowledge Management</li>
                <li>Inventory Management</li>
                <li>Acquisition Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Codefaq;
