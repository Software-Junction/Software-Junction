import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { MdOutlineInfo } from "react-icons/md";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import Needhelp from '../../common/needHelp';
import ScoringModal from '../../common/scoring-modal';
import Rewards from '../../common/claim-award';

const Info = ({ styles }) => {

  const [show, setShow] = useState(false);
  const [showReward, setShowReward] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseReward = () => setShowReward(false);
  const handleShowReward = () => setShowReward(true);

  const data = {
    labels: [
      "Reviews Score",
      "Product page\nScore",
      "Content Score",
      "Market presence\nScore",
    ],
    datasets: [
      {
        label: "Scores",
        data: [25, 25, 25, 25],
        backgroundColor: ["#30c771", "#ffae00", "#d94244", "#FC5185"],
        borderColor: ["#30c771", "#ffae00", "#d94244", "#FC5185"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // position: "bottom",
        // align: "center", 
        // labels: {
        //   boxWidth: 10,
        //   color: "#000",
        //   font:{
        //     size: 12,
        //   },
        //   padding: 15,
        // },

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
      <Container>
        <Row>
          <Col lg={7}>
            <h3>What is LOGIC ERP ?</h3>
            <p>
              LOGIC ERP is a Enterprise Resource Planning (ERP) and Point of
              Sale (POS) software designed to streamline retail store
              management. With robust features encompassing billing, inventory
              management, CRM, loyalty programs, schemes, discounts, e-commerce,
              accounts, and GST filing, it caters to diverse industries
              including Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle
              & Fashion, Electrical & Electronics, Food & Beverages, Wellness &
              Salon, and Hardware. The software supports various retail formats
              such as COCO, COFO, SIS, LFS, FOFO, and FOCO, offering a flexible
              organizational structure with multiple operating units, retail
              outlets, warehouses, and supply points. It also facilitates
              dynamic pricing, rewards, customer loyalty programs, and
              omnichannel retailing, making it a versatile solution for modern
              businesses.
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
            <div className={`${styles['info-pie-reward']} d-flex justify-content-between`}>
            <div className={`${styles['pie-hieght']} shadow`}>
              <div className="d-flex justify-content-between">
              <p>Techtraverse Score</p>
              <div className={styles['info-icon']} onClick={handleShow}><MdOutlineInfo /></div>
              </div>
            <Pie data={data} options={options} />
            </div>
            <div className={`${styles['rewards']} shadow ms-4`}>
              <div className={styles['reward-img']}>
                <img src="/images/award-1.png" alt="rewards" className={styles['img1']}/>
                <img src="/images/award-2.png" alt="rewards" className={styles['img2']}/>
                <img src="/images/award-3.png" alt="rewards" className={styles['img3']}/>
              </div>
              <div className={styles['reward-text']}>
                <h5>Techtraverse awards and recognition</h5>
                <p>Techtraverse Awards and Recognition section highlights the prestigious accolades and industry certifications the software has received, showcasing its excellence and credibility.</p>
                <Button variant="secondary" size="sm" className="" onClick={handleShowReward}>Claim Awards</Button>
              </div>
            </div>
            </div>
            <ScoringModal show={show} handleClose={handleClose} />
            <Rewards show={showReward} handleClose={handleCloseReward} />
          </Col>
       <Col lg={{ span: 4, offset: 1 }}>
            <Needhelp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
