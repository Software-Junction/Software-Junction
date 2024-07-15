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
            <h3>What is mycloud Hospitality ?</h3>
            <p>
              mycloud Hospitality is a leading cloud-based hotel management
              software developed by Prologic First, an award-winning hospitality
              software company. With over 15 years of industry expertise,
              mycloud offers a feature-rich and customizable solution for hotels
              worldwide. This all-in-one platform automates hotel operations,
              including contactless check-in, check-out, and dining services,
              ensuring efficiency and profitability. With zero upfront fees, a
              4-hour PMS live setup, and 24/7 guaranteed support, mycloud is
              trusted by over 2000 hotels across 40+ countries. Its secure and
              GDPR-compliant system, along with a flexible cancellation policy,
              makes it a preferred choice for hoteliers seeking a seamless and
              reliable technology solution.
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
