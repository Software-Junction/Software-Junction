import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Bhoomi Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  BHOOMI Pre Sales CRM On Cloud <br />
                  <br />
                  &#8377; 1,200
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead Management</li>
                <li>Complete Lead History</li>
                <li>Compaign Details with cost</li>
                <li>Followup Tracking</li>
                <li>User/ Source analysis</li>
                <li>Import Leads</li>
                <li>Integrated with Website and portals</li>
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
                BHOOMI Post Sales CRM on Cloud  <br />
                  <br />
                  &#8377; 4,000
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Property Inventory Management</li>
                <li>Bookings with Client Data</li>
                <li>Multiple Payment Plans</li>
                <li>Broker Management</li>
                <li>GST Invoicing with Auto Demand Notes</li>
                <li>Payment Followups with Receipts</li>
                <li>Interest Calculations</li>
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
                Bhoomi Construction Management ERP on Cloud <br />
                  <br />
                  &#8377; 10,000
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Project Management - Project, Planning & Progress</li>
                <li>Contractor Mgmt - Contracts, Contractor Bills & Payments</li>
                <li>Purchase Mgmt - Quotations, Purchase order, to Invoice</li>
                <li>Inventory Mgmt - Indents, Issues, Stock Valuations</li>
                <li>ERP Admin - Roles, Permissions, Approvals</li>
                <li>Financial Management - Tally Integration, Receipts, Payments</li>
                <li>Multi Level Approvals at each stage</li>
                <li>Documents attachment for transactions</li>
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
                Project & Contractor Management on Cloud  <br />
                  <br />
                  &#8377; 4,000
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Project Heirarchy & Budgeting</li>
                <li>BIlls Of Qty for Works and Phases</li>
                <li>Monthly and Daily Planning</li>
                <li>Daily Progress Reporting</li>
                <li>Contracts with Work/Phase/Rate</li>
                <li>Advances and Deductions/ Hold Amounts</li>
                <li>Contractors Bills direct from Daily Progress</li>
                <li>Contractors Payments with Credit/Debit Notes</li>
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
