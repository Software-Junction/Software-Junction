import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> iCRM FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for iCRM  ?
              </h5>
              <p className="mt-3">
                The top 5 features for iCRM are :
              </p>
              <ul>
                 <li>Cloud Computing</li>
                <li>Case management</li>
                <li>CRM</li>
                <li>CRM & Sales Dashboards</li>
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
