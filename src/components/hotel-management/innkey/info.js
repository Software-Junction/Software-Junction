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
            <h3>What is InnKey ?</h3>
            <p>
              InnKey – a revolutionary cloud-based solution that is reshaping
              the landscape of hotel management. InnKey sets itself apart by
              prioritizing simplicity and operational excellence, offering a
              centralized platform to streamline hotel operations. Say goodbye
              to the complexities of juggling multiple software versions and
              platforms as InnKey seamlessly integrates central reservation,
              front desk management, point of sale, and more. With a global
              footprint and cutting-edge property management system access,
              InnKey ensures efficient distribution and introduces genuine
              artificial price intelligence for advanced revenue management.
              Enjoy the perks of easy remote accessibility, scalability, and
              robust data security, making InnKey the go-to choice for hotels
              worldwide. Embark on a new era of hospitality management where
              efficiency meets exceptional customer service – welcome to the
              world of InnKey.
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
