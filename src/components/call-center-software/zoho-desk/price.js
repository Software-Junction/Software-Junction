import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../zoho-desk/zoho-desk.module.scss";

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
            <h3 className="mb-3">Zoho Desk Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free Plan
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Agent/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>3 Free Agents</li>
                <li>Email Ticketing</li>
                <li>Customer Management</li>
                <li>Help Center</li>
                <li>Private Knowledge Base</li>
                <li>Predefined SLAs</li>
                <li>Macros</li>
                <li>Multi Language Helpdesk</li>
                <li>24*5 Email Support</li>
                <li>Mobile Apps</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 1008
                </h5>
                <p>Agent/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Social & Community Channels</li>
                <li>Product Based Ticket Management</li>
                <li>Help Center Themes Gallery</li>
                <li>Public Knowledge Base</li>
                <li>SLAs & Escalations</li>
                <li>Workflow, Assignment & Supervise Rules</li>
                <li>Customer Happiness Ratings</li>
                <li>Reports & Dashboards</li>
                <li>Work Modes for Tickets</li>
                <li>Marketplace Extensions & Integrations</li>
                <li>ASAP - Embeddable Self Service</li>
                <li>24x5 Phone Support</li>
                <li>Add-On ( Inr 300/Light Agent)</li>
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
                  Proffesional
                  <br />
                  <br />
                  &#8377; 1656
                </h5>
                <p>Agent/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Multi-department Ticketing</li>
                <li>Team Management</li>
                <li>Telephony</li>
                <li>Automatic Time Tracking</li>
                <li>Blueprint - Basic Process Management</li>
                <li>Round Robin Ticket Assignment</li>
                <li>Agent Collision</li>
                <li>Tasks, Events & Call Activities</li>
                <li>Ticket Templates</li>
                <li>Private Marketplace Extensions</li>
                <li>SLA Dashboards</li>
                <li>Ticket Sharing</li>
                <li>Mobile SDK</li>
                <li>24x5 Chat Support</li>
                <li>Add-On ( Inr 300/Light Agent)</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 2880
                </h5>
                <p>Agent/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Live Chat</li>
                <li>Zia - Artificial Intelligence (Beta)</li>
                <li>Help Center Customization</li>
                <li>Multi-brand Help Center</li>
                <li>Advanced Process Management</li>
                <li>Custom Functions</li>
                <li>Multi-level IVR</li>
                <li>Global Reports & Dashboards</li>
                <li>Scheduled Reports</li>
                <li>Contract Management</li>
                <li>Validation Rules</li>
                <li>Field Watching</li>
                <li>Multiple Business Hours & Holidays</li>
                <li>Role-based Data Sharing</li>
                <li>50 Light Agents</li>
                <li>Add-On ( Inr 300/Light Agent)</li>
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
