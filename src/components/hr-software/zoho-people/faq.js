import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Zoho People FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Zoho People  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Zoho People are :
              </p>
              <ul>
                 <li>Help Desk</li>
                <li>Employee Self Service management</li>
                <li>Email Integration</li>
                <li>Document Management</li>
                <li>Exit Management & Seperation Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
