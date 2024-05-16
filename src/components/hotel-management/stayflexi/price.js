import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Stayflexi Pricing</h3>
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
                  &#8377; 2016
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Property management system</li>
                <li>Built-in channel manager (100+ OTAs)</li>
                <li>Booking engine (with website)</li>
                <li>Payments automation</li>
                <li>Magic link (Self check-in)</li>
                <li>Mobile app (iOS & Android)</li>
                <li>Unlimited reports</li>
                <li>Unlimited users</li>
                <li>300+ integrations</li>
                <li>24/7 premium support</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 32328
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Starter, plus:</li>
                <li>POS</li>
                <li>Revenue manager</li>
                <li>Inventory manager (stock)</li>
                <li>Expenses manager</li>
                <li>Reputation manager</li>
                <li>Guest messaging (OTAs)</li>
                <li>Corporate & direct billing</li>
                <li>24/7 Priority support & account manager</li>
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
                  Flex
                  <br />
                  <br />
                  &#8377; 71928
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Mix and match features</li>
                <li>Volume discounts</li>
                <li>Multi property management</li>
                <li>White label and API</li>
                <li>Custom integrations</li>
                <li>Custom reports and dashboards</li>
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
