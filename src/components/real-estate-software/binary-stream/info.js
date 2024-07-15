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
            <h3>What is Binary Stream ?</h3>
            <p>
              Binary Stream offers a ERP solution, seamlessly integrated with
              Microsoft Dynamics platforms such as Dynamics 365 Finance and
              Operations, Dynamics 365 Business Central, and Dynamics GP.
              Specializing in real estate and property management, their
              software enables efficient handling of complex lease scenarios,
              tenant and landlord requirements, and diversified operations. With
              a focus on multi-entity management, the system provides
              centralized processing, robust reporting, and real-time resource
              management across various locations. Additionally, Binary Stream's
              Subscription Billing Suite automates invoice creation and
              distribution, ensuring timely payments and detailed financial
              insights. The purpose-built Dynamics GP Utilities further
              streamline document delivery and processing overhead. Contact
              Binary Stream for a cost-effective digital transformation tailored
              to your business needs.
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
