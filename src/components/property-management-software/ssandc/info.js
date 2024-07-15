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
            <h3>What is SS&C SKYLINE ?</h3>
            <p>
              SS&C SKYLINE is a cloud-based property management software
              designed for both residential and commercial real estate owners
              and managers. With a focus on enhancing productivity, occupancy,
              and profitability, SKYLINE offers a comprehensive solution stack
              accessible across mobile, desktop, and portal platforms. This
              innovative technology automates and streamlines day-to-day
              operations, including marketing availabilities, payment
              processing, invoice approvals, and lease signings. With a dynamic
              and scalable design, SKYLINE supports diverse portfolios,
              providing powerful tools to optimize accounting workflows,
              facility operations, and performance metrics for investors. As a
              trusted industry pioneer, SS&C SKYLINE boasts over three decades
              of experience, serving over 1,000 clients and managing 35,000
              properties spanning three billion square feet.
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
