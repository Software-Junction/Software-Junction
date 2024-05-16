import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Vtiger CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  One Growth
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead and Contact Management</li>
                <li>Salesforce Automation - Multiple pipelines</li>
                <li>Internal Collaboration</li>
                <li>Help Desk</li>
                <li>Inventory Management</li>
                <li>Reports and Analytics</li>
                <li>Automation</li>
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
                  One Professional
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Salesforce Automation - Profile & Engagement Scoring</li>
                <li>
                  Help Desk - Social Ticketing, Round Robin Ticket Assignment,
                  Least Loaded Ticket Assignment, Agent Level Business Hours
                </li>
                <li>
                  Conversations - Internal Team Collaboration Live Web Chat
                </li>
                <li>
                  Dashboards - Sales Insights, Support Insights, Customizable
                  Reports & Dashboards
                </li>
                <li>
                  Inventory Management - Invoicing Vendor Management, Purchase
                  Order Management, Subscriptions, Payment Tracking, Sales Order
                </li>
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
                  One Enterprise
                  <br />
                  <br />
                  &#8377; 3024
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Contact Engagement - Best Time to Contact</li>
                <li>Salesforce Automation - Multi Currencies</li>
                <li>Help Desk - Work order management</li>
                <li>
                  Project Management - Automated Time Tracking and Billing
                </li>
                <li>
                  Internal Ticketing - Internal Ticketing system for employees
                  and Insights
                </li>
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
