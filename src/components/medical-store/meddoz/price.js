import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../meddoz/medo.module.scss";


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
                <h3 className='mb-3'>Meddoz Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Basic<br/><br/>&#8377; 710</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Modules: Purchase, Billings with SMS & EMAIL Options</li>
                        <li>Drugs Included: 30000+</li>
                        <li>Barcode: Yes</li>
                        
                        
                    </ul>
                    <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
                </div>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Standard<br/><br/>&#8377; 875</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Modules: Purchase, Billings & Accounts with SMS & EMAIL</li>
                    <li>Drugs Included: 65000+</li>
                    <li>Barcode: Yes</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']} onClick={handleShowDemo}>Free Trail</Button>
                    </div>
                </div>
            </Col>

            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Professional<br/><br/>&#8377; 1042</h5>
                    <p>Per Month</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Modules: Purchase, Billings & Accounts with SMS & EMAIL</li>
                    <li>Drugs Included: 100000+</li>
                    <li>Barcode: Yes</li>
                        
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']} onClick={handleShowDemo}>Free Trail</Button>
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
