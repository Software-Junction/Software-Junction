import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../asana/asana.module.scss";

const uspData = [
  {
    title: "Integration Capabilities",
    content:
      'Asana boasts over <span style="color:#FC5185 ;"><strong>300</strong></span> integrations, allowing seamless connectivity with enterprise tools that organizations already use. This integration capability enhances efficiency and ensures a smooth workflow by connecting Asana with other essential business applications.',
  },
  {
    title: "Enterprise-Grade Security",
    content:
      "Asana emphasizes the importance of data security and compliance with the latest standards. This focus on enterprise-grade security assures businesses that their data is handled with the utmost care and in accordance with regulatory requirements.",
  },
  {
    title: "AI-Powered Asana Intelligence",
    content:
      "The introduction of Asana Intelligence, powered by the Work Graph®, brings artificial intelligence into play. This feature aims to enhance clarity, impact, and scalability by leveraging AI to assist organizations in working smarter and achieving their goals.",
  },
  {
    title: "Usage by Fortune 100 Companies",
    content:
      'Asana proudly states that <span style="color:#FC5185 ;"><strong>80%</strong></span> of Fortune <span style=\"color:#FC5185 ;\"><strong> 100 companies </strong></span> choose their platform. The inclusion of recognizable logos such as Amazon, McKesson, Johnson & Johnson, Dell, and Merck adds credibility and demonstrates the trust that major corporations place in Asana.',
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
            <h3 className="mb-3">USP of Asana</h3>
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
