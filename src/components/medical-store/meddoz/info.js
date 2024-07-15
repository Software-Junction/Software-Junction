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
            <h3>What is Meddoz ?</h3>
            <p>
              Meddoz, developed by ASkeyTech, is an intuitive and cost-effective
              pharmacy management software designed to enhance visibility and
              control of all pharmacy processes. With a vast database of over
              100,000 preloaded drugs, it caters to pharmacies of any size,
              offering a ready-made solution. The software's key features
              include user-friendly interfaces and barcode integration for
              streamlined tasks like invoice creation and billing. ASkeyTech,
              based in Chennai, India, is a dedicated software development
              company committed to providing top-notch solutions in
              point-of-sale, enterprise applications, and web design, with a
              focus on professionalism and customer satisfaction. Meddoz also
              comes with comprehensive technical support and post-implementation
              follow-ups, ensuring efficient operation and continual
              improvement.
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
