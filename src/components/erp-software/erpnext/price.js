import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">ERPNext Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Open Source
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Free forever</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Features</li>
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
                  Cloud
                  <br />
                  <br />
                  &#8377; 820
                </h5>
                <p>Site/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Features</li>
                <li>Managed Hosting</li>
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
                  &#8377; 85,000
                </h5>
                <p>Site/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 50 Users</li>
                <li>All Features</li>
                <li>Managed Hosting</li>
                <li>Product Warranty</li>
                <li>Functional Support</li>
                <li>Success Manager</li>
                <li>Large DB support</li>
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
