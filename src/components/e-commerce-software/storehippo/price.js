import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">StoreHippo Pricing</h3>
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
                  &#8377; 2999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5,000 Products</li>
                <li>Zero Transaction Fee</li>
                <li>Email Notifications</li>
                <li>SMS Notifications</li>
                <li>Mobile ready themes</li>
                <li>Payment Gateway Integration</li>
                <li>SEO Ready</li>
                <li>Discount Engine</li>
                <li>Facebook Store</li>
                <li>Integrated Logistics-FedEx</li>
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
                  &#8377; 5999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>10,000 Products</li>
                <li>Zero Transaction Fee</li>
                <li>Email Notifications</li>
                <li>SMS Notifications</li>
                <li>Mobile ready themes</li>
                <li>Payment Gateway Integration</li>
                <li>SEO Ready</li>
                <li>Discount Engine</li>
                <li>Facebook Store</li>
                <li>Integrated Logistics - Multiple Partners</li>
                <li>International Shipping</li>
                <li>Abandoned Cart</li>
                <li>Google Adwords-Credit Worth 2000</li>
                <li>Android Application</li>
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
                  Business
                  <br />
                  <br />
                  &#8377; 9999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Products</li>
                <li>Zero Transaction Fee</li>
                <li>Email Notifications</li>
                <li>SMS Notifications</li>
                <li>Payment Gateway Integration</li>
                <li>SEO Ready</li>
                <li>Mobile ready themes</li>
                <li>Discount Engine</li>
                <li>Facebook Store</li>
                <li>Integrated Logistics</li>
                <li>International Shipping</li>
                <li>Abandoned Cart</li>
                <li>Google Adwords-Credit Worth 2000</li>
                <li>Android Application</li>
                <li>iOS Application</li>
                <li>Multi-Vendor Store</li>
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
                  Enterise Plan
                  <br />
                  <br />
                  &#8377; 25000
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Sellers</li>
                <li>White-labelling</li>
                <li>B2B Features</li>
                <li>Audit Logs</li>
                <li>Dedicated Account Manager</li>
                <li>Granular Roles</li>
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
