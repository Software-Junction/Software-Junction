import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Funnel Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Dashboards & Report...
                  <br />
                  <br />
                  &#8377; 21,528
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Monthly ad spend up to $50,000</li>
                <li>Unlimited number of users</li>
                <li>Support for unlimited number of advertising platforms</li>
                <li>Live chat support</li>
                <li>Free onboarding</li>
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
                  Dashboards & Report...
                  <br />
                  <br />
                  &#8377; 35,928
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Monthly ad spend up to $100,000</li>
                <li>Unlimited number of users</li>
                <li>Support for unlimited number of advertising platforms</li>
                <li>Live chat support</li>
                <li>Free onboarding</li>
                <li>30-day money back guarantee</li>
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
                  Dashboards & Report...
                  <br />
                  <br />
                  &#8377; 50,328
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Monthly ad spend up to $300,000</li>
                <li>Unlimited number of users</li>
                <li>Support for unlimited number of advertising platforms</li>
                <li>Live chat support</li>
                <li>Free onboarding</li>
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
                  Data Studio Connect...
                  <br />
                  <br />
                  &#8377; 14,328
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Monthly ad spend up to $50,000</li>
                <li>Unlimited number of users</li>
                <li>Support for all standard advertising platforms</li>
                <li>Live Chat Support</li>
                <li>Free onboarding</li>
                <li>30 days money back guarantee</li>
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
