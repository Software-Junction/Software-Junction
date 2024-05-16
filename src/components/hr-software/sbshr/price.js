import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">SBS HR Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Standard
                  <br />
                  <br />
                  &#8377; 6999
                </h5>
                <p>Upto 100 Employees</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Mobile App</li>
                <li>API</li>
                <li>Free Trial</li>
                <li>Web Panel</li>
                
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
