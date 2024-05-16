import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Converged, Multi-Model Database Management System",
    content:
      "Oracle offers a converged, multi-model database management system that supports various data types, including relational, in-memory, NoSQL, and MySQL databases.",
  },
  {
    title: "Autonomous Database",
    content:
      "Oracle Autonomous Database, available on-premises via Oracle Cloud@Customer or in the Oracle Cloud Infrastructure, provides a highly automated solution. It eliminates the complexity of operating and securing the database, ensuring higher performance, reliability, security, and operational efficiency.",
  },
  {
    title: "Integrated Vector Database for AI",
    content:
      "Oracle introduces an integrated vector database to augment generative AI and increase developer productivity. The AI vector similarity search in Oracle Database <span style=\"color:#FC5185 ;\"><strong>23c </strong></span> allows accurate and quick search in semantic and business data.",
  },
  {
    title: "Low-Code Application Development",
    content:
      "Oracle APEX (Application Express) <span style=\"color:#FC5185 ;\"><strong> 23.2 </strong></span>enables faster and more efficient development of enterprise-level low-code applications that can be deployed across all platforms.",
  },
  {
    title: "Leadership in Industry Analyst Reports",
    content:
      "Oracle is recognized as a Leader in industry reports, including the Gartner Magic Quadrant™ for Cloud Database Management Systems and The Forrester Wave™: Cloud Data Warehouses. The company scores high in critical capabilities and has a strong vision.",
  },
  {
    title: "Cost Optimization and High Performance",
    content:
      "Oracle's database services offer cost-optimized and high-performance versions, meeting the diverse needs of customers. The IDC study indicates that Oracle Autonomous Database provides significant savings with a <span style=\"color:#FC5185 ;\"><strong> 417% ROI</strong></span> over five years.",
  },
  {
    title: "Security Solutions",
    content:
      "Oracle provides comprehensive security solutions for database environments, including encryption, key management, data masking, privileged user access controls, activity monitoring, and auditing. The goal is to guard against data breaches and simplify compliance.",
  },
  {
    title: "Global Scalability with Oracle Sharding",
    content:
      "Oracle Sharding enables globally distributed, linearly scalable, multi-model databases. It supports data sovereignty requirements, low latency, and high availability, simplifying application development.",
  },
  {
    title: "Exadata for High Performance",
    content:
      "Running Oracle Database on Exadata, the fastest platform, allows customers to achieve higher transaction rates, accelerate business analytics, and simplify IT management.",
  },
  {
    title: "MySQL HeatWave for Real-time Analytics",
    content:
      "Oracle's MySQL HeatWave is a fully managed database service that combines transactions, analytics, and machine learning services into one MySQL Database. It delivers real-time, secure analytics without the complexity of ETL duplication.",
  },
  {
    title: "Cloud Deployment in Microsoft Azure",
    content:
      "Through the Oracle-Microsoft partnership, Oracle Database services are available in Microsoft Azure data centers, providing customers with more deployment options and flexibility.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Oracle Database</h3>
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
