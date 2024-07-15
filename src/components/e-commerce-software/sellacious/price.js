import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../sellacious/sellacious.module.scss";

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
            <h3 className="mb-3">Sellacious Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Starter</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Free for Lifetime</li>
                <li>Community Support</li>
                <li>Free geo up to State level</li>
                <li>Paypal plugin included</li>
                <li>Unlimited evaluation</li>
                <li>Video Documentation</li>
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
                  Silver Month
                  <br />
                  <br />
                  &#8377; 3528
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>One Website</li>
                <li>30 days of premium support</li>
                <li>Unlimited updates</li>
                <li>Bulk editing views</li>
                <li>No ads in admin panel</li>
                <li>Free geo up to State level</li>
                <li>No footer link</li>
                <li>Video documentation</li>
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
                  Golden Quarter
                  <br />
                  <br />
                  &#8377; 7128
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Free Configuration</li>
                <li>One Website</li>
                <li>90 days of premium support</li>
                <li>Unlimited updates</li>
                <li>Bulk editing views</li>
                <li>Paypal plugin included</li>
                <li>Free geo up to State level</li>
                <li>No ads in admin panel</li>
                <li>No footer link</li>
                <li>Video documentation</li>
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
                  Platinium Year
                  <br />
                  <br />
                  &#8377; 14328
                </h5>
                <p>_</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Free Configuration</li>
                <li>One Website</li>
                <li>365 Days of Premium support</li>
                <li>Unlimited updates</li>
                <li>Bulk editing views</li>
                <li>Free geo up to State level</li>
                <li>Paypal plugin included</li>
                <li>No ads in admin panel</li>
                <li>No footer link</li>
                <li>Video documentation</li>
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
