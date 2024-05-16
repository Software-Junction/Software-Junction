import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Kobfaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>KOOB Library FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["kob-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for KOOB Library  ?
              </h5>
              <p className="mt-3">
                The top 5 features for KOOB Library are :
              </p>
              <ul>
                 <li>Catalog Management</li>
                <li>Barcode Scanning</li>
                <li>Alerts & Notifications</li>
                <li>Inventory Management</li>
                <li>Knowledge Management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kobfaq;
