import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mycloud-hospitality/cloud.module.scss";

const uspData = [
  {
    "title": "Zero Upfront Fee",
    "content": "This feature highlights that mycloud Hospitality Software does not require any upfront fees for hoteliers to adopt the system. This is advantageous for hotels as it eliminates initial financial barriers, making the software accessible to a wide range of properties."
  },
  {
    "title": "Rapid Deployment (PMS Live in 4 Hours)",
    "content": "The software promises quick implementation by ensuring that the Property Management System (PMS) can go live within just four hours. This rapid deployment minimizes downtime for the hotel and allows them to start benefiting from the system's features almost immediately."
  },
  {
    "title": "Global Presence and Experience",
    "content": "Developed by Prologic First, mycloud brings to the table over a decade and a half of experience in delivering IT solutions to the hospitality industry. Its global presence, spanning regions like the UK, Canada, USA, Asia, Africa, and the Middle East, signifies a wealth of experience in diverse markets."
  },
  {
    "title": "Extensive Interfaces",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>175</strong></span> interfaces, mycloud can seamlessly connect with third-party hardware and software. This extensibility ensures that the software can integrate with a wide range of systems, providing flexibility and adaptability to the hotel's specific needs."
  },
  {
    "title": "Security Measures",
    "content": "The software adheres to GDPR and PCI-compliance security standards, indicating a commitment to protecting hotel client data. Security measures include limited access to the hosted server, password policies, real-time data backup, and encryption of the complete database."
  },
  {
    "title": "Free Trial Offer",
    "content": "Interested users are encouraged to take advantage of a <span style=\"color:#f95738 ;\"><strong>30-day</strong></span> free trial. This allows potential customers to experience the software firsthand, explore its features, and evaluate its suitability for their specific hotel needs before making a commitment."
  },
  {
    "title": "Trusted and Loved",
    "content": "The software has gained trust and popularity among a diverse range of hotels, from small <span style=\"color:#f95738 ;\"><strong>2-room</strong></span> properties to large <span style=\"color:#f95738 ;\"><strong>300-room</strong></span> city hotels. This indicates the software's adaptability and effectiveness in meeting the operational requirements of different types of hotel properties."
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
            <h3 className="mb-3">USP of mycloud Hospitality</h3>
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
