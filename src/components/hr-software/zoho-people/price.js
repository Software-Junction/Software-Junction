import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Zoho People Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  ESSENTIAL HR
                  <br />
                  <br />
                  &#8377; 50
                </h5>
                <p>Employee/Month Billed Annua...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Basic HRIS with self-service login</li>
                <li>Employee Onboarding</li>
                <li>Leave Management</li>
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
                  &#8377; 100
                </h5>
                <p>Employee/Month Billed Annua...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Essential HR +</li>
                <li>Attendance</li>
                <li>Timesheets</li>
                <li>Shift Scheduling</li>
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
                  PREMIUM
                  <br />
                  <br />
                  &#8377; 150
                </h5>
                <p>Employee/Month Billed Annua...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Professional +</li>
                <li>Performance Management</li>
                <li>Zoho Analytics Integration</li>
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
                  ENTERPRISE
                  <br />
                  <br />
                  &#8377; 200
                </h5>
                <p>Employee/Month Billed Annua...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Premium +</li>
                <li>Cases (Employee Query Management)</li>
                <li>Learning Management System</li>
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
