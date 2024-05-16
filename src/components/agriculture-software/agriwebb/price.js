import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">AgriWebb Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Hobby
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Basic Farm Mapping</li>
                <li>Limited Reporting</li>
                <li>Online support</li>
                <li>1 user</li>
                <li>1 Farm</li>
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
                  Advanced
                  <br />
                  <br />
                  &#8377; 9000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Intuitive farm mapping</li>
                <li>Comprehensive reporting</li>
                <li>Farm map customization tools</li>
                <li>Operational Planner</li>
                <li>Online support</li>
                <li>Phone support</li>
                <li>3 Users</li>
                <li>2 Farms</li>
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
                Precision
                  <br />
                  <br />
                  &#8377; 14400
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Intuitive farm mapping</li>
                <li>Comprehensive reporting</li>
                <li>Farm map customization tools</li>
                <li>Operational Planner (unlimited plans)</li>
                <li>Online support</li>
                <li>Phone support</li>
                <li>Farm map importing</li>
                <li>Individual weight goals</li>
                <li>4 Users</li>
                <li>3 Farms</li>
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
