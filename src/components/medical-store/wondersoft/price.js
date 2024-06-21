import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
                <h3 className='mb-3'>Wondersoft Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Starter<br/><br/>&#8377; 7500</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Ideal for Private Practices</li>
                        <li>Unlimited Patients</li>
                        <li>3 Doctors Free</li>
                        <li>One Location Included</li>
                        <li>500 sms per month</li>
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
                    <h5>Standard<br/><br/>&#8377; 19990</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Ideal for clinics</li>
                    <li>Unlimited Patients</li>
                    <li>10 Doctors Free</li>
                    <li>One Location Included</li>
                    <li>1000 sms per month</li>
                    <li>One Add-on Free</li>
                    <li>2 Free Staff logins</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']} onClick={handleShowDemo}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100  rounded-4 p-4`}>
                    <div className='text-center'>
                    <h5>Premium<br/><br/>&#8377; 39990</h5>
                    <p>Per Year</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Ideal for hospitals</li>
                    <li>Unlimited Patients</li>
                    <li>25 Doctors Free</li>
                    <li>One Location Included</li>
                    <li>2500 sms per month</li>
                    <li>All Add-on Free</li>
                    <li>5 Free Staff logins</li>
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']} onClick={handleShowDemo}>Free Trail</Button>
                    </div>
                </div>
            </Col>  
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
