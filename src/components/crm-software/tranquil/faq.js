import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Tranquil CRM FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Tranquil CRM  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Tranquil CRM are :
              </p>
              <ul>
                 <li>CRM</li>
                <li>Asset management</li>
                <li>CRM & Sales Dashboards</li>
                <li>Attendance management</li>
                <li>CRM & Sales Reports</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
