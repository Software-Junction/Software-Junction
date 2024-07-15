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
            <h3>What is Practo Ray ?</h3>
            <p>
              Practo Ray is a clinic management software, widely trusted in
              India and used by over 50,000 doctors across 5 countries. As
              Ayushman Bharat Digital Mission compliant, it ensures enhanced
              discoverability within the ABDM ecosystem. Offering features like
              automated appointment reminders, secure digital record-sharing,
              and post-consultation chats, Practo Ray streamlines operations,
              reduces no-shows, and improves patient engagement. With Practo
              Prime, a premium offering, clinics can further elevate patient
              experience, benefiting from features like a smart calling system
              and 24/7 instant online booking. The software prioritizes data
              security, boasting 256-bit end-to-end encryption and
              HIPAA-compliant data centers.
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
