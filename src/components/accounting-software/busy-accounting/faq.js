import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Busy Accounting FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
              How much does Busy Accounting cost  ?
              </h5>
              <p className="mt-3">
              The starting price of Busy Accounting is ₹ 7200/Per Year. It has different pricing plans :
              </p>
              <ul>
                 <li>Basic version : ₹ 7200/Per Year</li>
                <li>Standard version : ₹ 13500/Per Year</li>
                <li>Enterprise version : ₹ 19800/Per Year</li>
              </ul>
              <p>Busy Accounting also provides a free trial to users.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
