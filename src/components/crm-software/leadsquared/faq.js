import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> LeadSquared FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for LeadSquared  ?
              </h5>
              <p className="mt-3">
                The top 5 features for LeadSquared are :
              </p>
              <ul>
                 <li>CRM & Sales Reports</li>
                <li>CRM Analytics</li>
                <li>CRM & Sales Dashboards</li>
                <li>CRM integration</li>
                <li>Capture Leads from Twitter/Facebooks</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
