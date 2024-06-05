import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ehospital/ehos.module.scss";

const uspData = [
  {
    "title": "Integration with Ayushman Bharath Digital Mission (ABDM)",
    "content": "The software is seamlessly integrated with the ABDM ecosystem, showcasing its commitment to and alignment with India's broader digital health initiative."
  },
  {
    "title": "Ayushman Bharath Health Account (ABHA)",
    "content": "The provision of a digitally secure Ayushman Bharath Health Account (ABHA) stands out as a USP. This account empowers patients to access and share their health records digitally, streamlining the management of digital lab reports, doctor prescriptions, and diagnoses generated through eHospital@NIC."
  },
  {
    "title": "Digital Patient Records and Reports",
    "content": "The capability for patients to receive digital lab reports, doctor prescriptions, and diagnoses through ABHA highlights the software's focus on providing a modern and efficient healthcare experience."
  },
  {
    "title": "Comprehensive eHospital Modules",
    "content": "The software offers a range of modules covering various aspects of hospital management, including Patient Registration (OPD, Casualty, Appointment & ORS), Admission, Discharge & Transfer (IPD), Billing, and Clinic (OPD & IPD). This comprehensive coverage ensures a holistic approach to healthcare management within the digital environment."
  },
  {
    "title": "Efficient Inpatient Care (IPD) Management",
    "content": "The IPD module manages the complete treatment and services provided to inpatients, starting from registration and bed allocation. This ensures a systematic and organized approach to inpatient care."
  },
  {
    "title": "Clinician and Doctor Empowerment",
    "content": "The Clinic module empowers clinicians and doctors to record comprehensive clinical data, including visits, examination details, diagnosis, treatment history, and prescriptions. This feature supports informed decision-making and enhances the quality of patient care."
  },
  {
    "title": "Government Endorsement and Regular Updates",
    "content": "The mention of <span style=\"color:#FC5185 ;\"><strong>'© NIC, 2015 | All Rights Reserved®. |</strong></span> Govt. Of India' and the information about the latest build update on <span style=\"color:#FC5185 ;\"><strong>Nov 09, 2023,</strong></span> adds credibility and indicates that the software is endorsed by the government. Regular updates showcase a commitment to ongoing improvement and adaptation to evolving healthcare needs."
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
            <h3 className="mb-3">USP of e-Hospital</h3>
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
