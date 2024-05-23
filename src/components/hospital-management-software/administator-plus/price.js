import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Administrator Plus Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Administrator Plus
                  <br />
                  <br />
                  &#8377; 396,000
                </h5>
                <p>25 Users/Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Services Management</li>
                <li>Discharge Summary</li>
                <li>Consultant Management</li>
                <li>Medical Data</li>
                <li>Report</li>
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
                  Administrator Plus
                  <br />
                  <br />
                  &#8377; 540,000
                </h5>
                <p>50 Users/Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Services Management</li>
                <li>Discharge Summary</li>
                <li>Consultant Management</li>
                <li>Medical Data</li>
                <li>Report</li>
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
                  Administrator Plus
                  <br />
                  <br />
                  &#8377; 684,000
                </h5>
                <p>75 Users/Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Services Management</li>
                <li>Discharge Summary</li>
                <li>Consultant Management</li>
                <li>Medical Data</li>
                <li>Report</li>
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
