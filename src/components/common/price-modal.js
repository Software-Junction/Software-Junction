import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Pricemodal = ({ show, handleClose}) => {
  const handleFormSubmit = async (values, actions) => {
    // try {
    //   await axios.post(
    //     "https://software-bazaar-default-rtdb.firebaseio.com/leadform.json",
    //     values
    //   );
    //   actions.resetForm();
    //   actions.setSubmitting(false);
    //   alert("Form submitted successfully.");
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   actions.setSubmitting(false);
    // }
    console.log("Form value", values);
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
          <h3>Request For Price</h3>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: "",
              email: "",
              number: "",
              employee: "",
              postTimestamp: new Date().toUTCString(),
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string().required("Please enter your phone number."),
              employee: Yup.string().required(
                "Please select employee strength."
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
                    <option value="option1">Under 20</option>
                    <option value="option2">20- 150</option>
                    <option value="option3">150- 500</option>
                    <option value="option4">500 - 1000</option>
                    <option value="option5">Over 1000</option>
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
                  Get Pricing
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pricemodal;
