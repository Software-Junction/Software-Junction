import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">LeadForce Pricing</h3>
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
                  &#8377; 300
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Deal management</li>
                <li>Customizable pipelines</li>
                <li>Customizable Stages</li>
                <li>Custom fields</li>
                <li>Product</li>
                <li>Data import and export</li>
                <li>Activity Create & Update</li>
                <li>People and organization management</li>
                <li>File attachments</li>
                <li>Calendar view and activity management</li>
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
                  Advanced
                  <br />
                  <br />
                  &#8377; 400
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Target to Individual</li>
                <li>Target to team</li>
                <li>Target to call</li>
                <li>Report related reports</li>
                <li>SAML SSO (single sign-on) Login</li>
                <li>API Access</li>
                <li>Require Fields</li>
                <li>Phone Support</li>
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
                  &#8377; 600
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Filter Creation</li>
                <li>Integration with IVR provider</li>
                <li>Voice recording sync with Deal</li>
                <li>Click to call</li>
                <li>Automatic call logging</li>
                <li>Proposal</li>
                <li>Estimates</li>
                <li>Credit Note</li>
                <li>Invoice</li>
                <li>Payment</li>
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
