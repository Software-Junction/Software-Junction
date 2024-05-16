import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Horizon ERP Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                SINGLE PC License
                  <br />
                  <br />
                  &#8377; 13806
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>COMPLETE PRODUCT</li>
                
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
                THREE PC License
                  <br />
                  <br />
                  &#8377; 27612
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>COMPLETE PRODUCT</li>
                
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
                EIGHT PC License
                  <br />
                  <br />
                  &#8377; 53690
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>COMPLETE PRODUCT</li>
                
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
                Rental Plan
                  <br />
                  <br />
                  &#8377; 354
                </h5>
                <p>Monthly Rental</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>COMPLETE PRODUCT</li>
                
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
