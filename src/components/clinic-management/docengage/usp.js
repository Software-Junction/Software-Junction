import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../docengage/doc.module.scss";

const uspData = [
  {
    "title": "Hospital Management",
    "content": "DocEngage offers a digital hospital solution that encompasses the entire spectrum of hospital operations, including OPD, IPD, ICU management, and remote patient monitoring."
  },
  {
    "title": "Diverse Product Portfolio",
    "content": "DocEngage provides a suite of products tailored for healthcare institutions, including Telehealth, HCRM (Customer Relationship Management), Clinic Software, EHR (Electronic Health Record), Homecare, and HMS (Hospital Management System)."
  },
  {
    "title": "Security 360",
    "content": "DocEngage ensures the highest level of security with communication encryption through SSL and HTTPS, geographically dispersed data centers, and compliance with <span style=\"color:#f95738 ;\"><strong>ISO 27001, ISO 27017, and ISO 27018</strong></span> standards."
  },
  {
    "title": "HIPAA Compliance",
    "content": "Being a HIPAA-compliant software, DocEngage prioritizes the safety and secure access of patient records with stringent measures for information sharing, audit, and overall security."
  },
  {
    "title": "Role-Based Access Control",
    "content": "The software provides role-based access control, preventing unauthorized access to patient information and system controls, ensuring data privacy and confidentiality."
  },
  {
    "title": "Patient-Centric Apps",
    "content": "DocEngage offers medical apps that empower patients to access their data anytime, anywhere. Patients can upload documents, request appointments, and complete self-assessment forms through a dedicated app."
  },
  {
    "title": "Positive Customer Testimonials",
    "content": "The software has received positive feedback from various healthcare institutions, such as Apollo Homecare, Grand World Elder Care, Seva Bharati, Chandra Skin and Laser Centre, Pushpa Khanna Memorial Center, Smriti Nursing Home, <span style=\"color:#f95738 ;\"><strong>AESTHETICA360,</strong></span> and Skin Hair and You."
  },
  {
    "title": "Single Platform Solution",
    "content": "DocEngage packages Appointment, EHR, HCRM, HMS, and Telehealth into a single product, aiming to reduce costs, increase productivity, and leverage AI for predictability."
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
            <h3 className="mb-3">USP of DocEngage</h3>
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
