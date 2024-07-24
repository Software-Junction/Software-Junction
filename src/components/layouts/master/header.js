import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { isMobile } from "react-device-detect";
import softwareData from "../../home/software-data";
import { useRouter } from "next/router";
import PostAPi from "../../common/common";
import styles from "./header.module.scss";

const Header = () => {
  if (isMobile) {
    $(".nav-link").click(function () {
      // if(!$(this).hasClass("dropdown-toggle")){
      $("#navcolbtn").click();
      // }
    });
  }

  const handleFormSubmit = async (values, actions) => {
    const {username,email,number,employee,message,companyname,software} = values
    const body ={
      "fullName": username,
  "phoneNo": number,
  "email":email,
  "companyName": companyname,
  "softwareRequired": software,
  "employeeStrength": employee,
  "challenges": message,
  "flag": reffrence
    }
    // return console.log(body);
    actions.resetForm();
      actions.setSubmitting(false);
      alert("Form submitted successfully.");
    PostAPi('UserRegister',body).then((response)=>console.log(response))
    console.log("Form value",values);
  };

  const [showCall, setShowCall] = useState(false);

  const handleCloseCall = () => setShowCall(false);
  const handleShowCall = () => {setShowCall(true);setRefrence('CallBack')};

  const [reffrence, setRefrence] = useState("UserAuth");

  useEffect(() => {
    setTimeout(() => {
      if (reffrence == 'UserAuth') setShowCall(true);
    }, 5000);
  }, []);
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Software Junction</title>
        {/* //  <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6JW6YCP2XW"
        ></script>
      </Head>
      <header>
        <Navbar
          className={`${styles["nav-botm"]} bg-border-btm`}
          expand="lg"
          fixed="top"
          bg="light"
        >
          <Container fluid id="header11">
            <Link className="navbar-brand" href="/">
              <Image
                key=""
                height="150"
                width="200"
                objectFit="contain"
                src="/images/logonew.jpg"
                alt="logo_img"
              />
            </Link>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className={`${styles["nav-main"]} navbar-nav mr-auto w-100 justify-content-end clearfix`}
                navbarScroll
              >
                <Link className="nav-link pe-4" href="/">
                  Home
                </Link>

                {/* <Link className="nav-link pe-5" href="/about">
                  About
                </Link> */}

                {/* <NavDropdown className="pe-4" title="Categories">
                  <div className="category-list">
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/cms">
                        Campus Management Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/sms">
                        School Management Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/lms">
                        Library Management Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/medical-store">
                        Medical Store Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/accounting-software"
                      >
                        Accounting Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/fixed-asset-accounting-software"
                      >
                        Fixed Asset Accounting Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/hr-software">
                        HR Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/crm-software">
                        CRM Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/clinic-management">
                        Clinic Management
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/hotel-management">
                        Hotel Management
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/retailing">
                        Retailing
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/real-estate-software"
                      >
                        Real Estate Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/call-center-software"
                      >
                        Call Center Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/data-analysis-software"
                      >
                        Data Analysis Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/agriculture-software"
                      >
                        Agriculture Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/app-development-software"
                      >
                        App Development Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-link pe-5" href="/erp-software">
                        ERP Software
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        className="nav-link pe-5"
                        href="/construction-management-software"
                      >
                        Construction Management Software
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown> */}
                <NavDropdown title="Categories" className="pe-4">
                  <div className="category-list">
                    {softwareData.map((software, index) => (
                      <NavDropdown.Item key={index}>
                        <Link
                          className="nav-link pe-5"
                          href={software.pageLink}
                        >
                          {software.name}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </div>
                </NavDropdown>
                <Link className="nav-link pe-4" href="/contact">
                  Contact Us
                </Link>
                <Link className="nav-link pe-4" href="#get-listed">
                  Get Listed
                </Link>
                <Link
                  className={`${styles["txt-color"]} nav-link me-4 p-2 `}
                  href=""
                  onClick={handleShowCall}
                >
                  Request CallBack
                </Link>
                <Link
                  className={`${styles["txt-color1"]} nav-link p-2`}
                  href="/review"
                >
                  Write a review
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* id="navcolbtn" */}
          </Container>
        </Navbar>
        <div className="text-center">
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showCall}
            onHide={handleCloseCall}
          >
            <Modal.Header>
              <div style={{ width: "500px" }}>
                <h3>Discover the Perfect Software Solution</h3>
                <p>
                  Welcome to Software Junction, where we make finding the right
                  software for your needs a breeze! Fill out the form below, and
                  let us guide you to the perfect software solution tailored to
                  your requirements.
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
                  username: Yup.string().required(
                    "Please enter your full name."
                  ),
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
                          className={`${styles["valid-clr"]} invalid-feedback`}
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
        </div>
      </header>
    </>
  );
};

export default Header;
