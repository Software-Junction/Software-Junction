import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Smaket Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Premium
                  <br />
                  <br />
                  &#8377; 2388
                </h5>
                <p>Yearly License / Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>GST Billing</li>
                <li>Accounting Management</li>
                <li>Analytical reports</li>
                
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
                Gold
                  <br />
                  <br />
                  &#8377; 5200
                </h5>
                <p>Yearly License / Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>GST Billing</li>
                <li>Accounting Managment</li>
                <li>Tracking serial no</li>
                <li>many more</li>
               
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
