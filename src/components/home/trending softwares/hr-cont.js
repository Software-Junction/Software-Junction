import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import Trendingfreedemo from "../../common/trending-free-demo";

const hrcont = ({reffer, styles }) => {
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
      imageSrc: "/images/hrone.png",
      imageAlt: "hrone",
      headingText: "HROne",
      url: "/hrone",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/spinehr.png",
      imageAlt: "spinehr",
      headingText: "Spine HRMS",
      url: "/spine-hrms",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/qandle.png",
      imageAlt: "qandle",
      headingText: "Qandle",
      url: "/qandle",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/keka.png",
      imageAlt: "keka",
      headingText: "Keka",
      url: "/keka",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/facto.png",
      imageAlt: "facto",
      headingText: "factoHR",
      url: "/factohr",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/wallet.png",
      imageAlt: "wallet",
      headingText: "WalletHR",
      url: "/wallethr",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/oraclehcm.png",
      imageAlt: "oraclehcm",
      headingText: "Oracle Fusion HCM",
      url: "/oracle-fusion-hcm",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/sbshr.jpg",
      imageAlt: "sbshr",
      headingText: "SBS HR",
      url: "/sbshr",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/farsight.jpg",
      imageAlt: "farsight",
      headingText: "Farsight",
      url: "/farsight",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/darwin.jpg",
      imageAlt: "darwin",
      headingText: "Darwinbox",
      url: "/darwinbox",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/greythr.png",
      imageAlt: "greythr",
      headingText: "greytHR",
      url: "/greythr",
      pieData: [10, 10, 10, 10],
    },
    {
      badgeText: "40",
      imageSrc: "/images/pocket.jpg",
      imageAlt: "pocket",
      headingText: "Pocket HRMS",
      url: "/pocket-hrms",
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
      <Container className={styles["hr-container"]}>
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
                <Link href={data.url}>
                  <Image
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    width="120"
                    height="10"
                    className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                  />
                  </Link>
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
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
                    <Button size="sm" variant="primary" className="w-100">
                      Free Demo
                    </Button>
                  </div>
                </Col>

                <Col lg={3} className={`${styles["col-mob"]} mb-3`}>
                  <div className="box border shadow rounded-3 p-4 text-center bg-light">
                  <div className={styles['badge']}>
                      <p className={`${styles['badge-cont']} badge rounded-pill`}>10</p>
                    </div>
                    <div>
                      <Image
                        src="/images/hrone.png"
                        alt="hrone"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">HROne</h5>
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

export default hrcont;
