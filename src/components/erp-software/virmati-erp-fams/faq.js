import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Viramati's ERP-FAMS FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Viramati's ERP-FAMS  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Viramati's ERP-FAMS are :
              </p>
              <ul>
                 <li>Depreciation Management</li>
                <li>Asset management</li>
                <li>Accounting</li>
                <li>Depreciation Calculation</li>
                <li>Document Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
