import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">MyOperator Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Office IVR System
                  <br />
                  <br />
                  &#8377; 2499
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>2000 free minutes</li>
                <li>80 Users</li>
                <li>8 Departments</li>
                <li>Unlimited data record storage</li>
                <li>Live Call Transfer</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Cloud Call Center - Desk
                  <br />
                  <br />
                  &#8377; 5000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5000 free minutes</li>
                <li>80 Users</li>
                <li>15 Departments</li>
                <li>API & CRM Integration</li>
                <li>Outbound Dial</li>
                <li>Sticky Agent</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Cloud Call Center - Prime
                  <br />
                  <br />
                  &#8377; 20000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>20000 free minutes</li>
                <li>Unlimited User & Department</li>
                <li>API & CRM Integration</li>
                <li>Advanced Call reports</li>
                <li>Click to call</li>
                <li>Call barging</li>
                <li>Remarketing</li>
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
