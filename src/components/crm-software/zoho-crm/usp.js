import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Visionary Recognition",
    "content": "Zoho CRM is acknowledged as a Visionary in the <span style=\"color:#FC5185 ;\"><strong>2023</strong></span> Gartner Magic Quadrant for Sales Force Automation Platforms, showcasing innovation and industry leadership."
  },
  {
    "title": "Global Empowerment",
    "content": "Trusted by <span style=\"color:#FC5185 ;\"><strong>250,000+</strong></span> businesses worldwide, Zoho CRM demonstrates its effectiveness across diverse industries and sizes."
  },
  {
    "title": "Made in India",
    "content": "Zoho CRM challenges the Silicon Valley norm, being proudly made in India, emphasizing global competitiveness and product quality."
  },
  {
    "title": "Deep Analytics for ROI",
    "content": "Equipped with advanced analytics tools and AI assistant Zia, Zoho CRM provides meaningful insights and accurate predictions for informed decision-making."
  },
  {
    "title": "Extensive Integration Capabilities",
    "content": "Seamlessly integrating with <span style=\"color:#FC5185 ;\"><strong>800+</strong></span> apps, Zoho CRM ensures compatibility with various third-party tools, enhancing workflow efficiency."
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
            <h3 className="mb-3">USP of Zoho CRM</h3>
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
