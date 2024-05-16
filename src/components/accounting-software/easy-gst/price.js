import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">EasY GST Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  EasyGST (Light)
                  <br />
                  <br />
                  &#8377; 2900
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>GST Returns filing</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
                <li>Online Data Collection tools</li>
                <li>Max 100 Assessee - Taxes extra</li>
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
                  EasyGST (Professional)
                  <br />
                  <br />
                  &#8377; 8000
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Taxes Extra</li>
                <li>GST Returns filing</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
                <li>Online Data Collection tools</li>
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
                  EasyGST (Poplular)
                  <br />
                  <br />
                  &#8377; 3900
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Max 250 Asseseess</li>
                <li>GST Returns filing</li>
                <li>Online Data Collection tools</li>
                <li>Taxes Extra</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
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
