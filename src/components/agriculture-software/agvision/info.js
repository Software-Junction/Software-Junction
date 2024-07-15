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
            <h3>What is AgVision Agribusiness Software ?</h3>
            <p>
              AgVision Agribusiness Software is a leading provider of accounting
              and inventory management solutions tailored for agribusinesses and
              cooperatives. Established in 1976, AgVision has been serving the
              technology needs of grain elevators, seed processors,
              cooperatives, feed mills, fertilizer retailers, and large farms
              nationwide. Their user-friendly and powerful software, developed
              with four generations of experience, is praised for its ease of
              use and effectiveness. The AgVision Scale Interface, highlighted
              by satisfied customers like Ruth Mascarelli from A.M. Bickley,
              Inc., is noted for its efficiency in processing grain deliveries
              and issuing checks, making it a valuable time-saving tool for
              agribusinesses. For more information, interested parties can
              contact AgVision at 800.759.9492 or through their Online Request
              For Information form.
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
