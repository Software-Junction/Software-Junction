import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Statutory Compliance and Income Tax Automation",
    "content": "The software automates the complex processes related to statutory compliance and income tax. It helps in planning and managing employee income tax, ensuring adherence to legal requirements and integrating with tax portals for seamless compliance."
  },
  {
    "title": "Custom Workflows",
    "content": "<span style=\"color:#FC5185 ;\"><strong>247HRM</strong></span> allows organizations to create custom workflows that seamlessly integrate with existing HR processes and department structures. This customization ensures that the software aligns with the unique needs of each organization."
  },
  {
    "title": "Client Testimonials",
    "content": "Positive testimonials from clients in various industries, such as retail, automobile, and manufacturing, highlight the software's user-friendliness, performance, and the effectiveness of its support team."
  },
  {
    "title": "Years of HR Experience",
    "content": "InterBiz Solutions LLP brings a collective <span style=\"color:#FC5185 ;\"><strong>60 years</strong></span> of HR experience to the development and implementation of their HRMS solution, indicating a deep understanding of HR challenges and requirements."
  },
  {
    "title": "Wide Client Base",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>800</strong></span> clients across <span style=\"color:#FC5185 ;\"><strong>20</strong></span> industry verticals, <span style=\"color:#FC5185 ;\"><strong>247HRM</strong></span> has a broad client base. This diverse experience demonstrates the adaptability of the software to different business contexts."
  },
  {
    "title": "Geographical Presence",
    "content": "The company has a physical presence in multiple locations, including Mumbai, Pune, Bengaluru, Vizag, Chennai, and New Delhi, showcasing its widespread reach and accessibility."
  },
  {
    "title": "Interactive and CEO Dashboards",
    "content": "The software features interactive dashboards for monitoring HR processes and a CEO dashboard that provides a visually appealing and comprehensive overview of HR activities. These dashboards enhance data visualization and decision-making."
  },
  {
    "title": "SMS Alerts",
    "content": "The inclusion of automatic SMS alerts keeps users, particularly decision-makers, updated on any changes or reminders related to HR processes."
  },
  {
    "title": "Global Presence",
    "content": "In addition to a strong presence in India, <span style=\"color:#FC5185 ;\"><strong>247HRM</strong></span> has expanded its reach to international locations such as Dubai, UAE, Abu Dhabi, Qatar, and Sharjah, demonstrating its global aspirations."
  },
  {
    "title": "Diverse Industry Focus",
    "content": "The software caters to a wide range of industries, including hospitals, accountants, IT & software, education, logistics, manufacturing, small businesses, and startups. This industry-focused approach ensures that the software meets the specific needs of different business sectors."
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
            <h3 className="mb-3">USP of 247HRM</h3>
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
