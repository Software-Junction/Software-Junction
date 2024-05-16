import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Mobiscroll Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Framework
                  <br />
                  <br />
                  &#8377; 28440
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Perpetual license</li>
                <li>Royalty free commercial license</li>
                <li>Scalable icon library</li>
                <li>Theme Builder</li>
                <li>Modular builds</li>
                <li>NPM support</li>
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
                  Complete
                  <br />
                  <br />
                  &#8377; 90360
                </h5>
                <p>One Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Framework</li>
                <li>ES6 Modules</li>
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
