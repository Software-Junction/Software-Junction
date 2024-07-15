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
            <h3>What is Sell.Do ?</h3>
            <p>
              Sell.Do is India's premier Integrated Real Estate CRM Solution,
              boasting 15+ years of industry expertise. Trusted by over 1000
              brands, including industry leaders like Casagrand, Ansal Housing,
              and Hiranandani, Sell.Do has managed 50 million+ leads and
              facilitated 450 million+ customer interactions in the real estate
              CRM industry. With USD 25 billion+ worth of real estate inventory
              sold, Sell.Do offers a fully functional system in just 7 days, ISO
              27001 compliance, and seamless integrations. Recognized with
              multiple awards, Sell.Do empowers real estate businesses through
              features like lead and inventory management, marketing automation,
              team collaboration, performance metrics, and online selling of
              properties.
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
