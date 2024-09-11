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
            <h3>What is QuickBill ?</h3>
            <p>
              QuickBill is a business solution catering to small, midsize, and
              large enterprises, accommodating operations from single stores to
              expansive chains. Offering seamless integration, it empowers
              businesses with enhanced control over inventory, POS/trading
              operations, and financials. Known for its quick implementation and
              user-friendly interface, QuickBill is a comprehensive tool that
              supports growth plans effortlessly. Key features include easy
              installation, robust billing, inventory management, dynamic
              reporting, and streamlined GST compliance, making it the go-to
              solution for businesses at any stage. Elevate your business
              efficiency with QuickBill – the simple solution for your diverse
              operational needs.
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
