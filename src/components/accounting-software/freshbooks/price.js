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
            <h3 className="mb-3">Freshbooks Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Lite
                  <br />
                  <br />
                  &#8377; 1368
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Send unlimited invoices to up to 5 clients</li>
                <li>Track unlimited expenses</li>
                <li>Send unlimited estimates</li>
                <li>Get paid with credit cards and bank transfers (ACH)</li>
                <li>Run reports for an easy tax time</li>
                <li>Unlimited + Customized Invoices</li>
                <li>Automated Recurring Invoices</li>
                <li>Scheduled Late Fees</li>
                <li>Automated Late Payment Reminders</li>
                <li>Accept Deposits</li>
                <li>Manage Budget and Billing for Projects</li>
                <li>Online Credit Card Payments</li>
                <li>Online Bank Transfers (ACH)</li>
                <li>Unlimited Time-Tracking</li>
                <li>Unlimited Expenses</li>
                <li>Automated Bank Import</li>
                <li>Mobile Mileage Tracking</li>
                <li>Tax Time Reports</li>
                <li>Business Health Reports</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 2376
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Lite, and:</li>
                <li>Send unlimited invoices to up to 50 clients</li>
                <li>Set up recurring invoices and client retainers</li>
                <li>Send unlimited estimates and proposals</li>
                <li>Automatically capture receipt data</li>
                <li>Invite your accountant</li>
                <li>Run financial and accounting reports</li>
                <li>Accept e-Signatures</li>
                <li>Unlimited Proposals</li>
                <li>Client Retainers</li>
                <li>Double-Entry Accounting Reports</li>
                <li>Bank Reconciliation</li>
                <li>Accountant Access</li>
                <li>Automatic Expense Receipt Data Capture</li>
                <li>Email Receipts Right to Your Account</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 4320
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Plus, and:</li>
                <li>
                  Send unlimited invoices to an unlimited number of clients
                </li>
                <li>Automatically capture bills and receipt data</li>
                <li>Track project profitability</li>
                <li>Customize email templates with dynamic fields</li>
                <li>Customized Email Templates and Signatures</li>
                <li>Automated Client Emails with Dynamic Fields</li>
                <li>Automatic Bill Receipt Data Capture</li>
                <li>Project Profitability</li>
                <li>Accounts Payable</li>
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
