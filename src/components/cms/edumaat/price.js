import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../edumaat/edumaat.module.scss";

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
            <h3 className="mb-3">EDUMAAT Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic in Cloud
                  <br />
                  <br />
                  ₹72
                </h5>
                <p>Student/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Basic Modules</li>
                <li>Student Management</li>
                <li>Staff Management</li>
                <li>Fee Management</li>
                <li>Attendance Management</li>
                <li>SMS</li>
                <li>AWS Hosting with complete security</li>
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
                  Advanced in Cloud
                  <br />
                  <br />
                  ₹144
                </h5>
                <p>Student/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Modules of EDUMAAT</li>
                <li>Admission & Enquiry</li>
                <li>Fee Collection</li>
                <li>Accounts</li>
                <li>Payroll</li>
                <li>Library</li>
                <li>Inventory and Stores</li>
                <li>Course/Lesson Plan and Schedule</li>
                <li>Visitor Management</li>
                <li>Placement Cell</li>
                <li>Document Management System</li>
                <li>Mobile Application</li>
                <li>Custom Letter/Document Generation</li>
                <li>Examination Management</li>
                <li>Communication and Automated Remainders</li>
                <li>Hostel Management</li>
                <li>Time Table Management</li>
                <li>Leave Setup Configuration</li>
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
