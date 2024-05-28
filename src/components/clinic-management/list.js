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
                    <Link href="/healcon-practice">
                      <Image
                        src="/images/healcon.png"
                        alt="healcon"
                        width="130"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/healcon-practice">
                      {" "}
                      <h5>Healcon Practice</h5>
                      <p>India's #1 Clinic Management Software</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/healcon-practice">
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
                  Healcon Practice is an all-in-one cloud-based medical software
                  designed for doctors to efficiently manage clinic workflows.
                  Offering features such as Practice Management, Electronic
                  Medical Records (EMR), e-Prescription, Appointment Scheduling,
                  Medical Billing, and more, it seamlessly integrates and
                  automates various aspects of healthcare operations. With an
                  emphasis on improved patient care, reduced no-shows, and
                  streamlined front-office processes, Healcon Practice ensures a
                  paperless and secure environment. Its industry-leading
                  security features, including HIPAA-compliant data centers and
                  multi-geography backups, make it a reliable choice for
                  healthcare professionals globally.
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
                    <Link href="/practo-ray">
                      <Image
                        src="/images/practo.png"
                        alt="practo"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/practo-ray">
                      {" "}
                      <h5>Practo Ray</h5>
                      <p>Software by Practo Technologies Private Limited</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/practo-ray">
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
                  Practo Ray is a clinic management software, widely trusted in
                  India and used by over 50,000 doctors across 5 countries. As
                  Ayushman Bharat Digital Mission compliant, it ensures enhanced
                  discoverability within the ABDM ecosystem. Offering features
                  like automated appointment reminders, secure digital
                  record-sharing, and post-consultation chats, Practo Ray
                  streamlines operations, reduces no-shows, and improves patient
                  engagement. With Practo Prime, a premium offering, clinics can
                  further elevate patient experience, benefiting from features
                  like a smart calling system and 24/7 instant online booking.
                  The software prioritizes data security, boasting 256-bit
                  end-to-end encryption and HIPAA-compliant data centers.
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
                    <Link href="/clinsav">
                      <Image
                        src="/images/clinsav.png"
                        alt="clinsav"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/clinsav">
                      {" "}
                      <h5>ClinSav</h5>
                      <p>My Clinic in My Pocket</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/clinsav">
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
                  ClinSav, "My Clinic in My Pocket," is a clinic management
                  solution offering healthcare professionals complete control
                  over patient data. It simplifies operations by digitizing
                  patient information, providing real-time appointment tracking,
                  and enabling flexible case paper management. The software
                  facilitates seamless collaboration with staff through instant
                  syncing and intercom communication. ClinSav automates
                  financial tracking, prescription management, and supports the
                  management of multiple clinics. Equipped with smart and voice
                  assist features, ClinSav ensures an optimized clinic
                  experience, making it an essential tool for healthcare
                  practitioners.
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
                    <Link href="/docengage">
                      <Image
                        src="/images/docengage.png"
                        alt="docengage"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/docengage">
                      {" "}
                      <h5>DocEngage</h5>
                      <p>India's No:1 EHR/EMR</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/docengage">
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
                  DocEngage is a healthcare management software that serves as a
                  comprehensive solution for both single and multi-speciality
                  hospitals. Offering six products, over 30 apps, and 100+
                  integrations, it provides an advanced and secure platform for
                  digital healthcare. From telehealth services and CRM to clinic
                  management, EHR, homecare, and hospital management, DocEngage
                  covers the entire spectrum of healthcare needs. Noteworthy for
                  its emphasis on security, the software ensures data protection
                  through SSL encryption, role-based access control, and
                  compliance with HIPAA standards. Trusted by leading healthcare
                  providers, DocEngage optimizes patient care through secure
                  communication, mobile apps, and efficient practice management.
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
                    <Link href="/creliohealth">
                      <Image
                        src="/images/crelio.jpg"
                        alt="crelio"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/creliohealth">
                      {" "}
                      <h5>CrelioHealth</h5>
                      <p>Advanced web-based LIMS, PACS/RIS with Mobile Apps</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/creliohealth">
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
                  CrelioHealth's Patient Engagement Software is an
                  all-encompassing solution designed to enhance patient
                  experience and relationships in healthcare. It seamlessly
                  integrates with websites, converting them into online stores
                  for efficient patient bookings and secure online payments.
                  With personalized promotions and targeted packages, the
                  software ensures improved patient communication and
                  conversions. Offering HIPAA-compliant features, the platform
                  provides secure, automated patient reminders and notifications
                  via Email, SMS, and WhatsApp. CrelioHealth's system is highly
                  configurable, prioritizing privacy, brand identity, and a
                  superior patient engagement experience, making it an essential
                  tool for healthcare providers.
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
                    <Link href="/webmedy">
                      <Image
                        src="/images/webmedy.png"
                        alt="webmedy"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/webmedy">
                      {" "}
                      <h5>Webmedy</h5>
                      <p>Software by Ardinia Systems Pvt Ltd</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/webmedy">
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
                  Webmedy is a Electronic Health Records (EHR) practice
                  management platform designed to enhance medical practices'
                  efficiency and scalability. With a user-friendly interface and
                  robust features, including customizable templates for quick
                  note-taking, automated reminders, and cloud-based scheduling,
                  Webmedy streamlines administrative tasks. The platform offers
                  smart charting, clinical reports, and adherence to EHR
                  standards, ensuring accurate and efficient patient care.
                  Webmedy's billing module accelerates payment processes, while
                  the patient portal fosters engagement, empowering individuals
                  to manage their health decisions. Backed by top-tier data
                  security and role-based access control, Webmedy is a
                  HIPAA-compliant solution that prioritizes ease of use,
                  functionality, and value for healthcare practitioners.
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
                    <Link href="/qmarksoft">
                      <Image
                        src="/images/qmark.jpg"
                        alt="qmark"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/qmarksoft">
                      {" "}
                      <h5>Qmarksoft</h5>
                      <p>Online | Offline With Sync Facility & Mobile APP</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/qmarksoft">
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
                  Qmarksoft's Pathology Lab Software is a comprehensive and
                  customizable online solution for managing and reporting
                  pathology lab activities. Offering both online and offline
                  versions, it ensures unlimited data management, lightning-fast
                  performance, and secure data handling. With features like
                  barcode and QR code integration, automated communication via
                  SMS, WhatsApp, and email, as well as mobile apps for both
                  Android and iOS, the software streamlines operations,
                  facilitates report access, and enables seamless interaction
                  with patients. Its extensive capabilities encompass inventory
                  management, employee and franchisee systems, making it an
                  efficient, user-friendly, and versatile tool for pathology
                  laboratories.
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
                    <Link href="/clinicmaster">
                      <Image
                        src="/images/clinicmaster.png"
                        alt="clinicmaster"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/clinicmaster">
                      {" "}
                      <h5>Clinicmaster</h5>
                      <p>Software by Vimukti Technologies Pvt. Ltd.</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/clinicmaster">
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
                  Clinicmaster is a practice management platform designed to
                  streamline operations for healthcare clinics. Offering
                  specialized solutions for Rehabilitation and Therapy Clinics,
                  Health and Wellness Clinics, Medical Specialties, and more,
                  Clinicmaster empowers clinics with features like intuitive
                  scheduling, efficient billing, digital charting, dynamic
                  marketing, and data-driven analytics. The software ensures
                  patient engagement through portals, secure communication, and
                  personalized care plans. With a focus on user roles,
                  Clinicmaster caters to owners, administrators, clinicians,
                  receptionists, and patients, fostering seamless connectivity
                  across devices. Privacy is prioritized with encrypted data
                  storage on Microsoft Azure servers, making Clinicmaster a
                  secure and efficient choice for clinics aiming for growth and
                  excellence in patient care.
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
                      <p>Medical software for Clinics, Labs and Hospitals</p>
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
                    <Link href="/lybrate">
                      <Image
                        src="/images/lybrate.png"
                        alt="lybrate"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/lybrate">
                      {" "}
                      <h5>Lybrate</h5>
                      <p>Software by Lybrate</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/lybrate">
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
                  Lybrate is a dynamic clinic management software that
                  streamlines medical practitioners' daily tasks. This
                  user-friendly platform allows doctors to effortlessly manage
                  patient records, prescriptions, and appointments. With secure
                  data storage on Amazon Cloud servers, multilingual SMS
                  reminders, and smart billing features, Lybrate ensures
                  efficient practice management. The software facilitates
                  seamless connectivity with patients through its Smart Patient
                  Connect feature, fostering the exchange of medical documents
                  for enhanced patient engagement. Lybrate stands out for its
                  commitment to empowering doctors with essential patient
                  information, emphasizing ease of use, transparent pricing, and
                  reliable service.
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
                          <p>Connected EMR and Hospital Management System</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/halemind">
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
                        <Link href="/karexpert">
                          <Image
                            src="/images/karexpert.png"
                            alt="karexpert"
                            width="130"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/karexpert">
                          {" "}
                          <h5>KareXpert's EMR/EHR Software</h5>
                          <p>More Time Caring. Less Time Charting.</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/karexpert">
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
                      KareXpert's EMR/EHR Software is a solution designed to
                      optimize healthcare operations. It digitizes patient
                      records, allowing for efficient management of medical
                      reports, prescriptions, and diagnostic data. The platform
                      features hyper-coordinated workflows, medication and
                      clinical order management, and a paperless hospital
                      system, reducing administrative burdens. Specialized
                      templates cater to diverse medical specialties, ensuring
                      quick processing of patient data. With secure information
                      handling and cost-effective solutions, KareXpert
                      facilitates a seamless transition to digital healthcare,
                      promoting improved patient care and streamlined workflows
                      for healthcare providers.
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
                        <Link href="/medismart">
                          <Image
                            src="/images/medismart.jpg"
                            alt="medismart"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/medismart">
                          {" "}
                          <h5>Medismart</h5>
                          <p>
                            Software by HexaTech IT Ventures Pvt Ltd / Writer
                            Business Services Pvt Ltd
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/medismart">
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
                      Medismarts EMR is an innovative Electronic Medical Record
                      system designed to enhance healthcare delivery. Seamlessly
                      integrating clinical, administrative, and billing
                      functions, it empowers healthcare providers to schedule
                      and manage procedures efficiently, code diagnoses
                      globally, automate workflows, generate reports, and
                      streamline billing processes. Trusted by forward-thinking
                      HMOs and providers, Medismarts EMR ensures real-time
                      updates, easy integration with accounting software, and
                      multiple payment options for patients. As a leading
                      Med-Tech brand, Medismarts is committed to leveraging
                      technology and data to create viable healthcare solutions,
                      addressing both obvious and hidden challenges within the
                      healthcare sector.
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
                        <Link href="/clinicea">
                          <Image
                            src="/images/clinicea.png"
                            alt="clinicea"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/clinicea">
                          {" "}
                          <h5>Clinicea</h5>
                          <p>Software by Clinicea</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/clinicea">
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
                      Clinicea, established in November 2012, is a globally
                      acclaimed clinic management platform renowned for its
                      simplicity and effectiveness. Operating across 6
                      continents and supporting 20+ medical specialties,
                      Clinicea boasts a 4.9 satisfaction rating. Offering
                      features such as customizable EMR, stunning prescription
                      creation, and visual visit comparisons, it stands out with
                      smart imaging tools and integrated virtual assistants.
                      Emphasizing patient engagement, it facilitates online
                      bookings, feedback, and loyalty programs. With a focus on
                      data security and compliance, Clinicea is hosted on
                      Microsoft Azure Cloud. Client testimonials highlight its
                      customization, support, and seamless clinic operations.
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
                        <Link href="/ehospital">
                          <Image
                            src="/images/ehospital.jpg"
                            alt="ehospital"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ehospital">
                          {" "}
                          <h5>e-Hospital</h5>
                          <p>World-Class EHR Software at Affordable Price</p>
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
                      Digital Mission, is a digital healthcare platform. Linked
                      to the Ayushman Bharath Health Account (ABHA), it empowers
                      patients with secure digital access to health records, lab
                      reports, and prescriptions. Offering modules for patient
                      registration, admission, billing, and clinic management,
                      it enhances operational efficiency in outpatient and
                      inpatient services. With seamless integration into the
                      digital health ecosystem, e-Hospital is a transformative
                      solution, fostering streamlined healthcare processes and
                      patient-centric care.
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
                        <Link href="/prescription-pad">
                          <Image
                            src="/images/prescriptionpad.png"
                            alt="prescriptionpad"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/prescription-pad">
                          {" "}
                          <h5>Prescription Pad</h5>
                          <p>Software by CompuRx Infotech Pvt Ltd</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/prescription-pad">
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
                      Prescription Pad is a user-friendly medical software
                      designed for doctors in India. Developed by Dr. Anil Vij,
                      Chairman, and Medical Director, this software streamlines
                      prescription writing with features such as offline
                      prescription storage, duplicate medical certificates,
                      readymade prescription templates, and day-to-day activity
                      tracking. It ensures safe and error-free prescriptions,
                      offering value-added services like educational handouts,
                      appointment management, and health calculators. The
                      software also incorporates a trusted pharmacopeia with
                      information on 70,000 Indian, British, and American drug
                      brands, making it a time-efficient solution for doctors to
                      organize patient data, enhance clinical decision-making,
                      and save valuable time.
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
                        <Link href="/opd-plus">
                          <Image
                            src="/images/opdplus.jpg"
                            alt="opdplus"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/opd-plus">
                          {" "}
                          <h5>OPD PLUS Management Software</h5>
                          <p>Clinic Management Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/opd-plus">
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
                      OPD PLUS Management Software is an all-encompassing
                      solution tailored for efficient hospital management,
                      emphasizing seamless patient registration, appointment
                      scheduling, and automated digital prescription creation.
                      The software facilitates a user-friendly front desk,
                      ensuring real-time patient registration and streamlined
                      operations for multiple doctors and departments. With
                      customizable plans for individual practices, clinics with
                      multiple doctors, and large healthcare organizations, it
                      offers versatile options. Supported by 24/7 assistance on
                      the Microsoft Azure platform, it ensures global
                      accessibility, making it a flexible and environmentally
                      conscious choice for optimizing medical practices.
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
                        <Link href="/easy-clinic">
                          <Image
                            src="/images/easyclinic.png"
                            alt="easyclinic"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/easy-clinic">
                          {" "}
                          <h5>Easy Clinic</h5>
                          <p>Simple, Powerful & Complete Medical Software</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/easy-clinic">
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
                      Easy Clinic is a premier EMR and Clinic Management
                      Software designed by and for doctors, offering a seamless
                      solution for individual practitioners or multi-user
                      clinics. With over 10 years of experience, it boasts a
                      user-friendly interface, empowering healthcare
                      professionals to go paperless, streamline practice
                      management, handle billing, conduct virtual consultations,
                      and generate insightful reports. Customizable to diverse
                      workflows, Easy Clinic ensures flexibility while
                      prioritizing robust security with bank-level data
                      protection. It stands out with outstanding customer
                      service, real-time support, and a commitment to data
                      privacy. Trusted by 5000+ doctors in 200+ cities
                      worldwide, it's a powerful, secure, and growth-oriented
                      choice for clinics of all sizes.
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
                        <Link href="/clinisys">
                          <Image
                            src="/images/clinicsys.png"
                            alt="clinicsys"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/clinisys">
                          {" "}
                          <h5> Clinisys </h5>
                          <p>Software by Bio Analytical Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/clinisys">
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
                      Clinisys is a leading clinical lab systems provider with a
                      robust platform that seamlessly integrates data, serving
                      over 3,500 customers globally. Their Clinisys Platform™
                      empowers laboratories to enhance healthcare services
                      through informed decision-making, supports advancements in
                      life sciences research, and contributes to public health
                      by enabling disease surveillance and management at scale.
                      With 40 years of expertise and a team of over 1,450 lab
                      professionals, Clinisys offers tailored solutions across
                      22 research and test disciplines in nine industries. Their
                      commitment to efficiency, productivity, and innovation
                      positions Clinisys as a trusted partner in shaping a
                      healthier and greener future.
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
                        <Link href="/nalam">
                          <Image
                            src="/images/nalam.png"
                            alt="nalam"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/nalam">
                          {" "}
                          <h5>Nalam</h5>
                          <p>Software by Nalam+</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/nalam">
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
                      Nalam+ by Nalam Healthcare IT Solutions is a
                      multi-speciality hospital management software, offering
                      features such as patient record maintenance, digital
                      health ID with Medlocqr, NABH accreditation support, and
                      innovative solutions like Nalam Lite for efficient
                      computing. The software caters to Clinical Establishment
                      Rules 2018, ensuring meticulous maintenance of medical
                      records and patient databases. Nalam+ stands out for its
                      networking support, connecting machines to streamline data
                      sharing, and is backed by proactive support services,
                      embodying the principle "Prevention is better than Cure"
                      even in the realm of software.
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
                        <Link href="/ace-health-solutions">
                          <Image
                            src="/images/acehealth.png"
                            alt="acehealth"
                            width="120"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ace-health-solutions">
                          {" "}
                          <h5>ACE Health Solutions</h5>
                          <p>Software by Vaspaan Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ace-health-solutions">
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
                      ACE Health Solutions offers a comprehensive Practice
                      Management software designed for healthcare providers and
                      small hospitals. This robust solution covers key areas
                      such as credentialing, operations re-design for
                      compliance, patient volume increase through strategic
                      marketing, provider recruiting with resume screening
                      assistance, and thorough compliance measures including
                      HIPAA and OSHA training. The software conducts
                      organizational assessments, providing a complimentary
                      1-hour evaluation and in-depth analysis to define goals,
                      create strategic plans, assess technology needs, and
                      ensure adherence to industry regulations. Utilizing LEAN,
                      Six Sigma Principles, and Quality Improvement Principles,
                      ACE Health Solutions delivers effective and tailored
                      solutions with industry best practices.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/sara-technologies">
                          <Image
                            src="/images/sara.png"
                            alt="sara"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/sara-technologies">
                          {" "}
                          <h5>Sara Technologies</h5>
                          <p>Software by Sara Technologies</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/sara-technologies">
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
                      The Pathology Management Software developed by Sara
                      Technologies streamlines laboratory operations, offering a
                      user-friendly digital solution for efficient clinical and
                      operational management. Tailored for path labs, the
                      software ensures optimal resource utilization, increased
                      productivity, and paperless record-keeping. It features
                      comprehensive functionalities, including patients' data
                      management, appointment scheduling, web reporting, and
                      online MIS, adhering to NABH/NABL standards. With benefits
                      such as quick information access, centralized patient
                      data, and improved data safety, the software enhances
                      overall workflow, making it an indispensable tool for
                      modern diagnostic centers.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/medigynec">
                          <Image
                            src="/images/medigynec.jpg"
                            alt="medigynec"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/medigynec">
                          {" "}
                          <h5>
                            MedigyneC Gynecology Hospital Management System
                          </h5>
                          <p>
                            Software by HexaTech IT Ventures Pvt Ltd / Writer
                            Business Services Pvt Ltd
                          </p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/medigynec">
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
                      The MedigyneC Gynecology Hospital Management System is an
                      application designed to streamline gynecologists'
                      workflows, allowing them to focus on patient care. With
                      preloaded templates and advanced features, it efficiently
                      handles administrative tasks, ensuring timely completion
                      of patient records and detailed clinical documentation.
                      The user-friendly interface facilitates specialty-specific
                      templates, auto check-in kiosks, and digital images,
                      reducing paperwork and enhancing efficiency. This solution
                      offers a structured approach to women's reproductive
                      health, covering a range of clinical conditions and
                      providing actionable clinical intelligence. From labor and
                      delivery to preventative care, MedigyneC ensures accurate
                      and quick communication of patient information across
                      stakeholders for improved healthcare outcomes.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
                        <Link href="/ihms">
                          <Image
                            src="/images/hms.png"
                            alt="hms"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ihms">
                          {" "}
                          <h5>The iHMS (Hospital Management System)</h5>
                          <p>Software by TECHQUEST SERVICES</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/ihms">
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
                      The iHMS (Hospital Management System) by ACGIL is a
                      advanced software designed for efficient management of
                      hospitals, clinics, diagnostic centers, and nursing homes.
                      It offers a patient-centric approach, handling various
                      cases such as outpatients, emergencies, and inpatients.
                      With a fully configured web-based solution, it provides
                      mobile-friendly features for quick decision-making and
                      control over hospital processes. Key features include
                      multi-user account support, responsive interface, regular
                      updates, Codeigniter framework, and extensive
                      functionalities like appointment management, medical
                      reports, and medication history. It minimizes manpower,
                      ensures instant information retrieval, and facilitates
                      online appointment scheduling and payment processing.
                    </p>
                    <hr />
                    <div
                      className={`${styles["box-foot"]} d-flex justify-content-between p-1`}
                    >
                      <div className="ms-4">
                        <p>
                          Starting Price :
                          <span className="text-success fw-bold">
                            {" "}
                            Available on Request
                          </span>
                        </p>
                      </div>
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
