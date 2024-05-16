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
                    <Link href="/horizon">
                      <Image
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/horizon">
                      {" "}
                      <h5>Horizon ERP</h5>
                      <p>Leading online ERP software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/horizon">
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
                  Horizon Tech Solutions, accessible at
                  www.horizontechsolutions.co.in, is a leading technology
                  company with a decade of experience in ERP solutions. They
                  offer Horizon ERP, the finest ready-to-use GST billing and
                  accounting software for small businesses in India. This
                  user-friendly software streamlines back-end processes, such as
                  billing, invoicing, and inventory management, allowing
                  businesses in distribution, retail, and manufacturing to focus
                  on revenue generation. Horizon ERP follows best technological
                  practices and simplifies GST return filing, making it an
                  invaluable tool for small enterprises. It provides full
                  control and adapts seamlessly to existing business management
                  systems.
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
                    <Link href="/virmati-erp-fams">
                      <Image
                        src="/images/virmati.jpg"
                        alt="Viramati"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/virmati-erp-fams">
                      {" "}
                      <h5>Viramati's ERP-FAMS</h5>
                      <p>
                        Software by Virmati Software & Telecommunications Ltd.
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/virmati-erp-fams">
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
                  Viramati's ERP-FAMS, a cutting-edge Enterprise Resource
                  Planning solution designed to streamline and enhance your
                  business processes. With a user-friendly interface and robust
                  functionality, ERP-FAMS empowers organizations to manage
                  finances, automate workflows, and optimize resource
                  utilization seamlessly. Tailored to meet diverse industry
                  needs, this software offers real-time insights, fostering
                  informed decision-making. Unlock efficiency and elevate your
                  business operations with Viramati's ERP-FAMS, where innovation
                  meets reliability.
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
                    <Link href="/oracle-fusion">
                      <Image
                        src="/images/oracle.png"
                        alt="oracle"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-fusion">
                      {" "}
                      <h5>Oracle Fusion Cloud ERP</h5>
                      <p>SaaS solution with top ERP features & capabilities</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-fusion">
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
                  Oracle ERP, which stands for Enterprise Resource Planning, is
                  a versatile suite of business software applications designed
                  to simplify and improve an organization's core operations.
                  This powerful and flexible platform gives businesses the tools
                  they need to effectively handle their finances, procurement
                  processes, HR functions, and the complexities of their supply
                  chain. By offering a unified solution for crucial business
                  tasks, Oracle ERP enables companies to operate more
                  efficiently, make well-informed decisions, and enhance their
                  competitiveness in today's dynamic business world.
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
                    <Link href="/tallyprime">
                      <Image
                        src="/images/tally.png"
                        alt="tally"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/tallyprime">
                      {" "}
                      <h5>TallyPrime</h5>
                      <p>
                        Best ERP Systems for small and medium size businesses
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/tallyprime">
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
                  TallyPrime is a comprehensive business management software
                  designed to streamline and enhance various aspects of your
                  business operations. With a user-friendly interface and
                  powerful features like customizable reports, multi-company
                  management, and efficient cash flow control, TallyPrime
                  empowers you to make informed decisions and focus on business
                  growth. Boasting high ratings on platforms like G2 and
                  Capterra, TallyPrime offers seamless integration of
                  accounting, inventory management, statutory compliance,
                  payroll, and more. With a straightforward setup process,
                  real-time mobile access to reports, and robust security
                  measures, TallyPrime is a versatile solution for businesses of
                  all sizes.
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
                    <Link href="/vyapar">
                      <Image
                        src="/images/vyaparlogo.png"
                        alt="vyaparlogo"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/vyapar">
                      {" "}
                      <h5>Vyapar</h5>
                      <p>
                        Accounting software by Vyapar for Small Business Owners
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/vyapar">
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
                  Vyapar is a versatile accounting and billing software designed
                  to simplify the financial management of businesses. With
                  user-friendly features, it streamlines invoicing, expense
                  tracking, and inventory management. This powerful tool is an
                  excellent choice for small and medium-sized enterprises,
                  offering cloud-based accessibility for easy collaboration.
                  Vyapar empowers businesses to handle their finances
                  efficiently, making it a go-to solution for entrepreneurs
                  seeking a hassle-free accounting experience.
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
                    <Link href="/margerp">
                      <Image
                        src="/images/marg.png"
                        alt="marg"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/margerp">
                      {" "}
                      <h5>Marg ERP 9+Accounting</h5>
                      <p>Manage your payables and receivables faster</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/margerp">
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
                  Marg Compusoft is a powerful and versatile software platform
                  designed to streamline and enhance your business operations.
                  With a wide array of features, including inventory management,
                  accounting, and point-of-sale solutions, Marg Compusoft caters
                  to businesses of all sizes. Its user-friendly interface and
                  real-time data access make managing your business a breeze.
                  Experience the convenience of cloud-based operations and
                  efficient resource management with Marg Compusoft, your
                  trusted partner for growth and success.
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
                    <Link href="/infor-cloudsuite">
                      <Image
                        src="/images/infor.png"
                        alt="infor"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/infor-cloudsuite">
                      {" "}
                      <h5>Infor CloudSuite™ ERP</h5>
                      <p>Leading Cloud-Based ERP Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/infor-cloudsuite">
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
                  Infor CloudSuite™ ERP is a leading industry cloud solution
                  that enables organizations to seamlessly transition to the
                  cloud, optimizing their business operations. With
                  preconfigured modern features, it offers manageable costs,
                  smooth deployment, and continuous innovation, ensuring
                  business continuity and growth. Recognized as a Leader in the
                  2023 Gartner® Magic Quadrant™ for Cloud ERP, Infor CloudSuite™
                  ERP provides deep industry functionality, security, and
                  uptime, empowering organizations to unlock the value of the
                  cloud and stay ahead in today's fast-paced business
                  environment.
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
                    <Link href="/banibro-solution">
                      <Image
                        src="/images/banibro.png"
                        alt="banibro"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/banibro-solution">
                      {" "}
                      <h5>Banibro ERP</h5>
                      <p>We can make IT possible</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/banibro-solution">
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
                  Banibro ERP is a business management solution that streamlines
                  processes, reduces operational costs, and enhances accuracy
                  through automation and error reduction. With real-time
                  insights and seamless integration across departments, it
                  empowers businesses to make informed decisions and achieve
                  measurable growth. Trusted by over 1 million users worldwide,
                  Odoo ERP offers tailored solutions for CRM, Invoicing, Sales,
                  and more, ensuring smoother operations and enhanced customer
                  experiences.
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
                    <Link href="/proqsmart">
                      <Image
                        src="/images/proqsmart.png"
                        alt="proqsmart"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/proqsmart">
                      {" "}
                      <h5>ProQsmart</h5>
                      <p>AI-powered System for Enterprise Resource Planning</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/proqsmart">
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
                  ProQsmart is an AI-powered procurement platform designed to
                  streamline CapEx procurement processes, ensuring timely
                  contract awards to optimal vendors at the best prices. With
                  its intelligent insights and automation, ProQsmart empowers
                  businesses to achieve up to 40% savings in procurement time
                  and 10% in direct costs. It offers transparency, maximum
                  savings, and enhanced collaboration while simplifying complex
                  sourcing requirements and tendering processes. Experience
                  faster project deliveries, reduced lead times, and improved
                  cost control with ProQsmart, setting new standards for
                  collaboration, compliance, and cost savings in procurement.
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
                    <Link href="/oracle-netsuite">
                      <Image
                        src="/images/oraclenet.png"
                        alt="oraclenet"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-netsuite">
                      {" "}
                      <h5>Oracle NetSuite ERP</h5>
                      <p>Handle All Your Accounting Operations With Ease</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-netsuite">
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
                  NetSuite's ERP software is a comprehensive solution designed
                  to streamline and enhance your business operations. With a
                  focus on efficiency and scalability, NetSuite ERP offers a
                  unified platform for financial management, order management,
                  procurement, and more. It empowers businesses to gain
                  real-time insights, improve decision-making, and optimize
                  resource utilization. This cloud-based ERP system provides a
                  flexible and customizable approach to address the unique needs
                  of various industries, making it an ideal choice for companies
                  seeking to elevate their productivity and competitiveness.
                  Discover how NetSuite ERP can help your organization achieve
                  greater success in managing critical aspects of your business.
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
                        <Link href="/bigsun">
                          <Image
                            src="/images/bigsun.jpg"
                            alt="bigsun"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/bigsun">
                          {" "}
                          <h5>BIGSUN</h5>
                          <p>
                            Low-cost Enterprise Resource Planning System
                            Software
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/bigsun">
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
                      BIGSUN offers a ERP solution tailored for diverse
                      industries, including manufacturing, media, and NBFCs.
                      With robust features like accounting, compliance, CRM, and
                      inventory management, it streamlines operations and
                      enhances efficiency. Trusted by leading businesses, it
                      empowers growth through automation, insightful reporting,
                      and seamless integration, making it the go-to choice for
                      businesses aiming for productivity and profitability.
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
                        <Link href="/orion-software">
                          <Image
                            src="/images/orion.jpg"
                            alt="orion"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/orion-software">
                          {" "}
                          <h5>Orion Software's ERP solution</h5>
                          <p>Best ERP system for small businesses</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/orion-software">
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
                      Orion Software's ERP solution is a tool designed to
                      optimize business efficiency for mid-size to large
                      enterprises, particularly in the construction industry.
                      With features ranging from collection dashboards to
                      financial statement analysis, it offers tailored solutions
                      adaptable to various business needs. Its integration
                      capabilities, including API support and utility programs,
                      ensure seamless incorporation with existing accounting
                      systems. Backed by a team of efficiency experts, Orion
                      Software collaborates closely with clients to streamline
                      operations, enhance productivity, and drive growth, making
                      it an invaluable asset for construction businesses seeking
                      innovative solutions.
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
                        <Link href="/ramco-erp-software">
                          <Image
                            src="/images/ramco.jpg"
                            alt="ramco"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ramco-erp-software">
                          {" "}
                          <h5>Ramco ERP Software</h5>
                          <p>
                            Flexible Cloud-Based Platform for Enterprise
                            Resource Planning
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ramco-erp-software">
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
                      Ramco ERP Software is a cloud solution revolutionizing
                      enterprise operations by providing real-time visibility
                      and agility. Offering a comprehensive suite of modules, it
                      simplifies complex business processes and enhances
                      efficiency through seamless integration. With its
                      user-friendly interface, scalability, and cloud-based
                      architecture, Ramco ERP empowers businesses to innovate
                      and thrive in today's dynamic market landscape.
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
                        <Link href="/tyasuite">
                          <Image
                            src="/images/tyasuite.png"
                            alt="tyasuite"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/tyasuite">
                          {" "}
                          <h5>TYASuite</h5>
                          <p>Empowered Cloud ERP Software Vendor</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/tyasuite">
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
                      TYASuite's Compliance Management Software offers a
                      cloud-based solution for businesses to efficiently oversee
                      and gain visibility into compliance activities. By
                      centralizing compliance processes, it streamlines
                      operations and ensures adherence to regulations. With
                      features like procurement to pay, project management, and
                      vendor management, it provides a comprehensive suite for
                      businesses to manage their operations seamlessly.
                      TYASuite's software enables businesses to renovate and
                      thrive in the digital era by offering end-to-end solutions
                      tailored to their needs.
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
                        <Link href="/crest-erp">
                          <Image
                            src="/images/crest.png"
                            alt="crest"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/crest-erp">
                          {" "}
                          <h5>CREST ERP</h5>
                          <p>Top-rated ERP software providers</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/crest-erp">
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
                      CREST ERP is a enterprise resource planning solution
                      designed to optimize operations and reduce costs for
                      mid-sized businesses. With seamless integration and
                      interdependent modules covering areas like inventory,
                      procurement, production, sales, and finance, CREST ERP
                      streamlines processes and enhances productivity. It offers
                      scalability to accommodate growth, ensures regulatory
                      compliance and security through centralized data storage
                      and role-based access controls, facilitates forecasting
                      and tracking of orders and finances, promotes
                      collaboration across departments, and ultimately leads to
                      significant cost savings and higher profits.
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
                        <Link href="/erpnext">
                          <Image
                            src="/images/erpnext.png"
                            alt="erpnext"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/erpnext">
                          {" "}
                          <h5>ERPNext</h5>
                          <p>A Comprehensive ERP system for Businesses</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/erpnext">
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
                      ERPNext is a open-source ERP solution offering versatile
                      tools for businesses worldwide. With its robust features
                      ranging from financial accounting to CRM and HR
                      management, it empowers organizations to streamline
                      operations efficiently. Trusted by over 10,000 companies
                      globally, ERPNext ensures seamless integration with
                      favorite apps and provides certified consultancy for
                      successful implementations. Experience its power with a
                      hassle-free 14-day trial and witness how it revolutionizes
                      business management. Built on Frappe, it epitomizes
                      simplicity, power, and innovation in ERP solutions.
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
                        <Link href="/expand-smerp">
                          <Image
                            src="/images/expand.png"
                            alt="expand"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/expand-smerp">
                          {" "}
                          <h5>Expand smERP</h5>
                          <p>Customizable ERP software system for exporters</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/expand-smerp">
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
                      Expand smERP is a fully customizable ERP solution designed
                      for manufacturers and exporters in India. With features
                      like production planning, vendor management, and barcode
                      scanning, it streamlines operations, reduces costs by up
                      to 30%, and enhances productivity. Its mobile ERP
                      functionality ensures efficiency on the go, while seamless
                      integration with eCommerce platforms, marketplaces,
                      logistics, and payment systems makes it a comprehensive
                      business management tool. Trusted by clients nationwide,
                      Expand smERP offers 24/7 support, multiple language
                      options, and robust security measures, ensuring seamless
                      operations and business growth.
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
                        <Link href="/ixpert-erp">
                          <Image
                            src="/images/ixpert.jpg"
                            alt="ixpert"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ixpert-erp">
                          {" "}
                          <h5>IXPert ERP</h5>
                          <p>
                            Software solution for Enterprise Resource Planning
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ixpert-erp">
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
                      IXPert Smart Solutions offers ERP software designed to
                      streamline business operations across various industries.
                      With features like finance management, sales tracking,
                      inventory control, and HR automation, our software
                      enhances efficiency and facilitates informed
                      decision-making. Whether you need a cloud-based or
                      on-premises solution, IXPert Smart Solutions provides
                      customizable ERP systems tailored to your business needs
                      and preferences. Gain real-time insights, improve
                      productivity, and stay ahead in today's competitive market
                      with our cutting-edge ERP software. Experience seamless
                      integration, advanced analytics, and reliable support to
                      drive growth and success for your business.
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
                        <Link href="/pact-erp">
                          <Image
                            src="/images/pact.png"
                            alt="pact"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/pact-erp">
                          {" "}
                          <h5>PACT ERP</h5>
                          <p>BUSINESS SOLUTION</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/pact-erp">
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
                      PACT RevenU is a leading Enterprise Resource Planning
                      (ERP) software designed to streamline and automate
                      business processes, offering customizable solutions for
                      businesses of all sizes and industries. With over 12000
                      satisfied clients worldwide, it provides modules covering
                      finance, inventory, sales, HR, and more, ensuring seamless
                      integration and real-time data flow. PACT RevenU stands
                      out for its ease-of-use, continuous technical support, and
                      industry-specific configurations, making it the go-to
                      choice for businesses aiming to enhance productivity and
                      drive growth. Whether on-premise or cloud-based, it offers
                      flexibility and accessibility, empowering businesses to
                      make informed decisions and stay VAT-compliant.
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
                        <Link href="/billbook">
                          <Image
                            src="/images/mybillbook.png"
                            alt="mybillbook"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/billbook">
                          {" "}
                          <h5>My Bill Book</h5>
                          <p>#1 GST billing software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/billbook">
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
                      MyBillBook is your friendly financial assistant, here to
                      make billing and invoicing a breeze. It's designed with
                      simplicity in mind, so you can effortlessly create, send,
                      and keep track of invoices, saving you time and reducing
                      mistakes. Plus, it goes beyond just invoices - it helps
                      you manage expenses and provides clear financial reports.
                      Whether you're a small business owner or a freelancer,
                      MyBillBook is your partner in staying organized and taking
                      charge of your finances. Say goodbye to financial
                      headaches and hello to a smoother billing experience with
                      MyBillBook.
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
