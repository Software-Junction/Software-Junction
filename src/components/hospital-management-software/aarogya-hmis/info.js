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

  return (
    <>
      <Container>
        <Row>
          <Col lg={7}>
            <h3>What is Aarogya HMIS ?</h3>
            <p>
              Aarogya, the pinnacle of healthcare efficiency and precision.
              Aarogya stands as a fully integrated Hospital Management
              Information System (HMIS), catering to the diverse needs of
              mid-size to large hospitals, laboratories, and polyclinics. With
              its state-of-the-art features, Aarogya ensures seamless management
              of outpatient (OPD) and inpatient (IPD) processes, organized
              operation theater schedules, and streamlined insurance management
              through integrated TPA modules. From pathology and pharmacy
              software to comprehensive inventory control, Aarogya optimizes
              every facet of healthcare administration. Experience transparency
              in financial processes, coupled with robust payroll and HR
              management. With additional modules for Blood Bank and Radiology,
              Aarogya emerges as the ultimate solution for comprehensive
              healthcare management. Welcome to a new era of healthcare
              efficiency with Aarogya.
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
            <div className="d-flex justify-content-between info-pie-reward">
            <div className="pie-hieght shadow">
              <div className="d-flex justify-content-between">
              <p>Software Junction Score</p>
              <div className="info-icon" onClick={handleShow}><MdOutlineInfo /></div>
              </div>
            <Pie data={data} options={options} />
            </div>
            <div className="shadow ms-4 rewards">
              <div className="reward-img">
                <img src="/images/award-1.png" alt="rewards" className="img1"/>
                <img src="/images/award-2.png" alt="rewards" className="img2"/>
                <img src="/images/award-3.png" alt="rewards" className="img3"/>
              </div>
              <div className="reward-text">
                <h5>Software Junction awards and recognition</h5>
                <Button variant="primary" className="mt-4" onClick={handleShowReward}>Claim Awards</Button>
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
