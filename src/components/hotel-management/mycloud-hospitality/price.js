import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">mycloud Hospitality Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic Plan
                  <br />
                  <br />
                  &#8377; 288
                </h5>
                <p>Room/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Hotel Software</li>
                <li>One POS</li>
                <li>Web Booking Engine</li>
                <li>Housekeeping</li>
                <li>TripAdvisor</li>
                <li>Accounts Receivable</li>
                <li>Reports</li>
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
                  Standard Plan
                  <br />
                  <br />
                  &#8377; 576
                </h5>
                <p>Room/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Mobile POS</li>
                <li>Mobile Booking Engine</li>
                <li>Two POS</li>
                <li>Accounts Interface</li>
                <li>Channel Manager</li>
                <li>Free Setup</li>
                <li>24/7 Online support</li>
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
                  Premium Plan
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>Room/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No Transaction Fee</li>
                <li>Unlimited POS</li>
                <li>Unlimited Interfaces</li>
                <li>Unlimited Channels</li>
                <li>Free Training</li>
                <li>Account Manager</li>
                <li>24/7 Hotline</li>
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
                  Add Ons
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Room/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Add on modules.</li>
                <li>Revenue Management</li>
                <li>Social Listening</li>
                <li>Rate Shopper</li>
                <li>Accounts Interface</li>
                <li>Website</li>
                <li>Mobile Apps</li>
                <li>Custom Reports</li>
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
