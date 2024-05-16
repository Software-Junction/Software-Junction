import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Timelabs HR Software Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Timelabs Pro - Attendance Management
                  <br />
                  <br />
                  &#8377; 20
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Web Based Time Attendance</li>
                <li>Employee Management</li>
                <li>Overtime Management</li>
                <li>Multi Shift Configuration</li>
                <li>Web Reporting</li>
                <li>Multiple Company Support</li>
                <li>Advance Leave Management</li>
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
                  Timelabs Pro - CORE HR
                  <br />
                  <br />
                  &#8377; 65
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Employee Management</li>
                <li>Time Attendance</li>
                <li>Overtime Management</li>
                <li>Multi Shift Configuration</li>
                <li>Multiple Company Support</li>
                <li>Web Reporting</li>
                <li>Advance Leave Management</li>
                <li>Advance Payroll Management</li>
                <li>Employee Self-Service (ESS) & M-APP</li>
                <li>Documents & Letters</li>
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
