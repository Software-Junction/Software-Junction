import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Go Gst Bill Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Lifetime Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sales & Purchase Invoice</li>
                <li>Payment Receipt</li>
                <li>Customer & Product</li>
                <li>Stock</li>
                <li>Phone & Email Support</li>
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
                Premium Membership
                  <br />
                  <br />
                  &#8377; 1499
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sales & Purchase Invoice</li>
                <li>Payment Receipt</li>
                <li>Customer & Product</li>
                <li>Stock</li>
                <li>Phone & Email Support</li>
                <li>Staff Account</li>
                <li>Invoice Header Design</li>
                <li>Expense Manager</li>
                <li>Delivery Challan</li>
                <li>Quotation</li>
                <li>Proforma Invoice</li>
                <li>Purchase Order</li>
                <li>Credit / Debit Note</li>
                <li>Reports</li>
                <li>Import Customer & Product</li>
                <li>Send Email</li>
                <li>Document Conversion</li>
                <li>Multiple Invoice Template</li>
                <li>E-Way Bill</li>
                <li>E-Invoice</li>
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
