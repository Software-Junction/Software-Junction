import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">WebWork Tracker Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Pro
                  <br />
                  <br />
                  &#8377; 360
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited time tracking</li>
                <li>Unlimited projects and tasks</li>
                <li>Unlimited members and teams</li>
                <li>Timesheets</li>
                <li>Real-time monitoring</li>
                <li>Productivity metrics</li>
                <li>4 screenshot modes</li>
                <li>App and website usage</li>
                <li>Activity level tracking</li>
                <li>Attendance monitoring</li>
                <li>Leave and holidays</li>
                <li>10+ exportable reports</li>
                <li>Create and share invoices</li>
                <li>Chat</li>
                <li>Geolocation tracking</li>
                <li>1 Integration</li>
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
                  &#8377; 576
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Timesheet approvals</li>
                <li>Advanced app and website report</li>
                <li>Video meetings</li>
                <li>Payroll</li>
                <li>Payable invoices</li>
                <li>Send payment</li>
                <li>Shift scheduling</li>
                <li>Schedule reports</li>
                <li>Sharable reports</li>
                <li>Screenshot data retention (1 year)</li>
                <li>All integrations</li>
                <li>Unlimited chat and file history</li>
                <li>Advanced work-life balance metrics</li>
                <li>Priority support</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>White label</li>
                <li>Custom API</li>
                <li>Custom dashboard</li>
                <li>Custom reports</li>
                <li>Feature on demand</li>
                <li>Concierge account setup</li>
                <li>Premium support</li>
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
