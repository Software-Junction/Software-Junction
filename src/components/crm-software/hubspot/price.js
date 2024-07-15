import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from '../hubspot/hub.module.scss'

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
            <h3 className="mb-3">HubSpot CRM Pricing</h3>
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
                  &#8377; 3240
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Form automation</li>
                <li>Email automation</li>
                <li>Forms</li>
                <li>Email marketing</li>
                <li>Landing pages</li>
                <li>Live chat</li>
                <li>Email and in-app chat support</li>
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
                  &#8377; 57600
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Omni-channel marketing automation</li>
                <li>ABM tools and automation</li>
                <li>Dynamic personalization</li>
                <li>Multi-language content</li>
                <li>Social media</li>
                <li>Video hosting & management</li>
                <li>Contact and company scoring</li>
                <li>Collaboration tools</li>
                <li>Campaign management</li>
                <li>Teams</li>
                <li>A/B testing</li>
                <li>Ad conversion events</li>
                <li>Contact create attribution</li>
                <li>Website traffic analytics</li>
                <li>Campaign reporting</li>
                <li>Custom reporting</li>
                <li>Salesforce integration</li>
                <li>Phone support</li>
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
                  &#8377; 230400
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Single sign-on</li>
                <li>Partitioning</li>
                <li>Hierarchical teams</li>
                <li>Permission sets</li>
                <li>Field-level permissions</li>
                <li>Email send frequency cap</li>
                <li>Custom objects</li>
                <li>Salesforce custom object sync</li>
                <li>Adaptive testing</li>
                <li>Sandboxes</li>
                <li>Multi-touch revenue attribution</li>
                <li>Behavioral event triggers and reporting</li>
                <li>Predictive lead scoring</li>
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
