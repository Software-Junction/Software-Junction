import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> AnywhereCommerce FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for AnywhereCommerce ?</h5>
              <p className="mt-3">
                The top 5 features for AnywhereCommerce are:
              </p>
              <ul>
                <li>Inventory Management</li>
                <li>Customer Management</li>
                <li>CRM</li>
                <li>Multi Currency</li>
                <li>Payment Gateway Integration</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
