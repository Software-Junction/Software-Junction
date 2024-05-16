import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Configurability",
    "content": "Qandle offers a highly customizable HR software that adapts to your company's unique processes and policies. The software does not force organizations to adjust; instead, it provides flexibility to tailor the solution according to specific needs."
  },
  {
    "title": "App Rating",
    "content": "Qandle holds an impressive <span style=\"color:#FC5185 ;\"><strong>4.4 average rating from over 1300 users,</strong></span> making it a top choice in the HRMS software category. The high rating is attributed to Qandle's earnest approach towards users and their needs."
  },
  {
    "title": "Smart Integrations",
    "content": "Qandle seamlessly integrates with a variety of tools, ensuring a smooth transition and compatibility with users' favorite applications."
  },
  {
    "title": "Industry Recognition",
    "content": "Qandle is recognized among the <span style=\"color:#FC5185 ;\"><strong>20 best</strong></span> HR Software Solutions globally, emphasizing its quality and effectiveness in the industry."
  },
  {
    "title": "Wide Range of HR Modules",
    "content": "Qandle provides a comprehensive suite of over <span style=\"color:#FC5185 ;\"><strong>40 HR modules,</strong></span> covering all aspects from hiring and onboarding to analytics and offboarding."
  },
  {
    "title": "Global Presence",
    "content": "Qandle has a global presence with offices in Delhi NCR, India, Hong Kong, and London, UK, showcasing its reach and ability to cater to diverse markets."
  },
  {
    "title": "Reliability and Security",
    "content": "Qandle ensures high reliability with <span style=\"color:#FC5185 ;\"><strong>99.99%</strong></span> uptime over the last three years. The software is highly secure, being ISO certified and GDPR compliant, instilling confidence in users regarding data protection."
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
            <h3 className="mb-3">USP of Qandle</h3>
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
