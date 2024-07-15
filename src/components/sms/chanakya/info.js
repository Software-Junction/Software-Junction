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
            <h3>What is Chanakya ERP ?</h3>
            <p>
              Chanakya ERP, developed by Bicore Chanakya ERP Pvt. Ltd., is a
              cutting-edge accounting and business management software with 100%
              automation in accounting. Recognized as India's first software
              featuring an inbuilt GST return system, it facilitates seamless
              filing with a single click, eliminating the need to log in to the
              GST portal. Serving over 56,000 satisfied clients nationwide,
              including various industries, Chanakya ERP offers hassle-free
              support through a ticketing system and covers inventory,
              accounting, GST, e-Way Bill, and e-Invoice processes. With
              affordable pricing options, lifetime licenses, and advanced
              features like data backup, it ensures efficient and error-free
              business operations.
            </p>
            {/* <div
              className={`${styles["cha-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
