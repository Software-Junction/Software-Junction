import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> AppFolio Realm FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for AppFolio Realm ?</h5>
              <p className="mt-3">The top 5 features for AppFolio Realm are:</p>
              <ul>
                <li>Contact Management</li>
                <li>Expense Management</li>
                <li>Lead Management</li>
                <li>Email Marketing / SMS Marketing</li>
                <li>Lease and Maintenance Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
