import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Needhelp from "../../common/needHelp";

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
            <h3>What is Advanta Rapid ERP ?</h3>
            <p>
              Advanta Rapid ERP, a flagship product from Advanta Innovations,
              stands as a versatile and comprehensive software solution.
              Tailored for schools, colleges, and businesses, this Reliable,
              Affordable, and User-friendly platform integrates 28 modules. It
              adeptly manages diverse operations, including school and college
              administration, business accounting, inventory, invoice printing,
              VAT, GST, and more. Globally trusted and adorned with awards, it
              ensures seamless operations, quick decision-making, and heightened
              productivity. With a free trial/demo available, Advanta Rapid ERP
              emerges as the go-to choice, offering a single-click solution for
              businesses seeking optimal software to streamline their
              operations.
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
              <Button variant="primary" href="#idpricing">
                View Pricing
              </Button>
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
