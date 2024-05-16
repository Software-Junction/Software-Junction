import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Giddh Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Birch
                  <br />
                  <br />
                  &#8377; 1500
                </h5>
                <p>Per Company/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>10,000 Transactions/year (add ons Available)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Generate Credit Notes/Debit Notes</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Shortcut Key</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Oak
                  <br />
                  <br />
                  &#8377; 4000
                </h5>
                <p>Per Company/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>40,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (2 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Vine
                  <br />
                  <br />
                  &#8377; 10000
                </h5>
                <p>10 Companies/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>40,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (2 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Sequoia
                  <br />
                  <br />
                  &#8377; 15000
                </h5>
                <p>100 Companies/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>100,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (10 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
