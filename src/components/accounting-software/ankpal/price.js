import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Ankpal Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Shuruaat
                  <br />
                  <br />
                  &#8377; 10000
                </h5>
                <p>Full License/Two User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Cloud Based Accounting Management</li>
                <li>E-invoice and E-way Bill</li>
                <li>GST Reconcilation and Filing</li>
                <li>Multi Branch</li>
                <li>Batchwise Inventory Management</li>
                <li>Bank Import Functionality</li>
                
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
                Sahas
                  <br />
                  <br />
                  &#8377; 20000
                </h5>
                <p>Full License/Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Batchwise Inventory Management</li>
                <li>Multi Companies/Multi Branch/Multi Users</li>
                <li>Fixed Assets Management</li>
                <li>Payroll Import Functionality</li>
                <li>E-invoice E-way Bills</li>
                <li>GST Fillings and Reconcilations</li>
                
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
