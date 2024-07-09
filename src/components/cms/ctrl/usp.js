import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ctrl/ctrl.module.scss";

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Ctrl Campus</h3>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Customized Software Modules</h5>
              <br />
              <p>
                Ctrl Campus provides tailored solutions with customizable
                modules. This ensures that the software meets the specific needs
                of each institution, offering optimal performance and
                efficiency.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Free Expert Consultation</h5>
              <br />
              <p>
                Clients have access to expert advice and consultation, allowing
                them to make the most of the software's capabilities. This
                personalized guidance ensures effective utilization of the
                software for each institution's unique requirements.
              </p>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div
              className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
            >
              <h5>Seamless Integration</h5>
              <br />
              <p>
                Ctrl Campus offers seamless integration with existing systems,
                ensuring a smooth transition for institutions already using
                other tools or software. This feature minimizes disruptions and
                makes the adoption process more straightforward.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Usp;
