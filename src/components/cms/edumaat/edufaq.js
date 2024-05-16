import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Edufaq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> EDUMAAT FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["edu-faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>How much does EDUMAAT - Imagine Greatness cost ?</h5>
              <p className="mt-3">
                The starting price of EDUMAAT - Imagine Greatness is ₹
                72/Student/Month. It has different pricing plans :
              </p>
              <ul>
                <li>EDUMAAT Basic in Cloud : ₹ 72/Student/Month</li>
                <li>EDUMAAT Advanced in Cloud : ₹ 144/Student/Month</li>
              </ul>
              <p>
                EDUMAAT - Imagine Greatness also provides a free trial to users.
              </p>
              <h5>What apps do EDUMAAT - Imagine Greatness integrate with ?</h5>
              <p className="mt-3">
                EDUMAAT - Imagine Greatness integrates with various apps :
              </p>
              <ul>
                <li>SMS Gateway</li>
                <li>E-mail</li>
                <li>Prefered Payment Gateway</li>
                <li>Bio-Metrics & RFID Cards</li>
                <li>OTP generation</li>
                <li>Existing Tally Integration using API</li>
              </ul>
              <h5>
                What are the top 5 features for EDUMAAT - Imagine Greatness ?
              </h5>
              <p className="mt-3">
                The top 5 features for EDUMAAT - Imagine Greatness are :
              </p>
              <ul>
                <li>Academics</li>
                <li>Accounting</li>
                <li>Activities</li>
                <li>Admission</li>
                <li>Attendance management</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Edufaq;
