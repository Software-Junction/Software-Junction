import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../go-gst-bill/go-gst-bill.module.scss";

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
            <h3 className="mb-3">Go Gst Bill Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Lifetime Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Onetime</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sales & Purchase Invoice</li>
                <li>Payment Receipt</li>
                <li>Customer & Product</li>
                <li>Stock</li>
                <li>Phone & Email Support</li>
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
                Premium Membership
                  <br />
                  <br />
                  &#8377; 1499
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sales & Purchase Invoice</li>
                <li>Payment Receipt</li>
                <li>Customer & Product</li>
                <li>Stock</li>
                <li>Phone & Email Support</li>
                <li>Staff Account</li>
                <li>Invoice Header Design</li>
                <li>Expense Manager</li>
                <li>Delivery Challan</li>
                <li>Quotation</li>
                <li>Proforma Invoice</li>
                <li>Purchase Order</li>
                <li>Credit / Debit Note</li>
                <li>Reports</li>
                <li>Import Customer & Product</li>
                <li>Send Email</li>
                <li>Document Conversion</li>
                <li>Multiple Invoice Template</li>
                <li>E-Way Bill</li>
                <li>E-Invoice</li>
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
