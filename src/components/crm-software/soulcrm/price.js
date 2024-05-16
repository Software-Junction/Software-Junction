import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">SoulCRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic
                  <br />
                  <br />
                  &#8377; 399
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Bill Annually (Save 30%)</li>
                <li>No. of Users - Minimum 3</li>
                <li>Storage - 250 MB / User</li>
                <li>Additional Storage Charge - 200 / 1 GB / Month</li>
                <li>Automated Daily Backup</li>
                <li>Email Support</li>
                <li>Live Chat & Phone Support - 249 / Per Point of Contact</li>
                <li>Setup Fees - Free FOR MORE THEN 10 USERS</li>
                <li>Online Training - Free FOR MORE THEN 25 USERS</li>
                <li>Email Campaign - Pay as you Go</li>
                <li>Text Campaign - Pay as you Go</li>
                <li>Free Trial - 15 Day Free</li>
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
