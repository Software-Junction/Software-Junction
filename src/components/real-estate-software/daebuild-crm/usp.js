import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../daebuild-crm/daebuild-crm.module.scss";

const uspData = [
  {
    "title": "Wide Range of Modules",
    "content": "DaeBuild CRM offers various modules, including Lead Management, Cloud Telephony, Sales Management, Customer Management, Customer Interactions, Document Management, Email & SMS Marketing, Reports & Trends, The White Board, Broker Management, and Staff Management."
  },
  {
    "title": "Cloud Telephony Integration",
    "content": "The integration of virtual numbers and cloud telephony ensures that leads are captured and calls are recorded automatically, reducing the risk of missing potential opportunities."
  },
  {
    "title": "Customer-Focused Property Buyer App",
    "content": "The Property Buyer App allows customers to manage and track their purchased property, providing transparency, trust, and a self-serving platform for buyers."
  },
  {
    "title": "GST and RERA Compliance",
    "content": "DaeBuild CRM is equipped with features to ensure compliance with GST and RERA regulations, addressing legal requirements in the real estate sector."
  },
  {
    "title": "Flexible Document Management",
    "content": "The software includes a flexible document designer for generating RERA-compliant documents with real-time computing, simplifying the process of document generation, issuance, storage, and mailing."
  },
  {
    "title": "Marketing Automation",
    "content": "The platform facilitates automated triggers for WhatsApp, email, and SMS communication, enabling builders to run targeted campaigns and track communication efficiently."
  },
  {
    "title": "Comprehensive Reporting and Trends Analysis",
    "content": "DaeBuild CRM provides detailed reports and trend mapping with drill-down data, offering insights into pre-sales and post-sales activities, inquiry MIS reports, inventory, revenue, outstanding reports, and performance reports."
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
            <h3 className="mb-3">USP of DaeBuild CRM</h3>
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
