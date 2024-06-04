import React, { useState, useEffect } from 'react';
import Smsads1 from "./smsads1";
import Smslist from "./smslist";
import Smsrelated from "./smsrelated";
import Smsreview from "./smsreview";
import Compare from "./compare";
import Smsrecommend from "./smsrecommend";
import Smstrend from "./smstrend";
import Cmpchat from "./cmpchat";
import Link from "next/link";
import { Container, Row, Col, Tab, Tabs, Form, Modal,Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import softwareData from "../home/software-data";
import styles from "./sms.module.scss";

const Index = () => {

  const [activeKey, setActiveKey] = useState('All Products');

  const [showCall, setShowCall] = useState(false);

  const handleCloseCall = () => setShowCall(false);

  useEffect(() => {
    let timer;
    if (activeKey === 'Compare') {
      timer = setTimeout(() => {
      
        setShowCall(true);
      }, 120000);
    } else {
      setShowCall(false);
    }
    return () => clearTimeout(timer);
  }, [activeKey]);


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


  return (
    <>
      <section className={`${styles["head-bg"]} `}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${styles["breadcr"]} `}>
                <ul>
                  <li>
                    {" "}
                    <Link href="/#">Home</Link>
                  </li>
                  &nbsp;
                  <span style={{ color: "#FC5185 " }}>
                    <MdKeyboardDoubleArrowRight />
                  </span>
                  &nbsp;
                  <li>
                    <Link href="">School Management System</Link>
                  </li>
                </ul>
              </div>
              <h3>Best School Management Software</h3>
              <p className="my-3">
                Best school management software includes Schoolcanvas,
                Vidhyalaya School, iGradePlus, ParentLocker, and PraxiSchool.
                Such school software automates and streamlines various
                administrative and academic tasks within educational
                institutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["home-cms"]} `}>
        {/* <Container>
          <Row>
            <Col lg={12}> */}
        <Tabs
          // defaultActiveKey="All Products"
          activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
          id="justify-tab-example"
          className={`${styles["cms-tab"]} shadow mb-3`}
          // justify
        >
          <Tab eventKey="All Products" title="All Products">
            {/* <Smsads1 styles={styles} /> */}
            <Smslist styles={styles} />
            <Container>
              <Row>
                <Col lg={12}>
                <h3 className="mt-5">Top 10 Software Comparision Table</h3>
                <Cmpchat styles={styles} />
                </Col>
              </Row>
            </Container>
            {/* <Smsrelated styles={styles} /> */}
            {/* <Review styles={styles}/> */}
            {/* <Compare styles={styles} /> */}
          </Tab>
          <Tab eventKey="Buyer's Guide" title="Buyer's Guide">
            <Smsrecommend styles={styles} />
            {/* <Compare styles={styles} /> */}
          </Tab>
          {/* <Tab eventKey="Trends" title="Trends">
            <Smstrend styles={styles} />
          </Tab> */}
          <Tab eventKey="Compare" title="Top 10 Software Comparision Table">
            <Cmpchat styles={styles} />
          </Tab>
        </Tabs>
        {/* </Col>
          </Row>
        </Container> */}

<Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showCall}
            onHide={handleCloseCall}
          >
            <Modal.Header>
              <div>
                <h3>Still Confused !</h3>
                <h5>Get Recommendation from an Expert</h5>
                <p>
                  Fill out the form below and get the Expert guide you to the perfect Software Solution tailored to your requirements
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
                  location: Yup.string().required("Please select a location."),
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
                          className={`${styles["valid-clr"]} invalid-feedback`}
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
                          className={`${styles["valid-clr"]} invalid-feedback`}
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
                          className={`${styles["valid-clr"]} invalid-feedback`}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        as={Col}
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
                          name="mySelect"
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
                          className={`${styles["valid-clr"]} invalid-feedback`}
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
                    </Row>
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
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="warning"
                        size="sm"
                        className="text-light"
                        onClick={formik.handleSubmit}
                      >
                        Request Now
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="text-light"
                        onClick={handleCloseCall}
                      >
                        Close
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
      </section>
    </>
  );
};

export default Index;
