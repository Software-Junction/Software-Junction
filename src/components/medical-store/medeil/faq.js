import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Medeil Cloud POS FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Medeil Cloud POS  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Medeil Cloud POS are :
              </p>
              <ul>
                 <li>Email Marketing / SMS Marketing</li>
                <li>Inventory Managementg</li>
                <li>Accounting</li>
                <li>CRM & Sales Dashboards</li>
                <li>Stock Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
