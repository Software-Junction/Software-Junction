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
            <h3>What is GeniPulse Hospital Management Software ?</h3>
            <p>
              GeniPulse Hospital Management Software, developed by GeniPulse
              Technologies, is a , modular solution designed for hospitals and
              clinics of all sizes, ranging from small clinics to large
              hospitals with up to 1000 bed capacity. This window-based software
              integrates key aspects of hospital management, including patient
              registration, OPD, IPD, laboratory, pharmacy, and more, all in a
              paperless environment. The system boasts a single database that
              links patient demographics and medical records to insurance,
              billing, and cases information, fostering streamlined operations,
              improved patient care, and enhanced profitability. With features
              like a multi-tab interface, multi-level security, and
              user-friendly design, GeniPulse HMS ensures efficient and
              cost-effective healthcare IT solutions.
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
