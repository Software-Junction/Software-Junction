import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">IVEPOS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                IVEPOS
                  <br />
                  <br />
                  &#8377; 584
                </h5>
                <p>Device/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>One Click Billing</li>
                <li>Inventory Management</li>
                <li>Reports & Analytics</li>
                <li>Customer Management</li>
                <li>Restaurant and Bar Features</li>
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
