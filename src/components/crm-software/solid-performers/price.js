import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../solid-performers/solid.module.scss";

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
            <h3 className="mb-3">Solid Performers CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Square
                  <br />
                  <br />
                  &#8377; 750
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead Management</li>
                <li>Deal Management</li>
                <li>Contact Management</li>
                <li>Proposal Management</li>
                <li>Existing Third-Party Integrations</li>
                <li>Timesheet Management</li>
                <li>Sales Automation</li>
                <li>WebForms & Chatbots</li>
                <li>Campaign Management</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
                  Pentagon
                  <br />
                  <br />
                  &#8377; 1125
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Client Management</li>
                <li>PI Management</li>
                <li>Invoice Management</li>
                <li>Support Ticket Management</li>
                <li>Quick Task Management</li>
                <li>Bulk SMS Integration</li>
                <li>Bulk Email Integration</li>
                <li>Lead API Integration</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
                  Hexagon
                  <br />
                  <br />
                  &#8377; 1500
                </h5>
                <p>Per User/Month billed annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Custom Dashboard</li>
                <li>Custom Report</li>
                <li>Advanced API Integrations</li>
                <li>Multiple Company Profiles</li>
                <li>Mailbox & Whatsapp Integration</li>
                <li>Project & Task Management</li>
                <li>Unlimited Users</li>
                <li>Up to 1 Lakh Datapoints</li>
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
