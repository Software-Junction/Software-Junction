import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> AxisRooms Channel Manager FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for AxisRooms Channel Manager  ?
              </h5>
              <p className="mt-3">
                The top 5 features for AxisRooms Channel Manager are :
              </p>
              <ul>
                 <li>Property Management</li>
                <li>Inventory management</li>
                <li>CRM</li>
                <li>Multi Property Support</li>
                <li>Multi Currency</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
