import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">TeamGantt Pricing</h3>
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
                <li>Beautiful Gantt Charts</li>
                <li>Up to 3 Users</li>
                <li>Forecasting of Workloads</li>
                <li>Dependencies</li>
                <li>Filter</li>
                <li>Your Team Can Update Their Progress</li>
                <li>Daily Email Reminders</li>
                <li>Simple Task List Views</li>
                <li>Share Projects with Team Members</li>
                <li>Conversations on Tasks</li>
                <li>In-App Messaging</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 1796
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Feature in free</li>
                <li>Custom Project Templates</li>
                <li>Project History & Undo</li>
                <li>Baselines - Compare Actual vs Original Plan</li>
                <li>Share a View Only Link with Unlimited Users</li>
                <li>Embed Gantt Charts into Your Other Websites</li>
                <li>Unlimited Guest Accounts</li>
                <li>Phone Support</li>
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
                Advanced
                  <br />
                  <br />
                  &#8377; 2156
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Hourly Estimating and Resourcing</li>
                <li>Start & Stop Timers</li>
                <li>Manual Time Entry</li>
                <li>Reporting</li>
                <li>Early Detection of Hours Going Over Budget</li>
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
