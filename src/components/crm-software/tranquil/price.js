import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../tranquil/tran.module.scss";

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
            <h3 className="mb-3">Tranquil CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Ultimate Pro
                  <br />
                  <br />
                  &#8377; 360000
                </h5>
                <p>One Time Payment / Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>CRM Mobile App</li>
                <li>Channel Partner Mobile App</li>
                <li>Customer Mobile App</li>
                <li>Call, SMS, Email, WhatsApp Integration</li>
                <li>File Manager for Sending Brochures, Flyers</li>
                <li>Activity Calendar</li>
                <li>Channel Partner Integration and Management</li>
                <li>Auto Responders for all activities</li>
                <li>KPI/Daily Performance Tracking</li>
                <li>Employee Performance</li>
                <li>Weekly Performance</li>
                <li>Monthly Performance</li>
                <li>Telecaller Integration</li>
                <li>Activity Reminders to phone</li>
                <li>Daily Activity Schedules</li>
                <li>Source Wise Performance</li>
                <li>Cost Per Sale Analysis</li>
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
                  Business pro
                  <br />
                  <br />
                  &#8377; 270000
                </h5>
                <p>One Time Payment / Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>CRM Mobile App</li>
                <li>Channel Partner Mobile App</li>
                <li>Customer Mobile App</li>
                <li>Cloud App</li>
                <li>Cost Per Sale Analysis</li>
                <li>Source Wise Performance</li>
                <li>Daily Activity Schedules</li>
                <li>Activity Reminders to Phone</li>
                <li>Telecaller Integration</li>
                <li>Monthly Performance</li>
                <li>Weekly Performance</li>
                <li>Employee Performance</li>
                <li>KPI/Daily Performance Tracking</li>
                <li>Auto Responders for All Activities</li>
                <li>Channel Partner Integration and Management</li>
                <li>Activity Calendar</li>
                <li>File Manager for Sending Brochures, Flyers</li>
                <li>Call, SMS, Email, WhatsApp Integration</li>
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
                  Standard Pro
                  <br />
                  <br />
                  &#8377; 180000
                </h5>
                <p>One Time Payment / Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>CRM Mobile App</li>
                <li>Channel Partner Mobile App</li>
                <li>Customer Mobile App</li>
                <li>Call, SMS, Email, Whatsapp Integration</li>
                <li>File Manager for Sending Brochures, Flyers</li>
                <li>Activity Calendar</li>
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
