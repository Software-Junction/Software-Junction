import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../qandle/qandle.module.scss";

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
            <h3 className="mb-3">Qandle Pricing</h3>
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
                  &#8377; 49
                </h5>
                <p>Employee/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom Domain & Login Page</li>
                <li>Leaves Management</li>
                <li>Attendance</li>
                <li>Payroll</li>
                <li>Statutory Compliances</li>
                <li>Employee Database & Records</li>
                <li>Profiles & Directory</li>
                <li>Employee Self Service</li>
                <li>Basic Reports</li>
                <li>Custom Reports & Visual Analytics</li>
                <li>Email Support</li>
                <li>Phone Support</li>
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
                  Regular
                  <br />
                  <br />
                  &#8377; 79
                </h5>
                <p>Employee/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Basic</li>
                <li>Asset Management</li>
                <li>Help Desk</li>
                <li>Broadcast</li>
                <li>Employee Health & Safety</li>
                <li>Reports & Analytics</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 99
                </h5>
                <p>Employee/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Regular</li>
                <li>On-boarding & Exit</li>
                <li>e-Letters & e-Signatures</li>
                <li>Task & Project Management</li>
                <li>Objectives & Key Results</li>
                <li>Feedback & Appraisals</li>
                <li>Travel Management</li>
                <li>Business Expenses</li>
                <li>Dedicated Account Manager</li>
                <li>Timesheets</li>
                <li>Shift Scheduling</li>
                <li>Performance Management</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 129
                </h5>
                <p>Employee/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Plus</li>
                <li>Custom Careers Site</li>
                <li>Job Details</li>
                <li>Applicant Tracking & Scheduling</li>
                <li>Recruitment Agency Portal</li>
                <li>Interview Scheduling</li>
                <li>Resume Database</li>
                <li>Collaboration</li>
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
