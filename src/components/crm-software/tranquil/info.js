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
            <h3>What is Tranquil CRM ?</h3>
            <p>
              Transform your sales approach with Tranquil CRM, a specialized
              ERP-based solution designed exclusively for the dynamics of the
              Indian sales landscape. This powerful tool integrates seamlessly
              with lead management, offering a pathway to automate sales
              processes and elevate overall organizational efficiency. With a
              focus on centralizing information, Tranquil CRM becomes the nerve
              center for project details, marketing collateral, and customer
              interactions, accessible through both desktop and mobile
              applications. Realize the potential of real-time tracking,
              communication tools, and automated workflows, ensuring your team
              excels in timely follow-ups and personalized engagements. Embrace
              Tranquil CRM for its cloud-based functionality, advanced
              analytics, marketing automation, and strategic drip campaigns,
              revolutionizing your sales strategy.
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
