import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Precise Insights for Growth",
    "content": "Identify expansion opportunities and retention risks with real-time data, ensuring your teams take the right actions at the right time."
  },
  {
    "title": "Seamless Integration and Accuracy",
    "content": "Catalyst seamlessly integrates with your tech stack, providing a unified view of all your data. Automated accuracy checks guarantee trust in alerts, health scores, and insights."
  },
  {
    "title": "Enterprise-Ready and Highly Adopted",
    "content": "With enterprise-ready integrations, a bi-directional Salesforce sync, and the highest adoption rates, Catalyst is the platform of choice for top Customer Success teams."
  },
  {
    "title": "Actionable Data You Can Trust",
    "content": "Drive impact and revenue through your existing customer base. Catalyst's purpose-built design unifies your entire go-to-market organization, making it the highest-rated and most-adopted Customer-Led Growth (CLG) platform."
  },
  {
    "title": "Proven Results",
    "content": "Trusted by leading technology companies, Catalyst has a track record of delivering results, including a<span style=\"color:#FC5185 ;\"><strong> 200%</strong></span> increase in upsell opportunities in just<span style=\"color:#FC5185 ;\"><strong> 3 months.</strong></span>"
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
            <h3 className="mb-3">USP of Catalyst</h3>
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
