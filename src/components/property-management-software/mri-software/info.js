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
            <h3>What is MRI Software ?</h3>
            <p>
              MRI Software is a proptech solution that empowers real estate
              visionaries by seamlessly connecting residential and commercial
              properties. With a focus on AI-first technology, it offers
              tailored solutions for multifamily owners, operators, and
              investors, addressing lead-to-lease processes, property
              management, accounting, ID verification, and online rent payment.
              The platform extends its capabilities to affordable and public
              housing, ensuring housing compliance, managing waitlists, and
              facilitating fee accounting. MRI@Work caters to commercial
              property needs with features like property management, accounting,
              investment management, lease abstraction, and facilities
              management. The software's open and connected approach, supported
              by a vast partner ecosystem, transforms the way people live, work,
              and play in thriving communities worldwide, with over 45,000
              clients and operations in 170+ countries.
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
