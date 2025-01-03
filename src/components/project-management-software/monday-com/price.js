import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../monday-com/monday-com.module.scss";

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
            <h3 className="mb-3">monday.com Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Individual
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Life Time</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited boards</li>
                <li>Unlimited docs</li>
                <li>200+ templates</li>
                <li>Over 20 column types</li>
                <li>Upto 2 team members</li>
                <li>iOS and Android apps</li>
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
                  &#8377; 864
                </h5>
                <p>Seat/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Includes Individual, plus</li>
                <li>Unlimited free viewers</li>
                <li>Unlimited items</li>
                <li>5 GB file storage</li>
                <li>Prioritised customer support</li>
                <li>Create a dashboard based on 1 board</li>
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
                  Standard
                  <br />
                  <br />
                  &#8377; 1008
                </h5>
                <p>Seat/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Includes Basic, plus</li>
                <li>Timeline & Gantt views</li>
                <li>Calendar view</li>
                <li>Guest access</li>
                <li>Automations (250 actions per month)</li>
                <li>Integrations (250 actions per month)</li>
                <li>Create a dashboard that combines up to 5 boards</li>
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
                  Pro
                  <br />
                  <br />
                  &#8377; 1728
                </h5>
                <p>Seat/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Includes Standard, plus</li>
                <li>Private boards and docs</li>
                <li>Chart view</li>
                <li>Time tracking</li>
                <li>Formula column</li>
                <li>Dependency column</li>
                <li>Automations (25,000 actions per month)</li>
                <li>Integrations (25,000 actions per month)</li>
                <li>Create a dashboard that combines up to 10 boards</li>
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
