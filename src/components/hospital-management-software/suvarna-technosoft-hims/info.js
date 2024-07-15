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
            <h3>
              What is Suvarna Technosoft's Hospital Information Management
              System ?
            </h3>
            <p>
              Suvarna Technosoft's Hospital Information Management System (HIMS)
              is an innovative software solution designed to optimize healthcare
              operations, enhance patient care, and improve engagement. With 23
              years of excellence, Suvarna HIMS offers a suite of products
              including Laboratory Information Management System (SLIMS),
              Electronic Medical Record (EMR), Digital Campus Management System,
              Radiology Information System (RIS), Business Intelligence & MIS,
              and Document Management System. Engineered for simplicity,
              reliability, and proven performance, the HIMS has been adopted by
              over 500 healthcare organizations, serving 15,000+ physicians,
              36,000+ healthcare professionals, and managing 60 million patient
              records. Suvarna HIMS is an accessible and affordable choice,
              making proven and reliable healthcare solutions available to
              providers worldwide.
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
