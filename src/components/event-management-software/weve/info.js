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
            <h3>What is Weve ?</h3>
            <p>
              Weve is a virtual event platform designed to elevate your company
              gatherings and team interactions. Partnered with The Go Game, Weve
              offers virtual, in-person, and hybrid experiences that cater to
              various budgets and team sizes. With the flexibility to customize
              events on short notice, Weve ensures seamless transitions from
              virtual to in-person or a combination of both. The platform hosts
              a range of engaging experiences, from team-building games like
              Murder on the Mystery Express and Original Game Show to
              interactive sessions like How to Talk to a Human with Radiolab
              founder, Jad Abumrad. Trusted by renowned companies like Adobe,
              Disney, Nike, and more, Weve is revolutionizing the way people
              connect, learn, and play in the virtual and hybrid event space.
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
