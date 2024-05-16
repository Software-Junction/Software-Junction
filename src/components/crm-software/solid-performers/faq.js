import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Solid Performers CRM FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Solid Performers CRM  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Solid Performers CRM are :
              </p>
              <ul>
                 <li>CRM & Sales Reports</li>
                <li>Financial management</li>
                <li>CRM</li>
                <li>CRM & Sales Dashboards</li>
                <li>Expense Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
