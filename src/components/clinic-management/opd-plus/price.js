import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Price = ({ styles }) => {
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
            <h3 className="mb-3">OPD PLUS Management Software Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Healcon Professional
                  <br />
                  <br />
                  &#8377; 399
                </h5>
                <p>Per Month for 1 Clinic ( Unlimited Doctors/Staff Login )</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>
                  Appointment Management - Advance
                  Calendar/Scheduler/Reminder/Follow-up
                </li>
                <li>Electronic Medical Records</li>
                <li>Quick Prescription (Print/SMS/Email)</li>
                <li>Professional Billing</li>
                <li>Expense Management</li>
                <li>Patient's Medical Documents Upload</li>
                <li>SMS Center for Bulk Patient SMS</li>
                <li>Clinic Analytics & Reporting</li>
                <li>Clinic Staff Management</li>
                <li>Unlimited Patients</li>
                <li>Unlimited Appointments</li>
                <li>Unlimited Prescriptions</li>
                <li>Unlimited Treatment Plans</li>
                <li>Unlimited Clinical Notes</li>
                <li>Unlimited Doctors</li>
                <li>Unlimited Appointment Confirmation SMS</li>
                <li>Free 1000 SMS credits per month</li>
                <li>Free Clinic Webpage</li>
                <li>Free Android / IOS App / Windows Mobile App</li>
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
                  Healcon Enterprise
                  <br />
                  <br />
                  &#8377; 998
                </h5>
                <p>
                  Per Month for 4 Clinics (Add extra clinic for only Rs. 200 per
                  month)
                </p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Admin Module for Multi-Clinic Appointment Management</li>
                <li>Admin Module for Multi-Clinic Billing Management</li>
                <li>Admin Module for Multi-Clinic Staff Management</li>
                <li>Admin Analytics</li>
                <li>
                  Appointment Management - Advance
                  Calendar/Scheduler/Reminder/Follow-up
                </li>
                <li>Electronic Medical Records</li>
                <li>Quick Prescription (Print/SMS/Email)</li>
                <li>Professional Billing</li>
                <li>Expense Management</li>
                <li>Patient's Medical Documents Upload</li>
                <li>SMS Center for Bulk Patient SMS</li>
                <li>Clinic Analytics & Reporting</li>
                <li>Clinic Staff Management</li>
                <li>Unlimited Patients</li>
                <li>Unlimited Appointments</li>
                <li>Unlimited Prescriptions</li>
                <li>Unlimited Treatment Plans</li>
                <li>Unlimited Clinical Notes</li>
                <li>Unlimited Doctors</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

export default Price;
