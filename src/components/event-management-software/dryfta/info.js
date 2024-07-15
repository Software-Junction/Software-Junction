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
            <h3>What is Dryfta ?</h3>
            <p>
              Dryfta is a enterprise-grade Event Operating System designed for
              universities, associations, nonprofits, enterprises, and
              governments. Serving as an all-in-one event platform, Dryfta
              simplifies the management of diverse event aspects, including
              ticket sales, abstract submissions, engagement, scheduling, and
              more. Trusted by universities and nonprofits across 20+ countries,
              Dryfta's unified dashboard enables organizers to seamlessly handle
              submissions and peer reviews, sell tickets online, manage event
              contacts, build schedules, and boost event visibility through
              integrated features such as EventBoost. With a focus on
              user-friendly interfaces, automation, and flexibility, Dryfta
              replaces the need for multiple tools, providing a holistic
              solution for efficient event planning and execution.
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
