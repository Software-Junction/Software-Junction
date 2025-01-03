import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../greythr/grey.module.scss";

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
            <h3 className="mb-3">greytHR Pricing</h3>
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
                  &#8377; 0
                </h5>
                <p>Per Month for maximum 25 Em...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Limited Features</li>
                <li>Core HR</li>
                <li>Payroll</li>
                <li>Leave Management</li>
                <li>Attendance Management</li>
                <li>Employee Self Onboarding</li>
                <li>Employee Portal (Web and Mobile app)</li>
                <li>Automated Checklists for Task Management</li>
                <li>Advanced Analytics & Reporting</li>
                <li>Onboarding Support & Support plans</li>
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
                  Essential
                  <br />
                  <br />
                  &#8377; 3495
                </h5>
                <p>Per Month for 50 Employees, I...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Core HR</li>
                <li>Payroll Management</li>
                <li>Leave Management</li>
                <li>Employee Workflows for Process Automation</li>
                <li>Employee Portal (Web and Mobile app)</li>
                <li>Automated Checklist for Tasks Management</li>
                <li>Advanced Analytics & Reporting</li>
                <li>AI-Powered Chatbot</li>
                <li>Access & User Management</li>
                <li>Extensive Excel import & Export Facility</li>
                <li>Onboarding Support & Support plans</li>
                <li>Business Expense Claims Management (add on INR 15 PEPM)</li>
                <li>Group Company Support (add on INR 10 PEPM)</li>
                <li>
                  Enterprise Features - SSO & REST API (add on INR 25 PEPM)
                </li>
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
                  Growth
                  <br />
                  <br />
                  &#8377; 5495
                </h5>
                <p>Per Month for 50 Employees, I...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Core HR</li>
                <li>Payroll Management</li>
                <li>Leave Management</li>
                <li>Employee Workflows for Process Automation</li>
                <li>Attendance Management</li>
                <li>Employee Self Onboarding</li>
                <li>Comprehensive Employee Exit Management</li>
                <li>Employee Portal (Web and Mobile app)</li>
                <li>Automated Checklists for Task Management</li>
                <li>Advanced Analytics & Reporting</li>
                <li>AI-Powered Chatbot</li>
                <li>Access & User Management</li>
                <li>Extensive Excel import & Export Facility</li>
                <li>Onboarding Support & Support plans</li>
                <li>Business Expense Claims Management (add on INR 15 PEPM)</li>
                <li>Group Company Support (add on INR 10 PEPM)</li>
                <li>
                  Enterprise Features - SSO & REST API (add on INR 25 PEPM)
                </li>
                <li>GeoMark+ Map based Attendance (add on INR 25 PUPM)</li>
                <li>
                  Visage - AI Facial Recognition Attendance (add on INR 20 PUPM)
                </li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 7495
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Core HR</li>
                <li>Payroll Management</li>
                <li>Leave Management</li>
                <li>Employee Workflows for Process Automation</li>
                <li>Attendance Management</li>
                <li>Employee Self Onboarding</li>
                <li>Comprehensive Employee Exit Management</li>
                <li>Employee Portal (Web and Mobile app)</li>
                <li>Automated Checklists for Task Management</li>
                <li>Advanced Analytics & Reporting</li>
                <li>AI-Powered Chatbot</li>
                <li>Access & User Management</li>
                <li>Extensive Excel import & Export Facility</li>
                <li>Onboarding Support & Support plans</li>
                <li>Business Expense Claims Management</li>
                <li>Group Company Support</li>
                <li>Enterprise Features - SSO & REST API</li>
                <li>GeoMark+ Map based Attendance (add on INR 25 PUPM)</li>
                <li>
                  Visage - AI Facial Recognition Attendance (add on INR 20 PUPM)
                </li>
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
