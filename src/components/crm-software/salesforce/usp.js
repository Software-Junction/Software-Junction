import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Unified Platform",
    "content": "Salesforce integrates sales, service, commerce, marketing, and IT teams on a single platform for seamless collaboration and customer interaction."
  },
  {
    "title": "Data + AI Integration",
    "content": "The platform combines data and AI to enhance sales, marketing, and customer satisfaction, providing a formula for success."
  },
  {
    "title": "Trailhead Learning Platform",
    "content": "Salesforce provides Trailhead, a free learning platform, enabling users to acquire valuable skills in Salesforce, digital, and soft skills."
  },
  {
    "title": "Trusted Technology",
    "content": "Recognized among the Fortune <span style=\"color:#FC5185 ;\"><strong>100</strong></span> Best Companies to Work For <span style=\"color:#FC5185 ;\"><strong>2023 for 15</strong></span> consecutive years, Salesforce is trusted as a reliable and esteemed technology partner."
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
            <h3 className="mb-3">USP of Salesforce</h3>
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
