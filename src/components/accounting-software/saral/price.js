import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Saral Account Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Saral Bronze
                  <br />
                  <br />
                  &#8377; 7500
                </h5>
                <p>Single / Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>GST enabled Billing</li>
                <li>Invoices in Local Language</li>
                <li>Credit and Debit note transactions</li>
                <li>Barcode Integration and Generation</li>
                <li>Bulk Receipt and Counter Receipt</li>
                <li>Statutory reports and Returns</li>
                <li>Van or Route report</li>
                <li>Stock Report</li>
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
                  Saral Silver
                  <br />
                  <br />
                  &#8377; 15000
                </h5>
                <p>Single / Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All in Bronze +</li>
                <li>Group of Companies</li>
                <li>Loyalty Points</li>
                <li>Counter billing for multiple counters</li>
                <li>SMS & Push mail integration</li>
                <li>Weighing Machine Integration</li>
                <li>Locations wise user security</li>
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
                  Saral Gold
                  <br />
                  <br />
                  &#8377; 12000
                </h5>
                <p>Single / Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All in Bronze +</li>
                <li>GST enabled Accounting</li>
                <li>Service invoicing</li>
                <li>Inventory management</li>
                <li>Bank Reconciliation Statement</li>
                <li>Analytical Views and Reports</li>
                <li>Company wise user logins</li>
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
                  Saral Diamond
                  <br />
                  <br />
                  &#8377; 25000
                </h5>
                <p>Single / Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All in Gold +</li>
                <li>AMC/ Warranty Module</li>
                <li>Group of Companies</li>
                <li>Schemes Management</li>
                <li>SMS integration</li>
                <li>Push mails</li>
                <li>Locations wise user security</li>
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
