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

const erpcont = ({reffer, styles }) => {
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
      imageSrc: "/images/horizon.png",
      imageAlt: "Horizon",
      headingText: "Horizon ERP",
      url: "/horizon",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/virmati.jpg",
      imageAlt: "virmati",
      headingText: "Viramati's ERP-FAMS",
      url: "/virmati-erp-fams",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/oracle.png",
      imageAlt: "oracle",
      headingText: "Oracle Fusion Cloud",
      url: "/oracle-fusion",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/tally.png",
      imageAlt: "tally",
      headingText: "TallyPrime",
      url: "/tallyprime",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/vyaparlogo.png",
      imageAlt: "vyaparlogo",
      headingText: "Vyapar",
      url: "/vyapar",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/marg.png",
      imageAlt: "marg",
      headingText: "Marg ERP 9+Accounting",
      url: "/margerp",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },

    {
      badgeText: "40",
      imageSrc: "/images/bigsun.jpg",
      imageAlt: "bigsun",
      headingText: "BIGSUN",
      url: "/bigsun",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/orion.jpg",
      imageAlt: "orion",
      headingText: "Orion Software's ERP solution",
      url: "/orion-software",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/ramco.jpg",
      imageAlt: "ramco",
      headingText: "Ramco ERP Software",
      url: "/ramco-erp-software",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/tyasuite.png",
      imageAlt: "tyasuite",
      headingText: "TYASuite",
      url: "/tyasuite",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/crest.png",
      imageAlt: "crest",
      headingText: "CREST ERP",
      url: "/crest-erp",
      pieData: [10, 10, 10, 10], // Example data for pie chart
    },
    {
      badgeText: "40",
      imageSrc: "/images/erpnext.png",
      imageAlt: "erpnext",
      headingText: "ERPNext",
      url: "/erpnext",
      pieData: [10, 10, 10, 10], // Example data for pie chart
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
      <Container className={styles["erp-container"]}>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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
                        src="/images/horizon.png"
                        alt="horizon"
                        width="120"
                        height="10"
                        className={`${styles["box-img"]} border p-4 rounded-3 shadow`}
                      />
                    </div>
                    <h5 className="my-3">Horizon ERP</h5>
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

export default erpcont;
