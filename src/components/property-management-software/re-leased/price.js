import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Re-Leased Pricing</h3>
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
                  &#8377; 18000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Bank Reconciliations</li>
                <li>Owner & Tenant Portal</li>
                <li>Online Rent Payments</li>
                <li>Mobile Inspections</li>
                <li>Check Printing</li>
                <li>RentMatch Rental Pricing Comparison Tool</li>
                <li>Owner Contribution eChecks</li>
                <li>Posting Vacancies</li>
                <li>Online Applications</li>
                <li>Prospect Tracking</li>
                <li>RUBS (Ratio Utility Billing)</li>
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
