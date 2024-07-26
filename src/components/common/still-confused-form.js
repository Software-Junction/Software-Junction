import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import {PostAPi} from "../common/common";
import softwareData from "../home/software-data";

const Stillconfusedform = ({ show, handleClose }) => {

  const params = useRouter() 

  const handleFormSubmit = async (values, actions) => {
    const {username,email,number,employee,message,companyname,software} = values
    const body ={
      "fullName": username,
      "phoneNo": number,
      "email": email,
      "softwareCategory": software,
      "employeeStrength": employee,
      "companyName": companyname,
      "challenges": message
    }
    // return console.log(body);
    actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
      
    PostAPi('campare',body).then((response)=>console.log(response))
    // console.log("Form value",values);
  };

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <div>
            <h3>Still Confused !</h3>
            <h5>Get Recommendation from an Expert</h5>
            <p>
              Fill out the form below and get the Expert guide you to the
              perfect Software Solution tailored to your requirements
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: "",
              email: "",
              number: "",
              message: "",
              companyname: "",
              software: "",
              employee: "",
              postTimestamp: new Date().toUTCString(),
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string().required("Please enter your phone number."),
              companyname: Yup.string().required(
                "Please enter your Company Name."
              ),
              software: Yup.string().required(
                "Please select a software category."
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
                      name="username"
                      placeholder="Full name"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
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
                      type="number"
                      name="number"
                      placeholder="Phone number"
                    />
                    <ErrorMessage
                      name="number"
                      component="div"
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
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
                      type="email"
                      name="email"
                      placeholder="Bussiness Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    as={Col}
                  >
                    <Field
                      className={`form-control ${
                        formik.touched.companyname && formik.errors.companyname
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
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
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
                      as="select"
                      className={`form-select ${
                        formik.touched.software && formik.errors.software
                          ? "is-invalid"
                          : ""
                      }`}
                      name="software"
                    >
                      <option value="" disabled selected>
                        Type of Software Needed
                      </option>
                      {softwareData.map((software, index) => (
                        <option key={index} value={software.name}>
                          {software.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="software"
                      component="div"
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
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
                      className={`form-select ${
                        formik.touched.employee && formik.errors.employee
                          ? "is-invalid"
                          : ""
                      }`}
                      name="employee"
                    >
                      <option value="" disabled selected>
                        Employee Strength :
                      </option>
                      <option value="Under 20">Under 20</option>
                      <option value="20- 150">20- 150</option>
                      <option value="150- 500">150- 500</option>
                      <option value="500 - 1000">500 - 1000</option>
                      <option value="Over 1000">Over 1000</option>
                    </Field>
                    <ErrorMessage
                      name="employee"
                      component="div"
                      className={`invalid-feedback`}
                      style={{ color: "#f95738" }}
                    />
                  </Form.Group>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Field
                    as="textarea"
                    rows={3}
                    className={`form-control ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    name="message"
                    placeholder="Current Challenges or Pain Points :"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={`invalid-feedback`}
                    style={{ color: "#f95738" }}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="warning"
                    size="sm"
                    className="text-light"
                    type="submit"
                    onClick={formik.handleSubmit}
                  >
                    Request Now
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    className="text-light"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Stillconfusedform;
