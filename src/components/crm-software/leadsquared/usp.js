import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../leadsquared/square.module.scss'

const uspData = [
  {
    "title": "High Sales Productivity",
    "content": "LeadSquared boosts sales efficiency in call centers, digital sales, and merchant operations."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "Tailored CRM solutions for diverse industries, including Higher Education, EdTech, Healthcare, Lending, and more."
  },
  {
    "title": "Zero Lead Leakage",
    "content": "Ensures no potential opportunities are lost in the sales process."
  },
  {
    "title": "Automation and Efficiency",
    "content": "Features like drag-n-drop automations, activity tracking, and real-time reports enhance call center efficiency."
  },
  {
    "title": "Customizable Workflows",
    "content": "No-code platform with easy-to-build workflows for tailored solutions."
  },
  {
    "title": "Comprehensive CRM Solutions",
    "content": "One-stop platform offering Sales CRM, Marketing Automation, Mobile CRM, and more."
  },
  {
    "title": "Wide Industry Adoption",
    "content": "Trusted by over <span style=\"color:#FC5185 ;\"><strong>2000</strong></span> customers globally, including well-known brands."
  },
  {
    "title": "No-Code Customization",
    "content": "Managers can optimize processes without extensive IT support or coding."
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
            <h3 className="mb-3">USP of LeadSquared</h3>
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
