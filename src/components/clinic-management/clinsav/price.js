import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">ClinSav Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  GROW PLAN
                  <br />
                  <br />
                  &#8377; 299
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Patients</li>
                <li>Appointments</li>
                <li>Finance</li>
                <li>Reports</li>
                <li>Staffs</li>
                <li>Clinic Data</li>
                <li>Settings</li>
                <li>Letters</li>
                <li>Inventory</li>
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
                  GROW PLUS
                  <br />
                  <br />
                  &#8377; 375
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Patients</li>
                <li>Appointments</li>
                <li>Clinical Data</li>
                <li>Settings</li>
                <li>Staffs</li>
                <li>Support</li>
                <li>Letters</li>
                <li>Reports</li>
                <li>Finance</li>
                <li>Inventory</li>
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
                  EXPAND PLAN
                  <br />
                  <br />
                  &#8377; 449
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Patients</li>
                <li>Appointments</li>
                <li>Clinical Data</li>
                <li>Staffs</li>
                <li>Letters</li>
                <li>Setting</li>
                <li>Letters</li>
                <li>Finance</li>
                <li>Reports</li>
                <li>Inventory</li>
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
