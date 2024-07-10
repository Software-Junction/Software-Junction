import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Features from "./features";
import Usp from "./usp";
import Overview from "./overview";
import Alternative from "./alternative";
import Compare from "./compare";
import Price from "./price";
import Ss from "./ss";
import Overallrev from "./overallrev";
import {
  IoLogoWindows,
  IoLogoApple,
  IoSchool,
  IoStar,
  IoStarHalf,
  IoStarOutline,
} from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaGlobe, FaMobileAlt, FaPhone, FaBuilding } from "react-icons/fa";
import { FaFaceSmile, FaFaceFrown, FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineGTranslate } from "react-icons/md";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Details = ({ styles }) => {

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
      <section className={`${styles["navi"]}  shadow pb-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <Button
                variant="outline-dark"
                className={`${styles["nav-btn"]} mt-3`}
                href="#idinfo"
              >
                Product Information
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles["nav-btn"]} ms-4 mt-3`}
                href="#idfeature"
              >
                Features
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles["nav-btn"]} ms-4 mt-3`}
                href="#idusp"
              >
                USP
              </Button>
              <Button
                variant="outline-dark"
                className={`${styles["nav-btn"]} ms-4 mt-3`}
                href="#idreview"
              >
                Reviews
              </Button>
              {/* <Button
                variant="outline-dark"
                className={`${styles['nav-btn']} ms-4 mt-3`}
                href="#idoverview"
              >
                Overview
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles["info"]} my-5`} id="idinfo">
        <Container>
          <Row>
            <Col lg={6}>
              <h3>What is Schoolcanvas.com ?</h3>
              <p>
                School Canvas is an all-encompassing school management software
                that seamlessly automates diverse educational processes. From
                admission procedures to fee collection, academic analysis, and
                more, this platform provides a 360-degree solution. Boasting
                technical benefits such as customization through open APIs,
                user-friendly interfaces, and 24/7 support with a 'Zero Trust'
                data security model, School Canvas stands out as an end-to-end
                solution. With modules covering Admission Management, Transport
                & GPS, Learning Management, and more, it's a paperless,
                efficient tool for 550+ schools with over 13 years of experience
                and a 5-minute customer support guarantee.
              </p>
              {/* <div
                className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
              >
                <h5>Pricing Plans :</h5>
                <p>
                  <Link href="#idpricing">View Detailed pricing</Link>
                </p>
              </div> */}
              <div>
              <Button variant="primary" href="#idpricing">View Pricing</Button>
            </div>
            </Col>
            <Col lg={{span:4,offset:1}}>
              {/* <Image
                src="/images/schoolss.png"
                alt="ss"
                height="10"
                width="600"
                className={styles["info-img"]}
              /> */}
              <div
                className={`${styles["box-clr"]} box shadow  rounded-4 p-4`}
              >
                <div className="text-center text-light">
                  <h5>Need Help Choosing the Right Software ?</h5>
                  <p>
                    We understand that selecting the right software can be
                    challenging. Fill out the form below, and our team will
                    assist you in finding the best solution for your needs.
                  </p>
                </div>
                <div className="mt-3">
                  <Formik
                    initialValues={{
                      username: "",
                      location: "",
                      email: "",
                      number: "",
                      message: "",
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
                      employee: Yup.string().required(
                        "Please select employee strength."
                      ),
                      message: Yup.string().required("Please enter a message."),
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
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicnumber"
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
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section id="idss">
        <Ss styles={styles} />
      </section> */}

      <section className="my-5" id="idfeature">
        <Features styles={styles} />
      </section>

      <section className={styles["usp"]} id="idusp">
        <Usp />
      </section>

      <section className={`${styles["spec"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Schoolcanvas Specifications</h3>
            </Col>
            <Row>
              <Col lg={12}>
                <div
                  className={`${styles["soft-specs"]} border bg-light rounded-4 p-4`}
                >
                  <Row>
                    <Col lg={3} className="mb-3">
                      <h5>Supported Platforms :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <div className="d-flex">
                        <h5>
                          <span className={styles["icon-clr"]}>
                            <IoLogoWindows />
                          </span>{" "}
                          Windows
                        </h5>
                        <h5 className="ms-3">
                          <span className={styles["icon-clr"]}>
                            <IoLogoApple />
                          </span>{" "}
                          MacOs
                        </h5>
                        <h5 className="ms-3">
                          <span className={styles["icon-clr"]}>
                            <FaGlobe />
                          </span>{" "}
                          Web App
                        </h5>
                      </div>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Deployment :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5>Any</h5>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Subscription Plan :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5>Monthly, Yearly</h5>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Accessibility :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5>
                        <span className={styles["icon-clr"]}>
                          <FaMobileAlt />
                        </span>{" "}
                        Mobile Support
                      </h5>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Language Support :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5>
                        <span className={styles["icon-clr"]}>
                          <MdOutlineGTranslate />
                        </span>{" "}
                        English
                      </h5>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Business :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5>
                        <span className={styles["icon-clr"]}>
                          <IoSchool />
                        </span>{" "}
                        School/Colleges
                      </h5>
                    </Col>
                    <Col lg={3} className="mb-3">
                      <h5>Available Support :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <div className={`${styles['spec-sup-mob']} d-flex`}>
                        <h5 className="me-3">
                          <span className={styles["icon-clr"]}>
                            <MdEmail />
                          </span>{" "}
                          Email
                        </h5>
                        <h5 className="me-3">
                          <span className={styles["icon-clr"]}>
                            <FaPhone />
                          </span>{" "}
                          Phone
                        </h5>
                        <h5 className="me-3">
                          <span className={styles["icon-clr"]}>
                            <TfiHeadphoneAlt />
                          </span>{" "}
                          Live Support
                        </h5>
                        <h5 className="me-3">
                          <span className={styles["icon-clr"]}>
                            <GiTeacher />
                          </span>{" "}
                          Training
                        </h5>
                      </div>
                    </Col>

                    <Col lg={3} className="mb-3">
                      <h5>Company Details :</h5>
                    </Col>
                    <Col lg={9} className="mb-3">
                      <h5 className="mb-3">
                        <span className={styles["icon-clr"]}>
                          <FaBuilding />
                        </span>{" "}
                        Company Name : Flobiz
                      </h5>
                      <h5 className="mb-3">
                        <span className={styles["icon-clr"]}>
                          <BsBuildingsFill />
                        </span>{" "}
                        Headquarter : Bangalore
                      </h5>
                      <h5 className="mb-3">
                        <span className={styles["icon-clr"]}>
                          <FaGlobe />
                        </span>{" "}
                        Website :{" "}
                        <Button size="sm" variant="primary">
                          visit website
                        </Button>
                      </h5>
                      <h5 className="mb-3">
                        <span className={styles["icon-clr"]}>
                          <FaMapLocationDot />
                        </span>{" "}
                        Full Address :{" "}
                        <p className="mt-2">
                          #56, 2nd Floor, 12th Main Road, Sector 6, HSR Layout
                          Land Mark:, next to Rasaganga Veg Resturant, HSR BDA,
                          Bengaluru, Karnataka 560102
                        </p>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      <section className={`${styles["pricing"]} mt-5`} id="idpricing">
        <Price />
      </section>

      {/* <section className={`${styles["review"]} mt-5`} id="idreview">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="mb-4">Schoolcanvas User Reviews</h3>
            </Col>
            <Overallrev styles={styles} />
          </Row>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["row-mob"]} box bg-light  border  rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3}>
                    <Image
                      src="/images/user.png"
                      alt="user"
                      width="60"
                      height="10"
                    />
                    <h5 className="my-3">Kristen</h5>
                    <p>
                      Education Management, 201-500 employees Used daily for
                      more than 2 years
                    </p>
                    <p className="my-3">Reviewed August 2023</p>
                    <h5>User Interface (UI) and User Experience (UX)</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Value for Money</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </span>
                      4.5
                    </p>
                    <h5>Features and Functionality</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      4
                    </p>
                    <h5>Customer Support</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Performance and Speed</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Integration Capabilities</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Customization Options</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Reporting and Analytics</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                  </Col>
                  <Col lg={9}>
                    <h5>Easy To Use</h5>
                    <p>
                      Schoolcanvas made my life easier as a busy teacher with a
                      split job of teaching Spanish and EL. I could easily see
                      my Spanish students' progress and didn't have to worry
                      about trying to add scores to PowerSchool since it
                      automatically synced. I could also see every class my EL
                      students had and could see what they needed to complete or
                      needed extra support with.
                    </p>
                    <h5 className="mt-4">
                      Pros{" "}
                      <span style={{ color: "#f95738 " }}>
                        <FaFaceSmile />
                      </span>
                    </h5>
                    <p>
                      I loved being able to assign and see student progress. We
                      also had the option of deciding what needed to be teacher
                      graded. My favorite feature of all was that it
                      automatically integrated and synced with PowerSchool.
                    </p>
                    <h5>
                      Cons{" "}
                      <span style={{ color: "#f95738 " }}>
                        <FaFaceFrown />
                      </span>
                    </h5>
                    <p>
                      It took some time to get used to adding standards and just
                      using it, but after that I don't feel like there was
                      anything negative.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div
                className={`${styles["row-mob"]} mt-4 box  bg-light border  rounded-4 p-4`}
              >
                <Row>
                  <Col lg={3}>
                    <Image
                      src="/images/user.png"
                      alt="user"
                      width="60"
                      height="10"
                    />
                    <h5 className="my-3">Kristen</h5>
                    <p>
                      Education Management, 201-500 employees Used daily for
                      more than 2 years
                    </p>
                    <p className="my-3">Reviewed August 2023</p>
                    <h5>User Interface (UI) and User Experience (UX)</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Value for Money</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </span>
                      4.5
                    </p>
                    <h5>Features and Functionality</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarOutline />
                      </span>
                      4
                    </p>
                    <h5>Customer Support</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Performance and Speed</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Integration Capabilities</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Customization Options</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                    <h5>Reporting and Analytics</h5>
                    <p className="mt-3">
                      <span className="text-warning">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </span>
                      5
                    </p>
                  </Col>
                  <Col lg={9}>
                    <h5>Easy To Use</h5>
                    <p>
                      Schoolcanvas made my life easier as a busy teacher with a
                      split job of teaching Spanish and EL. I could easily see
                      my Spanish students' progress and didn't have to worry
                      about trying to add scores to PowerSchool since it
                      automatically synced. I could also see every class my EL
                      students had and could see what they needed to complete or
                      needed extra support with.
                    </p>
                    <h5 className="mt-4">
                      Pros{" "}
                      <span style={{ color: "#f95738 " }}>
                        <FaFaceSmile />
                      </span>
                    </h5>
                    <p>
                      I loved being able to assign and see student progress. We
                      also had the option of deciding what needed to be teacher
                      graded. My favorite feature of all was that it
                      automatically integrated and synced with PowerSchool.
                    </p>
                    <h5>
                      Cons{" "}
                      <span style={{ color: "#f95738 " }}>
                        <FaFaceFrown />
                      </span>
                    </h5>
                    <p>
                      It took some time to get used to adding standards and just
                      using it, but after that I don't feel like there was
                      anything negative.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section id="idoverview">
        <Overview styles={styles} />
      </section> */}
      
      {/* <section id="idalternative">
        <Alternative styles={styles} />
      </section>
      <section id="idcompare">
        <Compare styles={styles} />
      </section> */}
      {/* <section className={`${styles["faq"]} mt-5`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Schoolcanvas FAQ</h3>
            </Col>
            <Col lg={6}>
              <div
                className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
              >
                <h5>What are the top 5 features for Schoolcanvas.com ?</h5>
                <p className="mt-3">
                  <strong>The top 5 features for Schoolcanvas.com are :</strong>
                </p>
                <ul>
                  <li>Academics</li>
                  <li>Admission</li>
                  <li>Attendance management</li>
                  <li>Database backup/restore (Management)</li>
                  <li>Event Management</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Details;
