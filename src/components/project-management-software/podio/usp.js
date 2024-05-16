import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Consolidated Data",
    content:
      "Podio functions as a centralized platform that transforms project data into a unified tool. It brings together all content, conversations, and processes into one collaboration point. This consolidation simplifies access to information, making it easier for teams to align and work efficiently.",
  },
  {
    title: "Action-Oriented Overview",
    content:
      "Podio provides an action-oriented overview of project information. It surfaces the necessary data that teams require to progress projects. Additionally, it offers advanced reporting capabilities, empowering management to make informed decisions based on real-time insights.",
  },
  {
    title: "Tighter Collaboration",
    content:
      "Clearly defined roles and a customized tool aligned with the team's work style contribute to improved delivery time, effectiveness, and relationships. Podio facilitates collaboration by bringing clients, freelancers, and external parties into the platform, reducing reliance on lengthy email threads and time-consuming file sharing.",
  },
  {
    title: "Secure & Reliable",
    content:
      'Podio boasts a high level of dependability, with a <span style="color:#FC5185;"><strong>99.99%</strong></span> uptime in the last year. As part of Citrix, it adheres to rigorous security standards. Data is stored securely with Amazon Web Services, ensuring continuity for businesses. The platform also employs HTTPS-encryption, Advanced Encryption Standards, and compliance with privacy frameworks for enhanced security.',
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
            <h3 className="mb-3">USP of Podio</h3>
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
