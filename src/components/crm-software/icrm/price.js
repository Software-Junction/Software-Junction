import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">iCRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  SEED
                  <br />
                  <br />
                  &#8377; 600
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Basic Reports Dashboard</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>Lead Scoring Rules</li>
                <li>SMS Integration</li>
                <li>API Access</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - Android Only</li>
                <li>User audit, History & Timeline logs</li>
                <li>Storage - 6 GB</li>
                <li>2 Hour onboarding session</li>
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
                  SAPLING
                  <br />
                  <br />
                  &#8377; 800
                </h5>
                <p>Full Licence/ Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Custom Reports Dashboard</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>SMS Integration</li>
                <li>Advanced Reports</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - iOS & Android</li>
                <li>Storage - 8 GB</li>
                <li>2 Hour onboarding session</li>
                <li>Quotation & Products Management</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>400 Bulk Emails/user/day</li>
                <li>15 Workflow Automations</li>
                <li>15 Teams</li>
                <li>Territories Management</li>
                <li>Custom Roles</li>
                <li>User audit, History & Timeline logs</li>
                <li>Lead Scoring Rules</li>
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
                  PLANT
                  <br />
                  <br />
                  &#8377; 1200
                </h5>
                <p>Full Licence/Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Advanced Reports</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>Advanced Lead Scoring Rules</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - iOS & Android</li>
                <li>User audit, History & Timeline logs</li>
                <li>Storage - 12 GB</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>1200 Bulk Emails/user/day</li>
                <li>30 Workflow Automations</li>
                <li>30 Teams</li>
                <li>Social Media Integration</li>
                <li>Multi Currency</li>
                <li>Territories Management</li>
                <li>Quotation & Products Management</li>
                <li>SMS Integration</li>
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
                  TREE
                  <br />
                  <br />
                  &#8377; 1400
                </h5>
                <p>Full Licence/Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Dedicated Account Manager</li>
                <li>Audit Logs</li>
                <li>IP Whitelisting</li>
                <li>Multi Currency</li>
                <li>Social Media Integration</li>
                <li>Advanced CRM Customization</li>
                <li>Custom Roles</li>
                <li>60 Teams</li>
                <li>200 Workflow Automations</li>
                <li>8000 Bulk Emails/user/day</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>Quotation & Products Management</li>
                <li>Storage - 18 GB</li>
                <li>User audit, History & Timeline logs</li>
                <li>Mobile Application - iOS & Android</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Email Integration</li>
                <li>SMS Integration</li>
                <li>Lead, Contact, Account, and Deal Management</li>
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
