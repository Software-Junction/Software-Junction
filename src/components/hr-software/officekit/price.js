import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">OfficeKit HR Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Employee Management</li>
                <li>Leave Management</li>
                <li>Payroll Management</li>
                <li>Absence Management</li>
                <li>HR Software</li>
                <li>Appraisal Software</li>
                <li>Human Resources Software</li>
                <li>Software-UAE</li>
                <li>Best HR Software Provider in India</li>
                <li>Best HR Software Provider in UAE</li>
                <li>HRMS Software in India</li>
                <li>HRM</li>
                <li>Recruitment Management</li>
                <li>Time Management</li>
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
