import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Hotelogix Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Premium
                  <br />
                  <br />
                  &#8377; 287
                </h5>
                <p>Room/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Minimum Billing $65</li>
                <li>Front Desk</li>
                <li>Housekeeping</li>
                <li>Unlimited Points of Sale</li>
                <li>Reports</li>
                <li>24 x 7 Live Chat Support</li>
                <li>Setup & Training</li>
                <li>Management Dashboard</li>
                <li>Review Express</li>
                <li>Web Booking Engine</li>
                <li>Rate Intelligence</li>
                <li>Dynamic Pricing</li>
                <li>Third Party 100+ Integrations - Extra Cost</li>
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
