import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../paymo/paymo.module.scss";

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
            <h3 className="mb-3">Paymo Pricing</h3>
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
                  &#8377; 356
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Up to 5 Users</li>
                <li>Simple Task Management</li>
                <li>KanBan Boards</li>
                <li>Basic Time Tracking</li>
                <li>10GB Storage</li>
                <li>File Sharing</li>
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
                  Business
                  <br />
                  <br />
                  &#8377; 860
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>More than 5 Users</li>
                <li>Basic +</li>
                <li>Advanced Task Management</li>
                <li>Project Templates</li>
                <li>Advanced Time Tracking & Reporting</li>
                <li>Invoices, Estimates & Expenses</li>
                <li>Resource Scheduling</li>
                <li>Integrations</li>
                <li>50GB Storage</li>
                <li>In-app Support</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 1796
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Business +</li>
                <li>Gantt Charts</li>
                <li>Portfolio Gantt</li>
                <li>Unlimited Storage</li>
                <li>Online Remote Assistance</li>
                <li>On Demand Data Backup & Restore</li>
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
