import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agrisys/agrisys.module.scss";

const uspData = [
  {
    title: "Tailored Solution for Seed Producers",
    content:
      "AgriSys ERP is specifically designed for seed producers in the agriculture sector. It addresses the unique challenges faced by private sector seed producers, including the need for streamlined processes and enhanced organizational structure.",
  },
  {
    title: "Comprehensive Modules",
    content:
      "Finance & Accounting, Purchase, Production Planning & Sub-Contracting, Quality Control, Inventory Management, Fixed Asset Management, and HR & Payroll. Each module is tailored to address specific needs, ensuring a holistic ERP solution.",
  },
  {
    title: "Multi-Company and Branch Support",
    content:
      "Common Chart of Accounts for Multiple Companies and Branches. Consolidated MIS reports and schedules for better financial management.",
  },
  {
    title: "Integration and Automation",
    content:
      "Seamless integration of financial transactions, purchase processes, and production planning. Automation features for TDS, <span style=\"color:#FC5185 ;\"><strong>Form 16A</strong></span>, and voucher posting based on workflow.",
  },
  {
    title: "Seed-Specific Functionality",
    content:
      "Farmer Purchase Control, Seed Processing, Multiplication Seeds & Commercial Seeds Stock, Batch/ Lot Naming, and Yield Control. Configurable Quality Control setup for seed quality assurance.",
  },
  {
    title: "Fixed Asset Management",
    content:
      "Comprehensive module for managing fixed assets, including sale, write-off, income, and loss. Adherence to Company Act / Income Tax Act standards.",
  },
  {
    title: "HR & Payroll Management",
    content:
      "Employee data management, configurable IT rates, statutory reports, loan management, leave management, employee benefit management, appraisal, and recruitment.",
  },
  {
    title: "Global Presence",
    content:
      "SourceEdge operates from its corporate office in Bangalore, India, showcasing a global reach and expertise.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of AgriSys ERP</h3>
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
