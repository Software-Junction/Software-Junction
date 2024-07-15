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
            <h3>What is KWHotel ?</h3>
            <p>
              KWHotel, an innovative hotel management solution designed to
              elevate your hospitality business to new heights. Trusted by over
              5,000 hoteliers across 160 countries and available in 21
              languages, KWHotel goes beyond traditional management software.
              With both desktop and web-based options, it offers features like
              reservation handling, pricing policy management, and invoicing.
              From rental management for apartments to a camping module with
              graphical representation, KWHotel ensures seamless operations.
              Stay ahead with online booking engines, channel management, and
              integrations like credit card services and SMS marketing.
              Experience a comprehensive tool tailored for the modern hotelier,
              committed to optimizing efficiency, reducing costs, and adapting
              to industry challenges. Take advantage of a free hotel audit,
              offering over 60 professional tips to navigate the complexities of
              the pandemic landscape. Welcome to a new era of hotel management
              with KWHotel—where innovation meets hospitality.
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
