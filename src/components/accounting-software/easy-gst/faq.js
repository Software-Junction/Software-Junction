import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> EasY GST FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for EasY GST  ?
              </h5>
              <p className="mt-3">
                The top 5 features for EasY GST are :
              </p>
              <ul>
                 <li>Preferred Choice among CA's and Tax Professionals</li>
                <li>Competitive Price</li>
                <li>Compliance Management</li>
                <li>User friendly DashBoard</li>
                <li>Online Operations</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
