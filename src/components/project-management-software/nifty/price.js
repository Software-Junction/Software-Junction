import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Nifty Pricing</h3>
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
                  &#8377; 0
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 10 Users</li>
                <li>1 GB Storage</li>
                <li>3 Active Projects</li>
                <li>Discussions</li>
                <li>Milestones</li>
                <li>Tasks</li>
                <li>Docs</li>
                <li>Files</li>
                <li>Team Chat</li>
                <li>Self-Serve Help Center</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 6408
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 100 Users</li>
                <li>Unlimited Projects</li>
                <li>Unlimited Guests & Clients</li>
                <li>1 TB Storage</li>
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
                  Business
                  <br />
                  <br />
                  &#8377; 8928
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 50 Users</li>
                <li>Unlimited Guests & Clients</li>
                <li>Unlimited Projects</li>
                <li>500 GB Storage</li>
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
