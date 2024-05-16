import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Orion Software's ERP solution Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Silver- Desktop (1 year)
                  <br />
                  <br />
                  &#8377; 2899
                </h5>
                <p>Device/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sync data across devices</li>
                <li>Create up to 3 companies</li>
                <li>Remove advertisement on invoices</li>
                <li>Set multiple pricing for items</li>
                <li>Update Items in bulk</li>
                <li>Export data to Tally</li>
                <li>Generate 10 E-way Bills per month</li>
                <li>Generate barcodes for items</li>
                <li>Set credit limit for parties</li>
                <li>Add Fixed Assets</li>
                <li>Billwise Profit and Loss Reports</li>
                <li>Balance Sheet</li>
                <li>Item Batch Report</li>
                <li>Item Serial Report</li>
                <li>Create up to 3 Firms</li>
                <li>Add Expenses with input tax credit</li>
                <li>Add additional fields to items</li>
                <li>Send transaction message to self</li>
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
                  Silver- Desktop + Mobile...
                  <br />
                  <br />
                  &#8377; 3399
                </h5>
                <p>Device/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sync data across devices</li>
                <li>Create up to 3 companies</li>
                <li>Remove advertisement on invoices</li>
                <li>Set multiple pricing for items</li>
                <li>Update items in bulk</li>
                <li>Export data to Tally</li>
                <li>Generate 10 E-way Bills per month</li>
                <li>Set credit limit for parties</li>
                <li>Add Fixed Assets</li>
                <li>Billwise Profit and Loss Reports</li>
                <li>Balance Sheet</li>
                <li>Item Batch Report</li>
                <li>Item Serial Report</li>
                <li>Create up to 3 Firms</li>
                <li>Add Expenses with input tax credit</li>
                <li>Add additional fields to items</li>
                <li>Send transaction message to self</li>
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
                  Silver- Desktop (3 years)
                  <br />
                  <br />
                  &#8377; 6599
                </h5>
                <p>Device/ 3 Years</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sync data across devices</li>
                <li>Create up to 3 companies</li>
                <li>Remove advertisement on invoices</li>
                <li>Set multiple pricing for items</li>
                <li>Update items in bulk</li>
                <li>Export data to Tally</li>
                <li>Generate 10 E-way Bills per month</li>
                <li>Set credit limit for parties</li>
                <li>Add Fixed Assets</li>
                <li>Billwise Profit and Loss Reports</li>
                <li>Balance Sheet</li>
                <li>Item Batch Report</li>
                <li>Item Serial Report</li>
                <li>Create up to 3 Firms</li>
                <li>Add Expenses with input tax credit</li>
                <li>Send transaction message to self</li>
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
                  Silver- Desktop + Mobile...
                  <br />
                  <br />
                  &#8377; 7599
                </h5>
                <p>Device/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sync data across devices</li>
                <li>Create up to 3 companies</li>
                <li>Remove advertisement on invoices</li>
                <li>Set multiple pricing for items</li>
                <li>Update Items in bulk</li>
                <li>Export data to Tally</li>
                <li>Generate 10 E-way Bills per month</li>
                <li>Set credit limit for parties</li>
                <li>Add Fixed Assets</li>
                <li>Billwise Profit and Loss Reports</li>
                <li>Balance Sheet</li>
                <li>Item Batch Report</li>
                <li>Item Serial Report</li>
                <li>Create up to 3 Firms</li>
                <li>Add Expenses with input tax credit</li>
                <li>Send transaction message to self</li>
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
