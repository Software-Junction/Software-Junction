import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3"> Wave Accounting Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Accounting Software
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Forever</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited bank and credit card connections</li>
                <li>Unlimited income and expense tracking</li>
                <li>Unlimited guest collaborators</li>
                <li>Run multiple businesses in one account</li>
                
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
