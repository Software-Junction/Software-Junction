import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Zencommerce Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Gold
                  <br />
                  <br />
                  &#8377; 899
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>10,000 products</li>
                <li>Year's transfer 300 GB</li>
                <li>Domestic and International payment methods</li>
                <li>Delivery integrations</li>
                <li>Useful applications</li>
                <li>API</li>
                <li>Responsive version of the store</li>
                <li>Free graphic store</li>
                <li>Customized storefront</li>
                <li>Individual projects and implementation</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Platinium
                  <br />
                  <br />
                  &#8377; 1799
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>20,000 products</li>
                <li>Unlimited transfer</li>
                <li>Facebook store</li>
                <li>Additional FTP server</li>
                <li>Graphics</li>
                <li>Marketing & SEO</li>
                <li>Safety & Hosting</li>
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
