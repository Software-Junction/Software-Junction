import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Shopnix Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Quickly
                  <br />
                  <br />
                  &#8377; 12000
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>500 products</li>
                <li>Free Domain + 1 Email</li>
                <li>100 SMS /month</li>
                <li>Free Payment Gateway</li>
                <li>Offline-Online payment</li>
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
                  Starter
                  <br />
                  <br />
                  &#8377; 24000
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>2,500 products</li>
                <li>Free Domain + 2 Emails</li>
                <li>500 SMS/month</li>
                <li>Free Payment Gateway</li>
                <li>Offline-Online Payment</li>
                <li>Free Mobile App</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 15000
                </h5>
                <p>3 Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>10,000 products</li>
                <li>Free Domain + 5 Emails</li>
                <li>1000 SMS/month</li>
                <li>Free Payment Gateway</li>
                <li>Offline-Online and International Payment</li>
                <li>Free Mobile App</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 30000
                </h5>
                <p>3 Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Products</li>
                <li>Free Domain + 10 Emails</li>
                <li>2500 SMS/month</li>
                <li>Free Payment Gateway</li>
                <li>Offline-Online and International Payment</li>
                <li>Premium Store Features</li>
                <li>Free Mobile App</li>
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
