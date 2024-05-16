import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">OhoShop Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 1490
                </h5>
                <p>User/Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Rs 5000 Setup fees</li>
                <li>Minimum Commitment / 6 Months</li>
                <li>Products / 1000</li>
                <li>Platform / iOS and Android</li>
                <li>White Label</li>
                <li>Branding</li>
                <li>App Analytics</li>
                <li>COD, Credit, Debit, Net transfer</li>
                <li>Free Payment Gateway Setup</li>
                <li>Free Logistics Gateway</li>
                <li>Push Notifications</li>
                <li>Custom icon</li>
                <li>Logo</li>
                <li>Splash screen</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 2990
                </h5>
                <p>User/Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5000 Setup fees</li>
                <li>Minimum Commitment / 6 Months</li>
                <li>Products / 5000</li>
                <li>Platform / iOS and Android</li>
                <li>White Label</li>
                <li>Mobile Website</li>
                <li>Branding</li>
                <li>App Analytics</li>
                <li>COD, Credit, Debit, Net transfer</li>
                <li>Free Payment Gateway Setup</li>
                <li>Free Logistics Gateway</li>
                <li>Push Notifications</li>
                <li>Bulk Import</li>
                <li>Custom icon</li>
                <li>Logo</li>
                <li>Splash screen</li>
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
                  Advance
                  <br />
                  <br />
                  &#8377; 5990
                </h5>
                <p>User/Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Rs 5000 Setup fees</li>
                <li>Minimum Commitment / 6 Month</li>
                <li>Products / 10000</li>
                <li>Platform / iOS and Android</li>
                <li>White Label</li>
                <li>Mobile Website</li>
                <li>Branding</li>
                <li>App Analytics</li>
                <li>COD, Credit, Debit, Net transfer</li>
                <li>Free Payment Gateway Setup</li>
                <li>Free Logistics Gateway</li>
                <li>Push Notifications</li>
                <li>Bulk Import</li>
                <li>Custom icon</li>
                <li>Logo</li>
                <li>Splash screen</li>
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
