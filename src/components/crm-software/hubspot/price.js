import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">HubSpot CRM Pricing</h3>
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
                  &#8377; 3240
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Form automation</li>
                <li>Email automation</li>
                <li>Forms</li>
                <li>Email marketing</li>
                <li>Landing pages</li>
                <li>Live chat</li>
                <li>Email and in-app chat support</li>
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
                  &#8377; 57600
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Omni-channel marketing automation</li>
                <li>ABM tools and automation</li>
                <li>Dynamic personalization</li>
                <li>Multi-language content</li>
                <li>Social media</li>
                <li>Video hosting & management</li>
                <li>Contact and company scoring</li>
                <li>Collaboration tools</li>
                <li>Campaign management</li>
                <li>Teams</li>
                <li>A/B testing</li>
                <li>Ad conversion events</li>
                <li>Contact create attribution</li>
                <li>Website traffic analytics</li>
                <li>Campaign reporting</li>
                <li>Custom reporting</li>
                <li>Salesforce integration</li>
                <li>Phone support</li>
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
                  &#8377; 230400
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Single sign-on</li>
                <li>Partitioning</li>
                <li>Hierarchical teams</li>
                <li>Permission sets</li>
                <li>Field-level permissions</li>
                <li>Email send frequency cap</li>
                <li>Custom objects</li>
                <li>Salesforce custom object sync</li>
                <li>Adaptive testing</li>
                <li>Sandboxes</li>
                <li>Multi-touch revenue attribution</li>
                <li>Behavioral event triggers and reporting</li>
                <li>Predictive lead scoring</li>
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
