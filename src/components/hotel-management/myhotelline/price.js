import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">MyHotelLine Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Startup
                  <br />
                  <br />
                  &#8377; 1600
                </h5>
                <p>Monthly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Front Desk</li>
                <li>Housekeeping</li>
                <li>Account Receivable</li>
              
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
