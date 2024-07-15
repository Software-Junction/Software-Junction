import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../creliohealth/crel.module.scss";

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
            <h3 className="mb-3">CrelioHealth Pricing</h3>
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
                  &#8377; 5999
                </h5>
                <p>Month/Centre</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Patient Directory & Relationship Management</li>
                <li>1 Processing Location</li>
                <li>4 Lab Machine Interfacing</li>
                <li>7 Login Users</li>
                <li>150 Doctor & Clinic Logins</li>
                <li>25 B2B Report View Login</li>
                <li>Patient Registration & Orders via Excel</li>
                <li>API Integrations</li>
                <li>Activity Audit Logs</li>
                <li>Printing Bulk Orders</li>
                <li>File Attachment to Reports</li>
                <li>Integrated PACS for Radiology Imaging</li>
                <li>Finance Dashboard & Analytics</li>
                <li>Order & Payment Management</li>
                <li>Patient Communication (Omni Channel)</li>
                <li>Online Payment</li>
                <li>Sample Segregation & Barcoding and Logistics</li>
                <li>
                  Home Visits, Appointment Scheduling & Phlebotomists Management
                </li>
                <li>Lab Reporting & Interfacing</li>
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
                  Advance
                  <br />
                  <br />
                  &#8377; 9999
                </h5>
                <p>Month/Centre</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Processing Location</li>
                <li>6 Lab Machine Interfacing</li>
                <li>15 Login Users</li>
                <li>Unlimited Doctor & Clinic Login</li>
                <li>50 B2B Report View Logins</li>
                <li>Branded Patient Communications (Email, SMS, Online)</li>
                <li>Sample Pre-processing & Archival</li>
                <li>QC & Middleware Interfacing</li>
                <li>Lab Performance & Quality Control</li>
                <li>Exception Reports</li>
                <li>Test & Business Analytics</li>
                <li>Marketing Team Performance</li>
                <li>B2B Auto-invoicing & Online Payments</li>
                <li>Petty Cash Management</li>
                <li>TAT Analytics</li>
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
                  Multi-Centre
                  <br />
                  <br />
                  &#8377; 24999
                </h5>
                <p>Month/Centre</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>2 Processing Locations</li>
                <li>12 Lab Machine Interfacing</li>
                <li>30 Login Users</li>
                <li>Unlimited Doctor & Clinic Login</li>
                <li>100 B2B Report View Logins</li>
                <li>Multi-Location Patient Search</li>
                <li>Patient Loyalty Programme Management</li>
                <li>Batch Transfers Between Locations</li>
                <li>Automatic Outsourcing Between Locations</li>
                <li>Multi-Location Monitoring</li>
                <li>Multi-Location Finance Exports</li>
                <li>Multi-Location Test Master Linking</li>
                <li>Cross-Location Result Transfers</li>
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
