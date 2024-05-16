import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Efficiency and Quality",
    "content": "The software aims to enhance the efficiency and quality of laboratory operations, providing a user-friendly digital application that understands clinical and operational requirements."
  },
  {
    "title": "Record Keeping",
    "content": "The software ensures meticulous record-keeping, including patient data, reports, billing records, and more, helping labs maintain organized and accessible information."
  },
  {
    "title": "Smart Workflow",
    "content": "It facilitates smart workflow, quality management, and overall monitoring of laboratory functions, contributing to a streamlined and efficient operation."
  },
  {
    "title": "Privacy and Accuracy",
    "content": "The software enhances privacy and accuracy in treatment and test results. It allows for clear doctor interpretations, aiding in timely disease diagnosis."
  },
  {
    "title": "Customized ERP for Pathlabs",
    "content": "The software offers a tailor-made ERP solution specifically designed for pathology laboratories, ensuring a seamless fit for their unique requirements."
  },
  {
    "title": "Standards Compliance",
    "content": "It adheres to industry standards such as <span style=\"color:#FC5185 ;\"><strong>NABH/NABL, DICOM, and HL7,</strong></span> ensuring that the software meets the high-quality standards expected in the healthcare sector."
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
            <h3 className="mb-3">USP of Sara Technologies</h3>
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
