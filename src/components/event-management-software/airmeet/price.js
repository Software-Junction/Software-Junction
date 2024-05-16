import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Airmeet Pricing</h3>
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
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Get 1 organizer license</li>
                <li>Host unlimited events</li>
                <li>Run events up to 90 mins</li>
                <li>Download SD recordings</li>
                <li>Play pre-recorded videos</li>
                <li>Plan speed networking</li>
                <li>Sell and manage tickets</li>
                <li>Stream on social media</li>
                <li>Track real-time event analytics</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 14,400
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Run endless sessions</li>
                <li>Get session replays</li>
                <li>Delegate host rights</li>
                <li>Download HD recordings</li>
                <li>Customize registration form</li>
                <li>Stream-in via RTMP</li>
                <li>Customize event invitation emails</li>
                <li>Use advanced analytics with segmentation</li>
                <li>
                  Connect with Zapier, HubSpot, Salesforce and 8 other
                  integrations
                </li>
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
                  &#8377; 540,000
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Host multi-track events</li>
                <li>Customize Booths</li>
                <li>Customize Receptions</li>
                <li>Brand your event URL</li>
                <li>Lounge space for fluid conversations</li>
                <li>Use event gamification tools</li>
                <li>Expand networking tables up to 50 people</li>
                <li>Access via single sign-on (SSO)</li>
                <li>Dedicated account manager</li>
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
