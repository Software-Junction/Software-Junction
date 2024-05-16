import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Kizeo Forms Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  15 Day Free Trial
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>10 Users for 15 Days</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Without Commitment, no credit card required!</li>
                <li>UNLIMITED Forms</li>
                <li>UNLIMITED Submissions</li>
                <li>All Advanced Features</li>
                <li>Support by email and phone 5/7 days</li>
                <li>UNLIMITED Access To Kizeo Forms Template Library</li>
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
                  Monthly Plan
                  <br />
                  <br />
                  &#8377; 1584
                </h5>
                <p>Per User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>UNLIMITED Forms</li>
                <li>UNLIMITED Submissions</li>
                <li>UNLIMITED Data Storage</li>
                <li>ALL Advanced Features</li>
                <li>Support by email and phone 5/7 days</li>
                <li>UNLIMITED Access To Kizeo Forms Template Library</li>
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
                  Annual Plan
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>Per User/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>UNLIMITED Forms</li>
                <li>UNLIMITED Submissions</li>
                <li>UNLIMITED Data Storage</li>
                <li>ALL Advanced Features</li>
                <li>Access API REST</li>
                <li>Support by email and telephone 5/7 days</li>
                <li>Up to 30% Discount</li>
                <li>UNLIMITED Access To Kizeo Forms Template Library</li>
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
