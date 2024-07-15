import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../sabeeapp/sabee.module.scss";

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
            <h3 className="mb-3">SabeeApp Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  1-9 rooms
                  <br />
                  <br />
                  &#8377; 6048
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>PMS</li>
                <li>Channel Manager</li>
                <li>Internet Booking engine</li>
                <li>GuestAdvisor Tools (for extra fee)</li>
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
                  10-19 rooms
                  <br />
                  <br />
                  &#8377; 8640
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>PMS</li>
                <li>Channel Manager</li>
                <li>Internet Booking Engine</li>
                <li>GuestAdvisor Tools (for extra fee)</li>
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
                  20-49 rooms
                  <br />
                  <br />
                  &#8377; 11376
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>PMS</li>
                <li>Channel Manager</li>
                <li>Internet Booking Engine</li>
                <li>GuestAdvisor Tools (for extra fee)</li>
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
                  50-99 rooms
                  <br />
                  <br />
                  &#8377; 14760
                </h5>
                <p>month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>PMS</li>
                <li>Channel Manager</li>
                <li>Internet Booking Engine</li>
                <li>GuestAdvisor Tools (for extra fee)</li>
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
