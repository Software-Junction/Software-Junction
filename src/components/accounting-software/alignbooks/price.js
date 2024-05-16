import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">AlignBooks Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>Company/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Sales Management - Invoice; Debit /Credit Note; Return; Bill
                  to Bill Payment; Dashboard
                </li>
                <li>
                  Purchase Management - Invoice; Debit /Credit Note; Return;
                  Bill to Bill Payment; Dashboard
                </li>
                <li>
                  Finance - Flexible COA; Receipt/Payment; Journal Voucher;
                  Expense Journal; Dashboard; GST; TDS Management
                </li>
                <li>API Integration Support</li>
                <li>User Management</li>
                <li>2 users</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 6000
                </h5>
                <p>Company/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Sales Management - Invoice; Debit /Credit Note; Return; Bill
                  to Bill Payment; Dashboard; Order
                </li>
                <li>
                  Purchase Management - Invoice; Debit /Credit Note; Return;
                  Bill to Bill Payment; Dashboard; Order
                </li>
                <li>
                  Finance - Flexible COA; Receipt/Payment; Journal Voucher;
                  Expense Journal; Dashboard; GST; TDS Management
                </li>
                <li>Inventory Management</li>
                <li>Configurable Reports</li>
                <li>Salesman/Agent Based Billing</li>
                <li>Custom Fields</li>
                <li>API Integration Support</li>
                <li>Ledger Attributes/Cost Centers</li>
                <li>Mobile Application</li>
                <li>User Management</li>
                <li>Approval Management</li>
                <li>Email Notification</li>
                <li>5 users</li>
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
                  Ultima
                  <br />
                  <br />
                  &#8377; 9000
                </h5>
                <p>Company/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Sales Management - Invoice; Debit /Credit Note; Return; Bill
                  to Bill Payment; Dashboard; Order; Price /Discount List;
                  Estimates; Dispatch
                </li>
                <li>
                  Purchase Management - Invoice; Debit /Credit Note; Return;
                  Bill to Bill Payment; Dashboard; Order; Price /Discount List;
                  Estimates; Dispatch
                </li>
                <li>
                  Finance - Flexible COA; Receipt/Payment; Journal Voucher;
                  Expense Journal; Dashboard; GST; TDS Management
                </li>
                <li>Inventory Management</li>
                <li>Asset Management</li>
                <li>Discrete Production</li>
                <li>Payroll</li>
                <li>Multi Currency ;Multi Branch</li>
                <li>Warehouse</li>
                <li>Configurable Reports</li>
                <li>Salesman/Agent Based Billing</li>
                <li>Custom Fields</li>
                <li>API Integration Support</li>
                <li>Ledger Attributes/Cost Centers</li>
                <li>Inventory Attributes</li>
                <li>Batch /Serial Wise Inventory</li>
                <li>Mobile Application;Mobile Customer Self Service</li>
                <li>User Management; Approval Management</li>
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
