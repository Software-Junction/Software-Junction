import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Primaseller Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Beginner
                  <br />
                  <br />
                  &#8377; 999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>POS Stores - 1</li>
                <li>Users - 3</li>
                <li>Warehouses - Nil</li>
                <li>SKUs - 5,000</li>
                <li>Purchase Orders</li>
                <li>Accounting Integration</li>
                <li>Shipper Management</li>
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
                  &#8377; 1999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>POS Stores - 2</li>
                <li>Online Integrations - All</li>
                <li>Online Orders/Month - 1200</li>
                <li>Users - 10</li>
                <li>Warehouses - 1</li>
                <li>SKUs - 10,000</li>
                <li>Purchase Orders</li>
                <li>Accounting Integration</li>
                <li>B2B Orders</li>
                <li>Shipper Management</li>
                <li>Multi-location Inventory Management</li>
                <li>Composite SKUs</li>
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
                  Advanced
                  <br />
                  <br />
                  &#8377; 4999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>POS Stores - 5</li>
                <li>Online Integrations - All</li>
                <li>Online Orders - 3,000</li>
                <li>Users - 20</li>
                <li>Warehouses - 3</li>
                <li>SKUs - 30,000</li>
                <li>Purchase Orders</li>
                <li>Accounting Integration</li>
                <li>Shipper Management</li>
                <li>B2B Orders</li>
                <li>Multi-location Inventory Management</li>
                <li>Composite SKUs</li>
                <li>Auto Purchase Ordering</li>
                <li>API Access</li>
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
