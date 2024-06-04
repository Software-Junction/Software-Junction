import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Price = ({ styles }) => {
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
            <h3 className="mb-3">EasY GST Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  EasyGST (Light)
                  <br />
                  <br />
                  &#8377; 2900
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>GST Returns filing</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
                <li>Online Data Collection tools</li>
                <li>Max 100 Assessee - Taxes extra</li>
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
                  EasyGST (Professional)
                  <br />
                  <br />
                  &#8377; 8000
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Taxes Extra</li>
                <li>GST Returns filing</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
                <li>Online Data Collection tools</li>
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
                  EasyGST (Poplular)
                  <br />
                  <br />
                  &#8377; 3900
                </h5>
                <p>Per Installation</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Max 250 Asseseess</li>
                <li>GST Returns filing</li>
                <li>Online Data Collection tools</li>
                <li>Taxes Extra</li>
                <li>GST Reconciliation of 2A , 2B data with Accounts</li>
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
