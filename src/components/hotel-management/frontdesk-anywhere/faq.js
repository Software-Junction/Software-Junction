import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Frontdesk Anywhere FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Frontdesk Anywhere  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Frontdesk Anywhere are :
              </p>
              <ul>
                 <li>Front Office Management</li>
                <li>Inventory management</li>
                <li>POS invoicing</li>
                <li>Property Management</li>
                <li>House keeping</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
