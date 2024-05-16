import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Alpha Software Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Build
                  <br />
                  <br />
                  &#8377; 71640
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Developer License</li>
                <li>Server License not included</li>
                <li>Offline Features</li>
                <li>Build Desktop/Web/Mobile Apps</li>
                <li>Node.js</li>
                <li>Dashboarding & Analytics</li>
                <li>Mobile Optimized Forms</li>
                <li>Adobe PhoneGap (Cordova) Build Integration</li>
                <li>Email Support</li>
                <li>
                  Server Licenses Optional (available at an additional cost)
                </li>
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
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Build & Deploy
                  <br />
                  <br />
                  &#8377; 359640
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Build</li>
                <li>1 Server License</li>
                <li>Deploy Applications</li>
                <li>Alpha Launch Basic</li>
                <li>
                  Server Licenses Optional (available at an additional cost)
                </li>
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
