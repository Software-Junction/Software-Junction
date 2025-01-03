import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../workable/work.module.scss";

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
            <h3 className="mb-3">Workable Pricing</h3>
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
                  &#8377; 10728
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Job board distribution (200+)</li>
                <li>AI candidate sourcing</li>
                <li>Careers page builder</li>
                <li>Native language options</li>
                <li>Referrals portal with reporting</li>
                <li>Custom application forms</li>
                <li>LinkedIn Recruiter System Connect</li>
                <li>Social media campaigns</li>
                <li>Anonymized screening</li>
                <li>Interview kits & scorecards</li>
                <li>2 way calendar integration (Gmail/365)</li>
                <li>Candidate self-scheduling</li>
                <li>Multi-part interview scheduling</li>
                <li>Zoom integration</li>
                <li>3rd party background checks</li>
                <li>Share candidate</li>
                <li>Advanced access rights</li>
                <li>Custom candidate profiles</li>
                <li>Top-rated mobile app</li>
                <li>
                  Up to 2 active jobs/ 200 AI sourcing profile views per month
                </li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 25920
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Features available in all plans</li>
                <li>Unlimited active jobs</li>
                <li>1,000 AI sourcing profile views per month</li>
                <li>Assisted account onboarding</li>
                <li>1-20 Employees</li>
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
                  Premier
                  <br />
                  <br />
                  &#8377; 43128
                </h5>
                <p>Month billed Annually</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Features available in all plans</li>
                <li>Unlimited active jobs</li>
                <li>20,000 AI sourcing profile views per year</li>
                <li>Hiring plan with requisition approvals</li>
                <li>Five native language options</li>
                <li>Dedicated account manager</li>
                <li>Single sign-on support</li>
                <li>Custom account onboarding</li>
                <li>1-20 Employees</li>
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
