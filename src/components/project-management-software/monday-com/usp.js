import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../monday-com/monday-com.module.scss";

const uspData = [
  {
    title: "Global Adoption",
    content:
      "Highlighting notable customers like HoltCat, Canva, Coca Cola, and others adds credibility and demonstrates widespread adoption of the platform.",
  },
  {
    title: "Cross-Team Collaboration and Efficiency",
    content:
      'The platform emphasizes its role in driving collaboration and efficiency, citing a <span style="color:#f95738 ;"><strong>40%</strong></span> improvement in cross-team collaboration for Universal Music Group\'s marketing department.',
  },
  {
    title: "Integration Capabilities",
    content:
      "Integration with popular tools like Gmail, LinkedIn, Harvest, Zoom, Jira, Salesforce, Mailchimp, Dropbox, and more enhances the platform's adaptability to existing workflows.",
  },
  {
    title: "Security and Compliance",
    content:
      "The platform mentions adherence to industry standards (GDPR, ISO, SOC, HIPAA) for security and privacy, instilling confidence in users regarding data protection.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of monday.com</h3>
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
