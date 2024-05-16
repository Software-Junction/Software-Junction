import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Peoplebox Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  OKR Platform
                  <br />
                  <br />
                  &#8377; 576
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
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
                  Full Suite - Professio...
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
                  Full Suite - Premium
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Customer Success Manager</li>
                <li>Onboarding & Implementation</li>
                <li>Managers Training</li>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
                  Talent Management
                  <br />
                  <br />
                  &#8377; 504
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Performance Reviews</li>
                <li>1-1 Meetings</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
