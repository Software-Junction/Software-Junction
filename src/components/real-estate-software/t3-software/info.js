import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
            <h3>What is T3 Softwares ?</h3>
            <p>
              T3 Softwares is a business solution provider offering innovative
              CRM and ERP software tailored for diverse industries, including
              manufacturing, hospitality, real estate, and more. Their
              feature-rich products encompass production, accounting, inventory,
              web-based tools, multi-company management, payroll, and sales,
              providing streamlined solutions for efficient business operations.
              With a customer-centric ideology, T3 stands out as a leading
              player in Mumbai, excelling in web-based CRM and ERP development,
              offering application outsourcing, business consultancy, Android
              app development, and web applications to address the evolving
              needs of medium to large enterprises.
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
       <Col lg={{span:4,offset:1}}>
            {/* <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["info-img"]}
            /> */}
             <div
                className={`${styles["box-clr"]} box shadow  rounded-4 p-4`}
              >
                <div className="text-center text-light">
                  <h5>Need Help Choosing the Right Software ?</h5>
                  <p>
                    We understand that selecting the right software can be
                    challenging. Fill out the form below, and our team will
                    assist you in finding the best solution for your needs.
                  </p>
                </div>
                <div className="mt-3">
                  <Formik
                    initialValues={{
                      username: "",
                      location: "",
                      email: "",
                      number: "",
                      message: "",
                      postTimestamp: new Date().toUTCString(),
                    }}
                    validationSchema={Yup.object().shape({
                      username: Yup.string().required(
                        "Please enter your full name."
                      ),
                      location: Yup.string().required(
                        "Please select a location."
                      ),
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Please enter your email address."),
                      number: Yup.string().required(
                        "Please enter your phone number."
                      ),
                      message: Yup.string().required("Please enter a message."),
                    })}
                    onSubmit={handleFormSubmit}
                  >
                    {(formik) => (
                      <Form method="post" id="contact-form">
                        <Form.Group className="mb-3" controlId="formBasictext">
                          <Field
                            className={`form-control ${
                              formik.touched.username && formik.errors.username
                                ? "is-invalid"
                                : ""
                            }`}
                            type="text"
                            name="username"
                            placeholder="Full name"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicnumber"
                        >
                          <Field
                            className={`form-control ${
                              formik.touched.number && formik.errors.number
                                ? "is-invalid"
                                : ""
                            }`}
                            type="number"
                            name="number"
                            placeholder="Phone number"
                          />
                          <ErrorMessage
                            name="number"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Field
                            className={`form-control ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            type="email"
                            name="email"
                            placeholder="Email address"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Button
                          size="sm"
                          className="text-light"
                          variant="warning"
                          type="submit"
                          onClick={formik.handleSubmit}
                        >
                          Get Expert Help
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
