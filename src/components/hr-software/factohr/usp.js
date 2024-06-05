import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../factohr/facto.module.scss";

const uspData = [
  {
    "title": "Mobile-First HCM Platform",
    "content": "factoHR stands out as a mobile-first Human Capital Management (HCM) platform, providing a feature-rich mobile app for employees, ensuring full accessibility to their data. This mobile-centric approach enhances user engagement and convenience, setting it apart from solutions that lack a dedicated mobile application."
  },
  {
    "title": "Top-notch Security and Privacy",
    "content": "Security is a top priority for factoHR, offering watertight security through encryption at rest and <span style=\"color:#FC5185 ;\"><strong>SOC Type 2 certified</strong></span> cloud data centers. This commitment to data security distinguishes it from competitors that compromise on privacy and security, potentially leading to data leaks."
  },
  {
    "title": "Scalability Across Business Sizes",
    "content": "Whether for small startups or large enterprises, factoHR is fully scalable and adjustable to meet unique requirements. This flexibility sets it apart from solutions that can't cope with the demands of an exponentially growing workforce, offering a solution suitable for businesses of all sizes."
  },
  {
    "title": "Strategic Partnerships",
    "content": "The strategic partnerships with industry giants like Microsoft and SAP highlight factoHR's credibility and capability. Being co-sell-ready on Microsoft Azure Marketplace and collaborating with SAP for HRMS, payroll, attendance, and retirement benefit solutions position factoHR as a comprehensive and cutting-edge solution provider."
  },
  {
    "title": "Client Testimonials and Awards",
    "content": "With a track record of <span style=\"color:#FC5185 ;\"><strong>17 years,</strong></span> factoHR showcases client testimonials attesting to its positive impact on businesses. Additionally, the receipt of appreciations, awards, and recognition adds to its credibility and reinforces its commitment to helping organizations and employees perform excellently."
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
            <h3 className="mb-3">USP of factoHR</h3>
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
