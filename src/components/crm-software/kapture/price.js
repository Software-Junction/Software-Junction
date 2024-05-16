import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Kapture CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Essential
                  <br />
                  <br />
                  &#8377; 1499
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Omnichannel Ticketing</li>
                <li>Auto-assign Tickets</li>
                <li>SLA Management</li>
                <li>Data Import</li>
                <li>Scheduled Reports</li>
                <li>Detailed Dashboards</li>
                <li>Complete Customer 360 Overview</li>
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
                  &#8377; 2999
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Water-tight Ecommerce Integrations</li>
                <li>Comprehensive Reports & Analytics</li>
                <li>Social Media Integrations</li>
                <li>Mobile App</li>
                <li>Chat</li>
                <li>Knowledge Base</li>
                <li>24x7 Support</li>
                <li>Workflow Management</li>
                <li>Dedicated Account Manager</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 4999
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Omnichannel Ticketing</li>
                <li>Auto-assign Tickets</li>
                <li>SLA Management</li>
                <li>Custom Reporting</li>
                <li>Sandbox</li>
                <li>IP Whitelisting</li>
                <li>Custom Dashboards</li>
                <li>Enhanced Self-Serve with multi-lingual capability</li>
                <li>Complete Contact Management</li>
                <li>Customized Ticket Disposition</li>
                <li>Complete Workflow Management</li>
                <li>Dedicated Account Manager</li>
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
