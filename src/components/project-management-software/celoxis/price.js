import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Celoxis Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  SaaS
                  <br />
                  <br />
                  &#8377; 1800
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Advanced and Real-world Scheduling</li>
                <li>Powerful and Color-coded Gantt Charts</li>
                <li>Resource Management</li>
                <li>Time Tracking</li>
                <li>Portfolio Management</li>
                <li>Project Budgeting and Costing</li>
                <li>Project Billing</li>
                <li>Expense Management</li>
                <li>Bug and Issue Tracking</li>
                <li>Task Management</li>
                <li>Collaboration</li>
                <li>Document Management</li>
                <li>Out of the box Integration and API</li>
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
                  On-Premise
                  <br />
                  <br />
                  &#8377; 32400
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Advanced and Real-world Scheduling</li>
                <li>Powerful and Color-coded Gantt Charts</li>
                <li>Resource Management</li>
                <li>Time Tracking</li>
                <li>Portfolio Management</li>
                <li>Project Budgeting and Costing</li>
                <li>Project Billing</li>
                <li>Expense Management</li>
                <li>Bug and Issue Tracking</li>
                <li>Task Management</li>
                <li>Collaboration</li>
                <li>Document Management</li>
                <li>Out of the box Integration and API</li>
                <li>Multi-OS and database support. Low TCO</li>
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
