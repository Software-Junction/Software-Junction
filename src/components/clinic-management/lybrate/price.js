import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Lybrate Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  lybrate cube
                  <br />
                  <br />
                  &#8377; 799
                </h5>
                <p>Month/Clinic</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Calendar - Manage Appointments</li>
                <li>Electronic Medical Records</li>
                <li>Billing and Payments</li>
                <li>Expense Management</li>
                <li>Inventory Management</li>
                <li>Detailed Reports</li>
                <li>Specialty Specific Features</li>
                <li>Free Website</li>
                <li>Free Android and iOS app</li>
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
                  lybrate tab
                  <br />
                  <br />
                  &#8377; 1349
                </h5>
                <p>Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Month for Android</li>
                <li>Patient Self Registration</li>
                <li>Real-Time Feedback</li>
                <li>Patient Education Tips</li>
                <li>Patient Education Videos</li>
                <li>Offline Support</li>
                <li>Free Android and iOS app</li>
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
