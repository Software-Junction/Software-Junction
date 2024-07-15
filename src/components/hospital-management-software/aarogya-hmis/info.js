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
            <h3>What is Aarogya HMIS ?</h3>
            <p>
              Aarogya, the pinnacle of healthcare efficiency and precision.
              Aarogya stands as a fully integrated Hospital Management
              Information System (HMIS), catering to the diverse needs of
              mid-size to large hospitals, laboratories, and polyclinics. With
              its state-of-the-art features, Aarogya ensures seamless management
              of outpatient (OPD) and inpatient (IPD) processes, organized
              operation theater schedules, and streamlined insurance management
              through integrated TPA modules. From pathology and pharmacy
              software to comprehensive inventory control, Aarogya optimizes
              every facet of healthcare administration. Experience transparency
              in financial processes, coupled with robust payroll and HR
              management. With additional modules for Blood Bank and Radiology,
              Aarogya emerges as the ultimate solution for comprehensive
              healthcare management. Welcome to a new era of healthcare
              efficiency with Aarogya.
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
