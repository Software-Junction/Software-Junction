import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../zoho-crm/zoho.module.scss";

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
            <h3 className="mb-3">Zoho CRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Standard
                  <br />
                  <br />
                  &#8377; 800
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Sales forecasting</li>
                <li>Reports and dashboards</li>
                <li>Document library</li>
                <li>Roles and profiles</li>
                <li>Mass email</li>
                <li>Call center connectors</li>
                <li>100,000 records</li>
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
                  Professional
                  <br />
                  <br />
                  &#8377; 1400
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Includes everything in Standard +</li>
                <li>Email integration</li>
                <li>Social CRM</li>
                <li>Google AdWords integration</li>
                <li>Workflow automation</li>
                <li>Inventory management</li>
                <li>Macros</li>
                <li>Unlimited records</li>
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
                  &#8377; 2400
                </h5>
                <p>User/Month, Billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Includes everything in Professional +</li>
                <li>Territory management</li>
                <li>Custom applications</li>
                <li>Custom buttons</li>
                <li>Workflow approval processes</li>
                <li>Page layouts</li>
                <li>Custom modules</li>
                <li>Multiple currencies</li>
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
