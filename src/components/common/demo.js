import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import PostAPi from "../common/common";


const Demo = ({reffer, show, handleClose}) => {
  const params = useRouter() 

  const handleFormSubmit = async (values, actions) => {
    const {username,email,number,date,employee} = values
    const body ={
      "fullName": username,
      "phoneNo": number,
      "email": email,
      "softwareCategory": params.pathname.split('/')[1],
      "softwareName": reffer,
      "employeeStrength":employee,
      "preferedDemoDate" : date
    
    }
    // return console.log(body);
    
    PostAPi('freeDemo',body).then((response)=>console.log(response))
    // console.log("Form value",values);
  };

  const [isDatePickerFocused, setDatePickerFocused] = useState(false);

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <h3>Request For Free Demo </h3>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: "",
              email: "",
              number: "",
              date: "",
              employee: "",
              postTimestamp: new Date().toUTCString(),
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Please enter your full name."),
              email: Yup.string()
                .email("Invalid email address")
                .required("Please enter your email address."),
              number: Yup.string().required("Please enter your phone number."),
              date: Yup.string().required("Please select date."),
              employee: Yup.string().required(
                "Please select employee strength."
              ),
            })}
            onSubmit={handleFormSubmit}
          >
            {(formik) => (
              <Form method="post">
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
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
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
    </>
  );
};

export default Demo;
