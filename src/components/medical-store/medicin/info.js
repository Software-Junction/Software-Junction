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
            <h3>What is Medicin Pharmacy Management Software ?</h3>
            <p>
              Medicin Pharmacy Management Software is a solution designed for
              both retail pharmacies and distributors. Offering features like
              automatic purchase and sale modules, GST compliance, prescription
              record with inbuilt camera support, and a wide range of pre-filled
              data, it streamlines operations efficiently. With capabilities
              such as E-Way Bill compliance, barcode-based transactions, and an
              owner app for Android/iOS, it ensures seamless management and
              enhances customer care. The software also supports online and
              offline modes, providing a versatile solution for the pharmacy
              business with features like campaign management, expiry
              notifications, and an easy-to-use interface.
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
