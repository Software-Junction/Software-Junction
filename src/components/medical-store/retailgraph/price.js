import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Price = ({ styles }) => {
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
                <h3 className='mb-3'>RetailGraph Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Composition Addition<br/><br/>&#8377; 10000</h5>
                    <p>Full License/Single User/Single</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Inbuilt All Features</li>
                        <li>Unlimited Godown Location</li>
                        <li>Online Support (As per Plan)</li>
                        <li>GST Composition Enable</li>
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
                    <h5>GST Addition<br/><br/>&#8377; 15000</h5>
                    <p>Full License/Single User/Single</p>
                    </div>
                    <hr/>
                    <ul>
                    <li>Inbuilt All Features</li>
                    <li>Unlimited Godown Location</li>
                    <li>Online Support (As per Plan)</li>
                    <li>Fully GST Uploaded</li>
                    
                    </ul>
                    <div className='text-center'>
                    <Button variant='primary' size='sm' className={styles['price-btn1']}>Free Trail</Button>
                    </div>
                </div>
            </Col>
          
           
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
