import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Arlo Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Simple
                  <br />
                  <br />
                  &#8377; 7,128
                </h5>
                <p>Admin/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Event management</li>
                <li>Online delivery</li>
                <li>Contact management</li>
                <li>Website starter template</li>
                <li>App centre</li>
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
                  &#8377; 13,608
                </h5>
                <p>Admin/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Marketing tools</li>
                <li>Importers</li>
                <li>Custom fields</li>
                <li>Advanced event management</li>
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
                  &#8377; 17,928
                </h5>
                <p>Admin/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Phone support</li>
                <li>Customisation</li>
                <li>Advanced reports</li>
                <li>Account management tools</li>
                <li>Certification & Licences</li>
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
