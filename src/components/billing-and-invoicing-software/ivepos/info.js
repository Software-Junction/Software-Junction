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
            <h3>What is IVEPOS ?</h3>
            <p>
              IVEPOS is a POS (point-of-sale) software designed for small and
              medium-scale businesses, offering a full-stack super app to
              streamline billing, payments, accounting, inventory, customer
              management, and loyalty programs. With over 100 features and a
              user-friendly interface, IVEPOS caters to restaurants, retail
              stores, cafes, bars, bakeries, salons, food trucks, and more. Its
              cloud-based system provides real-time tracking of sales and
              inventory, employee management, and sales analytics, making it an
              essential tool to enhance operational efficiency and boost
              revenue. Trusted by over 30,000 businesses across 70 cities,
              IVEPOS stands out for its one-click billing, payment acceptance,
              and comprehensive business management solutions.
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
