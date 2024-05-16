import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">eliteHRMS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  eliteHRMS - Mini (SaaS )
                  <br />
                  <br />
                  &#8377; 1199
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Admin & Common</li>
                <li>Master & ORG Structures</li>
                <li>HR DATA</li>
                <li>Payroll & Statutory</li>
                <li>Income Tax</li>
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
                  eliteHRMS - Standard (SaaS)
                  <br />
                  <br />
                  &#8377; 1499
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All eliteHRMS Mini features</li>
                <li>Leave Management</li>
                <li>Attendance Management</li>
                <li>Hire to Retire</li>
                <li>Loan's & Interest Management</li>
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
                  eliteHRMS-Prime - (SaaS)
                  <br />
                  <br />
                  &#8377; 1999
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All eliteHRMS - Standard features</li>
                <li>ESS Portal</li>
                <li>Training</li>
                <li>Mobile App</li>
                <li>Asset Management</li>
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
