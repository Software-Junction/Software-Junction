import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../freshcaller/freshcaller.module.scss";

import Demo from "../../common/demo";

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
            <h3 className="mb-3">Freshcaller Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Sprout
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>21 Days</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Buy Local/Toll-free numbers</li>
                <li>Inbound Caller ID</li>
                <li>Desktop Notifications</li>
                <li>Call Notes</li>
                <li>Custom Greetings</li>
                <li>Call Metrics</li>
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
                  Blossom
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>Agent/Month (Billed Annually)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Sprout and</li>
                <li>Number Porting</li>
                <li>Call Recording</li>
                <li>Basic Call Queues</li>
                <li>Voicemail</li>
                <li>Pre-built Reports</li>
                <li>Wait Queues</li>
                <li>Warm Transfer</li>
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
                  Garden
                  <br />
                  <br />
                  &#8377; 2088
                </h5>
                <p>Agent/Month (Billed Annually)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom Reports</li>
                <li>Call Monitoring</li>
                <li>SIP Connections</li>
                <li>Bring Your Own Carrier</li>
                <li>Call Conferencing</li>
                <li>IVR (Phone Trees)</li>
                <li>Advanced Call Queues</li>
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
                  Estate
                  <br />
                  <br />
                  &#8377; 3240
                </h5>
                <p>Agent/Month (Billed Annually)</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Call Center Agent Statuses</li>
                <li>Advanced Call Metrics</li>
                <li>Queue Callback (Virtual Hold)</li>
                <li>Call Barging</li>
                <li>Call Recording Opt-out</li>
                <li>Holiday Routing</li>
                <li>Agent Availability Report</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
            <Demo show={showDemo} handleClose={handleCloseDemo}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
