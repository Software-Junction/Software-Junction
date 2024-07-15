import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../keka/keka.module.scss";

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
            <h3 className="mb-3">Keka Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Foundation
                  <br />
                  <br />
                  &#8377; 6999
                </h5>
                <p>Upto 100 Employees</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Employee Database</li>
                <li>HRMS</li>
                <li>Basic Employee Onboarding</li>
                <li>Basic Employee Exit</li>
                <li>India Payroll</li>
                <li>Expense Management</li>
                <li>Employee Portal (Self Service)</li>
                <li>Leave Management</li>
                <li>Attendance Tracking</li>
                <li>GPS Tracking</li>
                <li>ToDo - Task Management</li>
                <li>Polls & Announcements</li>
                <li>Asset Management</li>
                <li>Basic User Roles</li>
                <li>Mobile App</li>
                <li>Office 365, Google Sign on</li>
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
                  Strength
                  <br />
                  <br />
                  &#8377; 13999
                </h5>
                <p>Upto 100 Employees</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Foundation Features +</li>
                <li>Employee Helpdesk with SLA</li>
                <li>Advanced Employee Onboarding</li>
                <li>Advanced Employee Exit</li>
                <li>Travel Management</li>
                <li>Advanced Roles & Permission</li>
                <li>Advanced Notification</li>
                <li>Report Builder</li>
                <li>REST API</li>
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
