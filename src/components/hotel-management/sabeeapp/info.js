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
            <h3>What is SabeeApp ?</h3>
            <p>
              SabeeApp, a seamless and thriving hospitality experience. Our
              Software Suite is a powerhouse of tools, featuring the efficient
              Property Management System (PMS), Booking Engine, Channel Manager,
              SabeePay for secure multichannel payments, and cutting-edge Smart
              Solutions like digital hotel applications. Tailored for hotels,
              apartments, and hostels, SabeeApp is more than just a management
              system – it's a catalyst for automation, direct bookings, and
              elevated guest experiences. Embrace the future with our
              cloud-based platform, granting you access to critical data and
              operations anytime, anywhere. Join the league of global hoteliers
              who trust SabeeApp for personalized onboarding, industry
              integration, and a seamless blend of innovation and efficiency in
              every aspect of hospitality management.
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
