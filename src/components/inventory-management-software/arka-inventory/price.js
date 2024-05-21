import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Arka Inventory Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Inventory <br />
                  <br />
                  &#8377; 2808
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Inventory Alerts</li>
                <li>Accounting Integration</li>
                <li>Inventory Operations</li>
                <li>Bar coding</li>
                <li>Inventory Visibility</li>
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
                  Inventory + MRP
                  <br />
                  <br />
                  &#8377; 3528
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Inventory</li>
                <li>Purchase planning</li>
                <li>Purchase requisitions</li>
                <li>Purchase Orders</li>
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
                  Inventory + MRP + WHM
                  <br />
                  <br />
                  &#8377; 4248
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Inventory + MRP</li>
                <li>Cost visibility</li>
                <li>Warehouse management</li>
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
