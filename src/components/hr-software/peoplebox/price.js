import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../peoplebox/box.module.scss";

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
            <h3 className="mb-3">Peoplebox Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  OKR Platform
                  <br />
                  <br />
                  &#8377; 576
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
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
                  Full Suite - Professio...
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
                  Full Suite - Premium
                  <br />
                  <br />
                  &#8377; 1080
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Customer Success Manager</li>
                <li>Onboarding & Implementation</li>
                <li>Managers Training</li>
                <li>OKR(Goals)</li>
                <li>Business Reviews</li>
                <li>Project Management</li>
                <li>Integrations</li>
                <li>KPIs Board</li>
                <li>1:1s</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
                  Talent Management
                  <br />
                  <br />
                  &#8377; 504
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>OKR(Goals)</li>
                <li>Performance Reviews</li>
                <li>1-1 Meetings</li>
                <li>Engagement Surveys</li>
                <li>Calibration</li>
                <li>Performance & Productivity Check-in</li>
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
