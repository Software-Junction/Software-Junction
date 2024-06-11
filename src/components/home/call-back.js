import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Callback = ({ styles }) => {
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

  const [showCall, setShowCall] = useState(false);

  const handleCloseCall = () => setShowCall(false);
  const handleShowCall = () => setShowCall(true);
  return (
    <>
      <section className={styles["callback"]}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-light text-center py-5">
                <strong>Why struggle with selecting software ?</strong>
              </h3>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="pe-2" style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                Get Expert Assistance
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="pe-2" style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                Save Time and Money
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="pe-2" style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                Avoid Software Headaches
              </h5>
            </Col>
            <Col lg={3}>
              <h5 className="text-light mb-5 fw-bold">
                {" "}
                <span className="pe-2" style={{ color: "#f95738 " }}>
                  <FaCheck />
                </span>
                Get Wide Options
              </h5>
            </Col>
            {/* <Col lg={12}>
              <div className="text-center mb-5">
                <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showCall}
                  onHide={handleCloseCall}
                >
                  <Modal.Header>
                    <div style={{width:"500px"}}>
                    <h3>
                      Discover the Perfect Software Solution
                     
                    </h3>
                    <p>
                      Welcome to Software Junction, where we make finding the
                      right software for your needs a breeze! Fill out the form
                      below, and let us guide you to the perfect software
                      solution tailored to your requirements.
                    </p>    
                    </div>
                 
                  </Modal.Header>
                  <Modal.Body>
                    <Formik
                      initialValues={{
                        username: "",
                        location: "",
                        email: "",
                        number: "",
                        message: "",
                        companyname: "",
                        date: "",
                        software: "",
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
                        companyname: Yup.string().required(
                          "Please enter your Company Name."
                        ),
                        software: Yup.string().required(
                          "Please select a software category."
                        ),
                        employee: Yup.string().required(
                          "Please select employee strength."
                        ),
                        date: Yup.string().required("Please select date."),
                        message: Yup.string().required(
                          "Please enter a message."
                        ),
                      })}
                      onSubmit={handleFormSubmit}
                    >
                      {(formik) => (
                        <Form method="post" id="contact-form">
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
                                formik.touched.companyname &&
                                formik.errors.companyname
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
                          >
                            <Field as="select"  className={`form-select ${
                                formik.touched.software &&
                                formik.errors.software
                                  ? "is-invalid"
                                  : ""
                              }`} name="mySelect">
                              <option value="" disabled selected>
                              Type of Software Needed
                              </option>
                              <option value="option1">CRM</option>
                              <option value="option2">Project Management</option>
                              <option value="option3">Accounting</option>
                            </Field>
                            <ErrorMessage
                              name="software"
                              component="div"
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Field as="select" id="mySelect" className={`form-select ${
                                formik.touched.employee &&
                                formik.errors.employee
                                  ? "is-invalid"
                                  : ""
                              }`} name="mySelect">
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

                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Current Challenges or Pain Points :"
                            />
                          </Form.Group>
                          <Button
                            variant="warning"
                            size="sm"
                            className="text-light"
                            onClick={formik.handleSubmit}
                          >
                            Request Now
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Modal.Body>
                </Modal>
                <Button
                  variant="warning"
                  className="text-light"
                  onClick={handleShowCall}
                >
                  Request Call Back
                </Button>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Callback;
