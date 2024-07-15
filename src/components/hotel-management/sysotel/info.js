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
            <h3>What is SYSOTEL.AI ?</h3>
            <p>
              SYSOTEL.AI is India's pioneering Revenue & Yield Automation
              System, revolutionizing the hospitality sector. This innovative
              AI/ML-based platform offers a comprehensive single sign-on
              solution for hoteliers, addressing challenges and enabling a
              15-20% increase in topline, 12-18% optimization of the bottom
              line, and improved operational efficiency. With seamless
              integration, real-time data insights, and a user-friendly
              interface, SYSOTEL.AI empowers businesses to streamline
              operations, boost revenue through intelligent booking engines, and
              strategically optimize profitability through advanced solutions.
              Trusted by a diverse clientele, SYSOTEL.AI shapes the future of
              hospitality with powerful collaborations and unmatched technology
              in the realms of PMS, channel management, payment gateways, OTAs,
              and meta search.
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
