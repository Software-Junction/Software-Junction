import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../creliohealth/cre.module.scss";

const uspData = [
  {
    "title": "Highest Rated LIMS System",
    "content": "CrelioHealth's LIMS System boasts a <span style=\"color:#FC5185;\"><strong>92%</strong></span> average satisfaction score worldwide. This high rating reflects the system's performance, reliability, and user satisfaction, indicating that it meets or exceeds the expectations of laboratories globally."
  },
  {
    "title": "Sample Journey Optimization",
    "content": "Efficient sample management is achieved through standardized sample collection, barcode labeling, and automation. The system follows guidelines like the B D Vacutainer collection guide, utilizing features like sample barcoding, defining collection instructions, and automating sample archival. This ensures the integrity and traceability of samples throughout the testing process."
  },
  {
    "title": "Quick & Easy Lab Reporting",
    "content": "The LIMS System enhances the efficiency of test report entry with user-friendly reporting features. It supports various test templates, automated reporting via interfaces, bulk entry of report values using Excel, and even speech-to-text report entry. These features expedite the reporting process and contribute to accurate and timely results."
  },
  {
    "title": "Secure & Reliable Report Approval",
    "content": "To ensure accurate and timely report delivery, the system provides secure logins for signing physicians, enabling them to authenticate and validate reports. The process includes conditional automated approvals, a multi-approval process, and the ability to approve reports on the go. This ensures the reliability and integrity of the lab reports."
  },
  {
    "title": "Streamlined Financial Management",
    "content": "The LIMS System seamlessly integrates with financial processes. It simplifies payment collections, supports Revenue Cycle Management (RCM) integrations, manages price lists, provides MIS reports, and offers analytics and insights. This comprehensive financial integration aims to streamline operational requirements and enhance overall financial management."
  },
  {
    "title": "Comprehensive Analytics & Insights",
    "content": "Users can access a wide range of analytics and insights in real-time. This includes a detailed summary of daily collections, consolidated summary reports, and operational and financial analytics. The system provides insights in various formats such as MIS, Excel, and PDF, supporting effective decision-making based on comprehensive data."
  },
  {
    "title": "Future-Ready Automation",
    "content": "CrelioHealth's LIMS System offers advanced features for future-ready automation. This includes rule-based auto-validation of lab reports, automated dispatch of completed lab reports, interface capabilities with lab instruments, and automatic outsourcing of test samples. These features position the system as a forward-looking solution that embraces automation for enhanced efficiency."
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
            <h3 className="mb-3">USP of CrelioHealth LIMS </h3>
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
