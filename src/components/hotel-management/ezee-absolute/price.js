import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../ezee-absolute/ezee.module.scss";

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
            <h3 className="mb-3">eZee Absolute Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Classic
                  <br />
                  <br />
                  &#8377; 2250
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Front-office management</li>
                <li>Handle arrivals and departures</li>
                <li>Housekeeping</li>
                <li>Night audit process</li>
                <li>User activity logs</li>
                <li>Group management</li>
                <li>Walk-ins and reservations</li>
                <li>Expense management</li>
                <li>Tax management</li>
                <li>City ledger management</li>
                <li>Multiple payment methods</li>
                <li>Universal search</li>
                <li>Billing and settlements</li>
                <li>Offline bookings management</li>
                <li>Holiday management</li>
                <li>Paymaster Rooms</li>
                <li>Multiple profile management</li>
                <li>Multi-lingual and multi-currency usage</li>
                <li>User roles and privileges</li>
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
                  Elite
                  <br />
                  <br />
                  &#8377; 4500
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Everything in Classic, plus:</li>
                <li>Yield management</li>
                <li>Promotions and packages</li>
                <li>Advanced and last minute deals</li>
                <li>Looker to booker widgets</li>
                <li>Book from Facebook page</li>
                <li>Affiliate tracking</li>
                <li>Innalytics - Detailed business insights</li>
                <li>Performance comparison stats</li>
                <li>Price Widget</li>
                <li>TripAdvisor and Trivago Metasearch</li>
                <li>Integration with Google Hotel Ads</li>
                <li>Channel Manager mobile app</li>
                <li>Integration with your hotel website</li>
                <li>Mobile responsive booking engine</li>
                <li>2-click booking process</li>
                <li>Matching with your website theme</li>
                <li>Visitor tracking with Google Analytics</li>
                <li>Ready plug and play widgets</li>
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
                  Star
                  <br />
                  <br />
                  &#8377; 5250
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Cloud PMS + Channel Manager</li>
                <li>Innalytics - Detailed business insights</li>
                <li>Performance comparison stats</li>
                <li>Connection with OTAs</li>
                <li>Inventory distribution management</li>
                <li>Real-time inventory and rate updates</li>
                <li>Distribution wizard</li>
                <li>Linked rate plans</li>
                <li>Stop sell on connected channels</li>
                <li>Connectivity with Vacation Rentals</li>
                <li>Auto-room mapping</li>
                <li>Channel-wise settings</li>
                <li>Rate parity maintenance</li>
                <li>Channel Manager mobile app</li>
                <li>Integration with new OTAs</li>
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
