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
            <h3>What is Marg Mandi Software ?</h3>
            <p>
              Marg Mandi Software is a agricultural market solution that
              empowers farmers with smart mandi software, offering features like
              market analysis, inventory management, and efficient trading. With
              over 1 million businesses served worldwide, Marg ERP ensures
              seamless operations, including 100% free e-invoicing, auto cloud
              backup, robust data security, and easy, fast billing. The software
              covers diverse aspects such as GST filing, auto-bank
              reconciliation, annual reporting, credit limit monitoring, and
              live tracking of billing and dispatch. Marg Mandi Software
              revolutionizes the agri-market experience, maximizing profits, and
              optimizing operations for a hassle-free and modern market
              management approach.
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
