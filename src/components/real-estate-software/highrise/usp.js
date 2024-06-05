import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../highrise/highrise.module.scss";

const uspData = [
  {
    "title": "Flexible Deployment Options",
    "content": "Highrise ERP is available on Licensing, Annual Subscription, and Software as a Service (SaaS) models. It can be hosted on on-campus servers or on the cloud, providing flexibility to meet the specific needs and preferences of different businesses."
  },
  {
    "title": "Effective Marketing & Sales Management",
    "content": "The CRM module enables builders, promoters, and real estate developers to track customer interactions from the enquiry stage. It includes features for enquiry recording, analysis, advertising, tentative bookings, and multilevel brokers management."
  },
  {
    "title": "Full-Fledged Financial Accounts",
    "content": "The accounts module provides a comprehensive solution for daily accounting needs, featuring double-entry bookkeeping, automatic TDS and Service Tax calculation, budget monitoring, project-wise financial reports, and compliance with international accounting standards."
  },
  {
    "title": "Streamlined Tender Management",
    "content": "This module supports both inward and outward tenders, facilitating bid application, version tracking, and compliance with Indian taxation rules. It provides real-time data on tender estimation versus actuals and helps in taking timely corrective actions."
  },
  {
    "title": "Client Billing Efficiency",
    "content": "The client billing module enables contractors to generate proforma invoices, comply with Indian taxation rules, track estimated versus actual expenses, and link billing to work completion progress or monthly fixed billing."
  },
  {
    "title": "Comprehensive HR & Admin Management",
    "content": "Covering employee details, payroll setups, recruitment, training, appraisals, and admin expenses booking, this module contributes to better employee empowerment, accountability, and overall cost management."
  },
  {
    "title": "Asset Management",
    "content": "The module efficiently manages all organizational assets, tracking their movement, maintenance, insurance, depreciation, and expenses. It ensures better utilization of equipment and prevents unnecessary hiring."
  },
  {
    "title": "Land & Legal Management",
    "content": "Critical for builders and real estate developers, this module captures and stores all legal information related to land. It facilitates central document management, checklist creation, milestone tracking, and timely reminders for legal department preparations."
  },
  {
    "title": "Centralized Document Management",
    "content": "Throughout various modules, Highrise ERP emphasizes centralized document management, enabling efficient scanning, retrieval, and storage of important documents."
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
            <h3 className="mb-3">USP of Highrise ERP</h3>
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
