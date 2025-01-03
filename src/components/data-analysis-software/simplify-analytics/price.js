import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../simplify-analytics/sim.module.scss";

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
            <h3 className="mb-3">SimplifyAnalytics Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Base Package - Insig...
                  <br />
                  <br />
                  &#8377; 22,000
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>One time setup - INR 10000</li>
                <li>Monthly fixed - INR 22000</li>
                <li>Full installation of base package on local server/cloud</li>
                <li>
                  Monthly maintenance of product and on-site service support
                </li>
                <li>Product training to business users</li>
                <li>Free customization of base package as per your need</li>
                <li>Lifetime free updates/additions to base package</li>
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
                  Addon Package
                  <br />
                  <br />
                  &#8377; 10,000
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>One Time Setup – INR 5000</li>
                <li>Monthly Fixed – INR 10000</li>
                <li>
                  Pick and choose modules as you mature and pay accordingly
                </li>
                <li>
                  Full customization and subsequent maintenance as per your need
                </li>
                <li>Each module integrated with the base package</li>
                <li>Module insights/action items are updated monthly</li>
                <li>Lifetime free updates/additions to each module</li>
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
