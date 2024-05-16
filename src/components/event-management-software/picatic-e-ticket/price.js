import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Picatic E-Ticket Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>ticket</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No monthly fee</li>
                <li>No contracts</li>
                <li>Unlimited Active Events</li>
                <li>Unlimited Priced events</li>
                <li>Branded Events</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm">
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Pro Plan
                  <br />
                  <br />
                  &#8377; 180
                </h5>
                <p>ticket</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom fee</li>
                <li>Custom Contract</li>
                <li>Custom Integrations</li>
                <li>Unlimited Active Events</li>
                <li>Unlimited Priced Tickets</li>
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
