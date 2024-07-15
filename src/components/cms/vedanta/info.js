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
            <h3>What is Vedanta School ERP ?</h3>
            <p>
              Vedanta School ERP, developed by Connect Icon Pvt Ltd, is a
              cutting-edge Institution Automation System designed exclusively
              for the education sector. Founded in 2012 by industry veterans
              Rajesh Dagar and Nisha Tomar, the company leverages their 20+
              years of collective experience from esteemed organizations like
              Fidelity Investment, Sapient, IDBI Bank, Vodafone, and HP. This
              true SaaS Education ERP offers a unified platform covering
              academic and administrative processes, ensuring real-time
              decision-making for over 700 clients. With a focus on user roles
              rather than modules, Vedanta ERP features five key pillars - Front
              Office, People, Academics, Finance, and Infrastructure, providing
              adaptable reporting and secure access.
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
