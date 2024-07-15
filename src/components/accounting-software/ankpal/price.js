import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../ankpal/ank.module.scss";


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
            <h3 className="mb-3">Ankpal Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Shuruaat
                  <br />
                  <br />
                  &#8377; 10000
                </h5>
                <p>Full License/Two User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Cloud Based Accounting Management</li>
                <li>E-invoice and E-way Bill</li>
                <li>GST Reconcilation and Filing</li>
                <li>Multi Branch</li>
                <li>Batchwise Inventory Management</li>
                <li>Bank Import Functionality</li>
                
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
                Sahas
                  <br />
                  <br />
                  &#8377; 20000
                </h5>
                <p>Full License/Multi User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Batchwise Inventory Management</li>
                <li>Multi Companies/Multi Branch/Multi Users</li>
                <li>Fixed Assets Management</li>
                <li>Payroll Import Functionality</li>
                <li>E-invoice E-way Bills</li>
                <li>GST Fillings and Reconcilations</li>
                
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
