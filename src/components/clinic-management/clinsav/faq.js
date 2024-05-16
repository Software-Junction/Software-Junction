import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> ClinSav FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for ClinSav  ?
              </h5>
              <p className="mt-3">
                The top 5 features for ClinSav are :
              </p>
              <ul>
                 <li>Preloaded clinic data</li>
                <li>Unlimited patients, appointments and case papers</li>
                <li>Most secure app</li>
                <li>Fully offline features</li>
                <li>Issue e-precriptions, invoices, payment receipts and letters</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
