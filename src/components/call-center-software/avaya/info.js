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
            <h3>What is Avaya ?</h3>
            <p>
              Avaya Experience Platform is a software solution designed to
              revolutionize customer experience (CX) by seamlessly integrating
              digital channels, AI virtual agents, workflow automation, and
              actionable insights. Recognized as a leader in intelligent contact
              centers, Avaya enables businesses to deliver unforgettable
              experiences that drive ROI, empower teams, and nurture meaningful
              customer relationships. With Avaya, organizations can unlock new
              CX capabilities to meet rising customer expectations while keeping
              current operations intact. Whether it's boosting customer
              satisfaction like Atento, providing personalized healthcare
              services like Johns Hopkins Healthcare System, or facilitating
              digital transformations like DIRECTV in Latin America, Avaya
              empowers businesses across various industries to innovate, evolve,
              and thrive in the digital age.
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
