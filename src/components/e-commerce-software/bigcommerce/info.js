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
            <h3>What is BigCommerce ?</h3>
            <p>
              BigCommerce is a leading enterprise-level ecommerce platform that
              offers a simplified and flexible solution for businesses.
              Recognized by industry analysts, including Gartner and Forrester,
              it combines the strengths of SaaS and API-enabled openness,
              providing integrations, scalability, and agility. With a
              comprehensive suite of features, including native B2C and B2B
              capabilities, multi-storefront support, omnichannel options, and a
              composable architecture, BigCommerce empowers businesses to
              customize and grow sales efficiently. Supported by a trusted
              partner ecosystem and praised for its customer-centric approach,
              BigCommerce is a preferred choice for achieving ecommerce success
              with freedom, lower total cost of ownership, and unparalleled
              support.
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
