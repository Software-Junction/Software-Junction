import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../vyapar-hotel/vya.module.scss";

const uspData = [
  {
    "title": "Comprehensive Clinic Management",
    "content": "Healcon Practice integrates various modules to cover all aspects of clinic management, including Electronic Medical Records (EMR), e-Prescription, Medical Treatment Planner, Lab Management, Inventory & Pharmacy Management, Medical Billing, Practice Management, and Appointment Scheduling."
  },
  {
    "title": "Reduced No Shows",
    "content": "The software includes automated patient reminders for scheduled appointments, reducing the likelihood of no-shows. This feature helps in optimizing clinic schedules and ensuring that patients attend their appointments."
  },
  {
    "title": "Streamlined Workflows",
    "content": "Operational workflows within the clinic are automated, allowing for a more streamlined front office. This automation minimizes manual tasks, enabling staff to concentrate on patient care rather than administrative duties."
  },
  {
    "title": "Paperless Practice",
    "content": "Healcon Practice encourages a transition to a paperless practice. This not only aligns with modern environmental considerations but also leads to cost savings associated with paper usage."
  },
  {
    "title": "Industry-Leading Security",
    "content": "Healcon Practice places a high priority on data security. All data transmissions between the user's browser and Healcon servers are encrypted using <span style=\"color:#FC5185 ;\"><strong>SHA-256</strong></span> encryption, ensuring protection against potential security threats. The software operates on HIPAA-compliant data centers, providing an additional layer of security for medical records."
  },
  {
    "title": "Global Trust",
    "content": "The software has gained the trust of thousands of doctors across <span style=\"color:#FC5185 ;\"><strong>33</strong></span> countries and is utilized in various medical specialties. This global recognition speaks to its adaptability and effectiveness in diverse healthcare settings."
  },
  {
    "title": "Enterprise Ready",
    "content": "The software is designed to scale seamlessly from single clinics to large chains. The central administration module allows for the efficient management and monitoring of multiple clinics, whether they are in the same city or different countries."
  },
  {
    "title": "Financial Reporting and Analytics",
    "content": "Healcon Practice provides powerful analytics tools that help clinics analyze their performance. Financial reporting features assist in keeping track of earnings, expenses, and profits, contributing to informed decision-making."
  },
  {
    "title": "Global Recognition",
    "content": "The software's presence in diverse countries signifies its adaptability to different healthcare systems. Recognition and adoption on a global scale highlight its effectiveness in various medical environments."
  },
  {
    "title": "Data Safety Assurance",
    "content": "Multiple geographical backups of data are performed throughout the day. This, coupled with adherence to the highest standards of data security, ensures that patient health records remain safe and accessible, even in the face of natural disasters."
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
            <h3 className="mb-3">USP of Vyapar</h3>
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
