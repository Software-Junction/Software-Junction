import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Techzone Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  P10 Plan
                  <br />
                  <br />
                  &#8377; 716
                </h5>
                <p>Device/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Manage up to 10 units</li>
                <li>Email and phone support</li>
                <li>Full income expenses and tracking</li>
                <li>Generate report and create professional owner reports</li>
                <li>Manage tenant and lease information</li>
                <li>Manage vendors</li>
                <li>Online payment</li>
                <li>Export to Excel</li>
                <li>
                  Attach unlimited documents to tenants, owners, transactions
                  and more
                </li>
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
                  P30 Plan
                  <br />
                  <br />
                  &#8377; 1436
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Manage up to 30 units</li>
                <li>All the features of the P10 Plan</li>
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
                  P50 Plan
                  <br />
                  <br />
                  &#8377; 2,876
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Manage up to 50 units</li>
                <li>All the features of the P10 Plan, plus:</li>
                <li>Communication history</li>
                <li>Tenant, owner, and vendor documents sharing</li>
                <li>Tenant, owner, vendor portals</li>
                <li>Banking</li>
                <li>Manage tasks and work orders</li>
                <li>Account automation</li>
                <li>QuickBooks export</li>
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
                  P100 Plan <br />
                  <br />
                  &#8377; 4,316
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Manage up to 100 units</li>
                <li>All the features of the P50 Plan</li>
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
