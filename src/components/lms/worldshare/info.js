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
            <h3>What is WorldShare Management Services ?</h3>
            <p>
              OCLC's WorldShare is a library management system tailored to meet
              the evolving challenges libraries face today. With products such
              as WorldShare Acquisitions, WorldCat Discovery, and WorldShare
              Interlibrary Loan, it facilitates streamlined workflows, efficient
              data sharing, and global collaboration among libraries. WorldCat,
              the world's most extensive bibliographic database, serves as a
              global connector for libraries, fostering the contribution and
              enhancement of bibliographic data on a worldwide scale. WorldShare
              operates on a cloud-based platform, empowering libraries to manage
              collections effectively, automate processes, and enhance resource
              visibility. OCLC's innovative solutions enable libraries to adapt
              to changing user needs, measure impact, and achieve greater
              efficiency in the dynamic library landscape.
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
