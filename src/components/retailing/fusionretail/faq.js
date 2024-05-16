import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> FusionRetail FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for FusionRetail  ?
              </h5>
              <p className="mt-3">
                The top 5 features for FusionRetail are :
              </p>
              <ul>
                 <li>Auto Discount</li>
                <li>Barcode Integration</li>
                <li>Accounting</li>
                <li>Audit Trail</li>
                <li>Cloud Computing</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
