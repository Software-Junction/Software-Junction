import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Needhelp from '../../common/needHelp';

const Info = ({ styles }) => {

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

  return (
    <>
      <Container>
        <Row>
          <Col lg={7}>
            <h3>What is Marg Retail Software ?</h3>
            <p>
              Marg Retail Software is an integrated solution designed for retail
              businesses, offering centralized management of billing,
              accounting, and inventory. With features like fast billing, GST
              readiness, connected banking, and touch screen POS, it empowers
              businesses to enhance efficiency by 40%. Handling 20 billion+
              invoices and 100 billion+ transactions annually, it caters to 1
              million+ businesses worldwide. The software excels in inventory
              and expiry management, barcode systems, and offers
              discounts/schemes to boost sales. It also facilitates home
              delivery, re-order management, and online purchase imports,
              providing a comprehensive solution for retailers to streamline
              operations and increase profits by 20% or more.
            </p>
           {/* <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div> */}
            <div>
              <Button variant="primary" href="#idpricing">View Pricing</Button>
            </div>
          </Col>
       <Col lg={{ span: 4, offset: 1 }}>
            <Needhelp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
