import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import softwareList from "../software_list";
import styles from "./review.module.scss";

const Index = () => {
  const handleFormSubmit = async (values, actions) => {
    console.log("Submitting form with values:", values);
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

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() !== "") {
      const filteredResults = softwareList.software_list.filter((software) =>
        software.toLowerCase().startsWith(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleSoftwareSelect = (software, setFieldValue) => {
    setSearchQuery(software);
    setFieldValue("software", software);
    setSearchResults([]);
  };

  return (
    <>
      <section className={`${styles["review-page"]} mb-4`}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>
                "Every review is a vote for better software. Your voice matters,
                and your feedback drives positive change in the tech world."
              </h3>
              <h5 className="my-4">
                Welcome to our software review page! Here, we believe that no
                one understands the true value and performance of software
                better than its users. Your first-hand experience with different
                software solutions and their customer service is invaluable. By
                sharing your honest reviews, you not only help fellow users make
                informed decisions but also contribute to the improvement of
                these products. Your insights will guide others in choosing the
                right software that meets their needs. Join us in building a
                community of informed and empowered software users!
              </h5>
            </Col>
            <Col lg={4}>
              <div className={`${styles["write-review"]} box rounded-3 p-3`}>
                <h3 className="mb-4 text-center">How to Write a Review</h3>
                <ol>
                  <li>
                    <strong>Choose a Software:</strong> Select the software
                    you've used and want to review from our comprehensive list
                  </li>
                  <hr />
                  <li>
                    <strong>Rate and Share:</strong> Rate the software based on
                    your experience and share your thoughts. Be specific about
                    what you liked, what could be improved, and any tips for
                    other users
                  </li>
                  <hr />
                  <li>
                    <strong>Make it Personal:</strong> Personalize your review
                    with details about how the software has impacted your work
                    or business. Your unique perspective adds depth to the
                    review.
                  </li>
                </ol>
              </div>
            </Col>
            <Col lg={8}>
              <div className="box shadow rounded-3 p-4">
                <Formik
                  initialValues={{
                    software:"",
                    username: "",
                    email: "",
                    title: "",
                    usage: "",
                    message: "",
                    rating1: 0,
                    rating2: 0,
                    rating3: 0,
                    rating4: 0,
                    rating5: 0,
                    rating6: 0,
                    rating7: 0,
                    rating8: 0,
                    selectedSoftware: searchQuery,
                    postTimestamp: new Date().toUTCString(),
                  }}
                  validationSchema={Yup.object().shape({
                    software: Yup.string().required(
                      "Please select a software."
                    ),
                    username: Yup.string().required(
                      "Please enter your full name."
                    ),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Please enter your email address."),
                    title: Yup.string().required(
                      "Please enter your Job Title."
                    ),
                    usage: Yup.string().required("Please select Duration."),
                    message: Yup.string().required("Please write a review."),
                    rating1: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating2: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating3: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating4: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating5: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating6: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating7: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
                    rating8: Yup.number()
                      .min(1, "Please give a rating.")
                      .required("Please give a rating."),
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
                              formik.touched.software && formik.errors.software
                                ? "is-invalid"
                                : ""
                            }`}
                            type="text"
                            name="software"
                            placeholder="Search for Software . . ."
                            value={searchQuery}
                          onChange={handleSearchChange}
                          />
                        {/* <Form.Control
                          placeholder="Search for Products"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          className=""
                          value={searchQuery}
                          onChange={handleSearchChange}
                        /> */}
                        {searchQuery && searchResults.length > 0 && (
                          <div className={`${styles['search-box']} box shadow p-4 rounded-3`}>
                            {searchResults.map((software, index) => (
                              <div
                                key={index}
                                className={`${styles["search-txt-clr"]} mb-3`}
                                onClick={() => handleSoftwareSelect(software, formik.setFieldValue)}
                              >
                                {software}
                              </div>
                            ))}
                          </div>
                        )}
                        <ErrorMessage
                            name="software"
                            component="div"
                            className={`${styles["valid-clr"]} invalid-feedback`}
                          />
                      </Form.Group>
                      <Field
                        type="hidden"
                        name="selectedSoftware"
                        value={searchQuery}
                      />
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
                            placeholder="Full Name"
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
                      </Row>

                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Field
                            className={`form-control ${
                              formik.touched.title && formik.errors.title
                                ? "is-invalid"
                                : ""
                            }`}
                            type="text"
                            name="title"
                            placeholder="Job Title"
                          />
                          <ErrorMessage
                            name="title"
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
                            className={`form-select py-2 ${
                              formik.touched.usage && formik.errors.usage
                                ? "is-invalid"
                                : ""
                            }`}
                            name="usage"
                          >
                            <option value="" disabled selected>
                              Usage Duration :
                            </option>
                            <option value="option1">Free Trail</option>
                            <option value="option2">Less then 6 months</option>
                            <option value="option3">6-12 months</option>
                            <option value="option4">1-2 years</option>
                            <option value="option5">2+ years</option>
                          </Field>
                          <ErrorMessage
                            name="usage"
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
                          <Form.Label>
                            User Interface (UI) and User Experience (UX)
                          </Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating1}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating1 && formik.errors.rating1 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating1}
                            </div>
                          ) : null}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Features and Functionality</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating2}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating2 && formik.errors.rating2 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating2}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Performance and Speed</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating3}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating3 && formik.errors.rating3 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating3}
                            </div>
                          ) : null}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Customization Options</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating4}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating4 && formik.errors.rating4 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating4}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Value for Money</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating5}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating5 && formik.errors.rating5 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating5}
                            </div>
                          ) : null}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Customer Support</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating6}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating6 && formik.errors.rating6 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating6}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Integration Capabilities</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating7}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating7 && formik.errors.rating7 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating7}
                            </div>
                          ) : null}
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                          as={Col}
                        >
                          <Form.Label>Reporting and Analytics</Form.Label>
                          <ReactStars
                            count={5}
                            size={30}
                            activeColor="#ffd700"
                            value={formik.values.rating8}
                            onChange={(newValue) => {
                              formik.setFieldValue("rating", newValue);
                            }}
                          />
                          {formik.touched.rating8 && formik.errors.rating8 ? (
                            <div
                              className={`${styles["valid-clr"]} invalid-feedback`}
                            >
                              {formik.errors.rating8}
                            </div>
                          ) : null}
                        </Form.Group>
                      </Row>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Your Review...."
                        />
                      </Form.Group>

                      <Button
                        variant="warning"
                        // size="sm"
                        className="text-light w-100"
                        onClick={formik.handleSubmit}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
