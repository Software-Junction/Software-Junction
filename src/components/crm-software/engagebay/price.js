import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">EngageBay Pricing</h3>
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
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Email Marketing</li>
                <li>Autoresponders</li>
                <li>Email Broadcast</li>
                <li>Sequences</li>
                <li>Lead Grabbers</li>
                <li>Landing Pages</li>
                <li>CRM</li>
                <li>Helpdesk</li>
                <li>Live Chat</li>
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
                  Basic
                  <br />
                  <br />
                  &#8377; 1079
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Email Templates</li>
                <li>Web Pop ups</li>
                <li>Landing Page Builder</li>
                <li>Lead Scoring</li>
                <li>Conversational Inbox</li>
                <li>SMS Marketing</li>
                <li>3rd Party Integrations</li>
                <li>Social Suite</li>
                <li>Tag Manager</li>
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
                  Growth
                  <br />
                  <br />
                  &#8377; 3599
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Marketing Automation</li>
                <li>Push Notifications</li>
                <li>Site Messages</li>
                <li>Broadcast A/B Testing</li>
                <li>Landing Page A/B Testing</li>
                <li>Custom Domain</li>
                <li>Call Records</li>
                <li>Service Automation</li>
                <li>Products</li>
                <li>Proposals</li>
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
                  &#8377; 5759
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Marketing Automation</li>
                <li>Web Analytics</li>
                <li>Proposal Analytics</li>
                <li>SSO (Single Sign-On)</li>
                <li>Role Management</li>
                <li>Goals</li>
                <li>Custom Reporting</li>
                <li>Dedicated Account Manager</li>
                <li>Uptime SLA</li>
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
