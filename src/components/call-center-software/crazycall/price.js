import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">CrazyCall Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Plan A
                  <br />
                  <br />
                  &#8377; 720
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1000 free minutes to 20 countries</li>
                <li>3 project available</li>
                <li>Free Inbound Calls</li>
                <li>45 day recording storage</li>
                <li>45 days call history</li>
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
                  Plan B
                  <br />
                  <br />
                  &#8377; 1440
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1000 free minutes to 40 countries</li>
                <li>Free inbound calls</li>
                <li>1 year recording storage</li>
                <li>1 year call history</li>
                <li>Access restriction</li>
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
                  Plan C
                  <br />
                  <br />
                  &#8377; 2880
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1000 free minutes to 60 countries</li>
                <li>Free inbound calls</li>
                <li>Unlimited recording storage</li>
                <li>Unlimited call history</li>
                <li>Access restriction</li>
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
