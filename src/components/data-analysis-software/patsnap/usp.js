import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../patsnap/pat.module.scss";

const uspData = [
  {
    "title": "Streamlining workflows for R&D and IP teams worldwide",
    "content": "Patsnap is tailored to meet the needs of both Research and Development (R&D) teams and Intellectual Property (IP) teams. By providing tools and features specifically designed for these teams, Patsnap ensures that workflows are optimized, collaboration is seamless, and productivity is maximized across the globe."
  },
  {
    "title": "Trusted by over 12,000 innovators globally",
    "content": "Patsnap's reputation is built on trust and reliability, with a large and diverse user base of over <span style=\"color:#FC5185 ;\"><strong>12,000</strong></span> innovators worldwide. This demonstrates the platform's effectiveness in meeting the needs of organizations across various industries and geographies."
  },
  {
    "title": "Ensures data security and compliance",
    "content": "Patsnap prioritizes data confidentiality and security by employing secure, proprietary AI models trained exclusively on patent-related data. Additionally, the platform adheres to <span style=\"color:#FC5185 ;\"><strong>ISO 27001</strong></span> certification standards and complies with regulations such as GDPR, CCPA, and CPDA to ensure that customer data is protected and handled responsibly."
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
            <h3 className="mb-3">USP of PatSnap</h3>
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
