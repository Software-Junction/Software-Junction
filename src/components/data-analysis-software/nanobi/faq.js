import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Nanobi FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
              What type of customer support is available from Nanobi  ?
              </h5>
              <p className="mt-3">
              The available support which Nanobi provides is :
              </p>
              <ul>
                 <li>Phone</li>
                <li>Email</li>
                <li>Tickets</li>
                <li>Training</li>
                
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
