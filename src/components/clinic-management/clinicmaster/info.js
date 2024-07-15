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
            <h3>What is Clinicmaster ?</h3>
            <p>
              Clinicmaster is a practice management platform designed to
              streamline operations for healthcare clinics. Offering specialized
              solutions for Rehabilitation and Therapy Clinics, Health and
              Wellness Clinics, Medical Specialties, and more, Clinicmaster
              empowers clinics with features like intuitive scheduling,
              efficient billing, digital charting, dynamic marketing, and
              data-driven analytics. The software ensures patient engagement
              through portals, secure communication, and personalized care
              plans. With a focus on user roles, Clinicmaster caters to owners,
              administrators, clinicians, receptionists, and patients, fostering
              seamless connectivity across devices. Privacy is prioritized with
              encrypted data storage on Microsoft Azure servers, making
              Clinicmaster a secure and efficient choice for clinics aiming for
              growth and excellence in patient care.
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
