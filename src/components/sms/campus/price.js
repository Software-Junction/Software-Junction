import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../campus/pus.module.scss";

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
            <h3 className="mb-3">Campus 365 Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Campus 365 One
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Forever</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Modules Included</li>
                <li>Premium Modules Available</li>
                <li>Webinar Based Training</li>
                <li>Educating Parents and Students</li>
                <li>INR 0.14 per SMS (1000 SMS Included for Free)</li>
                <li>24/6 Phone Support*</li>
                <li>24/6 Live Chat Support*</li>
                <li>24/7 Email Support</li>
                <li>iOS/Android Mobile Apps*</li>
                <li>Onsite Training*</li>
                <li>API Access</li>
                <li>Discounts on RFID & GPS Devices</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Campus 365 Lite
                  <br />
                  <br />
                  &#8377; 2,500
                </h5>
                <p>Per Month Billed Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>For Institutes with Student's strength &lt; 200</li>
                <li>30+ Modules to automate your institute</li>
                <li>LMS, Academics, Finance and Reporting Modules only</li>
                <li>
                  Pre-integrated Payment Gateway for Online fees collection
                </li>
                <li>Free iOS and Android mobile apps</li>
                <li>Webinar Based Training Sessions</li>
                <li>24/7 Email and Chat Support</li>
                <li>
                  Take Live Classes* and MCQ based Online Examination on the go
                </li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
            <Demo show={showDemo} handleClose={handleCloseDemo} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
