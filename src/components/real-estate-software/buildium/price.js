import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Buildium Pricing</h3>
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
                  &#8377; 3,960
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Accounting, Maintenance, Tasks, Violations, Resident & Board Member Communications, and Online Portals</li>
                <li>Free Marketing Website</li>
                <li>New Client Leads, Powered by All Property Management</li>
                <li>Tenant Screening</li>
                <li>Standard Reports</li>
                <li>Ticket Support</li>
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
                Growth                  
                <br />
                  <br />
                  &#8377; 12,528
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Essential, plus:</li>
                <li>Tenant Screening & Enhanced Tenant Screening</li>
                <li>unlimited eSignatures</li>
                <li>Performance Analytics and Insights</li>
                <li>Business Analytics and Insights</li>
                <li>Live Phone Support</li>
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
                Premium                  
                <br />
                  <br />
                  &#8377; 27,000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Growth, plus:</li>
                <li>Open API</li>
                <li>Priority Support</li>
                <li>Dedicated Growth Consultant for New Client Leads</li>
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
