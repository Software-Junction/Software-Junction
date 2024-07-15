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
            <h3>What is AppSheet ?</h3>
            <p>
              AppSheet is a application development platform offered by Google
              that empowers users to build robust mobile and desktop apps
              tailored to their business requirements without the need for
              coding. With features like form-based data capture, automation
              through workflow logic and bots, and seamless integration with
              Google Workspace and third-party apps, AppSheet streamlines work
              processes efficiently. The platform facilitates the creation of
              custom applications for diverse purposes, such as vehicle
              inspection, workflow automation, and data management. It has
              garnered praise from various organizations, including Singapore
              Press Holdings, Pantechs Laboratories, Carrefour Property, Globe
              Telecom, and Metropolitan Thames Valley Housing, showcasing its
              adaptability and impact. Over 4.5 million apps have already been
              created with AppSheet, underlining its widespread adoption and
              effectiveness in accelerating app development.
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
