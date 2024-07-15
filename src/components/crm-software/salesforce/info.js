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
            <h3>What is Salesforce ?</h3>
            <p>
              Salesforce, the world's leading customer relationship management
              (CRM) platform, seamlessly integrates data, artificial
              intelligence, and trusted CRM functionalities to elevate your
              business to new heights. With Sales Cloud, Service Cloud, and
              Marketing Cloud, Salesforce empowers your teams to work
              collaboratively from anywhere, ensuring customer satisfaction at
              every touchpoint. Whether you're a small business seeking unified
              sales and service solutions or a Fortune 100 company aiming to
              enhance workplace experiences, Salesforce offers a comprehensive
              suite of tools. Join over 150,000 companies worldwide, including
              esteemed names like Balaji, Genpact, and Mahindra, in growing your
              business through Salesforce's innovative technology. Explore free
              learning resources on Trailhead and discover how Salesforce values
              contribute to building stronger customer relationships.
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
