import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">ShawMan PMS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Point of sale
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>User Management</li>
                <li>Table Management</li>
                <li>Channel Management</li>
                <li>Billing Management</li>
                <li>Discount Management</li>
                <li>Promotion Management</li>
                <li>Tax Management</li>
                <li>Finished Goods Inventory Management</li>
                <li>Audit & Reports</li>
                <li>Support & Training</li>
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
