import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../icrm/ic.module.scss";

const Price = () => {
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
            <h3 className="mb-3">iCRM Pricing</h3>
          </Col>
          <Col lg={3} className="mb-3">
            <div
              className={`${styles["price-box"]} box  bg-light border h-100 rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  SEED
                  <br />
                  <br />
                  &#8377; 600
                </h5>
                <p>Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Basic Reports Dashboard</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>Lead Scoring Rules</li>
                <li>SMS Integration</li>
                <li>API Access</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - Android Only</li>
                <li>User audit, History & Timeline logs</li>
                <li>Storage - 6 GB</li>
                <li>2 Hour onboarding session</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  SAPLING
                  <br />
                  <br />
                  &#8377; 800
                </h5>
                <p>Full Licence/ Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Custom Reports Dashboard</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>SMS Integration</li>
                <li>Advanced Reports</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - iOS & Android</li>
                <li>Storage - 8 GB</li>
                <li>2 Hour onboarding session</li>
                <li>Quotation & Products Management</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>400 Bulk Emails/user/day</li>
                <li>15 Workflow Automations</li>
                <li>15 Teams</li>
                <li>Territories Management</li>
                <li>Custom Roles</li>
                <li>User audit, History & Timeline logs</li>
                <li>Lead Scoring Rules</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  PLANT
                  <br />
                  <br />
                  &#8377; 1200
                </h5>
                <p>Full Licence/Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Lead, Contact, Account, and Deal Management</li>
                <li>Advanced Reports</li>
                <li>Sales Pipelines, Targets & Forecast Management</li>
                <li>Email Integration</li>
                <li>Advanced Lead Scoring Rules</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Mobile Application - iOS & Android</li>
                <li>User audit, History & Timeline logs</li>
                <li>Storage - 12 GB</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>1200 Bulk Emails/user/day</li>
                <li>30 Workflow Automations</li>
                <li>30 Teams</li>
                <li>Social Media Integration</li>
                <li>Multi Currency</li>
                <li>Territories Management</li>
                <li>Quotation & Products Management</li>
                <li>SMS Integration</li>
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
              className={`${styles["price-box"]} box  bg-light border h-100  rounded-4 p-4`}
            >
              <div className="text-center">
                <h5>
                  TREE
                  <br />
                  <br />
                  &#8377; 1400
                </h5>
                <p>Full Licence/Single User</p>
              </div>
              <hr />
              <ul className={styles["price-btn"]}>
                <li>Dedicated Account Manager</li>
                <li>Audit Logs</li>
                <li>IP Whitelisting</li>
                <li>Multi Currency</li>
                <li>Social Media Integration</li>
                <li>Advanced CRM Customization</li>
                <li>Custom Roles</li>
                <li>60 Teams</li>
                <li>200 Workflow Automations</li>
                <li>8000 Bulk Emails/user/day</li>
                <li>IndiaMart, Just Dial, Sulekha & TradeIndia Integration</li>
                <li>Quotation & Products Management</li>
                <li>Storage - 18 GB</li>
                <li>User audit, History & Timeline logs</li>
                <li>Mobile Application - iOS & Android</li>
                <li>Website Integration for capturing the Leads</li>
                <li>Email Integration</li>
                <li>SMS Integration</li>
                <li>Lead, Contact, Account, and Deal Management</li>
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
