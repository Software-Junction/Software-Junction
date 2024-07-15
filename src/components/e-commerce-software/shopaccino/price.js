import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../shopaccino/shopaccino.module.scss";

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
            <h3 className="mb-3">Shopaccino Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Starter
                  <br />
                  <br />
                  &#8377; 1000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Live at your own domain</li>
                <li>Beautiful Responsive Themes</li>
                <li>Theme Customization</li>
                <li>Ready to Use Web Pages Modules</li>
                <li>Create Custom Web Pages</li>
                <li>Category Management</li>
                <li>Multiple Images & Video</li>
                <li>Custom Tagging</li>
                <li>Search Engine Optimized</li>
                <li>Meta Tags Management</li>
                <li>Email Notifications</li>
                <li>Free Google Adwords Credit</li>
                <li>Cloud Hosting & Security</li>
                <li>Google Analytics</li>
                <li>Audit Trail</li>
                <li>Support (Email, Chat and Phone)</li>
                <li>Number of Products - 150</li>
                <li>File Storage - 1Gb</li>
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
                  Basic
                  <br />
                  <br />
                  &#8377; 2000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Online Store</li>
                <li>Facebook Store</li>
                <li>Number of Products - 2,000</li>
                <li>File Storage - 2GB</li>
                <li>Free Domain</li>
                <li>Live at your own domain</li>
                <li>Beautiful Responsive Themes</li>
                <li>Theme Customization</li>
                <li>Ready to Use Web Pages Modules</li>
                <li>Create Custom Web Pages</li>
                <li>Blog</li>
                <li>Category Management</li>
                <li>Multiple Images & Video</li>
                <li>Tax Management & Report</li>
                <li>Custom Tagging</li>
                <li>Payment Gateway</li>
                <li>Multiple Payment Options</li>
                <li>Multiple Shipping Partners</li>
                <li>Define Shipping Rates</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 3000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Online Store</li>
                <li>Facebook Store</li>
                <li>Number of Products - 10,000</li>
                <li>File Storage - 5GB</li>
                <li>Free Domain</li>
                <li>Live at your own domain</li>
                <li>Beautiful Responsive Themes</li>
                <li>Theme Customization</li>
                <li>Blog</li>
                <li>Category Management</li>
                <li>Multiple Images & Video</li>
                <li>Product Variants</li>
                <li>Sell Add-On with Product</li>
                <li>Inventory Management</li>
                <li>Tax Management & Report</li>
                <li>Custom Tagging</li>
                <li>Reviews & Rating on Products</li>
                <li>Payment Gateway</li>
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
                  Advance
                  <br />
                  <br />
                  &#8377; 5000
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Online Store</li>
                <li>Facebook Store</li>
                <li>Number of Products - Unlimited</li>
                <li>File Storage - Unlimited</li>
                <li>Free Domain</li>
                <li>Live at your own domain</li>
                <li>Beautiful Responsive Themes</li>
                <li>Theme Customization</li>
                <li>Ready to Use Web Pages Modules</li>
                <li>Create Custom Web Pages</li>
                <li>Blog</li>
                <li>Category Management</li>
                <li>Multiple Images & Video</li>
                <li>Product Variants</li>
                <li>Sell Add-On with Product</li>
                <li>Inventory Management</li>
                <li>Tax Management & Report</li>
                <li>Custom Tagging</li>
                <li>Reviews & Rating on Products</li>
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
