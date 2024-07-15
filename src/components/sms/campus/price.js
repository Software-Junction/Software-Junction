import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../campus/pus.module.scss";

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
                <h3 className='mb-3'>Campus 365 Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>One Plan For All<br/><br/>&#8377; 0</h5>
                    <p>Forever</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>All Modules Included</li>
                        <li>API Access</li>
                        <li>Onsite Training*</li>
                        <li>24/6 Phone Support*</li>
                        <li>24/7 Email Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>For Coaching Centres<br/><br/>&#8377; 500</h5>
                    <p>Per Month Billed Yearly</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>For Coaching Institutes/Tuition Centers with less than 60 students</li>
                        <li>Webinar Based Training Sessions</li>
                        <li>24/7 Email and Chat Support</li>
                        <li>Free iOS and Android mobile apps</li>
                    </ul>
                    <div className='text-center'>
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
