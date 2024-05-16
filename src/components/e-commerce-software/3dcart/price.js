import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">3dcart Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic
                  <br />
                  <br />
                  &#8377; 2088
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>FTP Access</li>
                <li>Real-Time Shipping</li>
                <li>Shipping Labels</li>
                <li>Facebook Store</li>
                <li>Built-in Blog</li>
                <li>Single Page Checkout</li>
                <li>Built-in SEO Tools</li>
                <li>Product Reviews</li>
                <li>Phone Orders</li>
                <li>API Access</li>
                <li>Digital Downloads</li>
                <li>Tax Calculations & Reporting</li>
                <li>WishLists</li>
                <li>Gift Certificates</li>
                <li>Coupons and Discounts</li>
                <li>POS Module</li>
                <li>QuickBooks Connector</li>
                <li>eBay Integration</li>
                <li>Amazon Order Sync</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 5688
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>CRM</li>
                <li>Customer Groups</li>
                <li>Make-an-Offer</li>
                <li>3dFeedback</li>
                <li>Store Credits</li>
                <li>Abandoned Cart Saver</li>
                <li>Email Marketing Newsletters</li>
                <li>Email Accounts</li>
                <li>Daily Deals</li>
                <li>Group Deals</li>
                <li>Product comparison</li>
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
                  &#8377; 16488
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Autoresponder Campaigns</li>
                <li>Automation Rules</li>
                <li>Gift Registry</li>
                <li>Product Q & A</li>
                <li>Reward Points Loyalty Program</li>
                <li>Autoship™ Recurring Orders</li>
                <li>Facebook Dynamic Ads</li>
                <li>Houzz Order Import</li>
                <li>Pre-orders</li>
                <li>Sales Rep Management</li>
                <li>Priority Support</li>
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
