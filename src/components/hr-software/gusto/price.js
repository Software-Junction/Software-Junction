import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Gusto Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Simple
                  <br />
                  <br />
                  &#8377; 2880
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Full-service single-state payroll including W-2s and 1099s
                </li>
                <li>Employee profiles and self-service</li>
                <li>Basic hiring and onboarding tools</li>
                <li>Gusto-brokered health insurance administration</li>
                <li>Employee financial benefits</li>
                <li>Payroll and time-off reports</li>
                <li>Custom admin permissions</li>
                <li>
                  Integrations for accounting, time tracking, expense
                  management, and more
                </li>
                <li>Full support</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 5760
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in the Simple plan, plus:</li>
                <li>
                  Full-service multi-state payroll including W-2s and 1099s
                </li>
                <li>Next-day direct deposit</li>
                <li>Advanced hiring and onboarding tools</li>
                <li>PTO management and policies</li>
                <li>Time tracking and project tracking</li>
                <li>Workforce costing and reports</li>
                <li>Team management tools</li>
                <li>Time Kiosk</li>
                <li>Performance reviews</li>
                <li>Employee surveys and insights</li>
                <li>Priority support and HR resources +$8/mo per person</li>
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
