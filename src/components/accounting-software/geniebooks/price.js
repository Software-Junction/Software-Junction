import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">GenieBooks Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Blue Edition
                  <br />
                  <br />
                  &#8377; 6999
                </h5>
                <p>Unit/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Super User, 1-Role-based user, Sub-Users, 1 Companies</li>
                <li>File GST Returns</li>
                <li>Multi-layered Secured data</li>
                <li>Inventory</li>
                <li>Create GST ready invoices</li>
                <li>Accounting</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Green Edition
                  <br />
                  <br />
                  &#8377; 69990
                </h5>
                <p>Unit/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Super User 20 Companies</li>
                <li>Admin - 1, Custom users - 20, View Users - 100+</li>
                <li>File GST Returns</li>
                <li>Multi-layered Secured data</li>
                <li>Manage Inventory</li>
                <li>Order Management</li>
                <li>Accounting</li>
                <li>API integration</li>
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
