import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../medicin/medi.module.scss";

const uspData = [
  {
    "title": "Data Accuracy and Compliance",
    "content": "The system includes a vast database with 3 lakh prefilled products, 4000 molecules prefilled data, and 2000 companies prefilled data. It is also GST compliant, with features like CN Management, Schedule Drug Reports, and E-Way Bill Compliance."
  },
  {
    "title": "User-Friendly Interface",
    "content": "The software offers an easy-to-use interface with features such as touch screen readiness, biometric attendance, and an owner app for Android and iOS, ensuring accessibility and convenience."
  },
  {
    "title": "Reports and Analytics",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>200</strong></span> types of useful reports, user-wise reports, and a dashboard module for day book/sales, the software empowers users with insights into their business performance and aids in decision-making."
  },
  {
    "title": "Customer Relationship Management",
    "content": "The inclusion of features like customer loyalty cards, prescription record with an inbuilt camera, and an online patient and promotion management module emphasizes the focus on customer relationship management."
  },
  {
    "title": "Multi-Channel Integration",
    "content": "Medicin Pharmacy Management Software supports multi-channel operations with features like Tally Export, inbuilt remote access, and an offline desktop version, allowing flexibility in usage."
  },
  {
    "title": "Innovative Features",
    "content": "The software introduces innovative features like Medicin TV, campaign manager, and expiry notification during sale, providing added value to the users."
  },
  {
    "title": "Franchise Opportunities",
    "content": "The mention of franchise opportunities and availability for a franchisee indicates that the software is scalable and can cater to the needs of a growing business."
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
            <h3 className="mb-3">USP of Medicin Pharmacy Management Software</h3>
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
