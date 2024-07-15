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
            <h3>What is The Hotel Management Software ?</h3>
            <p>
              The Hotel Management Software by Truelogics Infotech Pvt. Ltd. is
              a comprehensive and user-friendly solution designed for the
              hospitality industry. It offers a 24/7 support system, catering to
              hotels, chain outlets, guest houses, motels, resorts, sweet shops,
              bakeries, and related services. With modules for restaurant, club,
              bar, banquet, spa, salon, and more, the cloud-based ERP system
              streamlines operations, including front office management,
              reservation tracking, inventory control, and accounting. The
              software stands out with its true booking engine, CRM integration,
              and channel manager for efficient guest bookings and feedback
              management. The product ensures data security, easy configuration,
              and 24x7 technical support, making it a reliable choice for
              businesses in the hospitality sector.
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
