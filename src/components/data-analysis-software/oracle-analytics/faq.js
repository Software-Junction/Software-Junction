import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> Oracle Analytics FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                What are the top 5 features for Oracle Analytics  ?
              </h5>
              <p className="mt-3">
                The top 5 features for Oracle Analytics are :
              </p>
              <ul>
                 <li>Ad hoc Analysis</li>
                <li>Data Mapping</li>
                <li>Data Analysis</li>
                <li>Data Capture</li>
                <li>Ad Hoc Reports</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
