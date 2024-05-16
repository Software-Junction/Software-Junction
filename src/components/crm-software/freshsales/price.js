import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Freshsales Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>For upto 3 Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Kanban View for Contacts, Accounts, and Deals</li>
                <li>Contact Lifecycle Stages</li>
                <li>Built-in Chat, Email, & Phone</li>
                <li>Email Templates</li>
                <li>Custom Fields</li>
                <li>Sales Dashboard</li>
                <li>Mobile App</li>
                <li>Activity Timeline</li>
                <li>Unique fields</li>
                <li>24x5 Support</li>
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
                  Growth
                  <br />
                  <br />
                  &#8377; 648
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Free, plus</li>
                <li>Web Forms</li>
                <li>SMS & WhatsApp</li>
                <li>Basic Workflows</li>
                <li>Contextual Collaboration with Slack</li>
                <li>Product Catalog</li>
                <li>Curated Reports</li>
                <li>Freshworks Marketplace</li>
                <li>1 CPQ license</li>
                <li>Basic Call Queues</li>
                <li>Team Inbox</li>
                <li>Custom Domains</li>
                <li>Rotten deals</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 2808
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Growth, plus</li>
                <li>Contact Scoring by Freddy AI</li>
                <li>Custom Sales Activities</li>
                <li>Auto-assignment Rules</li>
                <li>Sales Sequences</li>
                <li>Account Hierarchy</li>
                <li>Multiple Sales Pipelines</li>
                <li>Sales Emails by Freddy AI</li>
                <li>Deal Insights by Freddy AI</li>
                <li>Advanced Workflows</li>
                <li>Custom Reports</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 4248
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Pro, plus</li>
                <li>Field-level Permissions</li>
                <li>Custom Modules</li>
                <li>Forecasting Insights by Freddy AI</li>
                <li>Workflows for Custom Modules</li>
                <li>Sandbox</li>
                <li>Audit Logs</li>
                <li>Deal Teams</li>
                <li>Dedicated Account Manager</li>
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
