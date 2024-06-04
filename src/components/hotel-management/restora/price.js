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
            <h3 className="mb-3">Restora POS Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Freshly-Mild
                  <br />
                  <br />
                  &#8377; 3528
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Cloud POS</li>
                <li>Website</li>
                <li>QR Contactless Order Management</li>
                <li>Inventory</li>
                <li>Production for Recipe</li>
                <li>Table Reservation Management</li>
                <li>Advanced Reporting System</li>
                <li>Staff Management / HRM</li>
                <li>VAT & TAX Management</li>
                <li>Multi Kitchen Management with KDS</li>
                <li>Customer Waiting Display / Order Processing System</li>
                <li>Purchase Management / Vendor Management</li>
                <li>Online Order Management</li>
                <li>3rd Party Food Delivery Management</li>
                <li>Accounts</li>
                <li>KOT Management</li>
                <li>Unlimited User</li>
                <li>Multi-Role Management</li>
                <li>CRM</li>
                <li>Multi Payment System</li>
                <li>Online Payment Gateway Integration</li>
                <li>Multi Language Management System</li>
                <li>Free Training</li>
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
                  Bomb-Spicy
                  <br />
                  <br />
                  &#8377; 4968
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Freshly-Mild feature+</li>
                <li>Multi Printer / Kitchen Wise Printer Management</li>
                <li>WhatsApp Order Management</li>
                <li>Waste Management System</li>
                <li>Loyalty Program</li>
                <li>Shift Management</li>
                <li>Taste Habit Management</li>
                <li>Waiter Mobile App</li>
                <li>Kitchen Mobile App</li>
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
                  Blast-Spicy
                  <br />
                  <br />
                  &#8377; 7128
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Bomb-Spicy feature+</li>
                <li>Customer Mobile App - Self Branding</li>
                <li>Android Mobile /TAB POS (Extension)</li>
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
