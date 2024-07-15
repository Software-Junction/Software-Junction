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
            <h3>What is TigerLRM ?</h3>
            <p>
              TigerLRM, the ultimate CRM with Sales Enablement designed to
              transform your sales teams into powerhouses of efficiency and
              success. Fueled by AI and ChatGPT, TigerLRM goes beyond
              traditional CRMs, offering an all-in-one solution that combines
              intuitive CRM tools with cutting-edge Sales Enablement features.
              Experience a 300% boost in conversion rates as TigerLRM automates
              tasks, simplifies workflows, and maximizes your team's output.
              From AI-powered lead scoring to comprehensive sales reports,
              TigerLRM provides a seamless and effective approach to managing
              leads, closing deals, and delivering superior customer service.
              Ready to revolutionize your sales process? Sign up for TigerLRM
              today – where innovation meets results.
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
