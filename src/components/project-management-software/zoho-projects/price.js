import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Zoho Projects Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Upto to 3 Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>2 Projects</li>
                <li>5GB of storage space</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 288
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited projects</li>
                <li>Project Templates</li>
                <li>Time Tracking</li>
                <li>Blueprints</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 648
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Read-only users</li>
                <li>Custom Fields & Status</li>
                <li>Custom Roles & Profiles</li>
                <li>Single Sign-On</li>
                <li>Two-Factor Authentication</li>
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
