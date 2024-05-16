import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">LeadSquared Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Lite
                  <br />
                  <br />
                  &#8377; 1250
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead Tracking</li>
                <li>Lead Qualification</li>
                <li>Lead Scoring</li>
                <li>Sales Tracking</li>
                <li>Trackable Sales Email</li>
                <li>Email Integration</li>
                <li>User Roles</li>
                <li>Developer API</li>
                <li>Email Support</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 2500
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All in Lite, Plus</li>
                <li>Lead Distribution</li>
                <li>Sales Automation</li>
                <li>User Groups</li>
                <li>Custom Tabs</li>
                <li>Custom Actions</li>
                <li>Webhooks</li>
                <li>Phone Support</li>
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
