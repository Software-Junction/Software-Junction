import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const List = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

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

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  const [showDemo, setShowDemo] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = () => setShowPrice(true);
  return (
    <>
      <section className={`${styles["list"]} mt-5 `}>
        <Container>
          <Row className="">
            <Col lg={12}>
              <h3>List of Best Softwares</h3>
            </Col>
            <Col lg={8}>
              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/ehospital">
                      <Image
                        src="/images/ehospital.jpg"
                        alt="ehospital"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ehospital">
                      {" "}
                      <h5>e-Hospital</h5>
                      <p>Best Hospital Management Software for Doctor</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ehospital">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  e-Hospital, an integral part of India's Ayushman Bharath
                  Digital Mission, is a digital healthcare platform. Linked to
                  the Ayushman Bharath Health Account (ABHA), it empowers
                  patients with secure digital access to health records, lab
                  reports, and prescriptions. Offering modules for patient
                  registration, admission, billing, and clinic management, it
                  enhances operational efficiency in outpatient and inpatient
                  services. With seamless integration into the digital health
                  ecosystem, e-Hospital is a transformative solution, fostering
                  streamlined healthcare processes and patient-centric care.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/eventpro">
                      <Image
                        src="/images/mocdoc.png"
                        alt="mocdoc"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/eventpro">
                      {" "}
                      <h5>MocDoc </h5>
                      <p>Complete End to End System for Managing Hospitals</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/eventpro">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  MocDoc is a comprehensive Hospital Management System (HMS) and
                  Professional Network that operates on a SaaS-based platform.
                  It serves as an integrated solution for healthcare
                  institutions globally, connecting all departments seamlessly.
                  MocDoc ensures accurate reporting, quality control, and
                  effective time management, contributing to enhanced
                  productivity. Notable features include advanced appointment
                  scheduling, technically advanced solutions, and integration
                  capabilities with LIS, PACS, and EMR systems. With a
                  decade-long presence in the healthcare industry, MocDoc stands
                  out for its customization and integration expertise, offering
                  tailored solutions for hospitals, clinics, labs, and
                  pharmacies. Trusted for its reliable support and advanced
                  functionalities, MocDoc is a cost-effective choice for
                  healthcare professionals.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/planningpod">
                      <Image
                        src="/images/vyaparhotel.png"
                        alt="vyaparhotel"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/planningpod">
                      {" "}
                      <h5>Vyapar Hospital Billing Software</h5>
                      <p>Hospital Accounting Solutions for Small Businesses</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/planningpod">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Vyapar Hospital Billing Software is an advanced tool designed
                  to streamline and enhance the billing process within
                  healthcare organizations. It serves as a central platform for
                  managing patient bills efficiently, integrating with
                  healthcare records to ensure accurate accounting. The software
                  automates billing tasks, reducing human errors and improving
                  overall accounting performance. With features like real-time
                  updates, custom branding templates, and advanced reporting,
                  Vyapar empowers healthcare providers to make data-driven
                  decisions. It offers benefits such as streamlined billing
                  processes, simplified insurance claim processing, time and
                  cost savings, increased transparency, and error-free billing.
                  Vyapar's user-friendly interface, top-notch customer support,
                  and cost-effective pricing options make it the best choice for
                  hospitals seeking an efficient and reliable billing solution.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/weve">
                      <Image
                        src="/images/caresoft.png"
                        alt="caresoft"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/weve">
                      {" "}
                      <h5>Caresoft</h5>
                      <p>Web Based Hospital Information System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/weve">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Caresoft is a healthcare management software offering
                  solutions for hospitals, clinics, and diagnostic centers. With
                  a focus on optimizing workflows, the software enhances patient
                  care, resource management, and financial operations.
                  Caresoft's Hospital Information System (HIS) provides a
                  centralized, secure platform for automating clinical,
                  financial, and administrative processes. The system includes
                  Practice Management and Laboratory Information Systems,
                  catering to diverse healthcare needs. With over 15 years of
                  domain expertise, Caresoft ensures value for money solutions,
                  global adaptability, and a commitment to building a digital
                  healthcare ecosystem.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/ticket-tailor">
                      <Image
                        src="/images/oracle-healthcare.png"
                        alt="oracle-healthcare"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ticket-tailor">
                      {" "}
                      <h5>Oracle Healthcare Cloud</h5>
                      <p>Cost-Effective Hospital Management Solution</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ticket-tailor">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Oracle Healthcare Cloud (OCI) is a platform tailored for the
                  healthcare industry, offering a versatile solution to run a
                  spectrum of workloads. From traditional healthcare systems to
                  cutting-edge data science and machine learning applications,
                  OCI empowers providers to collaborate efficiently and derive
                  valuable insights. The platform facilitates predictive care
                  choices and risk factor analysis, contributing to better
                  patient-focused healthcare experiences. OCI supports rapid
                  development and prototyping of applications, ensuring seamless
                  integration with datasets and analyses. With secure migration
                  options for applications like Epic and Cerner, OCI upholds
                  data privacy through certifications such as HIPAA, providing
                  healthcare organizations with a comprehensive and innovative
                  infrastructure for streamlined operations and improved patient
                  outcomes.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/dryfta">
                      <Image
                        src="/images/crelio.jpg"
                        alt="crelio"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/dryfta">
                      {" "}
                      <h5>CrelioHealth LIMS </h5>
                      <p>Advanced web-based LIMS, PACS/RIS with Mobile Apps</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/dryfta">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  CrelioHealth's Laboratory Information Management System (LIMS)
                  stands out as the industry's best solution, boasting a 92%
                  satisfaction rate worldwide. This user-friendly and
                  cost-effective system optimizes lab operations from order
                  booking to report delivery, ensuring streamlined processes and
                  enhanced productivity. With features like configurable forms,
                  automated communications, and sample barcoding, it
                  revolutionizes sample journey management. The LIMS System also
                  excels in financial aspects, integrating seamlessly with
                  payment collections, RCM vendors, and providing detailed MIS
                  reports. CrelioHealth's LIMS is the epitome of a future-ready,
                  efficient, and secure lab management solution, applauded by
                  customers for its transformative impact on laboratory
                  workflows.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/activenet">
                      <Image
                        src="/images/miracle.png"
                        alt="miracle"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/activenet">
                      {" "}
                      <h5>Miracle HIS</h5>
                      <p>Affordable Web-Based Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/activenet">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Miracle HIS by Akhil Systems is a state-of-the-art web-based
                  Hospital Management Software designed for seamless healthcare
                  operations in a paperless environment. This modular system
                  integrates key hospital functions like Patient Registration,
                  OPD, IPD, OPD Pharmacy, Purchase, and Stores. With versions
                  catering to various hospital sizes, it offers quick access to
                  diverse patient information, facilitates remote data
                  accessibility, and serves as a decision support system.
                  Miracle HIS ensures efficient accounts management, error-free
                  record-keeping, and enhanced patient care in a cost-effective
                  manner, allowing doctors to focus more on clinical aspects.
                  Its comprehensive modules make it a valuable solution for
                  hospitals and healthcare institutions.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/arlo">
                      <Image
                        src="/images/genipulse.png"
                        alt="genipulse"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/arlo">
                      {" "}
                      <h5>GeniPulse Hospital Management Software</h5>
                      <p>Complete & affordable Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/arlo">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  GeniPulse Hospital Management Software, developed by GeniPulse
                  Technologies, is a , modular solution designed for hospitals
                  and clinics of all sizes, ranging from small clinics to large
                  hospitals with up to 1000 bed capacity. This window-based
                  software integrates key aspects of hospital management,
                  including patient registration, OPD, IPD, laboratory,
                  pharmacy, and more, all in a paperless environment. The system
                  boasts a single database that links patient demographics and
                  medical records to insurance, billing, and cases information,
                  fostering streamlined operations, improved patient care, and
                  enhanced profitability. With features like a multi-tab
                  interface, multi-level security, and user-friendly design,
                  GeniPulse HMS ensures efficient and cost-effective healthcare
                  IT solutions.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/medixcel">
                      <Image
                        src="/images/medixcel.png"
                        alt="medixcel"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/medixcel">
                      {" "}
                      <h5>Medixcel</h5>
                      <p>An Innovative Hospital Management System</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/medixcel">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Medixcel harmonizing Electronic Medical Records (EMR),
                  Practice Management, and Patient Engagement. Unleash a
                  comprehensive toolset that empowers healthcare professionals
                  to efficiently manage medical records, streamline practice
                  operations, and elevate patient interaction. This robust
                  platform, powered by advanced technology, ensures a
                  user-friendly experience while optimizing workflows in medical
                  practices. Explore the myriad features offered to enhance
                  overall efficiency and patient engagement.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
              >
                <div className="d-flex p-4">
                  <div>
                    <Link href="/airmeet">
                      <Image
                        src="/images/visual-hospital.png"
                        alt="visual-hospital"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/airmeet">
                      {" "}
                      <h5>Visual InfoSoft Pvt. Ltd</h5>
                      <p>Helps You Computerizing Your Hospital & Clinic</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/airmeet">
                          <span className="span-style">
                            0.0 <FaStar className="star-size" />
                          </span>
                        </Link>
                      </div>
                      <div>
                        <p>(0 Reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="px-4">
                  Visual InfoSoft Pvt. Ltd. offers a comprehensive suite of
                  healthcare solutions developed since 1996, comprising 17+
                  specialized software products for various medical disciplines.
                  Their range includes Doctor/Clinic Software, Hospital
                  Management System, Diagnostic Software, Pharmacy Software, and
                  Billing Software, addressing the unique needs of
                  Ophthalmologists, ENT specialists, Psychologists,
                  Gynecologists, Physicians, Surgeons, Dermatologists,
                  Pediatricians, Dentists, and more. With a commitment to
                  simplicity and efficacy, Visual InfoSoft's products streamline
                  administrative tasks, providing powerful interfaces for
                  seamless patient-doctor-pharmacy-diagnostic connectivity. The
                  software is continually upgraded based on customer feedback,
                  ensuring optimal performance in the ever-evolving healthcare
                  landscape.
                </p>
                <hr />
                <div
                  className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                >
                  <div className="ms-4"></div>
                  <div className={`${styles["box-btn"]} mb-3`}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={handleShowDemo}
                    >
                      Get Free Demo
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showDemo}
                      onHide={handleCloseDemo}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Free Demo</h3>
                      </Modal.Header>
                      <Modal.Body>
                        <Formik
                          initialValues={{
                            username: "",
                            location: "",
                            email: "",
                            number: "",
                            message: "",
                            date: "",
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
                            date: Yup.string().required("Please select date."),
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.date && formik.errors.date
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type={isDatePickerFocused ? "date" : "text"}
                                  name="date"
                                  placeholder="Preferred Demo Date :"
                                  onFocus={() => setDatePickerFocused(true)}
                                  onBlur={() => setDatePickerFocused(false)}
                                  id="date"
                                />
                                <ErrorMessage
                                  name="date"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Free Demo
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                      <Modal.Footer className={styles["md-ft"]}>
                        <p>Instruction :</p>
                        <ol>
                          <li style={{ fontSize: "12px" }}>
                            Fill out the form with your details.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            Click the &quot;Submit Request&quot; button.
                          </li>
                          <li style={{ fontSize: "12px" }}>
                            We will get in touch with you soon.
                          </li>
                        </ol>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      size="sm"
                      variant="primary"
                      className="mx-3"
                      onClick={handleShowPrice}
                    >
                      Get Pricing
                    </Button>
                    <Modal
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={showPrice}
                      onHide={handleClosePrice}
                    >
                      <Modal.Header closeButton>
                        <h3>Request For Price</h3>
                      </Modal.Header>
                      <Modal.Body>
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
                            message: Yup.string().required(
                              "Please enter a message."
                            ),
                          })}
                          onSubmit={handleFormSubmit}
                        >
                          {(formik) => (
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.username &&
                                    formik.errors.username
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
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.number &&
                                    formik.errors.number
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
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Field
                                  className={`form-control ${
                                    formik.touched.email && formik.errors.email
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  type="email"
                                  name="email"
                                  placeholder="Bussiness Email address"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className={`${styles["valid-clr"]} invalid-feedback`}
                                />
                              </Form.Group>
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Get Pricing
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>

              {isShowMore && (
                <>
                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/ticketscandy">
                          <Image
                            src="/images/karexpert.png"
                            alt="karexpert"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ticketscandy">
                          {" "}
                          <h5>
                            KareXpert's Hospital Information Management System
                          </h5>
                          <p>Experience Digital Healthacare</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ticketscandy">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      KareXpert's Hospital Information Management System (HIMS)
                      is a healthcare management software designed to streamline
                      hospital operations. It offers features such as role-based
                      access control, IPD and OPD management, billing solutions,
                      and facility management. With a user-friendly mobile and
                      web interface, it enhances digital presence and patient
                      engagement. The software covers diverse aspects, including
                      Emergency Response Care, Diet Management, and Patient
                      Feedback, ensuring efficient healthcare delivery.
                      KareXpert's HIMS empowers hospitals with a centralized
                      platform, incorporating AI, data analytics, and
                      connectivity across various healthcare domains for
                      improved patient care and operational excellence.
                    </p>

                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/halemind">
                          <Image
                            src="/images/hale.png"
                            alt="hale"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/halemind">
                          {" "}
                          <h5>Halemind</h5>
                          <p>And Effective Hospital Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/halemind">
                              <p
                                className={`${styles["p-style1"]} border text-light pe-1 ps-2 pt-1 rounded-3s `}
                                style={{ backgroundColor: "#FC5185 " }}
                              >
                                4.4 <FaStar />
                              </p>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Halemind is a Electronic Medical Records (EMR) and
                      Hospital Management System (HMS) designed to elevate
                      independent practices and hospitals. With advanced,
                      secure, and specialty-driven EHR technology, it simplifies
                      operations for private practices, hospitals, pharmacies,
                      and labs. Halemind empowers healthcare professionals with
                      evidence-based care, intuitive patient behavior tracking,
                      and streamlined scheduling through a smart calendar. The
                      platform offers a single-dashboard solution for
                      administrators, encompassing connected records, billing,
                      digital prescriptions, patient portals, and more. Beyond
                      mere management, Halemind creates a connected healthcare
                      platform, endorsed by satisfied users like Ophthalmologist
                      Dr. Madhavi and Homeopathic Consultant Dr. Sandeep
                      Selvinus, making it a comprehensive and user-friendly
                      solution for modern healthcare needs.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/medisteer">
                          <Image
                            src="/images/medisteer.png"
                            alt="medisteer"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/medisteer">
                          {" "}
                          <h5>MediSteer</h5>
                          <p>A web-based hospital management ERP</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/medisteer">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      MediSteer is a web-based hospital management system
                      developed by Adroit Soft India. This comprehensive product
                      addresses the operational and managerial needs of
                      hospitals, ranging from small clinics to large-scale
                      medical facilities. Designed collaboratively by medical
                      professionals and engineers, MediSteer enhances
                      operational efficiency, reduces costs, and minimizes
                      medical errors. With seamless data flow across
                      departments, online consultation capabilities, and
                      integrated modules covering outpatient and inpatient
                      management, pharmacy, laboratory, finance, and more,
                      MediSteer ensures a holistic solution for healthcare
                      institutions, promoting improved patient care, increased
                      staff productivity, and overall customer satisfaction.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/eventavenue">
                          <Image
                            src="/images/eventavenue.png"
                            alt="eventavenue"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/eventavenue">
                          {" "}
                          <h5>EventAvenue</h5>
                          <p>Software by Event avenue</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/eventavenue">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      EventAvenue is a leading online registration and payment
                      gateway software in India, catering to diverse
                      organizations such as event organizers, corporations,
                      schools, and non-profits. It offers a 24/7 solution for
                      seamless online event management, including real-time
                      registrations, secure payment processing, customizable
                      tools, and interactive floor plan management. With a focus
                      on accessibility, it allows global audience reach, easy
                      data mining, and ensures the highest standards of
                      security. EventAvenue supports a range of applications,
                      from conferences and trade shows to class admissions,
                      donation collections, and more, providing comprehensive
                      control and insights for effective online registration and
                      payment handling.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/eventsair">
                          <Image
                            src="/images/eventsair.png"
                            alt="eventsair"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/eventsair">
                          {" "}
                          <h5>EventsAir</h5>
                          <p>Software by Centium Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/eventsair">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      EventsAir is a centralized event management platform,
                      empowering over 350,000 events globally. With a 30-year
                      history, it has successfully supported major events like
                      the London Olympics and G20 Summit. This all-in-one
                      solution seamlessly handles virtual, in-person, and hybrid
                      events, offering unlimited registrations and transparent
                      flat-rate monthly pricing. From attracting exhibitors and
                      managing sponsors to creating engaging experiences with
                      features like interactive tools, social networking, and
                      attendee apps, EventsAir ensures seamless event execution.
                      With robust pre-event, during-event, and post-event
                      capabilities, it caters to diverse needs, making it a
                      preferred choice for conferences, meetings, and world
                      events.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/picatic">
                          <Image
                            src="/images/picatic.png"
                            alt="picatic"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/picatic">
                          {" "}
                          <h5>Picatic E-Ticket</h5>
                          <p>
                            Sell Event Tickets Online - Free Event Ticketing
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/picatic">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Picatic E-Ticket, Inc. is a online event ticketing
                      platform established in 2012. Specializing in marketing
                      and advertising, the company offers eMarketing/Digital
                      Marketing solutions with a focus on AdTech and E-commerce
                      verticals. With notable investors such as BDC Capital,
                      Highline VC, and Sequoia Capital, Picatic has successfully
                      raised undisclosed amounts through completed seed deals
                      dating back to 2012. The platform facilitates ticket
                      sales, event promotion, and event space management,
                      catering to a diverse range of clients in the dynamic
                      realm of online events.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/netxms">
                          <Image
                            src="/images/netxms.jpg"
                            alt="netxms"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/netxms">
                          {" "}
                          <h5>NetXMS</h5>
                          <p>Software by RADEN SOLUTIONS</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/netxms">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      NetXMS is a network monitoring solution, exemplified by
                      its latest version, NetXMS 4.5.1 (released on Jan 30,
                      2024). With a focus on proactive monitoring for hybrid
                      systems, this enterprise-grade software offers elaborate
                      zoning, proxy functionality, and versatile data processing
                      options. NetXMS enables users to discover and manage
                      diverse devices across their network, providing
                      comprehensive observability through topological maps and
                      connectivity views. Renowned for its modularity, extensive
                      features, and scalability, NetXMS has garnered praise from
                      users for its effectiveness in behavior-based issue
                      sorting and seamless network management, making it an
                      all-encompassing tool for organizations seeking robust,
                      customizable, and secure network monitoring.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/ungerboeck">
                          <Image
                            src="/images/ungerboeck.png"
                            alt="ungerboeck"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ungerboeck">
                          {" "}
                          <h5>Underboeck</h5>
                          <p>Software by Momentus Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ungerboeck">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Momentus Technologies offers Venue and Event Management
                      Software designed to streamline operations for diverse
                      sectors, including convention centers, higher education,
                      corporate spaces, stadiums, arenas, and arts and culture
                      organizations. This end-to-end platform unifies data and
                      resources, providing a powerful suite of solutions such as
                      CRM, booking, event management, accounting, reporting, and
                      API integration. With a cloud-based, accessible-anywhere
                      approach, Momentus empowers teams to enhance efficiency,
                      unlock insights from quality analytics, and create
                      extraordinary event experiences. Trusted by over 60,000
                      users globally, Momentus is dedicated to connecting people
                      and technologies to manage the world's greatest spaces and
                      deliver exceptional moments.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/eventtemple">
                          <Image
                            src="/images/eventtemple.png"
                            alt="eventtemple"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/eventtemple">
                          {" "}
                          <h5>Event Temple</h5>
                          <p>The Industry's Leading Venue Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/eventtemple">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Event Temple is a cloud-based hotel and venue management
                      software designed to enhance efficiency and revenue
                      generation. Voted #1 globally for Best Event Management
                      and Best Group Sales in 2021, 2022, and 2023, it offers a
                      comprehensive growth platform for hotels and venues. With
                      features like digital proposals, quick response to
                      inquiries, and powerful reporting, Event Temple
                      streamlines sales processes, saves time on operations, and
                      provides a user-friendly experience trusted by thousands
                      of users in 40 countries. The software's success is
                      highlighted by testimonials praising its automation,
                      time-saving capabilities, and contribution to business
                      growth.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles["main-box"]} bg-light box border mt-4 rounded-4 `}
                  >
                    <div className="d-flex p-4">
                      <div>
                        <Link href="/tix">
                          <Image
                            src="/images/tix.png"
                            alt="tix"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/tix">
                          {" "}
                          <h5>Tix</h5>
                          <p>Software by Tix, Inc</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/tix">
                              <span className="span-style">
                                0.0 <FaStar className="star-size" />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <p>(0 Reviews)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="px-4">
                      Tix is a state-of-the-art, ticketing system designed for
                      diverse organizations such as universities, venues,
                      promoters, and more. Offering a complete ticketing
                      solution, Tix features integrated access controls, event
                      management, and a robust reporting suite. With a
                      user-friendly interface, Tix supports various sales
                      channels, including online, mobile, and box office,
                      allowing seamless ticket transactions. The system also
                      includes CRM tools for enhanced customer relationships,
                      email marketing capabilities, and secure payment
                      processing with PCI Level 1 certification. Tix's
                      transparent pricing structure, with no hidden fees and low
                      service charges, makes it a risk-free choice for efficient
                      and successful event ticketing.
                    </p>{" "}
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4"></div>
                      <div className={`${styles["box-btn"]} mb-3`}>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={handleShowDemo}
                        >
                          Get Free Demo
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showDemo}
                          onHide={handleCloseDemo}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Free Demo</h3>
                          </Modal.Header>
                          <Modal.Body>
                            <Formik
                              initialValues={{
                                username: "",
                                location: "",
                                email: "",
                                number: "",
                                message: "",
                                date: "",
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
                                date: Yup.string().required(
                                  "Please select date."
                                ),
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.date &&
                                        formik.errors.date
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type={
                                        isDatePickerFocused ? "date" : "text"
                                      }
                                      name="date"
                                      placeholder="Preferred Demo Date :"
                                      onFocus={() => setDatePickerFocused(true)}
                                      onBlur={() => setDatePickerFocused(false)}
                                      id="date"
                                    />
                                    <ErrorMessage
                                      name="date"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Free Demo
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                          <Modal.Footer className={styles["md-ft"]}>
                            <p>Instruction :</p>
                            <ol>
                              <li style={{ fontSize: "12px" }}>
                                Fill out the form with your details.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                Click the &quot;Submit Request&quot; button.
                              </li>
                              <li style={{ fontSize: "12px" }}>
                                We will get in touch with you soon.
                              </li>
                            </ol>
                          </Modal.Footer>
                        </Modal>
                        <Button
                          size="sm"
                          variant="primary"
                          className="mx-3"
                          onClick={handleShowPrice}
                        >
                          Get Pricing
                        </Button>
                        <Modal
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={showPrice}
                          onHide={handleClosePrice}
                        >
                          <Modal.Header closeButton>
                            <h3>Request For Price</h3>
                          </Modal.Header>
                          <Modal.Body>
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
                                message: Yup.string().required(
                                  "Please enter a message."
                                ),
                              })}
                              onSubmit={handleFormSubmit}
                            >
                              {(formik) => (
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.username &&
                                        formik.errors.username
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
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.number &&
                                        formik.errors.number
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
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Field
                                      className={`form-control ${
                                        formik.touched.email &&
                                        formik.errors.email
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      type="email"
                                      name="email"
                                      placeholder="Bussiness Email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className={`${styles["valid-clr"]} invalid-feedback`}
                                    />
                                  </Form.Group>
                                  <Button
                                    variant="warning"
                                    size="sm"
                                    className="text-light"
                                    onClick={formik.handleSubmit}
                                  >
                                    Get Pricing
                                  </Button>
                                </Form>
                              )}
                            </Formik>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Col>

            <Col lg={4}>
              <div
                className={`${styles["box-clr"]} box shadow mt-4 rounded-4 p-4`}
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

            <Col lg={12}>
              <div className={styles["list-btn"]}>
                <Button className="mt-4" onClick={toggleReadMoreLess}>
                  {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default List;
