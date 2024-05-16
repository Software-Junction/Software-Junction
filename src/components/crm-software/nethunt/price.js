import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">NetHunt CRM Pricing</h3>
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
                  &#8377; 2160
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>CRM essentials</li>
                <li>Integration with Gmail and Google Workspace</li>
                <li>Google Contacts Sync</li>
                <li>Basic emailing features</li>
                <li>1 messenger account to connect</li>
                <li>Basic customization</li>
                <li>Basic support</li>
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
                  Basic Plus
                  <br />
                  <br />
                  &#8377; 3024
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything Basic plan offers, plus:</li>
                <li>Mass email campaigns</li>
                <li>Extra folders & views</li>
                <li>Extra custom roles</li>
                <li>2 additional messenger accounts to connect</li>
                <li>Personal messengers</li>
                <li>WhatsApp integration unlocked</li>
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
                  Business
                  <br />
                  <br />
                  &#8377; 4320
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything Basic Plus plan offers, plus:</li>
                <li>Sales automation</li>
                <li>Email sequences</li>
                <li>Reports</li>
                <li>VoIP integrations</li>
                <li>LinkedIn integration</li>
                <li>API Access</li>
                <li>Custom SMTP</li>
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
                  Business Plus
                  <br />
                  <br />
                  &#8377; 6048
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything Business plan offers, plus:</li>
                <li>Extra automation workflows and actions</li>
                <li>Extra API calls</li>
                <li>Extra email campaigns</li>
                <li>Extra custom roles</li>
                <li>NetHunt CRM logo removal (web forms)</li>
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
