import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Exotel Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Micro
                  <br />
                  <br />
                  &#8377; 5555
                </h5>
                <p>Per 3 Months</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>3,000 Rental</li>
                <li>2,555 Credits (1 cr=1 )</li>
                <li>1 Exophone</li>
                <li>2 Agents</li>
                <li>Unlimited Channels</li>
                <li>Multi-level IVR</li>
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
                  Believer
                  <br />
                  <br />
                  &#8377; 5555
                </h5>
                <p>Per 12 Months</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>10,499 Rental</li>
                <li>9,500 Credits (1 cr=1 )</li>
                <li>2 Exophones</li>
                <li>6 Agents</li>
                <li>Unlimited Channels</li>
                <li>Multi-level IVR</li>
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
                  Infuencer
                  <br />
                  <br />
                  &#8377; 49999
                </h5>
                <p>Per 12 Months</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>10,499 Rental</li>
                <li>39,000 Credits (1 cr=1 )</li>
                <li>10 Exophones</li>
                <li>Unlimited Agents</li>
                <li>Unlimited Channels</li>
                <li>Multi-level IVR</li>
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
