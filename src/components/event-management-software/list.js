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
                    <Link href="/whova">
                      <Image
                        src="/images/whova.png"
                        alt="whova"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/whova">
                      {" "}
                      <h5>Whova</h5>
                      <p>All In One Event Management Apps For Event Planners</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/whova">
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
                  Whova is an all-in-one Event Management Software designed for
                  in-person, hybrid, and virtual events. It offers features such
                  as affordable event registration, time-saving event
                  management, and powerful event marketing. Trusted by
                  distinguished innovators in corporate, academic, government,
                  and association events, Whova ensures an enhanced attendee
                  experience with its signature event app, providing real-time
                  information, personalized agendas, live polls, and interactive
                  features. The software streamlines event logistics, saving
                  organizers time with tasks like agenda management, speaker
                  coordination, and check-in. Whova also focuses on delivering
                  high ROI for sponsors and exhibitors through various
                  promotional opportunities and lead generation tools.
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
                      variant="warning"
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
                    <Link href="/eventpro">
                      <Image
                        src="/images/eventpro.png"
                        alt="eventpro"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/eventpro">
                      {" "}
                      <h5>EventPro</h5>
                      <p>All In One Event Registration Software</p>
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
                  EventPro is a versatile event management software designed to
                  meet the diverse needs of professionals in various industries.
                  Seamlessly integrating modules for venue booking, event
                  planning, catering management, and more, EventPro offers a
                  customizable solution to create an all-in-one system tailored
                  to individual organizational requirements. With powerful
                  features such as booking wizards, shared calendars, catering
                  and beverage management, staffing, CRM, and online booking
                  capabilities, EventPro streamlines the entire event lifecycle,
                  from initial planning to post-event analysis. Whether deployed
                  on-premises or in the cloud, EventPro provides a flexible
                  solution for optimizing venue use, enhancing services, and
                  adding value to events, ultimately saving time and boosting
                  productivity.
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
                      variant="warning"
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
                    <Link href="/planningpod">
                      <Image
                        src="/images/planningpod.jpg"
                        alt="planningpod"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/planningpod">
                      {" "}
                      <h5>Planning Pod</h5>
                      <p>One Of The Best Event Planning Software</p>
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
                  Planning Pod is a event management software that streamlines
                  processes and communications for event planners and venues.
                  With over 20,000 events managed, it offers three powerful
                  solutions in one platform: Venue Management Software for
                  simplified event bookings, Event Planning Software for
                  real-time tracking of event details, and Floor Plan Software
                  for creating professional event layouts. The platform
                  integrates over 180,000 events and provides 20+ easy-to-use
                  tools that work together, helping users track details, save
                  time, collaborate effectively, and work seamlessly in a
                  virtual environment. Trusted by 20,000+ event professionals,
                  Planning Pod is a go-to solution for event management,
                  offering tools for CRM, lead management, email communications,
                  floor plan creation, registrations, and more.
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
                      variant="warning"
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
                    <Link href="/weve">
                      <Image
                        src="/images/weve.png"
                        alt="weve"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/weve">
                      {" "}
                      <h5>Weve</h5>
                      <p>Weve changed the way you meet.</p>
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
                  Weve is a virtual event platform designed to elevate your
                  company gatherings and team interactions. Partnered with The
                  Go Game, Weve offers virtual, in-person, and hybrid
                  experiences that cater to various budgets and team sizes. With
                  the flexibility to customize events on short notice, Weve
                  ensures seamless transitions from virtual to in-person or a
                  combination of both. The platform hosts a range of engaging
                  experiences, from team-building games like Murder on the
                  Mystery Express and Original Game Show to interactive sessions
                  like How to Talk to a Human with Radiolab founder, Jad
                  Abumrad. Trusted by renowned companies like Adobe, Disney,
                  Nike, and more, Weve is revolutionizing the way people
                  connect, learn, and play in the virtual and hybrid event
                  space.
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
                      variant="warning"
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
                    <Link href="/ticket-tailor">
                      <Image
                        src="/images/ticket.png"
                        alt="ticket"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/ticket-tailor">
                      {" "}
                      <h5>Ticket Tailor</h5>
                      <p>Software by Ticket Tailor</p>
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
                  Ticket Tailor is a feature-rich event ticketing platform
                  trusted by over 80,000 event creators worldwide. With
                  unbeatable value and flexible pricing, it offers a
                  straightforward, contract-free service, saving 73% compared to
                  its lead competitor. The platform goes beyond ticketing,
                  allowing events to have a positive impact on the planet, being
                  a carbon-neutral B Corp. Founded by Jonny White, Ticket Tailor
                  has successfully sold over 23 million tickets, offering a
                  secure and reliable platform with 99.99% uptime, world-leading
                  payments compliance, and a commitment to data security.
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
                      variant="warning"
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
                    <Link href="/dryfta">
                      <Image
                        src="/images/dryfta.png"
                        alt="dryfta"
                        width="110"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/dryfta">
                      {" "}
                      <h5>Dryfta</h5>
                      <p>
                        Dryfta is a Beautifully Event Booking Software with 30
                        Days Free Trial
                      </p>
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
                  Dryfta is a enterprise-grade Event Operating System designed
                  for universities, associations, nonprofits, enterprises, and
                  governments. Serving as an all-in-one event platform, Dryfta
                  simplifies the management of diverse event aspects, including
                  ticket sales, abstract submissions, engagement, scheduling,
                  and more. Trusted by universities and nonprofits across 20+
                  countries, Dryfta's unified dashboard enables organizers to
                  seamlessly handle submissions and peer reviews, sell tickets
                  online, manage event contacts, build schedules, and boost
                  event visibility through integrated features such as
                  EventBoost. With a focus on user-friendly interfaces,
                  automation, and flexibility, Dryfta replaces the need for
                  multiple tools, providing a holistic solution for efficient
                  event planning and execution.
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
                      variant="warning"
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
                    <Link href="/activenet">
                      <Image
                        src="/images/activenet.png"
                        alt="activenet"
                        width="150"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/activenet">
                      {" "}
                      <h5>ACTIVE Net</h5>
                      <p>Best Event Tracking Software</p>
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
                  ACTIVE Net is a recreation management software designed to
                  streamline the operations of parks, recreation departments,
                  and similar organizations. It offers a unified solution for
                  managing classes, facilities, memberships, camps, and more,
                  eliminating the need for multiple systems. The software
                  facilitates online registration, membership management,
                  facility scheduling, and other essential functions. With
                  features like point of sale, child care management, league
                  management, and robust reporting capabilities, ACTIVE Net aims
                  to enhance efficiency, customer experience, and overall
                  organizational productivity. It caters to various sectors,
                  including non-profits, parks and recreation, YMCA's, campus
                  recreation, and government entities, providing a user-friendly
                  platform accessible via computers and mobile devices.
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
                      variant="warning"
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
                    <Link href="/arlo">
                      <Image
                        src="/images/arlo.png"
                        alt="arlo"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/arlo">
                      {" "}
                      <h5>Arlo</h5>
                      <p>Best Event Registration software for SMBs</p>
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
                  Arlo is a event management system designed for efficiently
                  organizing recurring events, workshops, and seminars. With
                  user-friendly features, it allows seamless scheduling, venue
                  and presenter management, and customizable registration forms.
                  The software streamlines administrative tasks through task
                  sets, ensuring organized course management. Arlo provides a
                  centralized platform for handling all aspects of events,
                  including sessions, catering preferences, feedback surveys,
                  name labels, certificates, and financial transactions.
                  Tailored for diverse training providers, it enhances
                  operational efficiency by offering tools for registration,
                  course management, and reporting, making it a versatile
                  solution for businesses across various industrie
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
                      variant="warning"
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
                    <Link href="/eventorg">
                      <Image
                        src="/images/eventorg.png"
                        alt="eventorg"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/eventorg">
                      {" "}
                      <h5>EventOrg</h5>
                      <p>Software by Cabot Technology Solutions Pvt Limited</p>
                    </Link>
                    <div className="d-flex">
                      <div className="me-3">
                        <Link href="/eventorg">
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
                  EventOrg is a event management software that streamlines the
                  organizing process for any event, offering a user-friendly
                  platform without requiring development efforts. Its enchanting
                  features include promotional tools, paperless operations for
                  eco-conscious organizers, and a multi-event app for customized
                  branding. The platform accommodates various event types,
                  equipped with flexible modules, an easy-to-use CMS, and
                  features delighting attendees, such as an extensive agenda,
                  virtual conference capabilities, live Q&A sessions, digital
                  badges, and interactive engagement tools. EventOrg ensures
                  efficient event management with its comprehensive suite of
                  features, making planning and execution seamless for
                  organizers worldwide.
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
                      variant="warning"
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
                    <Link href="/airmeet">
                      <Image
                        src="/images/airmeet.jpg"
                        alt="airmeet"
                        width="100"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/airmeet">
                      {" "}
                      <h5>Airmeet</h5>
                      <p>Software by Airmeet</p>
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
                  Airmeet is a platform designed to host branded events and
                  webinars, offering a seamless solution for producing
                  captivating content. Users can leverage analytics tools to
                  create, influence, and convert their sales pipeline
                  effectively. With a focus on deep engagement, the software
                  empowers businesses to grow better by providing a
                  user-friendly interface for hosting events, managing content,
                  and optimizing marketing strategies. Boasting a 4.6 rating
                  based on 640+ reviews, the platform ensures a top-notch
                  experience for users seeking to enhance their online presence
                  and customer interactions.
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
                      variant="warning"
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
                        <Link href="/ticketscandy">
                          <Image
                            src="/images/ticketscandy.png"
                            alt="ticketscandy"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/ticketscandy">
                          {" "}
                          <h5>TicketsCandy</h5>
                          <p>Software by TicketsCandy</p>
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
                      TicketsCandy is a event ticketing and booking solution
                      designed to boost ticket sales and revenue by up to 30%.
                      With a stellar platform, intuitive dashboard, and
                      game-changing marketing tools, it transforms events into
                      sensations, offering an affordable ticketing solution that
                      ensures every seat is filled. Whether through seamless
                      online sales, integrated widgets, or captivating event
                      pages, TicketsCandy maximizes reach through partnerships
                      with social networks, newsletters, and paid advertising.
                      As a strategic growth partner, it provides dedicated 7-day
                      support, ensuring a smooth journey from event creation to
                      success.
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
                        <Link href="/fantastical">
                          <Image
                            src="/images/fantastical.png"
                            alt="fantastical"
                            width="100"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/fantastical">
                          {" "}
                          <h5>Fantastical</h5>
                          <p>Software by Flexibits Inc</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/fantastical">
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
                      Fantastical by Flexibits is a cross-platform calendar
                      application that seamlessly integrates across Mac, iPad,
                      iPhone, and Apple Watch. With its beautiful UI, powerful
                      views, and time-saving features like event and task
                      templates, Fantastical streamlines organization and
                      productivity. The app prioritizes user privacy, keeping
                      sensitive data on the device. It offers unique features
                      such as conference call detection, time zone support, and
                      widgets for quick access to upcoming events, tasks, and
                      weather. Fantastical supports various calendar services
                      and languages, making it a versatile and user-friendly
                      scheduling solution for individuals and families.
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
                        <Link href="/eventleaf">
                          <Image
                            src="/images/eventleaf.png"
                            alt="eventleaf"
                            width="150"
                            height="10"
                            className={`${styles["box-img"]} border p-4 rounded-3 shadow me-4`}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/eventleaf">
                          {" "}
                          <h5>Eventleaf</h5>
                          <p>Online event management</p>
                        </Link>
                        <div className="d-flex">
                          <div className="me-3">
                            <Link href="/eventleaf">
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
                      Eventleaf is a online event management platform designed
                      for simplicity, modernity, and affordability. Offering
                      support for in-person, hybrid, and virtual events, it
                      provides features such as online event registration and
                      mobile event apps. Users can effortlessly create and
                      promote events with unmatched design flexibility,
                      streamline registration processes, and sell tickets online
                      securely. The software facilitates efficient check-in
                      procedures with badge printing options and supports
                      engaging event experiences through polls, Q&A sessions,
                      and surveys. Eventleaf is praised for its user-friendly
                      interface and excellent customer service, making it an
                      ideal choice for organizing conferences, workshops,
                      meetings, and trade shows.
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
