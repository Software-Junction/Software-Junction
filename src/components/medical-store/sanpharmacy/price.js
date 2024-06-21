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
                <h3 className='mb-3'>San Pharmacy Billing Pricing</h3>
            </Col>
            <Col lg={3} className='mb-3'>
                <div className={`${styles['price-box']} box  bg-light border h-100 rounded-4 p-4`}>
                    <div className='text-center price-text'>
                    <h5>Silver<br/><br/>&#8377; 7000</h5>
                    <p>Life Time</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Dashboard</li>
                        <li>Purchase and Purchase Returns</li>
                        <li>Sales and Sales Returns</li>
                        <li>Inventory and Stock</li>
                        <li>Cash Credit Paytm Gpay etc</li>
                        <li>Customer and Supplier Outstanding</li>
                        <li>Barcode Options</li>
                        <li>Expiry List and Notifications</li>
                        <li>50+ Reports</li>
                        <li>GST Annexure for Tally</li>
                    </ul>
                    <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
                </div>
            </Col>
             
           
          
        </Row>
      </Container>
    </>
  )
}

export default Price
