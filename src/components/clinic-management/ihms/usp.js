import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ihms/ihms.module.scss";

const uspData = [
  {
    "title": "Patient-Centric Approach",
    "content": "The HMS is designed to prioritize the needs and experiences of patients. It efficiently manages various types of patients, including outpatients, inpatients, emergencies, day care, and referred cases. The focus is on providing a seamless and patient-friendly healthcare experience."
  },
  {
    "title": "Versatility Across Devices",
    "content": "The system is compatible with different hardware platforms, ensuring accessibility from various devices, including mobile phones. This adaptability allows healthcare professionals to access crucial information on the go, promoting flexibility and convenience."
  },
  {
    "title": "Global Healthcare Intelligence",
    "content": "The system enables the sharing of information among healthcare specialists globally. This feature facilitates quick decision-making by providing access to healthcare intelligence through mobile or handheld devices, fostering collaboration and knowledge exchange."
  },
  {
    "title": "Codeigniter Framework and RTL Support",
    "content": "The system is built on the latest version of the Codeigniter PHP framework, providing a robust and secure foundation. Moreover, it supports right-to-left text alignment, making it suitable for languages that use RTL scripts."
  },
  {
    "title": "Multiple Language Support",
    "content": "The HMS supports <span style=\"color:#FC5185 ;\"><strong>21</strong></span> different languages, making it accessible to a diverse user base. This multilingual support is essential for catering to the linguistic diversity within the healthcare community."
  },
  {
    "title": "Easy Customization",
    "content": "The system is designed for easy customization, facilitated by understandable documentation. This flexibility allows healthcare institutions to tailor the software to their specific needs and preferences, ensuring a more personalized and efficient workflow."
  },
  {
    "title": "Appointment Management and SMS Notifications",
    "content": "The system efficiently manages appointments, allowing doctors to create, approve, and filter them. Patients receive SMS notifications after appointment approval, enhancing communication and ensuring that patients are informed about their appointments in a timely manner."
  },
  {
    "title": "Medical Reports and History Management",
    "content": "Doctors can assign prescriptions and diagnosis reports, while pharmacists can manage medication history and other medical reports efficiently. This feature streamlines the process of managing and accessing crucial medical information."
  },
  {
    "title": "Bed Allotment, Blood Bank, and Medicine Management",
    "content": "The system effectively manages bed allotment, blood bank, and blood donor status. Additionally, pharmacists can efficiently manage all aspects of medicine, and accountants can handle invoicing and payment information. This comprehensive management ensures smooth operations across different departments."
  },
  {
    "title": "Internal Messaging System",
    "content": "The system facilitates private messaging between doctors and patients, enhancing communication within the healthcare ecosystem. This feature supports secure and direct communication, fostering collaboration and quick exchange of information."
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
            <h3 className="mb-3">USP of iHMS (Hospital Management System)</h3>
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
