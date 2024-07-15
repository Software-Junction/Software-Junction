import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
            <h3 className="mb-3">Tix Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Box Office Fee
                  <br />
                  <br />
                  &#8377; 18
                </h5>
                <p>Per Ticket</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sell Tickets</li>
                <li>Multiple Seating Options</li>
                <li>CRM</li>
                <li>Engage Your Patrons</li>
                <li>Email Marketing</li>
                <li>Donations/Memberships</li>
                <li>Mobile Box Office</li>
                <li>Season Subscriptions</li>
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
                  Online Fee
                  <br />
                  <br />
                  &#8377; 72
                </h5>
                <p>Per Ticket</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All feature in Box Office Fee</li>
                <li>Analytics</li>
                <li>Barcode Scanning</li>
                <li>Promote Your Brand</li>
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
                  Call Center Fee
                  <br />
                  <br />
                  &#8377; 252
                </h5>
                <p>Per Ticket</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All feature in Online Fee</li>
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
