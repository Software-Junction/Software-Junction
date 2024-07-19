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
import Trendingfreedemo from "../../common/trending-free-demo";

const hotelcont = ({reffer, styles }) => {
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
      badgeText: "40",
      imageSrc: "/images/vyaparhotel.png",
      imageAlt: "vyaparhotel",
      headingText: "Vyapar",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/kwhotel.png",
      imageAlt: "kwhotel",
      headingText: "KWHotel",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/stayflexi.png",
      imageAlt: "stayflexi",
      headingText: "Stayflexi",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/sysotel.png",
      imageAlt: "sysotel",
      headingText: "SYSOTEL.AI",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/djubo.png",
      imageAlt: "djubo",
      headingText: "DJUBO",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/ezee.png",
      imageAlt: "ezee",
      headingText: "eZee Absolute",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/hotelogix.png",
      imageAlt: "hotelogix",
      headingText: "Hotelogix",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/oraclehospitality.png",
      imageAlt: "oraclehospitality",
      headingText: "Oracle Hospitality",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/profitbooks.png",
      imageAlt: "profitbooks",
      headingText: "ProfitBooks",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/shawman.png",
      imageAlt: "shawman",
      headingText: "ShawMan PMS",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/maestro.png",
      imageAlt: "maestro",
      headingText: "Maestro PMS",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/axisrooms.png",
      imageAlt: "axisrooms",
      headingText: "AxisRooms Manager",
      pieData: [10, 10, 10, 10],
    },
    // Add more data objects as needed
  ];

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          boxWidth: 10,
          color: "#fff",
          font: {
            size: 10,
          },
          padding: 15, 
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

  return (
    <>
      <Container className={styles["hotel-container"]}>
        <Row>
          {cardData.map((data, index) => (
            <Col lg={3} className={`${styles["col-mob"]} mb-3`} key={index}>
              <div
                className={` ${styles["card-flip-inner"]} box border shadow rounded-3  p-4  bg-light`}
              >
                <div className={styles["badge"]} onClick={() => handleShow(data)}>
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
          <Trendingfreedemo
            show={show}
            handleClose={handleClose}
            selectedCard={selectedCard}
            options={options}
            handleFormSubmit={handleFormSubmit}
            styles={styles}
            reffer={reffer}
          />
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

export default hotelcont;
