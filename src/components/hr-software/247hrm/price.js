import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">247HRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  247HRM SEED
                  <br />
                  <br />
                  &#8377; 1999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Payroll Management</li>
                <li>Statutory Compliance</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  247HRM SHOOT
                  <br />
                  <br />
                  &#8377; 2999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>247HRM SEED +</li>
                <li>Leave Management System</li>
                <li>Attendance Management System</li>
                <li>Employee Self Service</li>
                <li>Asset Management</li>
                <li>Grievance Management</li>
                <li>Employee Document Management</li>
                <li>Letter Generation</li>
                <li>Company Policy Documents</li>
                <li>Internal Social Feed Board</li>
                <li>Reports</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  247HRM SAPLING
                  <br />
                  <br />
                  &#8377; 3999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>247HRM SHOOT +</li>
                <li>Digital Onboarding</li>
                <li>Travel & Expenses</li>
                <li>Exit Management</li>
                <li>Mobile App Android</li>
                <li>Analytics</li>
                <li>Dedicated Support Personnel</li>
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
                  247HRM TREE
                  <br />
                  <br />
                  &#8377; 4999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>247HRM SAPLING</li>
                <li>Training Tracking</li>
                <li>Applicant Tracking System</li>
                <li>Performance Management</li>
                <li>Mobile App IOS</li>
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
