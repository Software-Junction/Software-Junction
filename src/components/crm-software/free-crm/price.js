import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Free CRM Pricing</h3>
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
                <p>Forever</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Leads Management</li>
                <li>Deal Management</li>
                <li>Account Management</li>
                <li>Project Management</li>
                <li>Client Management</li>
                <li>Workflow Automation</li>
                <li>Dependency Management</li>
                <li>Manage Tasks</li>
                <li>Time Tracking</li>
                <li>Invoices</li>
                <li>Payments</li>
                <li>Estimates</li>
                <li>Help Desk</li>
                <li>Proposals</li>
                <li>Knowledge Base</li>
                <li>Collaboration</li>
                <li>Communicate</li>
                <li>Kanban Board</li>
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
