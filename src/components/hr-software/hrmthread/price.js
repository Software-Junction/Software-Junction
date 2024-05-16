import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">HRMThread Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Base
                  <br />
                  <br />
                  &#8377; 108000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>50 No. of Employees Covered</li>
                <li>1 No. of Company Covered</li>
                <li>Employee Database</li>
                <li>Salary-Structure Configuration</li>
                <li>Automated Payroll Processing</li>
                <li>Statutory Compliance for PF / ESI/ PT / LWF / TDS</li>
                <li>Loans & Advances</li>
                <li>Dashboard</li>
                <li>Events & Reminders</li>
                <li>Inbuilt MIS Reports + Report Creation tool</li>
                <li>Data Import from Excel</li>
                <li>User Access Control</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 144000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Base feature+</li>
                <li>Employee Self Service (ESS)</li>
                <li>Leave Management / Leave Application Work-flow</li>
                <li>Full & Final Settlement Work Flow</li>
                <li>Tax Projection / Live Tax Planner</li>
                <li>HR-Letters Management</li>
                <li>Documents Management</li>
                <li>Induction & Exit Management with Workflows</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 216000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Standard feature+</li>
                <li>Reimbursement & Claim Management</li>
                <li>Investment Declaration Work Flow</li>
                <li>Time & Attendance</li>
                <li>Real-time Integration with Biometric Device</li>
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
