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
            <h3>What is KnowIT HMS ?</h3>
            <p>
              KnowIT HMS, a Hospital Management System meticulously crafted for
              seamless healthcare administration. This integrated ERP solution
              revolutionizes hospital operations, from patient registration and
              clinical support to billing, finance, and inventory management.
              Developed with the latest MVC technology, KnowIT HMS offers a
              versatile web-based platform available in both SaaS and On-Premise
              models. Whether for a small clinic or a multi-specialty hospital,
              KnowIT HMS streamlines processes with modules like Front Office,
              Clinical Support, and Billing & Collection. Its user-friendly
              design, modular approach, and robust security features make it an
              indispensable tool for healthcare institutions seeking efficiency
              and reliability in their operations. Experience the future of
              healthcare management with KnowIT HMS.
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
