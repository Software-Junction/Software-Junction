import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Eventleaf Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Atendee</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 100 attendees / yr</li>
                <li>Unlimited events</li>
                <li>Unlimited users</li>
                <li>Event website</li>
                <li>Event registration</li>
                <li>Invitations and reminders</li>
                <li>Surveys</li>
                <li>Email support</li>
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
                  &#8377; 72
                </h5>
                <p>Atendee</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom number of attendees</li>
                <li>Email & Phone support</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 144
                </h5>
                <p>Atendee</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Surveys & Live Polls</li>
                <li>Event app</li>
                <li>Check In app</li>
                <li>Google Analytics</li>
                <li>Membership integration</li>
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
