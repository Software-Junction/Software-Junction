import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../stingo/stin.module.scss";

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
            <h3 className="mb-3">Stingo Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Stingo LMS
                  <br />
                  <br />
                  &#8377; 490
                </h5>
                <p>Per User/ Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Auto capture leads from IndiaMart, Facebook etc</li>
                <li>Contact Management</li>
                <li>Lead qualification and distribution</li>
                <li>Sales Pipeline Funnel</li>
                <li>Whatsapp , Sms, e-mail Notification & Reminder</li>
                <li>Custom fields & custom dashboard</li>
                <li>User permission, roles and profiles</li>
                <li>Bulk Whatsapp, SMS and Email</li>
                <li>Analytics and Reports</li>
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
                  Stingo Telephony
                  <br />
                  <br />
                  &#8377; 899
                </h5>
                <p>5 Users/ Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Click 2 call Inbound- Outbound & STINGO Dialer</li>
                <li>Call recordings</li>
                <li>Bulk WA, Email & SMS</li>
                <li>Virtual No @ 799/month & FREE 500 Credit Minutes</li>
                <li>Round robin & Custom fields</li>
                <li>Incoming calls auto convert into Leads</li>
                <li>IVR Type</li>
                <li>Agent mapping with Sticky</li>
                <li>Missed call alerts</li>
                <li>Reports & Analytics</li>
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
                  Stingo Desk
                  <br />
                  <br />
                  &#8377; 690
                </h5>
                <p>Per User/ Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Complaint automation</li>
                <li>Omnichannel ticketing</li>
                <li>Integration of WA, Email & SMS</li>
                <li>Ticketing Management System</li>
                <li>Warranty & AMC management services</li>
                <li>Stingo Mobile App</li>
                <li>Reports & Analysis</li>
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
