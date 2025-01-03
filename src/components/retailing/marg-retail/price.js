import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../marg-retail/marg.module.scss";

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
            <h3 className="mb-3">Marg Retail Software Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Basic Edition
                  <br />
                  <br />
                  &#8377; 7,200
                </h5>
                <p>Full Licence/ Single-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>7 layer backup protection</li>
                <li>Inventory Management</li>
                <li>Push Sale</li>
                <li>Secondary stock Management</li>
                <li>Expiry management</li>
                <li>Reporting</li>
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
                  Silver Edition
                  <br />
                  <br />
                  &#8377; 12,600
                </h5>
                <p>Full Licence/ Single-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features in Basic Edition</li>
                <li>Multi Store Management (Godown Management)</li>
                <li>Sales Man (M.R.) / Area / Rout wise Reporting</li>
                <li>Barcode / Label Printing</li>
                <li>Inventory & Accounting Approval System</li>
                <li>Cashier Management</li>
                <li>Shortcut Keys (Short Buttons) & Recently view reports</li>
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
                  Gold Edition
                  <br />
                  <br />
                  &#8377; 25,200
                </h5>
                <p>Full Licence/ Multi-User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Scheme & Discount management</li>
                <li>SMS & E-Mail System</li>
                <li>Bill Audit (Dispatch Management System)</li>
                <li>Touch Screen Point of Sale</li>
                <li>Data Copy Protection (Data Lock Security)</li>
                <li>Multi Firm Billing System</li>
                <li>Home Delivery</li>
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
