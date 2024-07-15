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
            <h3>What is Halemind ?</h3>
            <p>
              Halemind is a Electronic Medical Records (EMR) and Hospital
              Management System (HMS) designed to elevate independent practices
              and hospitals. With advanced, secure, and specialty-driven EHR
              technology, it simplifies operations for private practices,
              hospitals, pharmacies, and labs. Halemind empowers healthcare
              professionals with evidence-based care, intuitive patient behavior
              tracking, and streamlined scheduling through a smart calendar. The
              platform offers a single-dashboard solution for administrators,
              encompassing connected records, billing, digital prescriptions,
              patient portals, and more. Beyond mere management, Halemind
              creates a connected healthcare platform, endorsed by satisfied
              users like Ophthalmologist Dr. Madhavi and Homeopathic Consultant
              Dr. Sandeep Selvinus, making it a comprehensive and user-friendly
              solution for modern healthcare needs.
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
