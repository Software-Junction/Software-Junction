import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import PostAPi from "../common/common";
import styles from './common.module.scss';

const NeedHelp = () => {

  const params = useRouter()

  const handleFormSubmit = async (values, actions) => {
    const {username,email,number,employee} = values
    const body ={
      "fullName": username,
      "phoneNo": number,
      "email": email,
      "softwareCategory": params.pathname.split('/')[1],
      "employeeStrength": employee
  }
    // return console.log(body);
    
    PostAPi('softCategory',body).then((response)=>console.log(response))
    // console.log("Form value",values);
  };

  return (
    <>
      <div className={`${styles["box-clr"]} box shadow mt-4 rounded-4 p-4`}>
        <div className="text-center text-light">
          <h5>Need Help Choosing the Right Software ?</h5>
          <p>
            We understand that selecting the right software can be challenging.
            Fill out the form below, and our team will assist you in finding the
            best solution for your needs.
          </p>
        </div>
        <div className="mt-3">
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
                <Form.Group className="mb-3" controlId="formBasicnumber">
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
    </>
  );
};

export default NeedHelp;
