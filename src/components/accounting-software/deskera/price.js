import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../deskera/des.module.scss";

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
            <h3 className="mb-3">Deskera Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Professional
                  <br />
                  <br />
                  &#8377; 5999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All In One Dashboard</li>
                <li>Unlimited invoices and bills</li>
                <li>Connect your banks</li>
                <li>Multi currency</li>
                <li>Add your own custom fields</li>
                <li>Get complete inventory management</li>
                <li>Run payroll for 15 employees</li>
                <li>Apply and approve leaves & expenses</li>
                <li>Create your own sales pipelines</li>
                <li>Run email campaigns</li>
                <li>Email & chat support</li>
                <li>Access to Helpcentre & Deskera Academy</li>
                <li>No Code Landing Pages</li>
                <li>Drag and Drop Custom Forms</li>
                <li>Sales Automation</li>
                <li>Automate Tasks on Deal Stages</li>
                
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
                Startup
                  <br />
                  <br />
                  &#8377; 1199
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All In One Dashboard</li>
                <li>Create 30 invoices & bills</li>
                <li>Connect your banks</li>
                <li>Run Payroll for 5 employees</li>
                
                
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
                Essential
                  <br />
                  <br />
                  &#8377; 2999
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All In One Dashboard</li>
                <li>Unlimited invoices and bills</li>
                <li>Connect your banks</li>
                <li>Multi currency</li>
                <li>Run payroll for 10 employees</li>
                
                
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
