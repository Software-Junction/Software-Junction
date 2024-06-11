import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../karexperts-hims/kar.module.scss";

const uspData = [
  {
    "title": "All-in-One Solution",
    "content": "KareXpert's HIMS provides a complete suite of tools, including Advanced HIMS, EMR/EHR, Virtual Care, LIMS, RIS/PACS, Pharmacy, Connected Ambulance, and Home Care. This all-in-one approach ensures that all aspects of hospital management are integrated into a single platform."
  },
  {
    "title": "Digital Presence and Branding",
    "content": "Establish a strong digital presence across channels with mobile and web interfaces. The software includes white-labeled mobile apps, allowing hospitals to enhance their brand image and engage with patients through personalized applications."
  },
  {
    "title": "Patient-Centric Features",
    "content": "From IPD and OPD management to Patient Daycare, Operation Theater (OT) Management, and Emergency Response Care, the system focuses on improving patient care, experience, and satisfaction."
  },
  {
    "title": "Operations Management",
    "content": "The software aids in optimizing hospital operations with features such as Facility Management, Housekeeping, and CSSD inventory management, contributing to improved efficiency and productivity."
  },
  {
    "title": "Online Hospital Platform",
    "content": "Offer an all-in-one online platform for patients, doctors, and enterprise clients. Features like Patient Portal, Corporate Admin Portal, and Doctor Portal facilitate seamless communication and interaction."
  },
  {
    "title": "Patient Feedback Management",
    "content": "Capture and analyze patient feedback with a dedicated system, allowing hospitals to continuously monitor satisfaction levels and identify areas for improvement in service quality."
  },
  {
    "title": "Healthcare Portfolio",
    "content": "KareXpert's extensive healthcare portfolio goes beyond HIMS, encompassing AI & Data Analytics, Virtual Care, Pharmacy, Connected Ambulance, and more, providing a holistic approach to healthcare management."
  },
  {
    "title": "Global Reach and Recognition",
    "content": "With a corporate office in Gurugram, India, KareXpert caters to regions worldwide, including Southeast Asia, the Middle East, Africa, Europe, the US, and North America."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of KareXpert's Hospital Information Management System</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
