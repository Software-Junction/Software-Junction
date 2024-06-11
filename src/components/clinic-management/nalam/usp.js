import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nalam/nalam.module.scss";

const uspData = [
  {
    "title": "Comprehensive Hospital Management Software (Nalam+)",
    "content": "Nalam+ is positioned as complete hospital information and management software. It likely offers a wide range of features to manage various aspects of a hospital's operations efficiently."
  },
  {
    "title": "Digital Health ID (Med Locqr)",
    "content": "Med Locqr is presented as a digital health ID designed to save lives during emergency medical conditions. This feature could enhance patient safety and provide quick access to crucial health information."
  },
  {
    "title": "NABH Accreditation Support",
    "content": "The software supports NABH Accreditation, which is a formal recognition for hospitals demonstrating a commitment to quality care. This accreditation could signify a high standard of healthcare services provided by hospitals using Nalam+."
  },
  {
    "title": "Exclusive Networking Support (Nalam Networking)",
    "content": "Nalam Healthcare IT Solutions provides exclusive networking support to interconnect all machines, enabling efficient data sharing. This networking feature may facilitate streamlined communication and collaboration among different components of the healthcare system."
  },
  {
    "title": "Compliance with Clinical Establishment Rules 2018 (Nalam Clinic)",
    "content": "NALAM Clinic is highlighted as designed exclusively to meet the requirements of the Clinical Establishment Rules <span style=\"color:#f95738 ;\"><strong>2018.</strong></span> It emphasizes the importance of maintaining detailed medical records and databases to comply with regulatory standards."
  },
  {
    "title": "Preventive Support Services",
    "content": "Nalam Support and Services include preventive support, emphasizing the idea that 'Prevention is better than Cure' for software issues. This proactive support approach may ensure the software's stability and reliability."
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
            <h3 className="mb-3">USP of Nalam</h3>
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
