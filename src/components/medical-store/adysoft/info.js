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
            <h3>What is Adysoft Medical Store Management ?</h3>
            <p>
              Adysoft Medical Store Management is a revolutionary GST Ready
              Medical Store Software developed by Adysoft, designed to
              streamline and automate the operations of medical stores in India.
              This comprehensive solution caters to the needs of pharmacy
              businesses, offering features such as automatic purchase order
              management, expiration tracking, alternate medicine suggestions,
              and detailed profit and loss analysis for each medicine. Medica
              reduces manual efforts, saves time, and provides modules for user
              management, client/vendor management, accounting, transactions,
              inventory, and more. As a leading Medical Software Company in
              India, Adysoft's Medica is the go-to choice for Pharma Retailers,
              Wholesalers, Chemists, and Druggists, ensuring accurate stock
              management and efficient financial accounting with GST compliance.
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
