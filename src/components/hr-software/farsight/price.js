import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Farsight Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Essential
                  <br />
                  <br />
                  &#8377; 35
                </h5>
                <p>Per Employee Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>HRIS</li>
                <li>Attendance & Leave Management</li>
                <li>Payroll with Statutory Compliances</li>
                <li>ESS and Mobile Application</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 59
                </h5>
                <p>Per Employee Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All From Essential +</li>
                <li>Geo Fencing & Tagging</li>
                <li>Help Desk</li>
                <li>Inventory</li>
                <li>Surveys</li>
                <li>Online Employee Clearance Workflows</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 111
                </h5>
                <p>Per Employee Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All From Professional +</li>
                <li>Performance Appraisal</li>
                <li>Training Development</li>
                <li>Advance Off-boarding Workflows</li>
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
