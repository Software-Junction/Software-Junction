import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../browntape/browntape.module.scss";

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
            <h3 className="mb-3">Browntape Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  DIY Software
                  <br />
                  <br />
                  &#8377; 3
                </h5>
                <p>Per Order</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Advanced Analytics</li>
                <li>Marketplace Integration</li>
                <li>Order Management</li>
                <li>Inventory Management</li>
                <li>Marketplace Remittances</li>
                <li>Webstore Integration</li>
                <li>Pricing Management</li>
                <li>Minimum INR 5000 Recharge</li>
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
                  Managed Ecommerce Services
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Site Development</li>
                <li>Site Maintenance</li>
                <li>Marketplace Marketing</li>
                <li>SEO</li>
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
                  OmniChannel
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Order Hopping</li>
                <li>Multi-location Inventory</li>
                <li>Courier Integration</li>
                <li>Offline Inventory sync to Webstore</li>
                <li>Offline Inventory sync to Marketplaces</li>
                <li>Store Fulfilment</li>
                <li>Order Routing</li>
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
                  Browntape REST API
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Contact Us for Customize Plan</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>REST API Access</li>
                <li> Integration Docs & Support</li>
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
