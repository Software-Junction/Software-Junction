import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Shopify Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic Shopify
                  <br />
                  <br />
                  &#8377; 2088
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 2 Staff accounts</li>
                <li>Unlimited Number of products</li>
                <li>24/7 support</li>
                <li>2.0% Transaction fees</li>
                <li>Manual order creation</li>
                <li>Discount codes</li>
                <li>Website and blog</li>
                <li>Abandoned cart recovery</li>
                <li>Free SSL certificate</li>
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
                  Pro Shopify
                  <br />
                  <br />
                  &#8377; 5688
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All feature in Basic</li>
                <li>Up to 5 Staff accounts</li>
                <li>Gift cards</li>
                <li>Professional reports</li>
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
                  Advanced Shopify
                  <br />
                  <br />
                  &#8377; 16488
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All feature in Pro</li>
                <li>Up to 15 Staff accounts</li>
                <li>Advanced report builder</li>
                <li>Third-party calculated shipping rates</li>
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
