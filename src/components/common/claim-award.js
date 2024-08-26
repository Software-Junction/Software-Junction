import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Claimaward = ({ show, handleClose }) => {

    const handleFormSubmit = async (values, actions) => {
        //     const {username,email,number,employee} = values
        //     const body ={
        //       "fullName": username,
        //       "phoneNo": number,
        //       "email": email,
        //       "softwareCategory": params.pathname.split('/')[1],
        //       "employeeStrength": employee
        //   }
        //     // return console.log(body);
            console.log("Form value",values);
        //     actions.resetForm();
        //       actions.setSubmitting(false);
        //       alert("Form submitted successfully.");
            
        //     PostAPi('softCategory',body).then((response)=>console.log(response))
            
          };

  return (
    <>
    <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
        <h5>
            Claim Your Award and Showcase Your Success!
        </h5>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              companyname:"",
              username: "",
              email: "",
              number: "",
              employee: "",
              website:"",
              postTimestamp: new Date().toUTCString(),
            }}
            validationSchema={Yup.object().shape({
                companyname: Yup.string().required(
                    "Please enter your Company Name."
                  ),
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string()
              .required("Please enter your phone number.")
              .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
              employee: Yup.string().required(
                "Please select employee strength."
              ),
              website: Yup.string().required("Please enter your Company Website"),
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
                    style={{color:"#f95738"}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
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
                    style={{color:"#f95738"}}
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
                    maxLength="10"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className={`invalid-feedback`}
                    style={{color:"#f95738"}}
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
                    className={`invalid-feedback`}
                    style={{color:"#f95738"}}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Field
                    className={`form-control ${
                      formik.touched.website && formik.errors.website
                        ? "is-invalid"
                        : ""
                    }`}
                    type="text"
                    name="website"
                    placeholder="Company Website "
                  />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className={`invalid-feedback`}
                    style={{color:"#f95738"}}
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
                    style={{color:"#f95738"}}
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
      </Modal>
    </>
  )
}

export default Claimaward
