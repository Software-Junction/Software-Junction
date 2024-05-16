import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Unity FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>What are the top 5 features for Unity? ?</h5>
              <p className="mt-3">The top 5 features for Unity are:</p>
              <ul>
                <li>3D Games</li>
                <li>In-Game Analytics</li>
                <li>Physics Simulation</li>
                <li>Virtual Reality</li>
                <li>2D games</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
