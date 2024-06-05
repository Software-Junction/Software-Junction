import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../medisteer/steer.module.scss";

const uspData = [
  {
    "title": "Comprehensive and Customizable Solution",
    "content": "<strong>AdApps Suite :</strong> The product is part of the AdApps Suite, signifying a comprehensive set of tools designed for hospitals and clinics.<br/><strong>All-in-One Solution:</strong> It covers the entirety of hospital operations, suitable for various scales, and is customizable to meet specific needs."
  },
  {
    "title": "Expert-Designed for Healthcare",
    "content": "<strong>Professional Team :</strong> The product was developed by a team comprising both medical professionals (Doctors) and technical experts (Engineers).<br/><strong> Deep Understanding:</strong> This collaboration ensures a profound understanding of the challenges faced by healthcare practitioners, leading to a solution tailored to their needs."
  },
  {
    "title": "Seamless Data Integration and Flow",
    "content": "<strong>Improved Efficiency :</strong> The system enables a seamless flow of data across different departments, minimizing the time spent on each patient.<br/><strong> Enhanced Patient Care:</strong> This integration results in improved patient care, reduced wait times, and increased overall satisfaction."
  },
  {
    "title": "Online Consultation and Telehealth",
    "content": "<strong>Telehealth Integration :</strong> The system incorporates online consultation capabilities, especially valuable during pandemics or when distance is a limiting factor.<br/><strong> Legal Compliance:</strong> Adherence to Telemedicine Practice Guidelines ensures that online consultations are legally valid and secure."
  },
  {
    "title": "Specialized Modules for Different Departments",
    "content": "<strong>Diverse Functionality :</strong> Modules are designed to cater to specific departmental needs, such as Dialysis, Multi-ward Management, Medical Record Department, Theatre Management, Pharmacy, and more.<br/><strong> Tailored Solutions:</strong> Each module is customized to address the unique requirements of its corresponding department."
  },
  {
    "title": "End-to-End Healthcare Solution",
    "content": "<strong>Comprehensive Coverage :</strong> The system spans a wide array of functionalities, covering Finance, Ticketing, Ambulance & Transport, Ophthalmology, Physiotherapy, Blood Bank, Assets, Radiology, Multi-speciality Management, and more. <br/><strong>Integrated Approach:</strong> Integration of various services ensures a seamless and efficient healthcare management system."
  },
  {
    "title": "Comprehensive Support Services",
    "content": "<strong>HRM & Payroll :</strong> Inclusion of Human Resource Management and Payroll services to streamline staff-related processes. Administration: Features that aid in administrative tasks such as role definition, screen privileges, and dynamic message settings. <br/><strong>Insurance Claim:</strong> Integration with insurance claim processes for efficient handling of claims."
  },
  {
    "title": "Advanced Technology Integration",
    "content": "<strong>Modern Technologies :</strong> Integration with technologies like Bar Code Printer and Reader, PACS, Biometric, and ID Card Printer for enhanced functionality and efficiency.<br/><strong> Improved Processes:</strong> These integrations contribute to better tracking, maintenance, and streamlined operations within the hospital."
  },
  {
    "title": "User Engagement and Communication",
    "content": "<strong>Appointment Scheduling :</strong> Online appointment scheduling for patient convenience. Complaint Tracking: Facility for patients to register complaints and track their resolution.<br/><strong> Communication Integration :</strong> Integration with SMS and Email for effective communication between the system and users."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of MediSteer</h3>
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
