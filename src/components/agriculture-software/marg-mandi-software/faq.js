import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Marg Mandi Software FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top features for Marg Mandi Software ?</h5>
              <p className="mt-3">The top features for Marg Mandi Software are :</p>
              <ul>
                <li>Profit & Loss Statement</li>
                <li>Purchase Order</li>
                <li>Bills of Material</li>
                <li>Warehouse Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
