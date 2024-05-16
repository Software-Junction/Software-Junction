import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Browntape Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  DIY Software
                  <br />
                  <br />
                  &#8377; 3
                </h5>
                <p>Per Order</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Advanced Analytics</li>
                <li>Marketplace Integration</li>
                <li>Order Management</li>
                <li>Inventory Management</li>
                <li>Marketplace Remittances</li>
                <li>Webstore Integration</li>
                <li>Pricing Management</li>
                <li>Minimum INR 5000 Recharge</li>
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
                  Managed Ecommerce Services
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Site Development</li>
                <li>Site Maintenance</li>
                <li>Marketplace Marketing</li>
                <li>SEO</li>
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
                  OmniChannel
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Order Hopping</li>
                <li>Multi-location Inventory</li>
                <li>Courier Integration</li>
                <li>Offline Inventory sync to Webstore</li>
                <li>Offline Inventory sync to Marketplaces</li>
                <li>Store Fulfilment</li>
                <li>Order Routing</li>
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
                  Browntape REST API
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>REST API Access</li>
                <li> Integration Docs & Support</li>
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
