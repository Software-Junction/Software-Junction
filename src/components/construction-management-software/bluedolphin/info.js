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
            <h3>What is BlueDolphin ?</h3>
            <p>
              BlueDolphin is an intelligent platform designed to seamlessly
              integrate business and IT, fostering agile, data-driven, and
              collaborative transformation. With support for various modeling
              languages, it enables stakeholders to work cohesively across
              departments, ensuring quick input gathering without compromising
              data validity. This platform offers beautiful architectural design
              capabilities, supporting Archimate® and BPMN, allowing users to
              plan, design, and manage transformation solutions effortlessly.
              BlueDolphin's central repository facilitates the capture,
              management, and utilization of architecture objects, providing a
              single source of truth for apps, business processes, data, and
              technology. It excels in strategic business transformation,
              offering out-of-the-box solution templates and promoting
              iterative, continuous, and agile transformation.
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
