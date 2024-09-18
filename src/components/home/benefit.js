import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Benefit = ({ styles }) => {
  return (
    <>
      <section className={`${styles["benefit"]} my-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-3">How does this Benefit You ?</h3>
              <h5 className={`${styles['sub-heading']} mb-3`}>
                Join us at TechScout to navigate the software landscape
                with clarity and confidence. Whether you&#39;re a visitor
                seeking the right solution or a software company looking to
                stand out, our scoring methodology ensures transparency and
                value for all stakeholders.
              </h5>
            </Col>
            <Col lg={6} className="mb-3">
              <div
                className={`${styles["visitor-box"]} box bg-light rounded-3 p-4 h-100`}
              >
                <h5>For Visitors:</h5>
                <ul>
                  <li>
                    Gain a deeper understanding of software products through
                    comprehensive scoring.
                  </li>
                  <li>
                    Make informed decisions based on real user reviews and
                    objective metrics.
                  </li>
                  <li>
                    Explore a curated selection of software solutions tailored
                    to your needs.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} className="mb-3">
              <div
                className={`${styles["company-box"]} box bg-light rounded-3 p-4 h-100`}
              >
                <h5>For Software Companies:</h5>
                <ul>
                  <li>
                    Showcase your product&#39;s strengths through our scoring
                    system.
                  </li>
                  <li>
                    Increase visibility and credibility among potential
                    customers.
                  </li>
                  <li>
                    Leverage data-driven insights to enhance your market
                    presence and product offerings.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Benefit;
