import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">QuickBooks Online Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Simple Start
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 user</li>
                <li>Basic business reports</li>
                <li>1 sales channel connection</li>
                <li>Banking with 5.00% APY</li>
                <li>Send invoices and get paid</li>
                <li>Core features</li>
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
                  Essentials
                  <br />
                  <br />
                  &#8377; 4320
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Adds more detailed reports and a business snapshot</li>
                <li>3 sales channel connections</li>
                <li>Multi-currency transactions</li>
                <li>Manage and auto-pay bills</li>
                <li>Enter time</li>
                <li>Core features</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 6480
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5 users</li>
                <li>
                  Gives you all available reports for accounting and inventory
                </li>
                <li>All sales channel connections</li>
                <li>Multi-currency transactions</li>
                <li>Manage and auto-pay bills</li>
                <li>Enter time</li>
                <li>Track profitability by project</li>
                <li>Build a financial plan</li>
                <li>Track orders and inventory</li>
                <li>Core features</li>
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
