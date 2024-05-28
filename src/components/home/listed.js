import React, { useState, useEffect } from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Container, Row, Col,Form, Button } from "react-bootstrap";

//   var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

const Listed = ({ styles }) => {
  // const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  //     ssr: false,
  //   });

  //   const state = {
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       450: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 1,
  //       },
  //     },
  //   };
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
      <section className={`${styles["listed"]} py-4`} id="get-listed">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Get Listed</h3>
              <h5 className="mb-4">
                Getting listed on Software Junction can provide numerous
                advantages, such as increased visibility, brand exposure, and
                accessibility to a targeted audience actively searching for
                software solutions.
              </h5>
            </Col>
            <Row className="justify-content-center">
            <Col lg={6}>
             
             <div className="box shadow p-4 bg-light border rounded-3">
             <h5>List your Software Now</h5>
             <hr />
              <Formik
                initialValues={{
                  username: "",
                 
                  email: "",
                  number: "",
                 
                  companyname: "",
                  employee: "",
                  postTimestamp: new Date().toUTCString(),
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required(
                    "Please enter your full name."
                  ),
                 
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Please enter your email address."),
                  number: Yup.string().required(
                    "Please enter your phone number."
                  ),
                  companyname: Yup.string().required(
                    "Please enter your Company Name."
                  ),
                  employee: Yup.string().required(
                    "Please select employee strength."
                  ),
                  message: Yup.string().required("Please enter a message."),
                })}
                onSubmit={handleFormSubmit}
              >
                {(formik) => (
                  <Form method="post" id="contact-form">
                    <Row>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          className={`form-control ${
                            formik.touched.username && formik.errors.username
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="companyname"
                          placeholder="Company Name"
                        />
                        <ErrorMessage
                          name="companyname"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select py-2 ${
                            formik.touched.employee && formik.errors.employee
                              ? "is-invalid"
                              : ""
                          }`}
                          name="mySelect"
                        >
                          <option value="" disabled selected>
                            Employee Strength :
                          </option>
                          <option value="option1">Under 20</option>
                          <option value="option2">20- 150</option>
                          <option value="option3">150- 500</option>
                          <option value="option4">500 - 1000</option>
                          <option value="option5">Over 1000</option>
                        </Field>
                        <ErrorMessage
                          name="employee"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>
                      </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          className={`form-control ${
                            formik.touched.username && formik.errors.username
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="username"
                          placeholder="Full Name"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          className={`form-control ${
                            formik.touched.number && formik.errors.number
                              ? "is-invalid"
                              : ""
                          }`}
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          className={`form-control ${
                            formik.touched.email && formik.errors.email
                              ? "is-invalid"
                              : ""
                          }`}
                          type="number"
                          name="number"
                          placeholder="Phone Number"
                        />
                        <ErrorMessage
                          name="number"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
                      >
                        <Field
                          className={`form-control ${
                            formik.touched.companyname &&
                            formik.errors.companyname
                              ? "is-invalid"
                              : ""
                          }`}
                          type="text"
                          name="companyname"
                          placeholder="Website"
                        />
                        <ErrorMessage
                          name="companyname"
                          component="div"
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>
                    </Row>
                   <Button variant="primary" className="w-100" onClick={formik.handleSubmit}>Get Listed</Button>
                   
                    
                  </Form>
                )}
              </Formik>

             </div>
            </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Listed;

{
  /* <OwlCarousel
className="owl-theme testimonials"
responsive={state.responsive}
loop
nav
autoplay={false}
autoplayTimeout={5000}
dots={false}
>
<div className={styles['demo']}>
<div
  id={styles["testimonial-slider"]}
  className={styles["owl-carousel"]}
>
  <h3 className="text-center pt-4 text-light fw-bold" >What Our Clients Say</h3>
  <div className={styles["testimonial"]}>
    <div className={styles["pic"]}>
      <Image
        src="/images/usp1.png"
        alt=""
        height="50"
        width="50"
        className={styles['img']}
      />
    </div>
    <div className={styles["testimonial-content"]}>
      <p className={styles["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. A aliquam amet animi blanditiis consequatur
        debitis dicta distinctio, enim error eum iste libero
        modi nam natus perferendis possimus quasi sint sit
        tempora voluptatem. Est, exercitationem id ipsa ipsum
        laboriosam perferendis temporibus!
      </p>
      <h5 className={styles["testimonial-title"]}>
        williamson
        <small className={styles["post"]}>Web Developer</small>
      </h5>
    </div>
  </div>
</div>
</div>
<div className={styles['demo']}>
<div
  id={styles["testimonial-slider"]}
  className={styles["owl-carousel"]}
>
<h3 className="text-center pt-4 text-light fw-bold" >What Our Clients Say</h3>
  <div className={styles["testimonial"]}>
    <div className={styles["pic"]}>
      <Image
        src="/images/usp2.png"
        alt=""
        height="20"
        width="20"
        className={styles['img']}
      />
    </div>
    <div className={styles["testimonial-content"]}>
      <p className={styles["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. A aliquam amet animi blanditiis consequatur
        debitis dicta distinctio, enim error eum iste libero
        modi nam natus perferendis possimus quasi sint sit
        tempora voluptatem. Est, exercitationem id ipsa ipsum
        laboriosam perferendis temporibus!
      </p>
      <h3 className={styles["testimonial-title"]}>
        kristiana
        <small className={styles["post"]}>Web Designer</small>
      </h3>
    </div>
  </div>
</div>
</div>
</OwlCarousel> */
}
