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
            <h3>What is CodeAchi Library Management System ?</h3>
            <p>
              CodeAchi Library Management System is a software solution that
              stands out for its simplicity and comprehensive features. With
              digital cataloging, adding new books and monitoring their
              circulation is straightforward. The software supports easy book
              issuance and return using any barcode scanner, automates fine
              calculations, and sends notifications via email and SMS. It allows
              users to generate various reports and customize data categories
              swiftly using Excel or CSV sheets. CodeAchi offers standalone
              installation on Windows systems with a 30-day free trial, backed
              by 24/7 customer support. Its transparent pricing, free training,
              and a 30-day refund policy contribute to its global reputation in
              universities, colleges, schools, and public libraries. The
              software has received positive reviews for its user-friendly
              interface, data security measures, and continuous customer
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
