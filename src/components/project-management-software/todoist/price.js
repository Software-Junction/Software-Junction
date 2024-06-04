import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Price = ({ styles }) => {
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

  const handleCloseDemo = () => setShowDemo(false);
  const handleShowDemo = () => setShowDemo(true);

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">Todoist Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Free
                  <br />
                  <br />
                  &#8377; 0
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>5 active projects</li>
                <li>5 collaborators per project</li>
                <li>5 MB file uploads</li>
                <li>3 filters</li>
                <li>1-week activity history</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  Pro
                  <br />
                  <br />
                  &#8377; 288
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>300 active projects</li>
                <li>25 collaborators per project</li>
                <li>100 MB file uploads</li>
                <li>150 filters</li>
                <li>Reminders</li>
                <li>Unlimited activity history</li>
                <li>Themes & auto backups</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                Business
                  <br />
                  <br />
                  &#8377; 432
                </h5>
                <p>Per Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>500 active projects per member</li>
                <li>50 people per project</li>
                <li>Team inbox</li>
                <li>Team billing</li>
                <li>Admin & member roles</li>
              </ul>
              <div className="text-center">
                <Button variant="primary" size="sm" onClick={handleShowDemo}>
                  Free Trail
                </Button>
              </div>
            </div>
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
                                formik.touched.employee &&
                                formik.errors.employee
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Price;
