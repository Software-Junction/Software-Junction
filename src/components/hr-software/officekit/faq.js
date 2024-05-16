import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> OfficeKit HR FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
              How much does Officekithr cost  ?
              </h5>
              <p className="mt-3">
              The starting price of Officekithr is ₹ 2500/Per Month. It has different pricing plans:
              </p>
              <ul>
                 <li>Starter : ₹ 2500/Per Month</li>
              </ul>
              <p>Officekithr also provides a free trial to users.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
