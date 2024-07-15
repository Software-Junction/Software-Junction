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
            <h3>What is Celoxis ?</h3>
            <p>
              Celoxis is a all-in-one Project Portfolio Management (PPM)
              software designed to transform businesses by reimagining projects,
              processes, and data. It goes beyond traditional project
              management, offering advanced tools such as Intake Management for
              automated project request capture, What-if Analysis for strategic
              project optimization, and Custom Workflow Apps to streamline
              business processes. With features like Project Planning, Resource
              Management, and Portfolio Monitoring, Celoxis ensures efficient
              utilization of resources across diverse time zones. Its
              power-packed capabilities include Gantt Charts, Risk Management,
              Time Tracking, Kanban Style, Issue Tracking, and a Client Portal,
              allowing teams to stay focused and productive. Backed by top
              ratings and over ten years of industry leadership, Celoxis
              provides the most powerful reporting and dashboards, making it a
              100% customizable, visually appealing, and data-driven solution
              for organizations seeking project management excellence.
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
