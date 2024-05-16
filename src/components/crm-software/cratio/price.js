import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Cratio CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Sales CRM+
                  <br />
                  <br />
                  &#8377; 399
                </h5>
                <p>User/Month/Billed Quarterly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Automatic Lead Capture From Portals</li>
                <li>Lead Scoring & Distribution</li>
                <li>Sales Tasks & Reminders</li>
                <li>Complete Mobile CRM</li>
                <li>Email/SMS Workflow Alerts</li>
                <li>Fields & Reports Customization</li>
                <li>And All Other CRM Essentials</li>
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
