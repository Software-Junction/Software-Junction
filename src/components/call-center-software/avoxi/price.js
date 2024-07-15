import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../avoxi/avoxi.module.scss";

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
            <h3 className="mb-3">AVOXI Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Genius Contact
                  <br />
                  <br />
                  &#8377; 1439
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Inbound & Outbound Calling</li>
                <li>Automatic Call Distributor (ACD)</li>
                <li>Interactive Voice Response (IVR)</li>
                <li>Call Controls</li>
                <li>Superior Call Quality</li>
                <li>24/7 Phone Support</li>
                <li>Unlimited Concurrent Calls</li>
                <li>Quality Management</li>
                <li>Unlimited Call Recording</li>
                <li>Advanced Analytics</li>
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
                  Genius Enterprise
                  <br />
                  <br />
                  &#8377; 2879
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Inbound & Outbound Calling</li>
                <li>Automatic Call Distributor (ACD)</li>
                <li>Interactive Voice Response (IVR)</li>
                <li>Call Controls</li>
                <li>Superior Call Quality</li>
                <li>24/7 Phone Support</li>
                <li>Unlimited Concurrent Calls</li>
                <li>Quality Management</li>
                <li>Unlimited Call Recording</li>
                <li>Advanced Analytics</li>
                <li>Customized Reporting</li>
                <li>Advanced Call Monitoring</li>
                <li>CRM Data Dips</li>
                <li>CRM Integrations</li>
                <li>Helpdesk Integrations</li>
                <li>Bring Your Own Carrier</li>
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
