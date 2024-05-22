import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">
              GeniPulse Hospital Management Software Pricing
            </h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  User Wise License
                  <br />
                  <br />
                  &#8377; 59,999
                </h5>
                <p>5 User License</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Free : 3 Months live trial with full support</li>
                <li>5 user license @ 59999</li>
                <li>10 user license @ 69999</li>
                <li>Unlimited user license @ 79999</li>
                <li>Extra users 5000/- INR</li>
                <li>Note : All Features and modules will be available</li>
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
