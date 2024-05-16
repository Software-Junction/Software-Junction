import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Wrike Pricing</h3>
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
                <li>Web, desktop, and mobile apps</li>
                <li>Project & task management</li>
                <li>Board view</li>
                <li>Table view</li>
                <li>Active task limitations apply</li>
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
                  Team
                  <br />
                  <br />
                  &#8377; 706
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Free plan plus:</li>
                <li>Unlimited projects</li>
                <li>Unlimited tasks and subtasks</li>
                <li>Unlimited custom fields</li>
                <li>Unlimited request forms</li>
                <li>20 free collaborators</li>
                <li>Interactive Gantt charts</li>
                <li>Automations (50 actions/user/month)</li>
                <li>Custom workflows</li>
                <li>Analytics view</li>
                <li>Calendar view</li>
                <li>Dashboards</li>
                <li>Use case templates</li>
                <li>Google and Microsoft SSO</li>
                <li>External requester collaboration</li>
                <li>Integrations & open API</li>
                <li>2 GB storage per user</li>
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
                  Business
                  <br />
                  <br />
                  &#8377; 1786
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Team plan plus:</li>
                <li>Folder structure & nested projects</li>
                <li>Cross-tagging</li>
                <li>Project Blueprints</li>
                <li>Custom item types</li>
                <li>Automations (200 actions/user/month)</li>
                <li>Approvals & guest approvals</li>
                <li>File & video proofing (30+ file formats)</li>
                <li>Resource management, workloads & time tracking</li>
                <li>Reports and Unlimited Dashboards</li>
                <li>User groups & permissions</li>
                <li>DAM Integrations and Cloud Content Connector</li>
                <li>Adobe Creative Cloud extensions</li>
                <li>5 GB storage per user</li>
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
