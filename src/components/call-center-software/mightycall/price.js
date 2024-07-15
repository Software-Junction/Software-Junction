import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from '../mightycall/mightycall.module.scss'

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
            <h3 className="mb-3">MightyCall Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Core
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>User/Month billed annualy</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>3 Users min</li>
                <li>Unlimited Minutes</li>
                <li>Voice to Text</li>
                <li>Call Recordings</li>
                <li>Multi-level IVR</li>
                <li>Unlimited Contacts</li>
                <li>Presence Status</li>
                <li>Voice Studio Recording</li>
                <li>Softphones Support</li>
                <li>Deskphones Support</li>
                <li>API</li>
                <li>CRM integration</li>
                <li>High Priority Support</li>
                <li>Unlimited MMS</li>
                <li>Extended roles & permissions</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 1440
                </h5>
                <p>User/Month billed annualy</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Core features</li>
                <li>Unlimited Users</li>
                <li>Voice to Text</li>
                <li>Call Recordings</li>
                <li>MMS unlimited</li>
                <li>Performance reports</li>
                <li>Call flow</li>
                <li>Auto-receptionist (IVR)</li>
                <li>Multi-level IVR</li>
                <li>Call waiting</li>
                <li>Caller ID & CNAM</li>
                <li>Custom greetings</li>
                <li>Business hours</li>
                <li>Call queues</li>
                <li>Unlimited contacts</li>
                <li>Extended roles & permissions</li>
                <li>Presence status</li>
                <li>Dial by name</li>
                <li>High priority support</li>
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
                  Power
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>User/Month billed annualy</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Call center solution powered by auto dialer</li>
                <li>Everything in Pro</li>
                <li>Auto dialers</li>
                <li>Dedicated account manager</li>
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
