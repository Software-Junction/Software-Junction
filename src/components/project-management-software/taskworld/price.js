import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Taskworld Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Solo
                  <br />
                  <br />
                  &#8377; 359
                </h5>
                <p>License/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited tasks, projects, checklists and one workspace</li>
                <li>Task comments and attachments</li>
                <li>Tags and labels</li>
                <li>Task by email</li>
                <li>Interactive dashboard</li>
                <li>Project timeline</li>
                <li>Custom backgrounds</li>
                <li>5GB storage</li>
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
                  Teams
                  <br />
                  <br />
                  &#8377; 575
                </h5>
                <p>License/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>One workspace</li>
                <li>Multiple assignees</li>
                <li>Tasks in multiple locations</li>
                <li>Direct messaging (chat)</li>
                <li>Public/private messaging</li>
                <li>@mentions</li>
                <li>Admin rights</li>
                <li>Email replies</li>
                <li>Burn-up/Burn-down charts</li>
                <li>100 GB storage</li>
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
                  Dedicated Servers
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>License/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Dedicated server in your own Virtual Private Cloud (VPC) or
                  data centre (on premise)
                </li>
                <li>SML 2.0 Single Sign-On (SSO)</li>
                <li>Two-factor authentication</li>
                <li>Unlimited workspaces</li>
                <li>Unlimited cloud storage</li>
                <li>
                  User audit reports and compliance export of all messages
                </li>
                <li>Full & continuous cross regional back-up</li>
                <li>Advanced password priorities</li>
                <li>Dedicated account manager</li>
                <li>Priority phone/email support</li>
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
                  On Premise
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>License/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Total control over data on a data centre of your choice</li>
                <li>
                  Data sovereignty (Completely compliance to your country's data
                  laws)
                </li>
                <li>Enhanced configuration options</li>
                <li>Ability to disable third party integrations</li>
                <li>Access to Taskworld via your own intranet</li>
                <li>Offline access</li>
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
