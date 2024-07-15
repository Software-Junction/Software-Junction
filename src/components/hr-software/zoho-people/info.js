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
            <h3>What is Zoho People ?</h3>
            <p>
              Zoho People is a cloud-based HR software that has empowered HR
              teams for over 15 years, streamlining core HR tasks with features
              like efficient employee database management, smart HR workflows,
              and insightful analytics. The software optimizes time and
              attendance tracking, allowing focus on employee productivity and
              error-free reporting. With a robust performance management module,
              it provides flexible goal setting, continuous reviews, and
              360-degree feedback to enhance organizational performance. Zoho
              People also reimagines learning and development with virtual
              classrooms, centralized course management, quizzes, and
              assessments. Trusted by over 1.2 million employees across 150+
              countries, it caters to businesses of all sizes and industries,
              ensuring a high-performing and agile workforce.
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
