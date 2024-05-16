import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">SYSOTEL.AI Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Silver Plan
                  <br />
                  <br />
                  &#8377; 3999
                </h5>
                <p>Full License</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>AI based White-Labelled Booking-Engine</li>
                <li>Google Hotel Ads Connectivity</li>
                <li>SEO Key Words & Google Analytics</li>
                <li>Payment Gateway Connectivity</li>
                <li>Intelligent Channel-Manager</li>
                <li>Central Reservations System (CRS)</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
