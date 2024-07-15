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
            <h3>What is PeoplesHR ?</h3>
            <p>
              PeoplesHR, a leading name in the HR Tech industry across Asia
              Pacific, Africa, and the Middle East, stands out for its holistic
              Human Capital Management (HCM) solutions. With a user base
              exceeding a million in over 20 industries, PeoplesHR offers an
              end-to-end HR experience, streamlining processes from recruitment
              to retirement. What sets it apart is its commitment to data-driven
              decision-making, offering predictive analytics, interactive
              dashboards, and enterprise tools for informed HR management.
              Moreover, PeoplesHR goes beyond traditional software, providing
              plug-ins to create a comprehensive HR ecosystem, ensuring a
              seamless and enriched employee experience. Trusted by over 0
              companies across 40+ countries, PeoplesHR is the go-to solution
              for organizations seeking digital HR transformation.
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
