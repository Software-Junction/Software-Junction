import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Pie } from 'react-chartjs-2';
import { useRouter } from "next/router";
import PostAPi from "../common/common";

const Trendingfreedemo = ({reffer, show, handleClose, selectedCard, options, handleFormSubmit, styles }) => {

    const getPieData = (card) => ({
        labels: [
          "Reviews Score",
          "Product page\nScore",
          "Content Score",
          "Market presence\nScore",
        ],
        datasets: [
          {
            label: "Scores",
            data: card ? card.pieData : [0, 0, 0, 0],
            backgroundColor: ["#30c771", "#ffae00", "#d94244", "#f95738"],
            borderColor: ["#30c771", "#ffae00", "#d94244", "#f95738"],
            borderWidth: 1,
          },
        ],
      });
    
      const handleFormSubmit2 = async (values, actions) => {
        const {username,email,number,employee,headingText} = values
        const body ={
          "fullName": username,
  "phoneNo": number,
  "email": email,
  "softwareCategory": reffer,
  "softwareName":headingText,
  "employeeStrength":employee,
        }
        // return console.log(body);
        actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
        // console.log("Form value",values);

        PostAPi('trendingDemo',body).then((response)=>console.log(response))
      };

  return (
    <>
     <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Software Score</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles["body-content"]} d-flex justify-content-between`}>
        <div className={styles["pie-height"]}>
          <Pie data={getPieData(selectedCard)} options={options} />
        </div>
        <div className="box shadow rounded-3 w-100 bg-light p-3">
          <h3 className="text-dark ">Get Free Demo</h3>
          <Formik
            initialValues={{
              username: "",
              email: "",
              number: "",
              employee: "",
              postTimestamp: new Date().toUTCString(),
              headingText: selectedCard ? selectedCard.headingText : "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string().required("Please enter your phone number."),
              employee: Yup.string().required("Please select employee strength."),
            })}
            onSubmit={handleFormSubmit2}
          >
            {(formik) => (
              <Form>
                <input
                  type="hidden"
                  name="headingText"
                  value={formik.values.headingText}
                />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Field
                    className={`form-control ${formik.touched.username && formik.errors.username ? "is-invalid" : ""}`}
                    type="text"
                    name="username"
                    placeholder="Full name"
                  />
                  <ErrorMessage name="username" component="div" className={`${styles["valid-clr"]} invalid-feedback`} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Field
                    className={`form-control ${formik.touched.number && formik.errors.number ? "is-invalid" : ""}`}
                    type="number"
                    name="number"
                    placeholder="Phone number"
                  />
                  <ErrorMessage name="number" component="div" className={`${styles["valid-clr"]} invalid-feedback`} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Field
                    className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                    type="email"
                    name="email"
                    placeholder="Business Email address"
                  />
                  <ErrorMessage name="email" component="div" className={`${styles["valid-clr"]} invalid-feedback`} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Field
                    as="select"
                    id="mySelect"
                    className={`form-select ${formik.touched.employee && formik.errors.employee ? "is-invalid" : ""}`}
                    name="employee"
                  >
                    <option value="" disabled selected>Employee Strength:</option>
                    <option value="Under 20">Under 20</option>
                    <option value="20-150">20-150</option>
                    <option value="150-500">150-500</option>
                    <option value="500-1000">500-1000</option>
                    <option value="Over 1000">Over 1000</option>
                  </Field>
                  <ErrorMessage name="employee" component="div" className={`${styles["valid-clr"]} invalid-feedback`} />
                </Form.Group>
                <Button variant="warning" size="sm" className="text-light" onClick={formik.handleSubmit}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal> 
    </>
  )
}

export default Trendingfreedemo
