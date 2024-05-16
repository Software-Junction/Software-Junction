import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Salesmate Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Monthly
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
              <li>Unlimited Deals</li>
<li>Multiple Sales Pipelines</li>
<li>Unlimited Contacts</li>
<li>Unlimited Tasks</li>
<li>User Hierarchies and Permissions</li>
<li>Email Templates</li>
<li>Send Bulk Emails</li>
<li>FREE Full Email Sync (time limited)</li>
<li>G Suite Integration</li>
<li>Auto Attach Emails to Deals</li>
<li>Global / Quick Search</li>
<li>Mobile Apps</li>
<li>1 GB Free Storage / User</li>
<li>API Access</li>
<li>Add-on space</li>
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
                Yearly
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Monthly</li>
                
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
