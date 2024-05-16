import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">SparkTG Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  VCC Start Up
                  <br />
                  <br />
                  &#8377; 1000
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Realtime Admin Dashboard</li>
                <li>Live Call Flow</li>
                <li>Live agent status</li>
                <li>Real-time Agent Dashboard</li>
                <li>Live incoming call information</li>
                <li>Customer Information Form (CRM)</li>
                <li>Outbound</li>
                <li>Call & Agent Reports</li>
                <li>Complete Call Recording</li>
                <li>Call Transfer & Call Conference</li>
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
