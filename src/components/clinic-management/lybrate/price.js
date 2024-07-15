import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../lybrate/lyb.module.scss";

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
            <h3 className="mb-3">Lybrate Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  lybrate cube
                  <br />
                  <br />
                  &#8377; 799
                </h5>
                <p>Month/Clinic</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Calendar - Manage Appointments</li>
                <li>Electronic Medical Records</li>
                <li>Billing and Payments</li>
                <li>Expense Management</li>
                <li>Inventory Management</li>
                <li>Detailed Reports</li>
                <li>Specialty Specific Features</li>
                <li>Free Website</li>
                <li>Free Android and iOS app</li>
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
                  lybrate tab
                  <br />
                  <br />
                  &#8377; 1349
                </h5>
                <p>Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Month for Android</li>
                <li>Patient Self Registration</li>
                <li>Real-Time Feedback</li>
                <li>Patient Education Tips</li>
                <li>Patient Education Videos</li>
                <li>Offline Support</li>
                <li>Free Android and iOS app</li>
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
