import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Knowlarity Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Advance Plan
                  <br />
                  <br />
                  &#8377; 16800
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Validity - 1 Year</li>
                <li>Call Recording - 3 Months</li>
                <li>User Included (Forwarding No's) - 5</li>
                <li>Channels Included - 10</li>
                <li>Free Usage (Min/Month) - 1200</li>
                <li>Call Charges/30sec - 30p</li>
                <li>Virtual Numbers - 1</li>
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
                Premium Plan
                  <br />
                  <br />
                  &#8377; 34200
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Validity - 1 Year</li>
                <li>Call Recording - 12 Months</li>
                <li>User Included (Forwarding No's) - 10</li>
                <li>Channels Included - 20</li>
                <li>Free Usage (Min/Month) - 5000</li>
                <li>Call Charges/30sec - 20p</li>
                <li>Virtual Numbers - 1</li>
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
                Premium Plus Plan
                  <br />
                  <br />
                  &#8377; 60000
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Validity - 1 Year</li>
                <li>Call Recording - 12 months</li>
                <li>User Included (Forwarding No's) - 20</li>
                <li>Channels Included - 40</li>
                <li>Free Usage (Min/Month) - 10000</li>
                <li>Call Charges/30sec - 20p</li>
                <li>Virtual Numbers - 2</li>
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
