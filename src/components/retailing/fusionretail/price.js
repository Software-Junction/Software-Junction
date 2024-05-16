import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">FusionRetail Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Express
                  <br />
                  <br />
                  &#8377; 35,000
                </h5>
                <p>Lifetime - Multi Users (5)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Point of Sale (Touch & Scan)</li>
                <li>Inventory & Re-order Management</li>
                <li>Financial Management</li>
                <li>Mobile Reports</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 65,000
                </h5>
                <p>Lifetime - Multi Users (5)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Point-of-Sale</li>
                <li>Inventory Management</li>
                <li>Financial Management</li>
                <li>Mobile Reports</li>
                <li>Customer Relationship</li>
                <li>Customer Service</li>
                <li>Supply Chain Management</li>
                <li>Payroll</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 95,000
                </h5>
                <p>Lifetime - Multi Users (5)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Standard+</li>
                <li>Point-of-Sale</li>
                <li>Inventory Management</li>
                <li>Financial Management</li>
                <li>Mobile Reports</li>
                <li>Customer Relationship</li>
                <li>Customer Service</li>
                <li>Payroll</li>
                <li>Retail Analytics</li>
                <li>Scheme & Promotion</li>
                <li>Supply Chain Management</li>
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
                  ERP
                  <br />
                  <br />
                  &#8377; 225,000
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Additional Users Rs. 10500</li>
                <li>Professional+</li>
                <li>Chain Store Management (EBO, MBO & Franchisee)</li>
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
