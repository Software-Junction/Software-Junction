import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
            <h3 className="mb-3">Marg ERP 9+Accounting Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic Edition
                  <br />
                  <br />
                  &#8377; 8100
                </h5>
                <p>Full Licence/ Single-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Easy GST Billing & Filing</li>
                <li>License Valid To Multi Companies (Unlimited)</li>
                <li>Sales / Purchase Invoice</li>
                <li>Accounting Management</li>
                <li>Auto- Bank Reconciliation System</li>
                <li>Reporting</li>
                <li>Reports Manager (MIS Report)</li>
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
                  Silver Edition
                  <br />
                  <br />
                  &#8377; 12600
                </h5>
                <p>Full Licence/ Single-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Basic Edition</li>
                <li>Online payment with ICICI</li>
                <li>
                  Post Dated (P.D.C.) & Advance Cheques Issue and Receive
                  Management
                </li>
                <li>Internal Audit reports/ Multiple reports for CAs</li>
                <li>Self-configurable invoice formats</li>
                <li>Inventory & Accounting Approval System</li>
                <li>SMS & E-Mail System</li>
                <li>Bill Audit (Dispatch Management System)</li>
                <li>Data Copy Protection (Data Lock Security)</li>
                <li>Data Sync (Per Location)</li>
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
                  Gold Edition
                  <br />
                  <br />
                  &#8377; 25200
                </h5>
                <p>Full Licence/ Multi-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All the features of Basic & Silver edition</li>
                <li>Advance Payment scheduling</li>
                <li>Real-time direct payments through multiple modes</li>
                <li>Maker-checker payment system</li>
                <li>Advance suspense entry cheque</li>
                <li>Fund Flow & Cash Flow</li>
                <li>Multi Currency Accounting</li>
                <li>Manually Configured Cheque Printing</li>
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
