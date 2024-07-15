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
            <h3>What is Vyapar Hospital Billing Software ?</h3>
            <p>
              Vyapar Hospital Billing Software is an advanced tool designed to
              streamline and enhance the billing process within healthcare
              organizations. It serves as a central platform for managing
              patient bills efficiently, integrating with healthcare records to
              ensure accurate accounting. The software automates billing tasks,
              reducing human errors and improving overall accounting
              performance. With features like real-time updates, custom branding
              templates, and advanced reporting, Vyapar empowers healthcare
              providers to make data-driven decisions. It offers benefits such
              as streamlined billing processes, simplified insurance claim
              processing, time and cost savings, increased transparency, and
              error-free billing. Vyapar's user-friendly interface, top-notch
              customer support, and cost-effective pricing options make it the
              best choice for hospitals seeking an efficient and reliable
              billing solution.
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
