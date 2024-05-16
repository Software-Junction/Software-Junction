import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Macfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> MAC EDMS FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["mac-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for MAC EDMS ?
              </h5>
              <p className="mt-3">
                The top 5 features for MAC EDMS are :
              </p>
              <ul>
                 <li>Admission</li>
                <li>Academics</li>
                <li>Fee Management</li>
                <li>Library Management</li>
                <li>Accounting</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Macfaq;
