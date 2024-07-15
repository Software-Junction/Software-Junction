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
            <h3>What is Ready4S ?</h3>
            <p>
              Ready4S is a distinguished software development company with over
              a decade of expertise, renowned for turning innovative ideas into
              scalable, custom solutions. Boasting a 5-star rating on Clutch and
              a roster of 85+ satisfied clients including Uber, Roche, and
              Coca-Cola, the company specializes in accelerating time-to-market,
              augmenting IT teams, and optimizing processes. With a robust
              technology stack encompassing Angular, React, Vue, Node.JS, PHP,
              Java, and .Net(C#), Ready4S leverages a full-stack, self-managed
              team approach to deliver enterprise-grade solutions. Their
              client-centric approach involves 1150+ consultations annually,
              fostering innovation, agile development, and the modernization of
              legacy technologies. Positioned in Kraków, Poland, Ready4S is
              committed to confidentiality, as evidenced by their NDA guarantee,
              ensuring the development of tailored, high-quality software that
              propels businesses to the next level.
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
