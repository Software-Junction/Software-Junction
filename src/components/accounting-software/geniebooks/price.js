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
            <h3 className="mb-3">GenieBooks Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Blue Edition
                  <br />
                  <br />
                  &#8377; 6999
                </h5>
                <p>Unit/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Super User, 1-Role-based user, Sub-Users, 1 Companies</li>
                <li>File GST Returns</li>
                <li>Multi-layered Secured data</li>
                <li>Inventory</li>
                <li>Create GST ready invoices</li>
                <li>Accounting</li>
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
                  Green Edition
                  <br />
                  <br />
                  &#8377; 69990
                </h5>
                <p>Unit/Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>1 Super User 20 Companies</li>
                <li>Admin - 1, Custom users - 20, View Users - 100+</li>
                <li>File GST Returns</li>
                <li>Multi-layered Secured data</li>
                <li>Manage Inventory</li>
                <li>Order Management</li>
                <li>Accounting</li>
                <li>API integration</li>
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
