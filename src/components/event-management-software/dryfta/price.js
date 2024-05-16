import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Dryfta Pricing</h3>
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
                  &#8377; 16,488
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Host single event</li>
                <li>Up to 1500 registrations</li>
                <li>2000 app downloads</li>
                <li>Sell up to 1500 tickets</li>
                <li>1200 paper submissions</li>
                <li>5,000 email subscribers</li>
                <li>Your own payment gateway</li>
                <li>
                  Zero per ticket fee (when using your own payment gateway)
                </li>
                <li>Zero per registration fee</li>
                <li>Event CRM</li>
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
