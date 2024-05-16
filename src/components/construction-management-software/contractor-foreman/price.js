import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Contractor Foreman Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Standard
                  <br />
                  <br />
                  &#8377; 3528
                </h5>
                <p>For 3 Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>30 Day Free Trial + Price Lock</li>
                <li>Free Support & Free Updates</li>
                <li>Unlimited Projects</li>
                <li>Time Cards</li>
                <li>Estimating</li>
                <li>Invoicing</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 6264
                </h5>
                <p>For 8 Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>30 Day Free Trial + Price Lock</li>
                <li>Free Support & Free Updates</li>
                <li>Unlimited Projects</li>
                <li>Time Cards</li>
                <li>Estimating</li>
                <li>QuickBooks Online Integration</li>
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
                  &#8377; 8856
                </h5>
                <p>For 15 Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>30 Day Free Trial + Price Lock</li>
                <li>Free Support & Free Updates</li>
                <li>Unlimited Projects</li>
                <li>Estimating</li>
                <li>QuickBooks Online & Desktop Integration</li>
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
