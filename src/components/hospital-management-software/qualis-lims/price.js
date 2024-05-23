import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Qualis LIMS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Qualis LIMS - Cloud
                  <br />
                  <br />
                  &#8377; 691,200
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Audit Trial</li>
                <li>Sample Registration Module</li>
                <li>Barcode Labelling</li>
                <li>Tests & Specification Management</li>
                <li>Organization, Users, Roles & Rights</li>
                <li>Dashboards and Alerts</li>
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
