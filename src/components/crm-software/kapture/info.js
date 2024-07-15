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
            <h3>What is Kapture CRM ?</h3>
            <p>
              Elevate your customer experience to new heights with Kapture CRM –
              the forefront AI-driven platform tailored for enterprises across
              diverse industries like Retail, BFSI, Consumer Durables, and
              Travel. Boasting built-in customizations and unmatched
              flexibility, Kapture stands as the go-to CX partner for major
              businesses. Praised by over 1000 enterprises, it optimizes contact
              center efficiency and cost-effectiveness. Empowering both support
              teams and customers, Kapture features an intelligent Agent
              Assistant Bot, a comprehensive Customer 360 View, and robust
              Knowledge Management. Utilizing generative AI, it ensures
              hyper-personalized support, delivering unique resolutions based on
              individual customer profiles. With seamless automation,
              hassle-free migration, and top-tier security measures, Kapture CRM
              is the ultimate choice for businesses aiming to revolutionize
              their customer interactions.
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
