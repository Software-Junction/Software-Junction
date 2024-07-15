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
            <h3>What is Adobe Commerce ?</h3>
            <p>
              Adobe Commerce, formerly known as Magento, is a scalable commerce
              platform designed to empower businesses in creating personalized
              B2B and B2C experiences across multiple brands. With native AI
              capabilities, it facilitates the delivery of real-time, AI-driven
              personalized content, promotions, and recommendations, enhancing
              customer engagement. Adobe Commerce offers a composable commerce
              solution for IT teams, enabling them to launch secure and
              high-performance commerce experiences efficiently. The platform
              also empowers commerce teams with omnichannel personalization,
              AI-driven tools for marketing and merchandising, and scalable
              operations to adapt to evolving customer needs. Recognized as a
              leader in the 2023 Gartner Magic Quadrant for Digital Commerce,
              Adobe Commerce stands out for its innovation and impact on global
              brands.
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
