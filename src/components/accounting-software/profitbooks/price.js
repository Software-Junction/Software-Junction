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
            <h3 className="mb-3">ProfitBooks Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Professional Plan
                  <br />
                  <br />
                  &#8377; 5999
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Accounting</li>
                <li>Includes 10 Free Users</li>
                <li>Bill your client for time</li>
                <li>Track expenses and manage finances</li>
                <li>Payroll</li>
                <li>Create invoices in multi-currency</li>
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
                  SMB Plan
                  <br />
                  <br />
                  &#8377; 8999
                </h5>
                <p>Per Year</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Accounting</li>
                <li>Includes 10 Free Users</li>
                <li>Create sales orders & POS</li>
                <li>Inventory</li>
                <li>Payroll</li>
                <li>Purchase & sell inventory</li>
                <li>Maintain warehouses</li>
                <li>Track stock movements or wastage easily</li>
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
