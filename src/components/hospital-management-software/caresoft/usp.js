import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Enhanced Patient Care",
    "content": "The software focuses on delivering world-class patient care by leveraging technology to streamline operations, manage patient records, and optimize resource allocation."
  },
  {
    "title": "Optimized Resource Management",
    "content": "Real-time collaboration between departments and stakeholders is facilitated, maximizing efficiency through internal messaging systems and workflows."
  },
  {
    "title": "Streamlined Workflows",
    "content": "Caresoft helps in creating smooth operational workflows and timely performances, enabling intelligent decision-making within healthcare enterprises."
  },
  {
    "title": "Revenue Enhancement",
    "content": "The software provides useful Management Information System (MIS) and reports, contributing to the smooth process flow and improved profitability of healthcare organizations."
  },
  {
    "title": "Integration Capabilities",
    "content": "Caresoft ensures seamless integration of information between different users and interfaces, preventing duplication of data entry and saving time."
  },
  {
    "title": "Analytical Tools for Efficiency",
    "content": "The system offers effective MIS and Key Performance Indicators (KPIs) to monitor the efficiency of departments, doctors, and stakeholders."
  },
  {
    "title": "Brand Image Enhancement",
    "content": "Caresoft supports the creation of a hospital brand through patient cards and loyalty programs, ultimately increasing patient footfall with a patient-centric Hospital Information System."
  },
  {
    "title": "Control Revenue Leakages",
    "content": "The software provides tools for supervising all income and expense heads of a hospital, effectively controlling and preventing revenue leakages."
  },
  {
    "title": "Trusted and Award-Winning",
    "content": "Caresoft has been recognized as a leading healthcare solution provider, with over <span style=\"color:#FC5185 ;\"><strong>15</strong></span> years of domain experience. The software has received awards, such as being labeled as the 'Trending Software' for the year <span style=\"color:#FC5185 ;\"><strong>2019</strong></span>."
  },
  {
    "title": "Global Approach and Compliance",
    "content": "The software is easily customizable and configurable globally, with compliance to standards like NABH, NABL, and JCI, ensuring accreditation for healthcare providers."
  },
  {
    "title": "Cloud-Ready and Device Independent",
    "content": "Caresoft offers a cloud-enabled solution, eliminating the need for maintaining IT infrastructure. The software is browser-based, running on any device or platform, providing flexibility and accessibility."
  },
  {
    "title": "Multi-Center Deployment",
    "content": "The software is scalable, growing with the business by offering multi-center operations and multi-tenancy."
  },
  {
    "title": "Configurable and Customizable",
    "content": "Caresoft provides a single solution that is configurable and customizable for various healthcare providers, ranging from small clinics to large hospitals."
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
            <h3 className="mb-3">USP of Caresoft</h3>
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
