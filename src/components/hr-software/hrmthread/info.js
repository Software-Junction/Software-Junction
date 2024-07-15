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
            <h3>What is HRMThread ?</h3>
            <p>
              HRMThread is a web-based Payroll and HR software solution for
              businesses in India, relied upon by over 5000 users. Offering
              unparalleled convenience, it simplifies complex tasks, providing
              swift access to payroll and employee databases. With optimized
              features like Mobile App accessibility, robust Payroll management,
              comprehensive Time & Attendance tracking, Leave management,
              efficient Claim & Reimbursement monitoring, and simplified TDS &
              Tax Planner, HRMThread stands out. It introduces a progressive
              payslip delivery system on WhatsApp, emphasizing transparency,
              efficiency, and eco-friendly practices. Recognized by the World
              HRD Congress, HRMThread is the preferred choice for businesses
              seeking streamlined HR and payroll operations.
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
