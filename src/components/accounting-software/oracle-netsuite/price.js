import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
            <h3 className="mb-3">Oracle NetSuite ERP Pricing</h3>
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
                  &#8377; 749
                </h5>
                <p>Organisation/Month Billed An...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No. of Invoices: 5000/yr</li>
                <li>No. of Users: 3</li>
                <li>No. of GSTIN: 1</li>
                <li>Accounts Receivable</li>
                <li>Accounts Payable</li>
                <li>Stock Tracking</li>
                <li>Project Invoicing</li>
                <li>e-invoicing</li>
                <li>Multi-lingual invoicing</li>
                <li>Audit Trail</li>
                <li>Automatic Bank Feeds</li>
                <li>Recurring invoices and expenses</li>
                <li>GST Filing</li>
                <li>Online Payments</li>
                <li>Bulk updates</li>
                <li>Reporting tags</li>
                <li>Transaction Locking</li>
                <li>Support: Email</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 1499
                </h5>
                <p>Organisation/Month Billed An...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No. of Invoices: 10,000/yr</li>
                <li>No. of Users: 5</li>
                <li>No. of GSTIN: 2</li>
                <li>Features: Includes everything in Standard +</li>
                <li>Retainer Invoices</li>
                <li>Multi-currency Invoicing</li>
                <li>Automatic Exchange Rates</li>
                <li>Digital Signature</li>
                <li>Project Time Tracking</li>
                <li>Price Lists</li>
                <li>Landed Costs</li>
                <li>Client Approval</li>
                <li>Sales Approval</li>
                <li>Purchase Approval</li>
                <li>Zoho Payroll (10 employees)</li>
                <li>Workflow Rules (Up to 10)</li>
                <li>Support: Email, Voice</li>
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
                  &#8377; 2999
                </h5>
                <p>Organisation/Month Billed An...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No. of Invoices: 25,000/yr</li>
                <li>No. of Users: 10</li>
                <li>No. of GSTIN: 3</li>
                <li>Features: Includes everything in Professional +</li>
                <li>Vendor Portal</li>
                <li>Budgeting</li>
                <li>Custom Domain</li>
                <li>Custom Buttons</li>
                <li>Validation Rules</li>
                <li>WebTabs</li>
                <li>Webhooks</li>
                <li>Custom Functions</li>
                <li>Custom Schedulers</li>
                <li>Workflow Rules (Up to 200)</li>
                <li>Twilio Integration</li>
                <li>Zoho Payroll (20 employees)</li>
                <li>Support: Email, Voice, Chat</li>
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
                  Elite
                  <br />
                  <br />
                  &#8377; 4999
                </h5>
                <p>Organisation/Month Billed An...</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>No. of Invoices: 100,000/yr</li>
                <li>No. of Users: 15</li>
                <li>No. of GSTIN: 3</li>
                <li>Features: Includes everything in Premium +</li>
                <li>Advanced Inventory Control</li>
                <li>Integrate Shopify Stores (Up to 2 stores)</li>
                <li>Warehouse Management (Up to 5 warehouses)</li>
                <li>Serial Number Tracking</li>
                <li>Batch Tracking</li>
                <li>Print Shipping Label (Up to 7,500)</li>
                <li>Shipment Tracking (Up to 7,500)</li>
                <li>Support: Email, Voice, Chat</li>
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
