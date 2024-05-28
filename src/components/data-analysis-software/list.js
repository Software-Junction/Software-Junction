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
                    <Link href="/intellicus">
                      <Image
                        src="/images/intellicus.png"
                        alt="intellicus"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/intellicus">
                      {" "}
                      <h5>Intellicus</h5>
                      <p>Enterprise data analytics Platform</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/intellicus">
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
                  Intellicus is a business intelligence (BI) solution offering
                  seamless data integration, analytics, and automation. With its
                  modular design, Intellicus empowers enterprises of all sizes
                  to unify data sources, expedite implementation, and enhance
                  user adoption. From real-time predictions to mobile access of
                  insights, Intellicus enables informed decision-making across
                  operations. Trusted by over 17,000 enterprises worldwide,
                  Intellicus transforms BI journeys with its customizable,
                  scalable, and intuitive platform.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/stata">
                      <Image
                        src="/images/stata.png"
                        alt="stata"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/stata">
                      {" "}
                      <h5>Stata</h5>
                      <p>Data Analysis Software BY StataCorp LP</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/stata">
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
                  Stata is statistical software designed for data science,
                  offering a broad suite of features for mastering data
                  analysis. With publication-quality graphics and automated
                  reporting, it ensures truly reproducible research. Boasting
                  Python integration and advanced programming capabilities,
                  Stata is trusted by researchers worldwide for its ease of use,
                  extensive documentation, and world-class technical support.
                  It's a versatile tool that's easy to grow with, automate, and
                  extend, making it an invaluable asset across various
                  disciplines for generating insights and making a difference in
                  research and decision-making.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/oracle-database">
                      <Image
                        src="/images/oracle-database.png"
                        alt="oracle-database"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-database">
                      {" "}
                      <h5>Oracle Database</h5>
                      <p>Leading enterprise-grade relational database</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-database">
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
                  Oracle Database is a comprehensive, high-performance database
                  management system offering various services and products
                  tailored to meet diverse data needs. It encompasses
                  cutting-edge features like autonomous management, integrated
                  AI capabilities, and seamless deployment options across cloud
                  and on-premises environments. With its market-leading
                  performance, scalability, reliability, and security, Oracle
                  Database empowers organizations to streamline their data
                  management processes and drive innovation efficiently.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/zoho-analytics">
                      <Image
                        src="/images/zoho-analytics.jpg"
                        alt="zoho-analytics"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/zoho-analytics">
                      {" "}
                      <h5>Zoho Analytics</h5>
                      <p>
                        Transform raw business data to refined statistical data.
                      </p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/zoho-analytics">
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
                  Zoho Analytics is a analytics platform that empowers users to
                  seamlessly connect, prepare, and analyze data. With its
                  intuitive interface and AI-driven capabilities, users can
                  effortlessly create visually stunning reports and dashboards,
                  uncovering valuable insights in minutes. Trusted by thousands
                  of customers and millions of users worldwide, Zoho Analytics
                  offers flexible deployment options, low total cost of
                  ownership, and robust security features, making it a top
                  choice for organizations seeking to transform data into
                  actionable insights.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/oracle-analytics">
                      <Image
                        src="/images/oracle-analytics.png"
                        alt="oracle-analytics"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/oracle-analytics">
                      {" "}
                      <h5>Oracle Analytics</h5>
                      <p>Empower all types of users to access and process d</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/oracle-analytics">
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
                  Oracle Analytics is a cloud-native service designed to
                  streamline the entire analytics process, from data ingestion
                  and modeling to visualization and collaboration. With embedded
                  machine learning and natural language processing, it fosters
                  an analytics-driven culture within organizations. Offering
                  flexible deployment options and support for various data
                  sources, it enables users to build compelling visual stories,
                  unify data for analysis, and leverage built-in data
                  preparation and enrichment functionalities. Oracle Analytics
                  empowers users to uncover insights, make informed decisions,
                  and drive business growth through actionable information, all
                  while ensuring security, governance, and scalability.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/nvivo">
                      <Image
                        src="/images/nvivo.png"
                        alt="nvivo"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/nvivo">
                      {" "}
                      <h5>NVivo</h5>
                      <p>Tools by QSR International</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/nvivo">
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
                  NVivo is a leading qualitative data analysis software offering
                  AI-powered autocoding, sentiment analysis, and user-driven
                  machine learning. It facilitates rapid thematic analysis,
                  enhances team collaboration with real-time sharing, and
                  streamlines transcription processes. NVivo 14 empowers
                  researchers to uncover richer insights, make robust
                  conclusions, and deliver comprehensive findings efficiently.
                  With features like integration with Citavi and free
                  integrations for apps like SurveyMonkey, NVivo 14 ensures a
                  seamless and productive research experience for individuals
                  and teams across various industries.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/domo">
                      <Image
                        src="/images/domo.jpg"
                        alt="domo"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/domo">
                      {" "}
                      <h5>Domo</h5>
                      <p>Domo puts data to work for everyone</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/domo">
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
                  Domo is a data platform designed to empower organizations to
                  harness the power of their data. Through intuitive business
                  intelligence and analytics, seamless data integration, and
                  robust app creation tools, Domo enables users to make informed
                  decisions quickly. With a focus on trust and security, Domo's
                  data foundation ensures reliable and efficient data
                  management. Trusted by businesses across various industries,
                  Domo fosters a culture of data-driven decision-making, driving
                  transformative actions and multiplying impact.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/sas-analytic-pro">
                      <Image
                        src="/images/sas.png"
                        alt="sas"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/sas-analytic-pro">
                      {" "}
                      <h5>SAS Analytics Pro</h5>
                      <p>Tools by SAS Institute Inc.</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/sas-analytic-pro">
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
                  SAS Analytics Pro is a software package designed for data
                  scientists, offering powerful capabilities for accessing,
                  manipulating, analyzing, and presenting information. With
                  intuitive features and advanced statistical techniques, it
                  provides a unified solution for data analysis and reporting
                  needs. Its integrated environment, including Base SAS,
                  SAS/STAT, and SAS/GRAPH, ensures consistency and efficiency
                  across enterprises. Moreover, SAS Analytics Pro facilitates
                  easy data integration, compliance adherence, and creation of
                  visually compelling reports, making it a versatile tool for
                  organizations seeking actionable insights from their data.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/webfocus">
                      <Image
                        src="/images/webfocus.png"
                        alt="webfocus"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/webfocus">
                      {" "}
                      <h5>WebFOCUS</h5>
                      <p>Tools by Information Builders</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/webfocus">
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
                  WebFOCUS by ibi is a analytics platform that empowers
                  organizations to harness the power of their data for informed
                  decision-making. With seamless cloud integration and AI-driven
                  insights, WebFOCUS offers highly scalable, self-service
                  analytics accessible to users across roles. Its pixel-perfect
                  reporting, embedded analytics, and location intelligence
                  capabilities enable businesses to create custom applications
                  and gain actionable insights. Whether through Natural Language
                  Queries or predictive analytics, WebFOCUS facilitates
                  data-driven decisions with ease and efficiency. With features
                  like ReportCaster and native cloud support, it ensures
                  efficient data distribution and scalability, making it an
                  essential tool for modern enterprises.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                    <Link href="/ideata-analytics">
                      <Image
                        src="/images/ideata.png"
                        alt="ideata"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ideata-analytics">
                      {" "}
                      <h5>Ideata Analytics</h5>
                      <p>Big Data Analytics Made Easy</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/ideata-analytics">
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
                  Ideata Analytics is a transformative software solution that
                  empowers businesses to thrive in the digital era. By
                  leveraging cutting-edge technologies such as cloud, AI, and
                  data analytics, it enables companies to unlock untapped value,
                  streamline processes, and drive innovation. With a focus on
                  resilience and integration, Ideata Analytics helps businesses
                  navigate industry complexities and achieve strategic
                  objectives. Its comprehensive suite of services includes
                  consulting, digital transformation, enterprise solutions, and
                  AI capabilities, tailored to meet the diverse needs of modern
                  enterprises. Positioned as catalysts for digital evolution,
                  Ideata Analytics partners with leading tech giants like
                  Google, AWS, and IBM to deliver exceptional results and craft
                  digital success stories.
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
   <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                              <Button
                                variant="warning"
                                size="sm"
                                className="text-light"
                                onClick={formik.handleSubmit}
                              >
                                Submit
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
                            employee: "",
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
                            employee: Yup.string().required(
                              "Please select employee strength."
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
<Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
  >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
                        <Link href="/minitab">
                          <Image
                            src="/images/minitab.png"
                            alt="minitab"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/minitab">
                          {" "}
                          <h5>Minitab</h5>
                          <p>Tools by Minitab</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/minitab">
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
                      Minitab is a powerful statistical software offering
                      best-in-class solutions for businesses, facilitating
                      data-driven decision-making anytime, anywhere through its
                      cloud accessibility. With market-leading products like
                      Minitab Statistical Software and Minitab Engage, it
                      enables organizations to unlock the full potential of
                      their data, manage improvement initiatives, and achieve
                      business excellence efficiently. Backed by robust
                      technical support and a range of resources including
                      webinars and customer stories, Minitab empowers users to
                      harness valuable insights from their data, driving
                      impactful outcomes and facilitating continuous improvement
                      within their organizations.
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
                        <Link href="/patsnap">
                          <Image
                            src="/images/patsnap.png"
                            alt="patsnap"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/patsnap">
                          {" "}
                          <h5>PatSnap</h5>
                          <p>Connecting the dots so you can innovate better</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/patsnap">
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
                      PatSnap is an advanced AI-powered platform revolutionizing
                      collaboration between IP and R&D teams. It streamlines the
                      innovation lifecycle, offering tools to ideate, validate,
                      review, submit, and monitor inventions. With features like
                      Idea, Refinement, Insight, Analysis, and Collaboration, it
                      accelerates processes, enhances decision-making, and
                      ensures data security, trusted by over 12,000 innovators
                      worldwide. PatSnap empowers enterprises to eliminate
                      workflow friction, saving time and resources while
                      unlocking competitive advantages in the intellectual
                      property landscape.
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
                        <Link href="/agolytics">
                          <Image
                            src="/images/agolytics.png"
                            alt="agolytics"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/agolytics">
                          {" "}
                          <h5>Algolytics</h5>
                          <p>Power your business with data!</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/agolytics">
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
                      Algolytics offers solutions and products aimed at
                      empowering businesses with data-driven insights. Their
                      Algoline suite encompasses innovative tools like AlgoMaps
                      for Location Intelligence, Algoline for real-time customer
                      scoring, and Customer Intelligence for precise targeting.
                      With a focus on advanced data mining, machine learning,
                      and stream data processing, Algolytics provides high-end
                      tools such as AdvancedMiner and Scoring.One, enabling
                      businesses to derive maximum value from their data.
                      Through case studies featuring reputable clients like PGE
                      and DHL Parcel, Algolytics demonstrates its expertise in
                      driving business growth and efficiency through innovative
                      applications of data analytics.
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
                        <Link href="/maxqda">
                          <Image
                            src="/images/maxqda.png"
                            alt="maxqda"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/maxqda">
                          {" "}
                          <h5>MAXQDA</h5>
                          <p>Tools by VERBI Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/maxqda">
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
                      MAXQDA is the qualitative data analysis software,
                      seamlessly integrating AI for streamlined analysis. It
                      offers versatile solutions for organizing, analyzing, and
                      visualizing data, catering to various research
                      methodologies. With user-friendly interfaces,
                      comprehensive tutorials, and robust customer support,
                      MAXQDA ensures efficient collaboration and learning.
                      Trusted by researchers worldwide, it facilitates mixed
                      methods analysis, interview transcriptions, literature
                      reviews, and more, making it indispensable for academia
                      and industry alike.
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
                        <Link href="/nanobi">
                          <Image
                            src="/images/nanobi.png"
                            alt="nanobi"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/nanobi">
                          {" "}
                          <h5>Nanobi</h5>
                          <p>Visual Full Stack analytics platform</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/nanobi">
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
                      Nanobi is an advanced, platform offering interactive
                      testing and visual full-stack capabilities. Utilizing
                      patented Nanomart Neural Metadata technology, it enables
                      swift data assembly and exploration of external
                      influences. With deep analytical solutions tailored for
                      various industries and customizable options, Nanobi
                      simplifies complex data management and fosters actionable
                      insights. Its expertise-driven services, backed by years
                      of global BI and analytics experience, ensure efficient
                      deployment and scaling of analytics solutions. Based in
                      Bengaluru, Nanobi empowers businesses with transformative
                      analytics, catering to diverse needs from BFSI to
                      healthcare and retail sectors.
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
                        <Link href="/atlas">
                          <Image
                            src="/images/atlas.png"
                            alt="atlas"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/atlas">
                          {" "}
                          <h5>ATLAS.ti</h5>
                          <p>Tools by ATLAS.ti</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/atlas">
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
                      ATLAS.ti is a qualitative data analysis software that
                      empowers researchers across various fields with AI-driven
                      insights. Offering a seamless user experience, it
                      streamlines research workflows for scientific researchers,
                      students, universities, UX/product designers, marketers,
                      and data analysts. With its intuitive interface, robust
                      feature set, and real-time collaboration capabilities,
                      ATLAS.ti enables users to import, organize, analyze, and
                      visualize diverse data types efficiently. Trusted by
                      leading institutions and companies worldwide, it stands
                      out for its exceptional customer support, flexibility in
                      licensing, and innovative AI-powered tools, making it the
                      go-to solution for qualitative research projects.
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
                        <Link href="/quirkos">
                          <Image
                            src="/images/quirkos.png"
                            alt="quirkos"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/quirkos">
                          {" "}
                          <h5>Quirkos</h5>
                          <p>Tools by Quirkos Limited</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/quirkos">
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
                      Quirkos is a qualitative analysis software designed to
                      simplify the interpretation of qualitative text data. With
                      its intuitive interface and essential tools, researchers
                      can easily organize, categorize, and filter their data,
                      allowing for quick understanding and identification of
                      patterns. Offering both cloud-based collaboration and
                      offline options, Quirkos ensures seamless teamwork and
                      accessibility across various devices. Affordable and
                      accessible, Quirkos provides an indispensable tool for
                      researchers, empowering them to delve deep into their data
                      and uncover valuable insights efficiently.
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
                        <Link href="/simplify-analytics">
                          <Image
                            src="/images/simplify-analytics.png"
                            alt="simplify-analytics"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/simplify-analytics">
                          {" "}
                          <h5>SimplifyAnalytics</h5>
                          <p>Retail Analytics Platform</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/simplify-analytics">
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
                      SimplifyAnalytics is an intuitive web analytics platform
                      offering visitor tracking, session replays, heatmaps, goal
                      tracking, and real-time analytics. It prioritizes
                      efficient, privacy-conscious data analysis and offers
                      diverse subscription plans, including a free option and
                      agency plans. Designed for businesses of all sizes, it
                      provides comprehensive insights into website performance,
                      empowering users to make informed decisions and optimize
                      user experiences. With its lightweight mode,
                      SimplifyAnalytics ensures fast website performance while
                      delivering essential analytics features. Trusted by
                      professionals across various industries, it stands as a
                      reliable alternative to traditional analytics tools like
                      Google Analytics.
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
                        <Link href="/panoply">
                          <Image
                            src="/images/panoply.png"
                            alt="panoply"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/panoply">
                          {" "}
                          <h5>Panoply</h5>
                          <p>Tools by Panoply Technologies Ltd</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/panoply">
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
                      Panoply is an all-in-one data platform designed to
                      streamline data management for businesses. With 30 times
                      faster implementation and 50% cheaper costs, it offers
                      seamless integration of over 10,000 data sources. This
                      platform empowers users to effortlessly store, analyze,
                      and visualize data, enabling informed decision-making.
                      Trusted by thousands, Panoply ensures data flows freely,
                      promoting efficiency and productivity across
                      organizations. Experience the ease of data management with
                      Panoply's intuitive interface and comprehensive features.
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
                        <Link href="/funnel">
                          <Image
                            src="/images/funnel.png"
                            alt="funnel"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/funnel">
                          {" "}
                          <h5>Funnel</h5>
                          <p>
                            All costs and results, in one place, all the time.
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/funnel">
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
                      Funnel is a marketing data hub that centralizes and
                      streamlines reporting and analytics processes. With its
                      ISO & SOC2 certifications, it ensures data security and
                      reliability. It seamlessly connects, stores, organizes,
                      and shares marketing data from various sources, enabling
                      faster and accurate reporting. Trusted by over 2000 global
                      customers, it empowers teams with actionable insights,
                      leading to improved efficiency and optimized marketing
                      budgets. With no credit card required and expert support
                      available, Funnel offers a transparent and hassle-free
                      solution for businesses seeking to gain control of their
                      data.
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
                      employee: "",
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
                      employee: Yup.string().required(
                        "Please select employee strength."
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
                       <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Field
                          as="select"
                          id="mySelect"
                          className={`form-select ${
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
