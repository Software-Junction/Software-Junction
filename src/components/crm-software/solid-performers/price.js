import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Solid Performers CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Square
                  <br />
                  <br />
                  &#8377; 750
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead Management</li>
                <li>Deal Management</li>
                <li>Contact Management</li>
                <li>Proposal Management</li>
                <li>Existing Third-Party Integrations</li>
                <li>Timesheet Management</li>
                <li>Sales Automation</li>
                <li>WebForms & Chatbots</li>
                <li>Campaign Management</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
                  Pentagon
                  <br />
                  <br />
                  &#8377; 1125
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Client Management</li>
                <li>PI Management</li>
                <li>Invoice Management</li>
                <li>Support Ticket Management</li>
                <li>Quick Task Management</li>
                <li>Bulk SMS Integration</li>
                <li>Bulk Email Integration</li>
                <li>Lead API Integration</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
                  Hexagon
                  <br />
                  <br />
                  &#8377; 1500
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom Dashboard</li>
                <li>Custom Report</li>
                <li>Advanced API Integrations</li>
                <li>Multiple Company Profiles</li>
                <li>Mailbox & Whatsapp Integration</li>
                <li>Project & Task Management</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
