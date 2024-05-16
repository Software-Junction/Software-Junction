import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Webmedy Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Webmedy Basic
                  <br />
                  <br />
                  &#8377; 1595
                </h5>
                <p>Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 5 user accounts</li>
                <li>10GB of storage</li>
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
                  Webmedy Advanced
                  <br />
                  <br />
                  &#8377; 6500
                </h5>
                <p>Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 20 user accounts</li>
                <li>25GB of storage</li>
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
                  Webmedy Power
                  <br />
                  <br />
                  &#8377; 12950
                </h5>
                <p>Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited user accounts</li>
                <li>Unlimited storage</li>
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
