import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../rent-manager/rent-manager.module.scss";

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
            <h3 className="mb-3">Rent Manager Pricing</h3>
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
                  &#8377; 72
                </h5>
                <p>Per Unit, Per Month Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Rent Manager Online (RMO)</li>
                <li>Complete Accounting System</li>
                <li>Work Order Management</li>
                <li>Marketing & Leasing Tools</li>
                <li>Online Portals – Owners, Tenants, Prospects</li>
                <li>rmResident – Tenant App</li>
                <li>Online Applications & eSignatures</li>
                <li>450+ Built-In Financial/Property-Related Reports</li>
                <li>Rent Manager University (Standard)</li>
                <li>Unlimited Live Support</li>
                <li>Web Chat</li>
                <li>Electronic Payments</li>
                <li>Resident Screenings</li>
                <li>Renters Insurance & Compliance Tracking</li>
                <li>No Cost Vendor Payments</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 108
                </h5>
                <p>Per Unit, Per Month Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Rent Manager Online (RMO)</li>
                <li>Complete Accounting System</li>
                <li>Work Order Management</li>
                <li>Marketing & Leasing Tools</li>
                <li>Online Portals – Owners, Tenants, Prospects</li>
                <li>rmResident – Tenant App</li>
                <li>Online Applications & eSignatures</li>
                <li>450+ Built-In Financial/Property-Related Reports</li>
                <li>Rent Manager University (Standard)</li>
                <li>Unlimited Live Support</li>
                <li>Web Chat</li>
                <li>Electronic Payments</li>
                <li>Resident Screenings</li>
                <li>Renters Insurance & Compliance Tracking</li>
                <li>No Cost Vendor Payments</li>
                <li>Rent Manager Call Center</li>
                <li>2-Way Texting & Phone Broadcast</li>
                <li>Bank Syncing</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 180
                </h5>
                <p>Per Unit, Per Month Unlimited Users</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Rent Manager Online (RMO)</li>
                <li>Complete Accounting System</li>
                <li>Work Order Management</li>
                <li>Marketing & Leasing Tools</li>
                <li>Online Portals – Owners, Tenants, Prospects</li>
                <li>rmResident – Tenant App</li>
                <li>Online Applications & eSignatures</li>
                <li>450+ Built-In Financial/Property-Related Reports</li>
                <li>Rent Manager University (Standard)</li>
                <li>Unlimited Live Support & Customer Success Team</li>
                <li>Web Chat</li>
                <li>Electronic Payments & Resident Screenings</li>
                <li>Renters Insurance & Compliance Tracking</li>
                <li>No Cost Vendor Payments</li>
                <li>Rent Manager Call Center</li>
                <li>2-Way Texting</li>
                <li>Phone Broadcast & rmAppSuite Pro Mobile App</li>
                <li>Video Inspections</li>
                <li>Bank Syncing & Open API</li>
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
