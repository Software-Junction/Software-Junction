import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Meri Dairy Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  2 Year
                  <br />
                  <br />
                  &#8377; 3000
                </h5>
                <p>For 2 Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>15 Free Rate chart update</li>
                <li>Amcu</li>
                <li>DPU Connection</li>
                <li>Hot Line support</li>
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
                  1 Year
                  <br />
                  <br />
                  &#8377; 2000
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5 Free Rate chart Support</li>
                <li>AMCU Connected</li>
                <li>DPU Connection</li>
                <li>Hot line Support</li>
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
                  5 Year
                  <br />
                  <br />
                  &#8377; 5000
                </h5>
                <p>For 5 Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>50 Rate chart</li>
                <li>AMCU</li>
                <li>Dairy DPU</li>
                <li>Hot Line support</li>
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
