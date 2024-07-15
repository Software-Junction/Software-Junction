import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../giddh/gid.module.scss";

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
            <h3 className="mb-3">Giddh Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Birch
                  <br />
                  <br />
                  &#8377; 1500
                </h5>
                <p>Per Company/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>10,000 Transactions/year (add ons Available)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Generate Credit Notes/Debit Notes</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Shortcut Key</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Oak
                  <br />
                  <br />
                  &#8377; 4000
                </h5>
                <p>Per Company/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>40,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (2 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Vine
                  <br />
                  <br />
                  &#8377; 10000
                </h5>
                <p>10 Companies/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>40,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (2 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
                  Sequoia
                  <br />
                  <br />
                  &#8377; 15000
                </h5>
                <p>100 Companies/Yearly</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited Users</li>
                <li>100,000 Transactions/year (add ons Available)</li>
                <li>Accounting Consultant (10 Hours/Yearly)</li>
                <li>Manage Inventory with variant Feature</li>
                <li>Manufacturing</li>
                <li>Create Multiple Warehouses</li>
                <li>Create Multiple Branches</li>
                <li>Financial reports</li>
                <li>GSTR Reports and Direct Filing</li>
                <li>Import and Export Data</li>
                <li>Desktop and Mobile Application</li>
                <li>Generate Invoices</li>
                <li>Create Custom User Permission</li>
                <li>18*6 Customer Support</li>
                <li>Real time Dashboard</li>
                <li>Bank reconciliation</li>
                <li>Estimate/Proforma</li>
                <li>E-commerce (Shopify)</li>
                <li>Audit Logs</li>
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
