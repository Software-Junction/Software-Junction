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
            <h3>What is Cratio CRM ?</h3>
            <p>
              Cratio CRM, a result-driven sales management solution with over 15
              years of expertise, has earned the trust of 100,000+ users and
              1,000+ companies in India. Seamlessly integrating lead automation
              and distribution, this software ensures efficient lead capture,
              categorization, and routing, maximizing your sales team's
              responsiveness. With features like an Android GSM SIM-based
              built-in dialer, real-time call tracking, WhatsApp marketing
              automation, and robust customization options, Cratio CRM empowers
              businesses across various industries, providing a tailored
              approach for B2B companies, real estate, financial services,
              education, travel, recruitment, professional services, and more.
              Experience high sales efficiency with Cratio CRM's comprehensive
              suite of tools tailored to meet your industry-specific needs.
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
