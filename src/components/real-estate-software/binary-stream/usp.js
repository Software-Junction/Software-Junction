import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Centralized Operations and Reporting",
    "content": "The ability to centralize diversified operations with a single database. Generate separate performance reports for each property or entity, providing clarity in financial reporting."
  },
  {
    "title": "Efficient Intercompany Processing",
    "content": "Automation of intercompany processes for seamless cross-entity transactions. Clear visibility into transactions made between entities."
  },
  {
    "title": "Streamlined Property Management",
    "content": "Specialized tools for handling complex lease situations and property configurations. Robust reporting features integrated into Microsoft Dynamics ERP for efficient tenant and landlord lease management."
  },
  {
    "title": "Multi-Entity Management",
    "content": "The capability to manage multiple locations efficiently. Centralized processing, robust reporting, and real-time resource management across all entities from a single platform."
  },
  {
    "title": "Subscription Billing Suite for Financial Optimization",
    "content": "Automation of invoice creation and distribution, reducing payment turnaround time. A specialized suite for implementing subscription pricing strategies and detailed financial reporting."
  },
  {
    "title": "Dynamics GP Utilities for Document Delivery",
    "content": "Purpose-built tools within Dynamics GP addressing specific issues in document delivery and processing overhead. Batch emailing for delivering invoices, SOP documents, AR statements, purchase orders, and payroll documents with automated attachments."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Binary Stream</h3>
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
