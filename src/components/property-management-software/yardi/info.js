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
            <h3>What is Yardi ?</h3>
            <p>
              Yardi is a leading provider of innovative property management
              software and services, catering to businesses of all sizes in
              diverse real estate markets. Their integrated platform covers
              Residential, Commercial, Affordable Housing, Senior Living, and
              PHA, offering technology solutions for property management, asset
              performance, marketing, leasing, procurement, energy management,
              risk management, care, market research, and learning. With over 35
              years of experience, Yardi has earned client trust by delivering a
              unified system, exemplified by client success stories such as
              Rexford Industrial and MG Properties Group. Yardi's commitment to
              excellence is evident through their global presence, participation
              in industry events, and support for communities.
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
