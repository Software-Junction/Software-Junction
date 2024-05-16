import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Zoho Invoices Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Stay GST compliant & adapt to local languages</li>
                <li>
                  Create invoices, quotes, credit notes, & delivery challans
                </li>
                <li>Provide a customer self-service portal</li>
                <li>Automate payment reminders</li>
                <li>Scan receipts and track expenses</li>
                <li>Accept payments via cash, cheques, & bank transfers</li>
                <li>Gain business insights through detailed reports</li>
                <li>Log time and manage projects</li>
                <li>Add multiple users and assign role-based access</li>
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
