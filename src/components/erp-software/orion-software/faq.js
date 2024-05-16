import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Orion Software's ERP solution FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Orion Software's ERP solution  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Orion Software's ERP solution are :
              </p>
              <ul>
                 <li>Budgeting</li>
                <li>Asset management</li>
                <li>Accounting</li>
                <li>Attendance management</li>
                <li>Audit Trail</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
