import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Wolken ServiceDesk Pricing</h3>
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
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Dynamic views</li>
                <li>Case Management</li>
                <li>Admin View</li>
                <li>Email Notification</li>
                <li>Company configuration</li>
                <li>Channel configuration</li>
                <li>Dispatcher rule</li>
                <li>User Management</li>
                <li>SLA Management</li>
                <li>Email only</li>
                <li>Ticket Trend report</li>
                <li>SSL</li>
                <li>Workbench</li>
                <li>Unified view for agent</li>
                <li>Data and Storage</li>
                <li>Onboarding guide & videos</li>
                <li>Email Support</li>
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
                  Lite (Everything in free +)
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Account 360 degree view</li>
                <li>CUBOT BI reporting</li>
                <li>Email Support - 24*5</li>
                <li>Catalog configuration</li>
                <li>Response templates</li>
                <li>Team configuration</li>
                <li>Real time report</li>
                <li>Internal KB</li>
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
                  Premium (Everything in Lite +)
                  <br />
                  <br />
                  &#8377; 3960
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Manager Dashboard</li>
                <li>Multi-lingual support</li>
                <li>Skill-based Routing</li>
                <li>Agent shifts</li>
                <li>SLA Reminder & Escalation</li>
                <li>Extendable API Limits</li>
                <li>Customer segments</li>
                <li>Multiple Products (upto 5)*</li>
                <li>Auto-assignment</li>
                <li>Knowledge Base</li>
                <li>KB Search</li>
                <li>KB Article workflow</li>
                <li>KB suggester</li>
                <li>User read only</li>
                <li>User group</li>
                <li>Bulk case edit</li>
                <li>CSAT management</li>
                <li>WFM</li>
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
                  Enterprise (Everything in ..)
                  <br />
                  <br/>
                  &#8377; 5832
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Status configuration</li>
                <li>Business hours configuration</li>
                <li>Profile for flex read and write access</li>
                <li>Notification detail</li>
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
