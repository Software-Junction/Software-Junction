import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Sharefaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> WorldShare Management Services FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["shr-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for WorldShare Management Services  ?
              </h5>
              <p className="mt-3">
                The top 5 features for WorldShare Management Services are :
              </p>
              <ul>
                 <li>Acquisition Management</li>
                <li>Fee Collection</li>
                <li>Circulation Management</li>
                <li>Inventory Management</li>
                <li>OPAC</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sharefaq;
