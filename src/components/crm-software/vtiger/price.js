import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../vtiger/vtiger.module.scss";

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
            <h3 className="mb-3">Vtiger CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  One Growth
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead and Contact Management</li>
                <li>Salesforce Automation - Multiple pipelines</li>
                <li>Internal Collaboration</li>
                <li>Help Desk</li>
                <li>Inventory Management</li>
                <li>Reports and Analytics</li>
                <li>Automation</li>
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
                  One Professional
                  <br />
                  <br />
                  &#8377; 2160
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Salesforce Automation - Profile & Engagement Scoring</li>
                <li>
                  Help Desk - Social Ticketing, Round Robin Ticket Assignment,
                  Least Loaded Ticket Assignment, Agent Level Business Hours
                </li>
                <li>
                  Conversations - Internal Team Collaboration Live Web Chat
                </li>
                <li>
                  Dashboards - Sales Insights, Support Insights, Customizable
                  Reports & Dashboards
                </li>
                <li>
                  Inventory Management - Invoicing Vendor Management, Purchase
                  Order Management, Subscriptions, Payment Tracking, Sales Order
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
                  One Enterprise
                  <br />
                  <br />
                  &#8377; 3024
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Contact Engagement - Best Time to Contact</li>
                <li>Salesforce Automation - Multi Currencies</li>
                <li>Help Desk - Work order management</li>
                <li>
                  Project Management - Automated Time Tracking and Billing
                </li>
                <li>
                  Internal Ticketing - Internal Ticketing system for employees
                  and Insights
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
