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
            <h3>What is CrelioHealth LIMS ?</h3>
            <p>
              CrelioHealth's Laboratory Information Management System (LIMS)
              stands out as the industry's best solution, boasting a 92%
              satisfaction rate worldwide. This user-friendly and cost-effective
              system optimizes lab operations from order booking to report
              delivery, ensuring streamlined processes and enhanced
              productivity. With features like configurable forms, automated
              communications, and sample barcoding, it revolutionizes sample
              journey management. The LIMS System also excels in financial
              aspects, integrating seamlessly with payment collections, RCM
              vendors, and providing detailed MIS reports. CrelioHealth's LIMS
              is the epitome of a future-ready, efficient, and secure lab
              management solution, applauded by customers for its transformative
              impact on laboratory workflows.
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
