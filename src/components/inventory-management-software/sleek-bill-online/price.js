import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Sleek Bill Online Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Offline Free <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Limit of 10 documents/month</li>
                <li>Sleek Bill branding on issued documents</li>
                <li>No dedicated support</li>
                <li>Limited access to advanced features</li>
                <li>Only one design template</li>
                <li>Add and Remove Payments</li>
                <li>Unit of Measurement in Documents & Stock</li>
                <li>Service Tax with SB Cess & KKC support</li>
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
                  Offline Premium
                  <br />
                  <br />
                  &#8377; 1999
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited documents</li>
                <li>Dedicated email support</li>
                <li>No Sleek Bill branding</li>
                <li>Multiple invoice templates & color options</li>
                <li>Small A5 invoice template</li>
                <li>Proforma, Tax, Retail or Excise Invoices</li>
                <li>Delivery note / Challan</li>
                <li>Show Total Amount in words</li>
                <li>Show Authorized Signatory field</li>
                <li>Add Discount per Product</li>
                <li>Paypal or Custom link on invoices</li>
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
                  Offline Premium + Inventory
                  <br />
                  <br />
                  &#8377; 3199
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Premium features +</li>
                <li>Unlimited support</li>
                <li>Vendors, Purchase Orders & Bills</li>
                <li>New Reports: Dr/Cr, Gross Margin, Stock</li>
                <li>Add stock via Purchase Bills</li>
                <li>Transport Labels (Original, Duplicate etc.)</li>
                <li>Access to all future updates and add-ons</li>
                <li>Email invoices straight from Sleek Bill</li>
                <li>Password protection options</li>
                <li>Import & export vendors, clients, items</li>
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
                  Online Premium <br />
                  <br />
                  &#8377; 143928
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited documents</li>
                <li>Online Secure Access from ANY DEVICE</li>
                <li>Dedicated support</li>
                <li>Optimized Invoice templates - A4, A5</li>
                <li>Proforma, Tax, Retail or Excise Invoices</li>
                <li>Delivery note / Challan</li>
                <li>Show Total Amount in words</li>
                <li>Optimized Invoice sending & notifications</li>
                <li>Add Discount per Item Or Total in % or value</li>
                <li>Multiple user access [September]</li>
                <li>GST assisted filing [September]</li>
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
