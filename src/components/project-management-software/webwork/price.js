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
            <h3 className="mb-3">WebWork Tracker Pricing</h3>
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
                  &#8377; 360
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Unlimited time tracking</li>
                <li>Unlimited projects and tasks</li>
                <li>Unlimited members and teams</li>
                <li>Timesheets</li>
                <li>Real-time monitoring</li>
                <li>Productivity metrics</li>
                <li>4 screenshot modes</li>
                <li>App and website usage</li>
                <li>Activity level tracking</li>
                <li>Attendance monitoring</li>
                <li>Leave and holidays</li>
                <li>10+ exportable reports</li>
                <li>Create and share invoices</li>
                <li>Chat</li>
                <li>Geolocation tracking</li>
                <li>1 Integration</li>
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
                  Plus
                  <br />
                  <br />
                  &#8377; 576
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Timesheet approvals</li>
                <li>Advanced app and website report</li>
                <li>Video meetings</li>
                <li>Payroll</li>
                <li>Payable invoices</li>
                <li>Send payment</li>
                <li>Shift scheduling</li>
                <li>Schedule reports</li>
                <li>Sharable reports</li>
                <li>Screenshot data retention (1 year)</li>
                <li>All integrations</li>
                <li>Unlimited chat and file history</li>
                <li>Advanced work-life balance metrics</li>
                <li>Priority support</li>
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
                  Premium
                  <br />
                  <br />
                  &#8377; 864
                </h5>
                <p>User/Month</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>White label</li>
                <li>Custom API</li>
                <li>Custom dashboard</li>
                <li>Custom reports</li>
                <li>Feature on demand</li>
                <li>Concierge account setup</li>
                <li>Premium support</li>
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
