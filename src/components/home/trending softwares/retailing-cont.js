import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const retailingcont = ({ styles }) => {
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

  const cardData = [
    {
      badgeText: "10",
      imageSrc: "/images/vyaparlogo.png",
      imageAlt: "vyaparlogo",
      headingText: "Vyapar",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/xpert.png",
      imageAlt: "xpert",
      headingText: "MMI Softwares Pvt. Ltd",
      pieData: [25, 25, 25, 25], // Example data for pie chart
    },
    {
      badgeText: "10",
      imageSrc: "/images/oracle.png",
      imageAlt: "oracle",
      headingText: "Oracle Fusion Cloud",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/mybillbook.png",
      imageAlt: "mybillbook",
      headingText: "My Bill Book",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/oraclenet.png",
      imageAlt: "oraclenet",
      headingText: "Oracle NetSuite ERP",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/logic.png",
      imageAlt: "logic",
      headingText: "LOGIC ERP",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/busy.jpg",
      imageAlt: "busy",
      headingText: "Busy Accounting",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/horizon.png",
      imageAlt: "horizon",
      headingText: "Horizon ERP",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/captainbiz.png",
      imageAlt: "captainbiz",
      headingText: "CaptainBiz",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/quickbill.jpg",
      imageAlt: "quickbill",
      headingText: "QuickBill",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/marg.png",
      imageAlt: "marg",
      headingText: "Marg Retail Software",
      pieData: [25, 30, 20, 25],
    },
    {
      badgeText: "10",
      imageSrc: "/images/fusion-retail.jpg",
      imageAlt: "fusion-retail",
      headingText: "FusionRetail",
      pieData: [25, 30, 20, 25],
    },
    // Add more data objects as needed
  ];

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          color: "#fff",
          font: {
            size: 10,
          },
        },
      },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n ${value}%`;
        },
        font: {
          weight: "bold",
          size: 10,
        },
        textAlign: "center",
        anchor: "center",
      },
    },
  };

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setSelectedCard(card);
    setShow(true);
  };

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

  return (
    <>
      <Container className={styles["retailing-container"]}>
        <Row>
          {cardData.map((data, index) => (
            <Col lg={3} className={`${styles["col-mob"]} mb-3`} key={index}>
              <div
                className={` ${styles["card-flip-inner"]} box border shadow rounded-3  p-4  bg-light`}
              >
                <div className={styles["badge"]}>
                  <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                    {data.badgeText}
                  </p>
                </div>
                <div className={styles['height']}>
                  <Image
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    width="100"
                    height="10"
                    className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                  />
                
                <h5 className="my-3">{data.headingText}</h5>
                </div>
                <Button
                  size="sm"
                  variant="primary"
                  className="w-100"
                  onClick={() => handleShow(data)}
                >
                  Free Demo
                </Button>
              </div>
            </Col>
          ))}
          <div className="pie-modal">
            <Modal show={show} onHide={handleClose} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>Software Score</Modal.Title>
              </Modal.Header>
              <Modal.Body
                className={`${styles["body-content"]} d-flex justify-content-between`}
              >
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
                      username: Yup.string().required(
                        "Please enter your full name."
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
                    })}
                    onSubmit={handleFormSubmit}
                  >
                    {(formik) => (
                      <Form>
                        <input
                          type="hidden"
                          name="headingText"
                          value={formik.values.headingText}
                        />
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
                            className={`${styles["valid-clr"]} invalid-feedback`}
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
                            className={`${styles["valid-clr"]} invalid-feedback`}
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
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          {/* <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col>

          <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
            <div className="box border shadow rounded-3 p-4 text-center bg-light">
              <div className={styles["badge"]}>
                <p className={`${styles["badge-cont"]} badge rounded-pill`}>
                  10
                </p>
              </div>
              <div>
                <Image
                  src="/images/vyaparlogo.png"
                  alt="vyaparlogo"
                  width="120"
                  height="10"
                  className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                />
              </div>
              <h5 className="my-3">Vyapar</h5>
              <Button size="sm" variant="primary" className="w-100">
                Free Demo
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default retailingcont;
