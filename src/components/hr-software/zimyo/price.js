import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../zimyo/zimyo.module.scss";

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
            <h3 className="mb-3">Zimyo Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic
                  <br />
                  <br />
                  &#8377; 80
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Employee Management</li>
                <li>Time and Attendance Management</li>
                <li>Leave Management</li>
                <li>Policy Management</li>
                <li>Document Management</li>
                <li>Workflow Management</li>
                <li>Employee Onboarding</li>
                <li>Employee Offboarding</li>
                <li>Reports & Analytics</li>
                <li>Employee Self Service (ESS)</li>
                <li>Mobile App (Android & IOS)</li>
                <li>Team Management</li>
                <li>Geo-Tagged Attendance</li>
                <li>Payroll Software</li>
                <li>Payroll Automation</li>
                <li>Statutory Compliance</li>
                <li>Expense Management</li>
                <li>Benefits Management</li>
                <li>Payroll for Single Entity</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 120
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Basic Features</li>
                <li>Advance HR</li>
                <li>Roster Management</li>
                <li>Asset Management</li>
                <li>Helpdesk Management</li>
                <li>Transfer & Probation Management</li>
                <li>Custom Reports & Dashboards</li>
                <li>Advance Employee Onboarding</li>
                <li>Advance Employee Offboarding</li>
                <li>Advance Employee Self Service (ESS)</li>
                <li>Single Sign-on (SSO)</li>
                <li>Task Management</li>
                <li>Two-Factor Authentication</li>
                <li>Advance Time Tracking</li>
                <li>Geo Fencing</li>
                <li>Selfie Attendance</li>
                <li>Advance Payroll</li>
                <li>Overtime & Incentives</li>
                <li>Payroll for Multiple Entities</li>
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
                  &#8377; 200
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All Basic Features</li>
                <li>All Standard Features +</li>
                <li>Engage</li>
                <li>Employee Pulse Surveys</li>
                <li>Collaboration Chats & Groups</li>
                <li>Announcements & Expression Wall</li>
                <li>Performance Management</li>
                <li>Rewards & Recognitions (Coming Soon)</li>
                <li>Performance Reviews (KPIs)</li>
                <li>OKRs</li>
                <li>Feedback</li>
                <li>Automation</li>
                <li>Visual Analytics</li>
                <li>Integrations</li>
                <li>Global Payroll</li>
                <li>Global Group Company Setup</li>
                <li>Global Workforce Management</li>
                <li>Payroll for Multiple Countries</li>
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
