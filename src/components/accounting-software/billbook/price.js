import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">My Bill Book Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Silver Plan
                  <br />
                  <br />
                  &#8377; 34
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Available on android</li>
                <li>Create Unlimited Invoices</li>
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
                Diamond Plan
                  <br />
                  <br />
                  &#8377; 217
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Android, iOS and web support</li>
                <li>Create Unlimited Invoices</li>
                <li>1 business + 1 user + 1 CA</li>
                <li>Inventory management</li>
                <li>GSTR-1 reports for tax filing</li>
                <li>Other business reports</li>
                <li>Call & Chat Support</li>
                
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
                Platinum Plan
                  <br />
                  <br />
                  &#8377; 250
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything on the Diamond Plan</li>
                <li>2 business + 3 user + 1 CA</li>
                <li>50 e-Way bills/year</li>
                <li>Offline Desktop App</li>
                <li>Staff attendance and payroll</li>
                <li>Bulk Download & Print Invoices</li>
                <li>Godown management</li>
                <li>Whatsapp and SMS marketing</li>
                
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
                Enterprise Plan
                  <br />
                  <br />
                  &#8377; 417
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything on the Diamond Plan</li>
                <li>Unlimited business and users + 1 CA</li>
                <li>Invoice Customisation</li>
                <li>Unlimited e-Way bills</li>
                <li>Unlimited e-Invoicing</li>
                <li>POS Billing on Desktop App</li>
                <li>Generate & scan barcode</li>
                <li>Online store</li>
                <li>Loyalty program</li>
                
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
