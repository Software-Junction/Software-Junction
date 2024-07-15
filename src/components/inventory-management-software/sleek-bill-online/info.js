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
            <h3>What is Sleek Bill Online ?</h3>
            <p>
              Sleek Bill Online is a secure online invoicing software designed
              for modern businesses, including small enterprises, freelancers,
              and accountants in India. With multi-user access from any PC or
              tablet, it allows seamless collaboration across devices. The
              software offers features such as inventory management,
              GST-compliant billing, personalized templates, real-time stock
              records, and various invoicing-related documents. Users can
              generate proforma invoices, quotes, delivery notes, and more,
              ensuring efficient business operations. With a focus on GST
              integration and compliance, Sleek Bill Online enables accurate
              calculation of GST rates and provides access to business data from
              anywhere. The cloud-based platform, founded in 2013, has garnered
              over 40,000 clients in India and offers free training, 24/7
              support, and a commitment to security and privacy. Get started
              today with free and easy invoicing, and let Sleek Bill Online
              handle your billing needs.
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
