import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Price = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">AGRIVI's Farm Management Software Pricing</h3>
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
                  &#8377; 1080
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Automatic transcription</li>
                <li>Agent & call summary</li>
                <li>Support via email, chat and Google Meet</li>
                <li>Unlimited call moments</li>
                <li>CRM/VC/dialers integrations</li>
                <li>Unlimited teams</li>
                <li>Plug and play</li>
                <li>Audio recording</li>
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
