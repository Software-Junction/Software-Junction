import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Price = () => {
  const handleFormSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
        values
      );
      actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      actions.setSubmitting(false);
    }
  };

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">CloudTalk Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 1800
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited inbound & intracompany calls</li>
                <li>Click to call</li>
                <li>Automated call distribution</li>
                <li>Mobile app</li>
                <li>Unlimited call queuing</li>
                <li>140+ International numbers</li>
                <li>Call Flow Designer</li>
                <li>and more advanced features</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Essential
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Starter features</li>
                <li>Real-time client dashboard</li>
                <li>Advanced analytics with unlimited history</li>
                <li>Integrations to other systems</li>
                <li>One-to-one onboarding session</li>
                <li>Unlimited concurrent calls</li>
                <li>SMS/ Text Messages</li>
                <li>Skill-based routing</li>
                <li>Smart queueing</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Expert
                  <br />
                  <br />
                  &#8377; 3600
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Essential features</li>
                <li>Salesforce integration</li>
                <li>Power dialer</li>
                <li>Speech to text</li>
                <li>Smart Dialer</li>
                <li>Call Monitoring</li>
                <li>Dedicated account manager</li>
                <li>Wallboards</li>
                <li>Sentiment & CSAT score</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          {/* <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 1800
                </h5>
                <p>User/Month/Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited inbound & intracompany calls</li>
                <li>Click to call</li>
                <li>Automated call distribution</li>
                <li>Mobile app</li>
                <li>Unlimited call queuing</li>
                <li>140+ International numbers</li>
                <li>Call Flow Designer</li>
                <li>and more advanced features</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Price;
