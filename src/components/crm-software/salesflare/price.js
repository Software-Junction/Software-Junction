import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../salesflare/sale.module.scss";

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
            <h3 className="mb-3">Salesflare Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Growth
                  <br />
                  <br />
                  &#8377; 2088
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All CRM features you’d expect</li>
                <li>Automate your CRM data input</li>
                <li>Track emails, links and website visits</li>
                <li>Get a LinkedIn sidebar, email sidebar & mobile app</li>
                <li>Send personalized email campaigns</li>
                <li>25 email finding credits</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 3528
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features on the Growth plan</li>
                <li>Send workflows of multiple emails</li>
                <li>Set user permissions</li>
                <li>Create custom dashboards</li>
                <li>500 email finding credits</li>
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
                  Enterprise
                  <br />
                  <br />
                  &#8377; 7128
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>All features on the Pro plan</li>
                <li>Custom training</li>
                <li>Data migration done for you</li>
                <li>Dedicated account manager</li>
                <li>Unlimited email finding credits</li>
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
