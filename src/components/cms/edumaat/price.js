import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from '../edumaat/edumaat.module.scss'

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
                <h3 className='mb-3'>EDUMAAT Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Daimond Plan<br/><br/>$3067</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Platinum Plan<br/><br/>$5899</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
                    </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Enterprise Plan<br/><br/>$9439</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
                    </div>
                </div>  
            </Col>
            <Col lg={3} className='mb-3'>
            <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Professional Plan<br/><br/>$18999</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>1 Businesses</li>
                        <li>1 Users</li>
                        <li>Mobile & Web</li>
                        <li>Unlimited Logins</li>
                        <li>Call & Chat Support</li>
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
